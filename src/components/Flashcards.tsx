import React, { useState } from "react";
import { Sparkles, Star, ChevronLeft, ChevronRight, HelpCircle, CheckCircle2, RotateCcw } from "lucide-react";

interface FlushCard {
  id: number;
  chapter: string;
  front: string;
  back: string;
  highYieldFact: string;
}

const HIGH_YIELD_CARDS: FlushCard[] = [
  {
    id: 1,
    chapter: "Chapter 1: History & Examination",
    front: "What is the recommended timing and parameter for pregnancy dating scans according to UK and NICE benchmarks?",
    back: "Crown-Rump Length (CRL) measured via ultrasound between 11+0 weeks and 13+6 weeks. If CRL is > 84 mm, gestational age is estimated using Head Circumference (HC).",
    highYieldFact: "Never rely strictly on LMP if it differs from dating scan measurements by > 7 days."
  },
  {
    id: 2,
    chapter: "Chapter 13: Antenatal Care & Screenings",
    front: "When is the fetal structural anomaly ultrasound scan recommended, and what are its limits?",
    back: "Between 18+0 weeks and 20+6 weeks. It screens for major fetal structural abnormalities (e.g., cardiac defects, neural tube defects, cleft lip, skeletal dysplasia).",
    highYieldFact: "Detection of a single minor soft marker is no longer considered clinically significant without other findings."
  },
  {
    id: 3,
    chapter: "Chapter 11: Preeclampsia & Hypertension",
    front: "State the diagnostic criteria for Gestational Hypertension vs Pre-eclampsia.",
    back: "Gestational Hypertension: BP >= 140/90 mmHg presenting after 20 weeks without proteinuria. Pre-eclampsia: New onset hypertension after 20 weeks PLUS significant proteinuria (protein:creatinine ratio >= 30 mg/mmol or 24h urine >= 300mg) OR maternal organ dysfunction.",
    highYieldFact: "Organ damage signs include thrombocytopenia, renal insufficiency, impaired liver function, or persistent neurological symptoms."
  },
  {
    id: 4,
    chapter: "Chapter 11: Preeclampsia & Hypertension",
    front: "What prophylactic medication is recommended for women at high risk of pre-eclampsia, and what is the protocol?",
    back: "Aspirin 75-150 mg daily from 12 weeks of gestation until birth of the baby.",
    highYieldFact: "High-risk factors include previous hypertensive pregnancy, chronic renal disease, autoimmune disease (e.g., SLE), type 1/2 diabetes, or chronic hypertension."
  },
  {
    id: 5,
    chapter: "Chapter 13: Medical Disorders in Pregnancy",
    front: "What are the NICE diagnosis diagnostic threshold parameters for Gestational Diabetes on a 75g OGTT?",
    back: "Screening at 24-28 weeks. Diagnosis if: Fasting plasma glucose >= 5.6 mmol/L OR 2-hour plasma glucose >= 7.8 mmol/L.",
    highYieldFact: "Women with previous gestational diabetes should be offered early self-monitoring or an OGTT as soon as possible after booking."
  },
  {
    id: 6,
    chapter: "Chapter 15: Postpartum Hemorrhage",
    front: "Deconstruct the '4Ts' classic etiology of primary Postpartum Hemorrhage (PPH).",
    back: "1. TONE (Uterine Atony - most common, 70%)\n2. TRAUMA (Genital tract lacerations, uterine rupture)\n3. TISSUE (Retained placenta, cotyledons, or clots)\n4. THROMBIN (Coagulopathy, pre-existing or acquired under DIC).",
    highYieldFact: "Uterine atony requires immediate active fundal massage, bimanual compression, oxytocin, ergometrine, or carboprost."
  },
  {
    id: 7,
    chapter: "Chapter 15: Postpartum Hemorrhage",
    front: "What is the recommended loading and maintenance dose for Magnesium Sulfate in severe pre-eclampsia/eclampsia, and what is its antidote?",
    back: "Loading dose: 4g IV over 5-15 minutes, followed by maintenance infusion of 1g per hour for 24 hours. Antidote: 10% Calcium Gluconate (10ml IV slow over 10 minutes) given for respiratory depression or loss of deep tendon reflexes.",
    highYieldFact: "Continuously monitor respiration rate, urine output (>25ml/hr), and patellar reflexes during therapy."
  },
  {
    id: 8,
    chapter: "Chapter 5: Normal Labour",
    front: "Explain the active management protocol of the third stage of labour.",
    back: "Includes prophylactic administration of an uterotonic agent (e.g., IM oxytocin 10 IU), deferred cord clamping (at least 1-3 minutes), and controlled cord traction to deliver the placenta.",
    highYieldFact: "Active management reduces the risk of PPH by roughly 60% compared to physiological management."
  },
  {
    id: 9,
    chapter: "Chapter 7: Induction of Labour",
    front: "What are the components assessed in the Bishop Score to evaluate cervical ripeness?",
    back: "1. Cervical Dilation (cm)\n2. Length/Effacement of Cervix (cm)\n3. Station of the presenting part relative to ischial spines\n4. Consistency of the cervix (firm, medium, soft)\n5. Position of the cervix relative to vagina (posterior, mid, anterior).",
    highYieldFact: "A score of >= 8 suggests a favorable cervix, meaning induction is highly likely to succeed."
  },
  {
    id: 10,
    chapter: "Chapter 10: Obstetric Emergencies",
    front: "Define the 'HELPERR' mnemonic sequence for managing active Shoulder Dystocia.",
    back: "H: Help (call emergency team)\nE: Evaluate for episiotomy\nL: Legs (McRoberts maneuver: Hyperflexion and abduction of hips)\nP: Pressure (Suprapubic pressure applied downward and forward)\nE: Enter maneuvers (Internal rotation: Rubin/Wood screw maneuvers)\nR: Remove posterior arm\nR: Roll patient to knees and hands.",
    highYieldFact: "Strictly avoid fundal pressure, as it increases the risk of uterine rupture and severe brachial plexus injuries."
  }
];

