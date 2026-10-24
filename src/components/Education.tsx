import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Calendar, Sparkles, BookOpen, MapPin, CheckCircle2 } from 'lucide-react';
import KineticHeading from './KineticHeading';
import TiltCard from './TiltCard';
import BorderBeam from './BorderBeam';

interface EducationMeta {
  institution: string;
  degree: string;
  detail: string;
  year: string;
  badge?: string;
  location?: string;
  scoreHighlight?: string;
  scoreLabel?: string;
  courses?: string[];
  status?: string;
}

const educationDetails: EducationMeta[] = [
  {
    institution: 'SRM Valliammai Engineering College',
    degree: 'B.Tech — Artificial Intelligence and Data Science',
    detail: 'CGPA: 7.58 · Till 6th Semester',
    year: '2022 – 2026',
    badge: 'COLLEGE · PURSUING',
    location: 'Kattankulathur, Chennai',
    scoreHighlight: '7.58 CGPA',
    scoreLabel: 'Till 6th Semester',
    status: 'ACTIVE CANDIDATE',
    courses: [
      'Machine Learning',
      'Data Analytics & SQL',
      'PySpark & Big Data',
      'Deep Learning',
      'Computer Vision',
      'UI/UX Architecture',
      'Cloud Computing'
    ]
  },
  {
    institution: 'MLM Mammallan Matric Higher Secondary School',
    degree: 'Higher Secondary Certificate (Class XII)',
    detail: '86% · First Class with Distinction',
    year: '2021 – 2022',
    badge: 'HIGHER SECONDARY (12TH)',
    location: 'Mamallapuram, Tamil Nadu',
    scoreHighlight: '86.0%',
    scoreLabel: 'State Board Distinction',
    status: 'COMPLETED',
    courses: [
      'Mathematics',
      'Physics',
      'Chemistry',
      'Computer Science',
      'Analytical Logic'
    ]
  },
  {
    institution: 'MLM Mammallan Matric Higher Secondary School',
    degree: 'Secondary School Leaving Certificate (Class X)',
    detail: '79% · Academic Excellence',
    year: '2019 – 2020',
    badge: 'SECONDARY (10TH)',
    location: 'Mamallapuram, Tamil Nadu',
    scoreHighlight: '79.0%',
    scoreLabel: 'State Board Merit',
    status: 'COMPLETED',
    courses: [
      'Science & Technology',
      'Mathematics',
      'Social Studies',
      'Language Arts'
    ]
  }
];

