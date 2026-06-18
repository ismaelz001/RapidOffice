'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CATEGORIES = [
  { num: '01', title: 'Mobiliario', sub: 'Mesas · Escritorios · Sistemas' },
  { num: '02', title: 'Sillería', sub: 'Dirección · Operativa · Visitas' },
  { num: '03', title: 'Colectividades', sub: 'Salas · Formación · Espera' },
  { num: '04', title: 'Archivo', sub: 'Armarios · Cajoneras · Archivadores' },
  { num: '05', title: 'Divisiones', sub: 'Mamparas · Paneles · Separadores' },
  { num: '06', title: 'Complementos', sub: 'Accesorios · Iluminación · Textil' },
  { num: '07', title: 'Bibliotecas', sub: 'Estanterías · Módulos · Sistemas' },
  { num: '08', title: 'Exterior', sub: 'Terraza · Jardín · Zonas comunes' },
];

const BRANDS = ['HAWORTH', 'FORMA 5', 'ACTIU', 'SEDUS', 'JG GROUP', 'MEPEL', 'AIC', 'JMM'];

const STATS = [
  { value: '30+', label: 'Años de\nexperiencia', raw: 30, suffix: '+' },
  { value: '8', label: 'Fabricantes\neuropeos', raw: 8, suffix: '' },
  { value: '500+', label: 'Proyectos\nrealizados', raw: 500, suffix: '+', accent: true },
  { value: '24h', label: 'Respuesta\ngarantizada', raw: 24, suffix: 'h' },
];

// ← Cambiar a 2 o 3 para probar otra opción de intro
const INTRO_STYLE: 1 | 2 | 3 = 2;