export default function Flashcards() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [flipped, setFlipped] = useState<boolean>(false);
  
  // Custom categories trackings
  const [masteredIds, setMasteredIds] = useState<number[]>([]);
  const [starredIds, setStarredIds] = useState<number[]>([]);

  const card = HIGH_YIELD_CARDS[currentIndex];

  const handleNext = () => {
    setFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % HIGH_YIELD_CARDS.length);
    }, 150);
  };

  const handlePrev = () => {
    setFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + HIGH_YIELD_CARDS.length) % HIGH_YIELD_CARDS.length);
    }, 150);
  };

  const toggleMastered = (id: number) => {
    setMasteredIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleStarred = (id: number) => {
    setStarredIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const resetProgress = () => {
    setMasteredIds([]);
    setStarredIds([]);
    setCurrentIndex(0);
    setFlipped(false);
  };

  const isMastered = masteredIds.includes(card.id);
  const isStarred = starredIds.includes(card.id);

  return (
    <div className="max-w-2xl mx-auto space-y-6 text-left py-2 animate-fadeIn">
      {/* Intro info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-neutral-900 font-serif">High-Yield Recall Cards</h2>
          <p className="text-xs text-neutral-450 font-normal">Master the critical guidelines, calculations, and active protocols of Ten Teachers.</p>
        </div>

        {/* Counter indicators */}
        <div className="flex items-center space-x-3 text-xs font-semibold">
          <span className="text-neutral-800 bg-neutral-100 border border-neutral-200 px-2.5 py-1 rounded-sm text-[10px] font-bold uppercase tracking-wider">
            Completed: {masteredIds.length} / {HIGH_YIELD_CARDS.length}
          </span>
          <button
            onClick={resetProgress}
            className="text-neutral-400 hover:text-red-500 cursor-pointer flex items-center space-x-0.5 font-bold uppercase text-[10px] tracking-wide"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Drills</span>
          </button>
        </div>
      </div>

      {/* Primary Card Stage */}
      <div className="perspective-1000 w-full min-h-[340px] focus:outline-none">
        <div
          onClick={() => setFlipped(!flipped)}
          className={`relative w-full h-[320px] transition-transform duration-500 transform-style-3d cursor-pointer rounded-xl ${
            flipped ? "rotate-y-180" : ""
          }`}
        >
          {/* FRONT OF THE CARD */}
          <div className="absolute inset-0 w-full h-full backface-hidden bg-white border border-neutral-205/75 shadow-2xs rounded-xl p-6 flex flex-col justify-between">
            {/* Top row */}
            <div className="flex justify-between items-center">
              <span className="text-[9px] font-bold text-neutral-500 bg-neutral-100 px-2.5 py-1 rounded-sm uppercase tracking-wide">
                {card.chapter}
              </span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleStarred(card.id);
                  }}
                  className={`p-1.5 rounded-lg transition ${isStarred ? "text-amber-500" : "text-neutral-305 hover:bg-neutral-50"}`}
                >
                  <Star className="w-4.5 h-4.5 fill-current" />
                </button>
              </div>
            </div>

            {/* Middle Question */}
            <div className="space-y-4 text-center my-auto px-4">
              <HelpCircle className="w-10 h-10 text-neutral-200 mx-auto" />
              <p className="text-sm sm:text-base font-bold text-neutral-905 leading-relaxed font-serif max-h-[140px] overflow-y-auto">
                {card.front}
              </p>
            </div>

            {/* Bottom cue */}
            <div className="text-center text-[10px] text-neutral-400 font-bold select-none uppercase tracking-wider">
              Click Card to Flip &amp; See Rationale
            </div>
          </div>

          {/* BACK OF THE CARD */}
          <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-neutral-900 border border-neutral-800 text-white rounded-xl p-6 flex flex-col justify-between shadow-xs">
            {/* Top Header */}
            <div className="flex justify-between items-center border-b border-white/10 pb-2">
              <span className="text-[9px] text-neutral-350 font-bold uppercase tracking-wide">
                {card.chapter} • Clinical Explanation
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleStarred(card.id);
                }}
                className={`p-1 text-white transition ${isStarred ? "text-amber-400" : "text-neutral-400 hover:text-neutral-200"}`}
              >
                <Star className="w-4.5 h-4.5 fill-current" />
              </button>
            </div>

            {/* Middle answer */}
            <div className="my-auto space-y-4 px-2 max-h-[160px] overflow-y-auto">
              <p className="text-xs sm:text-sm font-semibold text-neutral-100 leading-relaxed text-left whitespace-pre-line font-sans">
                {card.back}
              </p>
            </div>

            {/* High Yield Fact footer */}
            <div className="bg-white/10 border border-white/10 p-3 rounded-lg flex items-start space-x-2 text-left">
              <Sparkles className="w-4 h-4 text-neutral-200 shrink-0 mt-0.5" />
              <div>
                <span className="text-[9px] font-bold text-white uppercase tracking-wider block font-serif">EXAM HIGH-YIELD TIP:</span>
                <span className="text-xs text-neutral-200 leading-relaxed font-sans">{card.highYieldFact}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Control row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2.5">
          <button
            onClick={handlePrev}
            className="p-2.5 bg-white hover:bg-neutral-50 border border-neutral-200 rounded-xl transition cursor-pointer active:scale-95 text-neutral-600"
          >
            <ChevronLeft className="w-4.5 h-4.5" />
          </button>
          <span className="text-xs font-semibold text-neutral-500 font-mono">
            {currentIndex + 1} / {HIGH_YIELD_CARDS.length}
          </span>
          <button
            onClick={handleNext}
            className="p-2.5 bg-white hover:bg-neutral-50 border border-neutral-200 rounded-xl transition cursor-pointer active:scale-95 text-neutral-600"
          >
            <ChevronRight className="w-4.5 h-4.5" />
          </button>
        </div>

        {/* Action tags */}
        <button
          onClick={() => toggleMastered(card.id)}
          className={`flex items-center space-x-1.5 px-4 py-2.5 rounded-xl text-xs font-extrabold transition cursor-pointer active:scale-95 ${
            isMastered
              ? "bg-neutral-900 text-white border border-neutral-900"
              : "bg-white hover:bg-neutral-50 border border-neutral-200 text-neutral-700"
          }`}
        >
          <CheckCircle2 className={`w-4 h-4 ${isMastered ? "text-white" : "text-neutral-400"}`} />
          <span>{isMastered ? "Mastered (Completed)" : "Mark as Mastered"}</span>
        </button>
      </div>
    </div>
  );
}