export default function Education() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [activeCard, setActiveCard] = useState<number | null>(0);

  return (
    <section 
      id="education" 
      ref={sectionRef} 
      style={{ 
        padding: '110px 48px', 
        backgroundColor: 'transparent', 
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Ambient Glows */}
      <div 
        style={{
          position: 'absolute',
          top: '20%',
          left: '5%',
          width: '320px',
          height: '320px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(34, 197, 94, 0.05) 0%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      <div 
        style={{
          position: 'absolute',
          bottom: '15%',
          right: '5%',
          width: '360px',
          height: '360px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.04) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="max-w" style={{ position: 'relative', zIndex: 1, maxWidth: '920px', margin: '0 auto' }}>
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: '64px', textAlign: 'center' }}
        >
          <div 
            className="font-head" 
            style={{ 
              fontSize: '11px', 
              fontWeight: 700, 
              letterSpacing: '0.2em', 
              color: 'var(--gray-mid)', 
              textTransform: 'uppercase',
              marginBottom: '16px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <GraduationCap size={14} />
            <span>03 / Academic Pedigree &amp; Foundation</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <KineticHeading 
              className="font-hero" 
              style={{ 
                fontSize: 'clamp(42px, 5.5vw, 72px)', 
                letterSpacing: '0.02em', 
                color: 'var(--black)', 
                marginBottom: '16px', 
                lineHeight: 1.05,
                textAlign: 'center'
              }}
            >
              EDUCATION &amp; BACKGROUND
            </KineticHeading>
          </div>

          <p 
            className="font-body" 
            style={{ 
              fontSize: 'clamp(16px, 2.2vw, 19px)', 
              color: 'var(--gray-text)', 
              lineHeight: 1.6,
              maxWidth: '620px',
              margin: '0 auto'
            }}
          >
            A solid academic grounding in Artificial Intelligence, Big Data engineering, and rigorous mathematical problem-solving.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div style={{ position: 'relative', paddingLeft: '28px' }}>
          
          {/* Animated Glowing Spine Line */}
          <motion.div 
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'absolute',
              left: '11px',
              top: '24px',
              bottom: '48px',
              width: '2px',
              background: 'linear-gradient(to bottom, var(--black) 0%, rgba(17, 17, 17, 0.4) 60%, rgba(17, 17, 17, 0.1) 100%)',
              transformOrigin: 'top',
              zIndex: 1
            }}
          />

          {/* Education Entries */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {educationDetails.map((edu, i) => {
              const isFirst = i === 0;
              const isSelected = activeCard === i;

              return (
                <motion.div
                  key={edu.institution + i}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                  transition={{ 
                    duration: 0.7, 
                    delay: 0.2 + i * 0.18, 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  onMouseEnter={() => setActiveCard(i)}
                  style={{ position: 'relative' }}
                >
                  {/* Timeline Beacon Node */}
                  <div 
                    style={{
                      position: 'absolute',
                      left: '-28px',
                      top: '28px',
                      width: '24px',
                      height: '24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      zIndex: 3
                    }}
                  >
                    {isFirst ? (
                      /* Live pulsing beacon ring for current degree */
                      <div style={{ position: 'relative', width: '18px', height: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <motion.span 
                          animate={{ scale: [1, 2.2, 1], opacity: [0.75, 0, 0.75] }}
                          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
                          style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            borderRadius: '50%',
                            backgroundColor: '#22c55e',
                            zIndex: 1
                          }}
                        />
                        <span 
                          style={{
                            width: '12px',
                            height: '12px',
                            borderRadius: '50%',
                            backgroundColor: '#22c55e',
                            border: '2.5px solid var(--white)',
                            boxShadow: '0 0 10px rgba(34, 197, 94, 0.8)',
                            position: 'relative',
                            zIndex: 2
                          }}
                        />
                      </div>
                    ) : (
                      /* Milestone node */
                      <motion.div 
                        whileHover={{ scale: 1.4 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                        style={{
                          width: '12px',
                          height: '12px',
                          borderRadius: '50%',
                          backgroundColor: isSelected ? 'var(--black)' : 'var(--white)',
                          border: '2px solid var(--black)',
                          boxShadow: isSelected ? '0 0 12px rgba(0,0,0,0.2)' : 'none',
                          transition: 'all 0.3s ease'
                        }}
                      />
                    )}
                  </div>

                  {/* 3D Tilt Card Container */}
                  <TiltCard dataCursor="ACADEMIC" maxTilt={4}>
                    <div 
                      className="edu-card-interactive"
                      style={{
                        position: 'relative',
                        padding: '36px 32px',
                        borderRadius: '20px',
                        border: isFirst ? '1.5px solid rgba(17, 17, 17, 0.8)' : '1px solid var(--border)',
                        backgroundColor: '#FFFFFF',
                        boxShadow: isSelected 
                          ? '0 24px 48px -12px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0,0,0,0.04)' 
                          : '0 8px 24px rgba(0, 0, 0, 0.03)',
                        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                        overflow: 'hidden'
                      }}
                    >
                      {/* Border beam for the premier B.Tech degree */}
                      {isFirst && <BorderBeam size={180} duration={8} borderWidth={1.5} />}

                      {/* Header Row: Badge & Timeline Period */}
                      <div 
                        style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'space-between', 
                          flexWrap: 'wrap', 
                          gap: '12px',
                          marginBottom: '20px' 
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <span 
                            className="font-head"
                            style={{
                              fontSize: '10px',
                              fontWeight: 700,
                              letterSpacing: '0.14em',
                              textTransform: 'uppercase',
                              padding: '5px 14px',
                              borderRadius: '100px',
                              backgroundColor: isFirst ? 'var(--black)' : 'rgba(0,0,0,0.05)',
                              color: isFirst ? 'var(--white)' : 'var(--black)',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '6px',
                              boxShadow: isFirst ? '0 4px 12px rgba(0,0,0,0.12)' : 'none'
                            }}
                          >
                            {isFirst && (
                              <span 
                                style={{ 
                                  width: '6px', 
                                  height: '6px', 
                                  borderRadius: '50%', 
                                  backgroundColor: '#22c55e', 
                                  display: 'inline-block', 
                                  boxShadow: '0 0 8px #22c55e' 
                                }} 
                              />
                            )}
                            {edu.badge}
                          </span>

                          {edu.location && (
                            <span 
                              className="font-body" 
                              style={{ 
                                fontSize: '12px', 
                                color: 'var(--gray-text)', 
                                display: 'inline-flex', 
                                alignItems: 'center', 
                                gap: '4px' 
                              }}
                            >
                              <MapPin size={12} strokeWidth={2} />
                              {edu.location}
                            </span>
                          )}
                        </div>

                        {/* Calendar Period Pill */}
                        <div 
                          className="font-head" 
                          style={{ 
                            fontSize: '11px', 
                            fontWeight: 700, 
                            color: 'var(--gray-text)', 
                            letterSpacing: '0.08em',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            backgroundColor: '#FAFAF8',
                            padding: '4px 12px',
                            borderRadius: '100px',
                            border: '1px solid var(--border)'
                          }}
                        >
                          <Calendar size={12} strokeWidth={2.2} />
                          {edu.year}
                        </div>
                      </div>

                      {/* Main Title & Degree Row */}
                      <div 
                        style={{ 
                          display: 'flex', 
                          justifyContent: 'space-between', 
                          alignItems: 'flex-start', 
                          flexWrap: 'wrap', 
                          gap: '20px',
                          marginBottom: '16px' 
                        }}
                      >
                        <div style={{ flex: '1 1 340px' }}>
                          <h3 
                            className="font-hero" 
                            style={{ 
                              fontSize: 'clamp(28px, 3.8vw, 40px)', 
                              letterSpacing: '0.02em', 
                              lineHeight: 1.1,
                              color: 'var(--black)',
                              marginBottom: '8px'
                            }}
                          >
                            {edu.institution}
                          </h3>
                          <div 
                            className="font-body" 
                            style={{ 
                              fontSize: '16px', 
                              fontWeight: 500, 
                              color: 'var(--black)',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px'
                            }}
                          >
                            <BookOpen size={16} strokeWidth={2} color="#111111" />
                            <span>{edu.degree}</span>
                          </div>
                        </div>

                        {/* Prominent Score Pill with Shimmering Glow */}
                        <motion.div 
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                          style={{
                            padding: '12px 20px',
                            borderRadius: '14px',
                            backgroundColor: isFirst ? 'rgba(34, 197, 94, 0.08)' : '#FAFAF8',
                            border: isFirst ? '1.5px solid rgba(34, 197, 94, 0.35)' : '1px solid var(--border)',
                            textAlign: 'right',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-end',
                            justifyContent: 'center',
                            minWidth: '120px'
                          }}
                        >
                          <div 
                            className="font-hero" 
                            style={{ 
                              fontSize: '24px', 
                              letterSpacing: '0.04em', 
                              color: isFirst ? '#15803d' : 'var(--black)',
                              lineHeight: 1
                            }}
                          >
                            {edu.scoreHighlight}
                          </div>
                          <span 
                            className="font-head" 
                            style={{ 
                              fontSize: '9px', 
                              fontWeight: 700, 
                              letterSpacing: '0.12em', 
                              textTransform: 'uppercase', 
                              color: 'var(--gray-text)',
                              marginTop: '4px'
                            }}
                          >
                            {edu.scoreLabel}
                          </span>
                        </motion.div>
                      </div>

                      {/* Course / Key Specialization Tags */}
                      {edu.courses && edu.courses.length > 0 && (
                        <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid var(--border)' }}>
                          <div 
                            className="font-head" 
                            style={{ 
                              fontSize: '10px', 
                              fontWeight: 700, 
                              letterSpacing: '0.14em', 
                              textTransform: 'uppercase', 
                              color: 'var(--gray-mid)',
                              marginBottom: '12px',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '6px'
                            }}
                          >
                            <Sparkles size={11} />
                            <span>Core Curriculum &amp; Focus Areas</span>
                          </div>

                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                            {edu.courses.map((course) => (
                              <motion.span
                                key={course}
                                whileHover={{ y: -2, scale: 1.05 }}
                                whileTap={{ scale: 0.96 }}
                                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                                style={{
                                  fontSize: '12px',
                                  fontFamily: 'var(--font-head)',
                                  fontWeight: 600,
                                  letterSpacing: '0.03em',
                                  padding: '5px 12px',
                                  borderRadius: '8px',
                                  backgroundColor: '#F7F7F5',
                                  border: '1px solid var(--border)',
                                  color: 'var(--black)',
                                  cursor: 'default',
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: '5px',
                                  transition: 'background-color 0.2s, border-color 0.2s'
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.backgroundColor = 'var(--black)';
                                  e.currentTarget.style.color = 'var(--white)';
                                  e.currentTarget.style.borderColor = 'var(--black)';
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.backgroundColor = '#F7F7F5';
                                  e.currentTarget.style.color = 'var(--black)';
                                  e.currentTarget.style.borderColor = 'var(--border)';
                                }}
                              >
                                <CheckCircle2 size={10} strokeWidth={2.5} />
                                {course}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>

      <style>{`
        .edu-card-interactive:hover {
          border-color: var(--black) !important;
        }
      `}</style>
    </section>
  );
}