export default function OfiponentePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const line3Ref = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaBtnsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const heroPanelRef = useRef<HTMLVideoElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const brandsRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const ctaSectionRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  // Intro refs
  const introRef = useRef<HTMLDivElement>(null);
  const introPanelLeftRef = useRef<HTMLDivElement>(null);
  const introPanelRightRef = useRef<HTMLDivElement>(null);
  const introLogoRef = useRef<HTMLImageElement>(null);
  const introBarRef = useRef<HTMLDivElement>(null);
  const introBarFillRef = useRef<HTMLDivElement>(null);
  const introTaglineRef = useRef<HTMLParagraphElement>(null);
  // Extra refs para las 3 variantes de intro
  const introBgRef = useRef<HTMLDivElement>(null);
  const introCounterRef = useRef<HTMLSpanElement>(null);
  const introRulerFillRef = useRef<HTMLDivElement>(null);
  const introCellRefs = useRef<(HTMLDivElement | null)[]>([]);
  const introProgressCellRefs = useRef<(HTMLDivElement | null)[]>([]);
  const introScanLineRef = useRef<HTMLDivElement>(null);
  const introProgressDotRef = useRef<HTMLDivElement>(null);
  // Proceso section refs
  const assemblyRef = useRef<HTMLDivElement>(null);
  const procesoPinnedRef = useRef<HTMLDivElement>(null);
  const procesoImgRefs = useRef<(HTMLImageElement | null)[]>([]);
  const procesoStepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const procesoTlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    document.body.classList.add('landing-page');
    return () => document.body.classList.remove('landing-page');
  }, []);

  useEffect(() => {
    // Siempre empezar desde el top (evita problemas de scroll restoration del browser)
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);

    // ── CURSOR ──
    const cursor = cursorRef.current;
    const dot = cursorDotRef.current;
    const onMove = (e: MouseEvent) => {
      if (cursor) gsap.to(cursor, { x: e.clientX - 16, y: e.clientY - 16, duration: 0.4, ease: 'power2.out' });
      if (dot) gsap.to(dot, { x: e.clientX - 3, y: e.clientY - 3, duration: 0.1 });
    };
    window.addEventListener('mousemove', onMove);
    const links = document.querySelectorAll('a, button, [data-cursor]');
    links.forEach(el => {
      el.addEventListener('mouseenter', () => cursor && gsap.to(cursor, { scale: 2.5, opacity: 0.6, duration: 0.2 }));
      el.addEventListener('mouseleave', () => cursor && gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.2 }));
    });

    // ── INTRO CINEMATICA ──
    const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // ── OPCIÓN 1: Ken Burns en imagen de fondo ──
    if (INTRO_STYLE === 1 && introBgRef.current) {
      const bgImg = introBgRef.current.querySelector('img');
      if (bgImg) gsap.to(bgImg, { scale: 1.08, duration: 3.6, ease: 'power1.inOut' });
      intro.fromTo(introCounterRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4 }, 0.15);
    }

    // ── OPCIÓN 2: Grid de imágenes con stagger ──
    if (INTRO_STYLE === 2) {
      const cells = introCellRefs.current.filter(Boolean) as HTMLDivElement[];
      if (cells.length) {
        gsap.fromTo(cells,
          { clipPath: 'inset(100% 0 0 0)' },
          { clipPath: 'inset(0% 0 0 0)', duration: 0.5, stagger: { each: 0.08, from: 'start' }, ease: 'power2.inOut', delay: 0.1 }
        );
      }
    }

    // ── OPCIÓN 3: Scan line que barre la pantalla ──
    if (INTRO_STYLE === 3 && introScanLineRef.current) {
      gsap.to(introScanLineRef.current, { top: '105%', duration: 2.2, ease: 'power1.inOut', delay: 0.25 });
    }

    // ── Contenido central: logo + tagline + barra ──
    intro
      .fromTo(introLogoRef.current,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.65 },
        0.3
      )
      .fromTo(introTaglineRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.45 },
        0.85
      )
      .fromTo(introBarRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3 },
        1.05
      );

    // ── OPCIÓN 1: Counter 00→100 + ruler fill ──
    if (INTRO_STYLE === 1) {
      const counterObj = { val: 0 };
      intro.to(counterObj, {
        val: 100, duration: 1.1, ease: 'power2.inOut',
        onUpdate: () => {
          if (introCounterRef.current) {
            introCounterRef.current.textContent = String(Math.round(counterObj.val)).padStart(2, '0');
          }
        },
      }, 1.1);
      if (introRulerFillRef.current) {
        intro.fromTo(introRulerFillRef.current,
          { width: '0%' },
          { width: '100%', duration: 1.1, ease: 'power2.inOut' },
          1.1
        );
      }
    }

    // ── OPCIÓN 2: Celdas de progreso que se rellenan ──
    if (INTRO_STYLE === 2) {
      const pCells = introProgressCellRefs.current.filter(Boolean) as HTMLDivElement[];
      if (pCells.length) {
        intro.to(pCells, {
          backgroundColor: '#EA43A5',
          borderColor: 'rgba(234,67,165,0.9)',
          duration: 0.12, stagger: 0.12, ease: 'none',
        }, 1.1);
      }
    }

    // ── OPCIÓN 3: Barra con punto luminoso ──
    if (INTRO_STYLE === 3) {
      if (introBarFillRef.current) {
        intro.fromTo(introBarFillRef.current,
          { width: '0%' },
          { width: '100%', duration: 1.1, ease: 'power2.inOut' },
          1.1
        );
      }
      if (introProgressDotRef.current) {
        intro.fromTo(introProgressDotRef.current,
          { left: '0%' },
          { left: '100%', duration: 1.1, ease: 'power2.inOut', xPercent: -100 },
          1.1
        );
      }
    }

    // ── Salida: split wipe (Opciones 1 y 3) ──
    if (INTRO_STYLE !== 2) {
      intro
        .to(introPanelLeftRef.current,  { xPercent: -100, duration: 0.72, ease: 'power4.inOut' }, 2.45)
        .to(introPanelRightRef.current, { xPercent: 100,  duration: 0.72, ease: 'power4.inOut' }, 2.45)
        .set(introRef.current, { display: 'none' }, 3.2);
    }

    // ── Salida: stagger cells fade + fade global (Opción 2) ──
    if (INTRO_STYLE === 2) {
      const cells = introCellRefs.current.filter(Boolean) as HTMLDivElement[];
      if (cells.length) {
        intro.to(cells, {
          opacity: 0, duration: 0.14,
          stagger: { each: 0.05, from: 'random' },
        }, 2.25);
      }
      intro
        .to(introRef.current, { opacity: 0, duration: 0.35, ease: 'power2.in' }, 2.5)
        .set(introRef.current, { display: 'none' }, 2.9);
    }

    // ── HERO entra tras intro ──
    const heroTl = gsap.timeline({ delay: 2.5 });
    heroTl
      .fromTo(navRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5 }
      )
      .fromTo([line1Ref.current, line2Ref.current, line3Ref.current],
        { clipPath: 'inset(100% 0% 0% 0%)' },
        { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.7, stagger: 0.12 },
        '-=0.2'
      )
      .fromTo(subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 },
        '-=0.3'
      )
      .fromTo(ctaBtnsRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.45 },
        '-=0.25'
      )
      .fromTo(statsRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.4 },
        '-=0.1'
      )
      .fromTo(heroPanelRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.2, ease: 'power2.inOut' },
        0
      );

    // ── SCROLL: CATEGORÍAS ──
    if (categoriesRef.current) {
      gsap.fromTo(categoriesRef.current.querySelectorAll('[data-cat]'),
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out',
          scrollTrigger: { trigger: categoriesRef.current, start: 'top 75%' } }
      );
    }

    // ── SCROLL: GALERÍA ──
    if (galleryRef.current) {
      gsap.fromTo(galleryRef.current.querySelectorAll('[data-gallery]'),
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.65, stagger: 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: galleryRef.current, start: 'top 80%' } }
      );
    }

    // ── SCROLL: MARCAS ──
    if (brandsRef.current) {
      gsap.fromTo(brandsRef.current.querySelectorAll('[data-brand]'),
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.4, stagger: 0.07, ease: 'power2.out',
          scrollTrigger: { trigger: brandsRef.current, start: 'top 75%' } }
      );
    }

    // ── SCROLL: CTA ──
    if (ctaSectionRef.current) {
      gsap.fromTo(ctaSectionRef.current.querySelectorAll('[data-cta]'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.55, stagger: 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: ctaSectionRef.current, start: 'top 70%' } }
      );
    }

    // ── SCROLL: STATS COUNT-UP ──
    const nosotrosEl = document.getElementById('nosotros');
    if (nosotrosEl) {
      nosotrosEl.querySelectorAll('[data-stat-num]').forEach(el => {
        const [rawStr, suffix] = (el.getAttribute('data-stat-num') || '').split('|');
        const target = parseInt(rawStr);
        if (!target) return;
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 1.8,
          ease: 'power3.out',
          onUpdate() { (el as HTMLElement).textContent = Math.round(obj.val) + suffix; },
          scrollTrigger: { trigger: nosotrosEl, start: 'top 65%', once: true },
        });
      });
    }

    // ── PROCESO: auto-play al entrar en viewport ──
    const imgs = procesoImgRefs.current.filter(Boolean) as HTMLImageElement[];
    const pSteps = procesoStepRefs.current.filter(Boolean) as HTMLDivElement[];
    let procesoObserver: IntersectionObserver | null = null;

    if (assemblyRef.current && imgs.length >= 5 && pSteps.length >= 5) {
      // Estado inicial: solo imagen 0 y paso 0 visibles
      gsap.set(imgs.slice(1), { opacity: 0 });
      gsap.set(pSteps, { opacity: 0.2, x: 24 });
      gsap.set(pSteps[0], { opacity: 1, x: 0 });

      // Timeline pausado — se arranca desde IntersectionObserver
      procesoTlRef.current?.kill(); // matar timeline anterior (React Strict Mode cleanup)
      const tl = gsap.timeline({
        paused: true,
        defaults: { ease: 'power2.inOut' },
      });
      procesoTlRef.current = tl;

      for (let i = 0; i < 4; i++) {
        // '+= 1.8' fuerza un delay real de 1.8s antes de cada transición
        tl.to(imgs[i],       { opacity: 0, duration: 0.5 }, '+=1.8');        // fade out imagen actual
        tl.to(imgs[i + 1],   { opacity: 1, duration: 0.5 }, '<');            // fade in siguiente (paralelo)
        tl.to(pSteps[i],     { opacity: 0.2, x: 20, duration: 0.35 }, '<'); // desactivar step
        tl.to(pSteps[i + 1], { opacity: 1, x: 0,   duration: 0.35 }, '<'); // activar siguiente step
      }

      // IntersectionObserver: dispara la animación SOLO cuando la sección entra en pantalla
      procesoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            tl.play(0);
            procesoObserver?.disconnect(); // play once
          }
        });
      }, { threshold: 0.25 });

      procesoObserver.observe(assemblyRef.current);
    }

    return () => {
      window.removeEventListener('mousemove', onMove);
      procesoObserver?.disconnect();
      procesoTlRef.current?.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <>
      {/* Custom cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-8 h-8 border border-ofi-pink rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ transform: 'translate(-100px, -100px)' }}
      />
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-ofi-pink rounded-full pointer-events-none z-[9999]"
        style={{ transform: 'translate(-100px, -100px)' }}
      />

      {/* ── PAGE LOAD OVERLAY ── */}
      <div
        ref={introRef}
        className="fixed inset-0 z-[9990] pointer-events-none overflow-hidden bg-ofi-black"
      >
        {/* ══ OPCIÓN 1: Blueprint Room — imagen fondo + Ken Burns ══ */}
        {INTRO_STYLE === 1 && (
          <div ref={introBgRef} className="absolute inset-0 z-[1] overflow-hidden">
            <Image
              src="/imgs/proceso/p6.png"
              alt=""
              fill
              className="object-cover"
              style={{ transform: 'scale(1)', transformOrigin: 'center center' }}
              priority
            />
            <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.84)' }} />
          </div>
        )}

        {/* ══ OPCIÓN 2: Room Build — grid 3×3 de imágenes ══ */}
        {INTRO_STYLE === 2 && (
          <div className="absolute inset-0 z-[1] grid grid-cols-3 grid-rows-3">
            {[
              '/imgs/proceso/p1.png', '/imgs/proceso/p2.png', '/imgs/proceso/p3.png',
              '/imgs/proceso/p4.png', '/imgs/proceso/p5.png', '/imgs/proceso/p6.png',
              '/imgs/proceso/p7.png', '/imgs/proceso/p8.png', '/imgs/proceso/p9.png',
            ].map((src, i) => (
              <div
                key={i}
                ref={el => { introCellRefs.current[i] = el; }}
                className="relative overflow-hidden"
                style={{ clipPath: 'inset(100% 0 0 0)' }}
              >
                <Image src={src} alt="" fill className="object-cover" style={{ opacity: 0.5 }} sizes="34vw" />
                <div className="absolute inset-0 bg-black/35" />
              </div>
            ))}
          </div>
        )}

        {/* ══ OPCIÓN 3: Scan Line — imagen fondo + línea rosa que barre ══ */}
        {INTRO_STYLE === 3 && (
          <>
            <div ref={introBgRef} className="absolute inset-0 z-[1] overflow-hidden">
              <Image
                src="/imgs/proceso/p9.png"
                alt=""
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.82)' }} />
            </div>
            {/* Línea de escáner rosa luminosa */}
            <div
              ref={introScanLineRef}
              className="absolute left-0 right-0 z-[3] pointer-events-none"
              style={{
                top: '-4px',
                height: '2px',
                background: 'linear-gradient(to right, transparent 0%, rgba(234,67,165,0.9) 40%, rgba(234,67,165,0.9) 60%, transparent 100%)',
                boxShadow: '0 0 28px 6px rgba(234,67,165,0.5)',
              }}
            />
          </>
        )}

        {/* Paneles del split-wipe (Opciones 1 y 3: semi-transparentes para dejar ver fondo) */}
        <div
          ref={introPanelLeftRef}
          className="absolute inset-y-0 left-0 w-1/2 z-[2]"
          style={{ background: INTRO_STYLE === 2 ? 'transparent' : 'rgba(0,0,0,0.0)' }}
        />
        <div
          ref={introPanelRightRef}
          className="absolute inset-y-0 right-0 w-1/2 z-[2]"
          style={{ background: INTRO_STYLE === 2 ? 'transparent' : 'rgba(0,0,0,0.0)' }}
        />

        {/* ── Contenido central — z-[4]: siempre visible ── */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-[4]" style={{ gap: '18px' }}>

          {/* Counter grande — solo Opción 1 */}
          {INTRO_STYLE === 1 && (
            <span
              ref={introCounterRef}
              className="font-mono font-bold tabular-nums select-none leading-none opacity-0"
              style={{ fontSize: 'clamp(60px,8vw,88px)', color: 'rgba(255,255,255,0.10)', letterSpacing: '-0.04em' }}
            >00</span>
          )}

          {/* Logo */}
          <div
            ref={introLogoRef as React.RefObject<HTMLDivElement>}
            className="bg-white px-7 py-3.5 opacity-0"
            style={{ borderRadius: '2px' }}
          >
            <Image src="/logo.png" alt="Ofiponiente" width={120} height={44} className="h-11 w-auto" style={{ width: 'auto' }} />
          </div>

          {/* Tagline */}
          <p
            ref={introTaglineRef}
            className="text-white/40 text-[10px] tracking-[0.35em] uppercase opacity-0"
          >
            Equipamiento integral de oficinas
          </p>

          {/* ── OPCIÓN 1: Regla de arquitecto ── */}
          {INTRO_STYLE === 1 && (
            <div ref={introBarRef} className="flex flex-col gap-[7px] opacity-0 mt-1" style={{ width: '210px' }}>
              {/* Marcas de regla */}
              <div className="relative w-full flex justify-between items-end">
                {[0, 25, 50, 75, 100].map(mark => (
                  <div key={mark} className="flex flex-col items-center gap-[3px]">
                    <div className="w-px bg-white/20" style={{ height: mark === 0 || mark === 100 ? '8px' : mark === 50 ? '6px' : '4px' }} />
                    <span className="font-mono text-[7px] text-white/20">{mark}</span>
                  </div>
                ))}
              </div>
              {/* Barra de progreso estilo regla */}
              <div className="relative w-full h-px bg-white/10">
                <div ref={introRulerFillRef} className="absolute left-0 top-0 h-full bg-ofi-pink" style={{ width: '0%' }} />
              </div>
            </div>
          )}

          {/* ── OPCIÓN 2: Celdas de progreso ── */}
          {INTRO_STYLE === 2 && (
            <div ref={introBarRef} className="flex gap-[4px] opacity-0 mt-1">
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  ref={el => { introProgressCellRefs.current[i] = el; }}
                  className="w-[18px] h-[18px] border border-white/20"
                  style={{ backgroundColor: 'transparent' }}
                />
              ))}
            </div>
          )}

          {/* ── OPCIÓN 3: Barra con punto luminoso ── */}
          {INTRO_STYLE === 3 && (
            <div ref={introBarRef} className="relative opacity-0 mt-1" style={{ width: '200px', height: '2px' }}>
              <div className="absolute inset-0 rounded-full" style={{ background: 'rgba(255,255,255,0.12)' }} />
              <div ref={introBarFillRef} className="absolute left-0 top-0 h-full rounded-full" style={{ width: '0%', background: 'rgba(255,255,255,0.35)' }} />
              <div
                ref={introProgressDotRef}
                className="absolute top-1/2 -translate-y-1/2 rounded-full"
                style={{
                  left: '0%',
                  width: '10px',
                  height: '10px',
                  backgroundColor: '#EA43A5',
                  boxShadow: '0 0 12px 3px rgba(234,67,165,0.75)',
                }}
              />
            </div>
          )}
        </div>
      </div>

      <div className="bg-ofi-white text-ofi-black font-sans overflow-x-hidden">

        {/* ── NAV ── */}
        <nav
          ref={navRef}
          className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-12 h-16 border-b border-ofi-black/10 bg-ofi-white/95 backdrop-blur-sm opacity-0"
        >
          <a href="/" className="flex-shrink-0">
            <Image src="/logo.png" alt="Ofiponiente" width={120} height={40} className="h-10 w-auto" priority />
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-ofi-gray">
            <a href="#categorias" className="hover:text-ofi-black transition-colors">Catálogo</a>
            <a href="#marcas" className="hover:text-ofi-black transition-colors">Marcas</a>
            <a href="#nosotros" className="hover:text-ofi-black transition-colors">Nosotros</a>
          </div>
          <a
            href="#contacto"
            className="text-sm font-semibold bg-ofi-black text-ofi-white px-5 py-2 hover:bg-ofi-pink-dark transition-colors duration-200"
          >
            Presupuesto
          </a>
        </nav>

        {/* ── HERO ── */}
        <section
          ref={heroRef}
          className="relative min-h-[100dvh] flex flex-col overflow-hidden bg-ofi-black border-b border-white/10 pt-16"
        >
          {/* Background video — fullscreen */}
          <video
            ref={heroPanelRef}
            autoPlay
            muted
            loop
            playsInline
            poster="/imgs/executive-office.jpg"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ willChange: 'opacity' }}
          >
            <source src="/videos/extensa.mp4" type="video/mp4" />
          </video>

          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/10 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 flex-1 flex flex-col justify-center px-8 md:px-14 lg:px-16 py-20">
            <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase mb-8 text-white/50">
              <span className="w-6 h-px bg-ofi-pink inline-block" />
              España · Desde 1994
            </p>

            <h1 className="font-clash font-bold leading-[0.95] tracking-tight mb-8" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
              <div ref={line1Ref} className="text-ofi-white" style={{ clipPath: 'inset(100% 0% 0% 0%)', willChange: 'clip-path' }}>Espacios</div>
              <div ref={line2Ref} style={{ clipPath: 'inset(100% 0% 0% 0%)', color: 'transparent', WebkitTextStroke: '1.5px rgba(255,255,255,0.4)', willChange: 'clip-path' }}>de trabajo</div>
              <div ref={line3Ref} className="text-ofi-white" style={{ clipPath: 'inset(100% 0% 0% 0%)', willChange: 'clip-path' }}>
                que <span className="text-ofi-pink">inspiran.</span>
              </div>
            </h1>

            <p ref={subtitleRef} className="text-base md:text-lg text-white/60 leading-relaxed max-w-md mb-10 opacity-0">
              Distribuidor oficial de las mejores marcas europeas de mobiliario de oficina.
              Diseñamos y equipamos espacios de trabajo para empresas en toda España.
            </p>

            <div ref={ctaBtnsRef} className="flex flex-wrap gap-4 opacity-0">
              <a
                href="#contacto"
                className="inline-flex items-center gap-3 bg-ofi-white text-ofi-black font-semibold text-sm px-7 py-3.5 hover:bg-ofi-pink hover:text-white transition-colors duration-200"
              >
                Solicitar presupuesto
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href="#categorias"
                className="inline-flex items-center gap-3 border border-white/40 text-white font-semibold text-sm px-7 py-3.5 hover:border-ofi-pink hover:text-ofi-pink transition-colors duration-200"
              >
                Ver catálogo
              </a>
            </div>
          </div>

          {/* Stats strip — bottom of hero */}
          <div ref={statsRef} className="relative z-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10 opacity-0">
            {STATS.map((s, i) => (
              <div key={i} className="py-5 px-6">
                <div className={`font-clash font-bold text-2xl md:text-3xl mb-1 ${s.accent ? 'text-ofi-pink' : 'text-ofi-white'}`}>
                  {s.value}
                </div>
                <div className="text-xs text-white/40 leading-tight whitespace-pre-line">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── TICKER ── */}
        <div className="border-b border-ofi-black/10 overflow-hidden bg-ofi-black">
          <div
            className="flex gap-12 py-3 text-ofi-pink-light text-xs font-semibold tracking-[0.2em] uppercase whitespace-nowrap"
            style={{ animation: 'ticker 22s linear infinite' }}
          >
            {[...Array(3)].map((_, i) =>
              BRANDS.map((b, j) => (
                <span key={`${i}-${j}`} className="flex items-center gap-12">
                  <span className="text-ofi-pink">·</span>
                  {b}
                </span>
              ))
            )}
          </div>
        </div>

        {/* ── PROCESO: auto-play image sequence ── */}
        <div ref={assemblyRef} className="bg-ofi-black border-b border-white/[0.06]">
          <div ref={procesoPinnedRef} className="overflow-hidden">
            {/* split: imagen arriba/izquierda, pasos abajo/derecha */}
            <div className="flex flex-col lg:grid lg:grid-cols-[58%_42%]">

              {/* ── LEFT: panel de imágenes ── */}
              <div className="relative overflow-hidden bg-[#080808]" style={{ minHeight: '320px', height: 'clamp(320px, 50vw, 620px)' }}>
                {/* dot grid sutil */}
                <div className="absolute inset-0 pointer-events-none" style={{
                  backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
                  backgroundSize: '32px 32px',
                }} />

                {/* Imágenes apiladas — solo una visible a la vez */}
                {['/imgs/proceso/p1.png','/imgs/proceso/p4.png','/imgs/proceso/p8.png','/imgs/proceso/p6.png','/imgs/proceso/p9.png'].map((src, i) => (
                  <img
                    key={i}
                    ref={el => { procesoImgRefs.current[i] = el; }}
                    src={src}
                    alt={`Proceso paso ${i + 1}`}
                    className="absolute inset-0 w-full h-full object-contain"
                    style={{ opacity: i === 0 ? 1 : 0, padding: '28px 36px' }}
                  />
                ))}

                {/* Indicador de pasos inferior */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {[0,1,2,3,4].map(i => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-ofi-pink/30" />
                  ))}
                </div>
              </div>

              {/* ── RIGHT: pasos del proceso ── */}
              <div className="flex flex-col justify-center px-8 lg:px-14 py-14 lg:py-0 border-l border-white/[0.06] bg-ofi-black">
                <div className="mb-10">
                  <p className="text-[10px] font-semibold tracking-[0.3em] text-ofi-pink uppercase mb-3">El proceso</p>
                  <h2 className="font-clash font-bold text-white leading-[1.1]" style={{ fontSize: 'clamp(1.9rem, 2.8vw, 2.8rem)' }}>
                    De la idea al<br />
                    <span style={{ color: 'transparent', WebkitTextStroke: '1.5px #EA43A5' }}>espacio perfecto.</span>
                  </h2>
                </div>

                {[
                  { n: '01', title: 'Visita y medición',      desc: 'Nos desplazamos a tu espacio, tomamos medidas y analizamos las necesidades del equipo.' },
                  { n: '02', title: 'Propuesta 3D',            desc: 'Diseñamos el plano de distribución con selección de mobiliario y paleta de materiales.' },
                  { n: '03', title: 'Presupuesto detallado',   desc: 'Cada pieza, cada referencia, con precio y plazo de entrega. Sin sorpresas.' },
                  { n: '04', title: 'Suministro e instalación',desc: 'Coordinamos la entrega y montaje de todos los elementos. Llave en mano.' },
                  { n: '05', title: 'Garantía y servicio',     desc: 'Soporte post-entrega y gestión de garantías con los fabricantes oficiales.' },
                ].map((step, i) => (
                  <div
                    key={i}
                    ref={el => { procesoStepRefs.current[i] = el; }}
                    className="flex gap-5 py-4 border-t border-white/[0.07] relative pl-4"
                  >
                    {/* Acento rosa izquierda — siempre visible en primer step */}
                    <div
                      className="absolute left-0 top-0 bottom-0 w-[2px]"
                      style={{ background: 'linear-gradient(to bottom, #EA43A5, #C92E88)', opacity: i === 0 ? 0.8 : 0.15 }}
                    />
                    <span className="font-mono text-xs text-ofi-pink mt-0.5 flex-shrink-0 w-6">{step.n}</span>
                    <div>
                      <p className="text-white font-semibold text-sm mb-1">{step.title}</p>
                      <p className="text-white/40 text-xs leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA inline proceso */}
              <a
                href="#contacto"
                className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-ofi-pink/70 hover:text-ofi-pink transition-colors duration-200"
              >
                Solicitar presupuesto sin compromiso
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                  <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

            </div>
          </div>
        </div>

        {/* ── PHOTO GALLERY ── */}
        <section className="border-b border-ofi-black/10 bg-ofi-black">
          <div className="px-8 md:px-14 py-6 border-b border-white/10 flex items-center justify-between">
            <p className="text-xs font-semibold tracking-[0.2em] text-ofi-pink uppercase">Espacios que equipamos</p>
            <p className="font-clash font-bold text-white text-2xl md:text-3xl">Cada proyecto, único.</p>
          </div>
          <div ref={galleryRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {[
              { src: '/imgs/executive-office.jpg', label: 'Dirección' },
              { src: '/imgs/chair.jpg',            label: 'Sillería' },
              { src: '/imgs/meeting-room.jpg',     label: 'Salas de reuniones' },
              { src: '/imgs/archive.jpg',          label: 'Archivo' },
              { src: '/imgs/divisions.jpg',        label: 'Divisiones' },
              { src: '/imgs/despacho.png',         label: 'Despachos' },
            ].map((item, i) => (
              <div
                key={i}
                data-gallery
                className="relative overflow-hidden group"
                style={{ aspectRatio: '3/4' }}
              >
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 17vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 z-10">
                  <p className="text-white text-xs font-semibold tracking-widest uppercase">{item.label}</p>
                </div>
                <div
                  className="absolute top-3 right-3 w-5 h-5 rounded-full border border-ofi-pink/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <span className="text-ofi-pink text-[8px]">+</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CATEGORIES ── */}
        <section id="categorias" className="border-b border-ofi-black/10">
          <div className="px-8 md:px-12 py-6 border-b border-ofi-black/10 flex items-center justify-between">
            <p className="text-xs font-semibold tracking-[0.2em] text-ofi-gray uppercase">Lo que equipamos</p>
            <p className="font-clash font-bold text-2xl md:text-3xl">Todo para tu oficina.</p>
          </div>
          <div
            ref={categoriesRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          >
            {CATEGORIES.map((cat, i) => (
              <div
                key={i}
                data-cat
                className="group border-r border-b border-ofi-black/10 p-8 cursor-pointer transition-colors duration-200 hover:bg-ofi-black last:border-r-0 [&:nth-child(4n)]:border-r-0"
              >
                <span className="block text-xs font-mono text-ofi-gray group-hover:text-ofi-pink-dark mb-4 transition-colors">{cat.num}</span>
                <h3 className="font-clash font-bold text-xl mb-2 group-hover:text-ofi-white transition-colors">{cat.title}</h3>
                <p className="text-sm text-ofi-gray group-hover:text-white/50 transition-colors">{cat.sub}</p>
                <div className="mt-6 flex items-center gap-2 text-xs font-semibold opacity-40 group-hover:opacity-100 text-ofi-pink transition-all duration-200">
                  Ver productos
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="translate-x-0 group-hover:translate-x-1 transition-transform duration-200">
                    <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── BRANDS ── */}
        <section id="marcas" ref={brandsRef} className="border-b border-ofi-black/10 grid grid-cols-1 lg:grid-cols-[200px_1fr]">
          {/* Red left column */}
          <div className="hidden lg:flex items-center justify-center border-r border-ofi-pink py-16" style={{ background: 'var(--brand-primary)' }}>
            <p
              className="font-clash font-bold text-ofi-white text-sm tracking-[0.35em] uppercase"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            >
              Fabricantes Oficiales
            </p>
          </div>
          {/* Brands grid */}
          <div className="px-8 md:px-12 py-12">
            <p className="text-xs font-semibold tracking-[0.2em] text-ofi-gray uppercase mb-8 lg:hidden">Fabricantes oficiales</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
              {BRANDS.map((brand, i) => (
                <div
                  key={i}
                  data-brand
                  className="group border-r border-b border-ofi-black/10 p-8 flex flex-col gap-3 hover:bg-ofi-black transition-colors duration-200 cursor-pointer [&:nth-child(4n)]:border-r-0"
                >
                  <span className="text-xs font-mono text-ofi-gray group-hover:text-ofi-pink-dark transition-colors">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-clash font-bold text-lg group-hover:text-ofi-white transition-colors">{brand}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── NOSOTROS / STATS ── */}
        <section id="nosotros" className="border-b border-ofi-black/10 grid grid-cols-1 lg:grid-cols-2">
          <div className="px-8 md:px-14 py-16 border-r border-ofi-black/10 flex flex-col justify-center">
            <p className="text-xs font-semibold tracking-[0.2em] text-ofi-pink uppercase mb-6">Sobre nosotros</p>
            <h2 className="font-clash font-bold leading-tight mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              Tres décadas<br />
              <span style={{ color: 'transparent', WebkitTextStroke: '1.5px #0B0B0B' }}>equipando</span><br />
              España.
            </h2>
            <p className="text-ofi-gray leading-relaxed max-w-md">
              Desde 1994 somos referente nacional en mobiliario de oficina para empresas. Distribuimos marcas europeas de primer nivel con asesoramiento personalizado, servicio de diseño de espacios y montaje incluido en toda España.
            </p>
          </div>
          <div className="grid grid-cols-2">
            {STATS.map((s, i) => (
              <div key={i} className="border-r border-b border-ofi-black/10 p-10 flex flex-col justify-end last:border-r-0 [&:nth-child(2n)]:border-r-0">
                <div
                  data-stat-num={`${s.raw}|${s.suffix}`}
                  className={`font-clash font-bold mb-2 ${s.accent ? 'text-ofi-pink' : ''}`}
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
                >
                  {s.value}
                </div>
                <p className="text-sm text-ofi-gray whitespace-pre-line">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section id="contacto" ref={ctaSectionRef} className="grid grid-cols-1 lg:grid-cols-2 border-b border-ofi-black/10 min-h-[420px]">
          {/* Left: black */}
          <div className="bg-ofi-black px-8 md:px-14 py-16 flex flex-col justify-center border-r border-ofi-black/10">
            <p data-cta className="text-xs font-semibold tracking-[0.2em] text-ofi-pink uppercase mb-6">Contacto</p>
            <h2 data-cta className="font-clash font-bold text-ofi-white leading-tight mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
              ¿Equipamos<br />tu próxima<br />
              <span className="text-ofi-pink">oficina?</span>
            </h2>
            <p data-cta className="text-white/50 text-sm leading-relaxed max-w-sm">
              Cuéntanos tu proyecto. Te preparamos un presupuesto detallado sin compromiso, con los mejores materiales y fabricantes europeos.
            </p>
            <ul data-cta className="mt-6 flex flex-col gap-2.5">
              {['Sin compromiso · Respuesta en 24h', 'Montaje incluido en toda España', 'Distribuidores oficiales de 8 marcas europeas'].map(item => (
                <li key={item} className="flex items-center gap-2.5 text-xs text-white/35">
                  <span className="w-1 h-1 rounded-full bg-ofi-pink shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {/* Right: off-white form */}
          <div className="bg-ofi-offwhite px-8 md:px-14 py-16 flex flex-col justify-center">
            <form className="flex flex-col gap-4 max-w-sm w-full" onSubmit={e => e.preventDefault()}>
              <div data-cta className="flex flex-col gap-1">
                <label htmlFor="contact-name" className="text-xs font-semibold text-ofi-gray uppercase tracking-wider">Nombre</label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Tu nombre o empresa"
                  autoComplete="name"
                  className="border border-ofi-black/20 bg-transparent px-4 py-3 text-sm placeholder:text-ofi-gray/50 focus:outline-none focus:border-ofi-pink transition-colors"
                />
              </div>
              <div data-cta className="flex flex-col gap-1">
                <label htmlFor="contact-email" className="text-xs font-semibold text-ofi-gray uppercase tracking-wider">Email</label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="correo@empresa.com"
                  autoComplete="email"
                  className="border border-ofi-black/20 bg-transparent px-4 py-3 text-sm placeholder:text-ofi-gray/50 focus:outline-none focus:border-ofi-pink transition-colors"
                />
              </div>
              <div data-cta className="flex flex-col gap-1">
                <label htmlFor="contact-message" className="text-xs font-semibold text-ofi-gray uppercase tracking-wider">Mensaje</label>
                <textarea
                  id="contact-message"
                  rows={3}
                  placeholder="Describe brevemente tu proyecto..."
                  className="border border-ofi-black/20 bg-transparent px-4 py-3 text-sm placeholder:text-ofi-gray/50 focus:outline-none focus:border-ofi-pink transition-colors resize-none"
                />
              </div>
              <button
                data-cta
                type="submit"
                className="bg-ofi-black text-ofi-white font-semibold text-sm px-6 py-3.5 hover:bg-ofi-pink-dark transition-colors duration-200 flex items-center justify-between"
              >
                Enviar solicitud
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="px-8 md:px-12 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-ofi-black/10">
          <div>
            <Image src="/logo.png" alt="Ofiponiente" width={120} height={40} className="h-10 w-auto mb-2" style={{ width: 'auto' }} />
            <p className="text-sm text-ofi-gray">Mobiliario de oficina · España</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold tracking-wider text-ofi-gray uppercase mb-2">Contacto</p>
            <p className="text-sm text-ofi-gray">C/ Ejemplo, 14 · 04700 El Ejido</p>
            <a href="mailto:info@ofiponiente.es" className="text-sm text-ofi-gray hover:text-ofi-pink-dark transition-colors">info@ofiponiente.es</a>
            <a href="tel:+34950000000" className="text-sm text-ofi-gray hover:text-ofi-pink-dark transition-colors">950 000 000</a>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold tracking-wider text-ofi-gray uppercase mb-2">Legal</p>
            <a href="#" className="text-sm text-ofi-gray hover:text-ofi-black transition-colors">Aviso legal</a>
            <a href="#" className="text-sm text-ofi-gray hover:text-ofi-black transition-colors">Política de privacidad</a>
            <a href="/login" className="text-sm text-ofi-gray/30 hover:text-ofi-gray transition-colors text-xs mt-4">Acceso gestor →</a>
          </div>
        </footer>
        <div className="px-8 md:px-12 py-4 flex items-center justify-between text-xs text-ofi-gray/40 border-t border-ofi-black/5">
          <span>© 2026 Ofiponiente S.L. — Distribuidores oficiales desde 1994</span>
          <span>Distribuidores oficiales en toda España</span>
        </div>

      </div>


    </>
  );
}

