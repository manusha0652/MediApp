import { Question, Chapter } from "../types";

export const CHAPTERS: Chapter[] = [
  { id: 1, name: "Chapter 1: Obstetric History and Examination", description: "Fetal dating, G&P scoring, domestic abuse screening, BMI risks, BP protocols, SFH monitoring, and abdominal palpation.", questionCount: 10 },
  { id: 2, name: "Chapter 2: Antenatal Care", description: "Global maternal mortality, NIPT, anaemia definition, booking screens, anti-D prophylaxis, Down combined screening, and twin plans.", questionCount: 15 },
  { id: 3, name: "Chapter 3: Normal Fetal Development and Growth", description: "DOHaD hypothesis, customized growth centiles, shunts, ductus arteriosus closure risks, midgut rotation, and Potter syndrome.", questionCount: 10 },
  { id: 4, name: "Chapter 4: Assessment of Fetal Well-being", description: "Combined screening CRL boundaries, twins chorionicity signs, FGR brain sparing, Doppler indices (MCA and DV), and biophysical scoring.", questionCount: 15 },
  { id: 5, name: "Chapter 5: Prenatal Diagnosis", description: "Miscarriage risks for CVS/amniocentesis, confined placental mosaicism, gastroschisis vs exomphalos differentiation, and cranial signs of NTDs.", questionCount: 6 },
  { id: 6, name: "Chapter 6: Antenatal Obstetric Complications", description: "Incarcerated uterus, obstetric cholestasis bile acid levels, placental abruption, breech presentation, DVT management, and unstable lie.", questionCount: 10 },
  { id: 7, name: "Chapter 7: Multiple Pregnancy", description: "Monochorionic complications, Twin-to-Twin Transfusion Syndrome Quintero staging, Twin Reversed Arterial Perfusion (TRAP) sequence, and management rules.", questionCount: 5 },
  { id: 8, name: "Chapter 8: Pre-existing Medical Disorders", description: "Management of chronic diseases in pregnancy: Epilepsy, Cardiac disease, Diabetes target levels, and Asthma.", questionCount: 5 },
  { id: 9, name: "Chapter 9: Obstetric Medicine", description: "Hypertensive disorders of pregnancy, gestational diabetes, thyroid disease, liver disorders, and thrombophilia.", questionCount: 5 },
  { id: 10, name: "Chapter 10: Antenatal Emergencies", description: "Severe antepartum haemorrhage, vasa praevia, cord prolapse, and maternal collapse algorithms.", questionCount: 4 },
  { id: 11, name: "Chapter 11: Normal Labour", description: "Physiology of parturition, pelvic anatomy, stages of labour, and the cardinal movements of delivery.", questionCount: 4 },
  { id: 12, name: "Chapter 12: Monitoring in Labour", description: "Assessing progress using partograms, digital vaginal exams, CTG interpretation, and fetal blood sampling parameters.", questionCount: 4 },
  { id: 13, name: "Chapter 13: Pain Relief in Labour", description: "Pharmacological and non-pharmacological methods: Epidurals, spinal blocks, Entonox, and systemic opioids.", questionCount: 3 },
  { id: 14, name: "Chapter 14: Delivery", description: "Normal vaginal deliveries, operative vaginal procedures (forceps and vacuum), and Caesarean section protocols.", questionCount: 5 },
  { id: 15, name: "Chapter 15: Obstetric Emergencies in Labour", description: "Shoulder dystocia manoeuvres, postpartum haemorrhage (PPH) algorithms, uterine rupture, and embolisms.", questionCount: 5 },
  { id: 16, name: "Chapter 16: The Puerperium and Neonate", description: "Lactation physiology, postpartum depression vs. psychosis, mastitis, APGAR scores, and basic neonatal resuscitation.", questionCount: 5 }
];

export const QUESTIONS: Question[] = [
  // --- CHAPTER 1 ---
  {
    id: 1,
    chapterId: 1,
    chapterName: "Obstetric History and Examination",
    question: "According to NICE guidelines, what is the recommended method and timeframe for accurately dating a pregnancy?",
    options: {
      A: "Last Menstrual Period (LMP) at the booking visit",
      B: "Ultrasound using biparietal diameter (BPD) between 14 and 20 weeks",
      C: "Ultrasound using crown–rump length (CRL) between 11 weeks + 2 days and 14 weeks + 1 day",
      D: "Ultrasound using femur length at 20 weeks",
      E: "Symphysis-fundal height measurement at 12 weeks"
    },
    answer: "C",
    rationale: "The NICE guideline on antenatal care recommends that pregnancy dates are set by ultrasound using the crown–rump length (CRL) measurement between 11 weeks and 2 days and 14 weeks and 1 day. This is significantly more precise than using the Last Menstrual Period (LMP)."
  },
  {
    id: 2,
    chapterId: 1,
    chapterName: "Obstetric History and Examination",
    question: "A pregnant woman presents for her booking visit. She reveals that she has had three previous miscarriages at 8, 9, and 10 weeks, and one live birth at 38 weeks. How should her gravidity and parity be recorded?",
    options: {
      A: "Gravida 4, Para 1+3",
      B: "Gravida 5, Para 1+3",
      C: "Gravida 4, Para 4",
      D: "Gravida 5, Para 4+0",
      E: "Gravida 3, Para 1"
    },
    answer: "B",
    rationale: "Gravidity is the total number of pregnancies, regardless of outcome (this current pregnancy + 3 miscarriages + 1 live birth = 5). Parity is the number of live births or stillbirths after 24 weeks. Miscarriages are denoted after a plus sign. Thus, she is Gravida 5, Para 1+3."
  },
  {
    id: 3,
    chapterId: 1,
    chapterName: "Obstetric History and Examination",
    question: "During an antenatal history, a patient is asked about domestic abuse. According to guidelines, how should this be conducted?",
    options: {
      A: "The partner should be present to observe family dynamics.",
      B: "It should only be asked if the patient presents with visible bruises.",
      C: "It is recommended that everyone who is pregnant is seen on their own at least once to allow safe disclosure.",
      D: "It should be asked exclusively during the third trimester.",
      E: "Only social workers are permitted to ask about domestic abuse."
    },
    answer: "C",
    rationale: "One-third of those who experience domestic abuse do so for the first time while pregnant. It is recommended that everyone who is pregnant is seen on their own at least once during their pregnancy so they can discuss this away from a partner, allowing a safe environment for disclosure."
  },
  {
    id: 4,
    chapterId: 1,
    chapterName: "Obstetric History and Examination",
    question: "A 28-year-old woman is found to have a BMI of 36 kg/m² at her booking visit. She is at increased risk for all of the following EXCEPT:",
    options: {
      A: "Gestational diabetes",
      B: "Venous thromboembolism",
      C: "Pre-eclampsia",
      D: "Fetal macrosomia",
      E: "Fetal growth restriction (constitutionally small baby)"
    },
    answer: "E",
    rationale: "Obesity (BMI >30 kg/m²) is associated with an increased risk of gestational diabetes, venous thromboembolism, pre-eclampsia, and increased birthweight (macrosomia). It is not classically associated with restricted fetal growth; rather, maternal malnutrition or low pre-pregnancy BMI (<20) is associated with constitutionally small babies."
  },
  {
    id: 5,
    chapterId: 1,
    chapterName: "Obstetric History and Examination",
    question: "What is the correct convention for measuring blood pressure in a pregnant patient?",
    options: {
      A: "Patient standing, using Korotkoff IV for diastolic pressure",
      B: "Patient lying flat on her back, using Korotkoff V for diastolic pressure",
      C: "Patient seated or semi-recumbent, using Korotkoff V (disappearance of sounds)",
      D: "Patient in extreme left lateral position, using Korotkoff IV (muffling of sounds)",
      E: "Rounding the blood pressure up to the nearest 10 mmHg"
    },
    answer: "C",
    rationale: "Blood pressure should be measured in a seated or semi-recumbent position using an appropriately sized cuff. The current convention is to use Korotkoff V (disappearance of sounds) as it is more reproducible than Korotkoff IV (muffling). BP should be recorded to the nearest 2 mmHg."
  },
  {
    id: 6,
    chapterId: 1,
    chapterName: "Obstetric History and Examination",
    question: "When measuring Symphysis-Fundal Height (SFH) to assess fetal growth, at what gestation should this measurement routinely begin?",
    options: {
      A: "12 weeks",
      B: "16 weeks",
      C: "20 weeks",
      D: "24 weeks",
      E: "28 weeks"
    },
    answer: "D",
    rationale: "SFH should be measured and recorded at each antenatal appointment from 24 weeks' gestation onwards, usually plotted on a customized growth chart to track fetal development trends."
  },
  {
    id: 7,
    chapterId: 1,
    chapterName: "Obstetric History and Examination",
    question: "During abdominal palpation in the third trimester, the clinician notes that the fetal head is 'three-fifths palpable.' What does this indicate?",
    options: {
      A: "The head is completely free and unengaged.",
      B: "The head is engaged in the pelvis.",
      C: "The head is in a transverse lie.",
      D: "The head is deeply impacted in the pelvic outlet.",
      E: "The fetus is in a breech presentation."
    },
    answer: "A",
    rationale: "If more than two-fifths of the fetal head is palpable abdominally, the head is not yet engaged. When the head is completely free, it equates to 5/5 or 4/5 palpable. Engagement occurs when 2/5 or less is palpable abdominally (meaning the bulk of the biparietal diameter has passed through the pelvic inlet)."
  },
  {
    id: 8,
    chapterId: 1,
    chapterName: "Obstetric History and Examination",
    question: "Which of the following is an absolute contraindication to performing a digital vaginal examination in pregnancy?",
    options: {
      A: "Suspected rupture of membranes in established labour",
      B: "Known placenta praevia",
      C: "Presence of vaginal discharge",
      D: "Gestational age > 40 weeks",
      E: "Previous LLETZ procedure"
    },
    answer: "B",
    rationale: "A digital examination is strictly contraindicated in cases of known placenta praevia (as digital contact can trigger catastrophic maternal hemorrhage) or vaginal bleeding when the placental site is unknown, and in pre-labour rupture of membranes to prevent ascending infections."
  },
  {
    id: 9,
    chapterId: 1,
    chapterName: "Obstetric History and Examination",
    question: "A patient who had a LLETZ (large loop excision of the transformation zone) procedure for cervical dysplasia 2 years ago is now pregnant. What specific obstetric complication is she at increased risk for?",
    options: {
      A: "Placental abruption",
      B: "Gestational diabetes",
      C: "Preterm birth",
      D: "Postpartum haemorrhage",
      E: "Uterine rupture"
    },
    answer: "C",
    rationale: "Treatment to the cervix by knife cone biopsy or LLETZ can compromise its structural integrity or cause scarring, which is associated with an increased risk of preterm birth. Measuring cervical length via transvaginal ultrasound in the second trimester is recommended for these patients."
  },
  {
    id: 10,
    chapterId: 1,
    chapterName: "Obstetric History and Examination",
    question: "Routine auscultation for maternal heart sounds during a booking visit is:",
    options: {
      A: "Mandatory for all pregnant women.",
      B: "Unnecessary in asymptomatic women with no cardiac history.",
      C: "Required only in the third trimester.",
      D: "Performed to check the fetal heart rate.",
      E: "Recommended only for women under 20 years old."
    },
    answer: "B",
    rationale: "Routine auscultation of maternal heart sounds in asymptomatic women with no personal or family history of cardiac disease is unnecessary at the booking visit. It is indicated if the patient presents with cardiovascular symptoms, murmurs, or a history of rheumatic heart disease."
  },

  // --- CHAPTER 2 ---
  {
    id: 11,
    chapterId: 2,
    chapterName: "Antenatal Care",
    question: "The World Health Organization (WHO) estimates that globally, approximately how many maternal deaths occur every day from preventable causes related to pregnancy and childbirth?",
    options: {
      A: "100",
      B: "300",
      C: "500",
      D: "800",
      E: "2,000"
    },
    answer: "D",
    rationale: "Globally there are approximately 800 maternal deaths a day from preventable pregnancy and childbirth causes. Ninety-nine percent of these occur in low- and lower-middle-income countries."
  },
  {
    id: 12,
    chapterId: 2,
    chapterName: "Antenatal Care",
    question: "Which of the following describes the mechanism of Non-Invasive Prenatal Testing (NIPT) for Down syndrome?",
    options: {
      A: "Analyzing fetal cells shed into the amniotic fluid.",
      B: "Analyzing cell-free fetal DNA (cffDNA) fragments in the maternal bloodstream.",
      C: "Measuring the thickness of the fetal nuchal translucency via ultrasound.",
      D: "Measuring maternal serum alpha-fetoprotein (AFP) exclusively.",
      E: "Biopsying placental tissue via the cervix."
    },
    answer: "B",
    rationale: "NIPT leverages cell-free fetal DNA (cffDNA) originating from placental cells that circulate in the maternal bloodstream. It detects >99% of pregnancies with Trisomy 21 with extremely low false-positive rates (<0.1%)."
  },
  {
    id: 13,
    chapterId: 2,
    chapterName: "Antenatal Care",
    question: "A pregnant woman at 10 weeks gestation has her booking blood tests. Her haemoglobin (Hb) is 108 g/L. According to UK guidelines, how should this be interpreted?",
    options: {
      A: "Normal for the first trimester; no action needed.",
      B: "Anaemia; she should be started on a trial of oral iron.",
      C: "Severe anaemia; she requires an immediate blood transfusion.",
      D: "Normal physiological haemodilution; check again at 28 weeks.",
      E: "Indicative of Thalassemia trait; requires electrophoresis."
    },
    answer: "B",
    rationale: "Anaemia in pregnancy is defined as Hb <110 g/L in the first trimester, <105 g/L in the second and third trimesters, and <100 g/L postpartum. Since her Hb is 108 g/L in the first trimester, she fits the criteria for mild anaemia and should be offered a therapeutic trial of oral iron."
  },
  {
    id: 14,
    chapterId: 2,
    chapterName: "Antenatal Care",
    question: "In the UK, which of the following infections is NO LONGER routinely screened for at the antenatal booking visit?",
    options: {
      A: "HIV",
      B: "Syphilis",
      C: "Hepatitis B",
      D: "Rubella",
      E: "Asymptomatic bacteriuria"
    },
    answer: "D",
    rationale: "Routine screening for rubella susceptibility was ceased in the UK in 2016. High MMR vaccination rates have made congenital rubella syndrome virtually nonexistent, and the test itself frequently yielded false or ambiguous results."
  },
  {
    id: 15,
    chapterId: 2,
    chapterName: "Antenatal Care",
    question: "A rhesus D-negative woman experiences a heavy vaginal bleed at 16 weeks gestation. What is the recommended management regarding anti-D prophylaxis?",
    options: {
      A: "Administer 250 IU of anti-D immediately and perform a Kleihauer test.",
      B: "Administer 250 IU of anti-D within 72 hours; a Kleihauer test is not required.",
      C: "Administer 500 IU of anti-D within 72 hours; a Kleihauer test is required.",
      D: "Withhold anti-D until 28 weeks gestation.",
      E: "Administer anti-D only if the fetus is confirmed alive."
    },
    answer: "B",
    rationale: "For potentially sensitizing events between 12 and 20 weeks' gestation, a minimum dose of 250 IU of anti-D Ig should be administered within 72 hours. An FMH assessment (Kleihauer test) is not required for events prior to 20 weeks' gestation."
  },
  {
    id: 16,
    chapterId: 2,
    chapterName: "Antenatal Care",
    question: "During the first trimester combined screening for Trisomy 21 (Down syndrome), which of the following marker profiles in maternal serum is characteristic of an affected pregnancy?",
    options: {
      A: "Low free βhCG and high PAPP-A",
      B: "High free βhCG and high PAPP-A",
      C: "Low free βhCG and low PAPP-A",
      D: "High free βhCG and low PAPP-A",
      E: "Normal free βhCG and low PAPP-A"
    },
    answer: "D",
    rationale: "In pregnancies affected by Trisomy 21, maternal serum free βhCG levels are elevated (typically twice the normal median, or ~2.0 MoM) while Pregnancy-Associated Plasma Protein-A (PAPP-A) levels are decreased (~0.5 MoM)."
  },
  {
    id: 17,
    chapterId: 2,
    chapterName: "Antenatal Care",
    question: "Which of the following pregnant women should be advised to take high-dose folic acid (5 mg daily) instead of the standard dose (400 mcg) for the first 12 weeks of pregnancy?",
    options: {
      A: "A 24-year-old primigravida with a BMI of 24 kg/m²",
      B: "A 30-year-old with a BMI of 32 kg/m² who smokes",
      C: "A 35-year-old with a BMI of 42 kg/m²",
      D: "A 28-year-old with a history of gestational hypertension",
      E: "A 22-year-old carrying dichorionic twins"
    },
    answer: "C",
    rationale: "Maternal obesity is a significant risk factor for neural tube defects. If a woman's BMI is 30 kg/m² or higher, she should take high-dose folic acid (5 mg) daily starting before conception and continuing through the first 12 weeks of pregnancy."
  },
  {
    id: 18,
    chapterId: 2,
    chapterName: "Antenatal Care",
    question: "According to NICE guidelines, pregnant women should be offered low-dose aspirin (75–150 mg) to reduce the risk of pre-eclampsia if they have ONE major risk factor. Which of the following is considered a MAJOR risk factor?",
    options: {
      A: "Primiparity (first pregnancy)",
      B: "Maternal age > 40 years",
      C: "Body Mass Index (BMI) > 35 kg/m²",
      D: "Chronic kidney disease",
      E: "Family history of pre-eclampsia"
    },
    answer: "D",
    rationale: "High-risk (major) factors requiring aspirin include chronic kidney disease, autoimmune disease (e.g., SLE, antiphospholipid syndrome), diabetes (type 1 or 2), chronic hypertension, or hypertensive disease in a previous pregnancy. Primiparity, age >40, high BMI, or family history are moderate risk factors (requiring at least two to trigger aspirin)."
  },
  {
    id: 19,
    chapterId: 2,
    chapterName: "Antenatal Care",
    question: "A 28-year-old woman is pregnant with dichorionic diamniotic (DCDA) twins. According to NICE guidelines, when should uncomplicated DCDA twins be offered planned birth?",
    options: {
      A: "32 weeks",
      B: "34 weeks",
      C: "36 weeks",
      D: "37 weeks",
      E: "39 weeks"
    },
    answer: "D",
    rationale: "For uncomplicated dichorionic diamniotic (DCDA) twin pregnancies, planned delivery is recommended at 37 weeks' gestation. For monochorionic diamniotic (MCDA) twin pregnancies, planned birth is offered earlier, at 36 weeks."
  },
  {
    id: 20,
    chapterId: 2,
    chapterName: "Antenatal Care",
    question: "A planned vaginal delivery is recommended for HIV-positive women who have a viral load below which threshold at 36 weeks' gestation?",
    options: {
      A: "No planned vaginal delivery is safe; all must have section.",
      B: "Less than 50 copies/mL",
      C: "Less than 400 copies/mL",
      D: "Less than 1,000 copies/mL",
      E: "Less than 10,000 copies/mL"
    },
    answer: "B",
    rationale: "Guidelines recommend a planned vaginal delivery for pregnant women on combination antiretroviral therapy (ART) with an undetectable viral load (<50 copies/mL) at 36 weeks. Caesarean delivery is indicated if the viral load exceeds 400 copies/mL."
  },
  {
    id: 21,
    chapterId: 2,
    chapterName: "Antenatal Care",
    question: "Which pregnant patient profile fits the criteria for universal screening for Gestational Diabetes Mellitus (GDM) using an Oral Glucose Tolerance Test (OGTT) at 24-28 weeks?",
    options: {
      A: "A 25-year-old Caucasian woman with a BMI of 23 kg/m²",
      B: "A 32-year-old woman of Black Caribbean origin with a BMI of 26 kg/m²",
      C: "A 29-year-old woman whose grandmother has Type 2 diabetes",
      D: "A 22-year-old primigravida carrying a singleton fetus",
      E: "A 27-year-old woman with a previous baby weighing 3.8 kg"
    },
    answer: "B",
    rationale: "Risk factors highlighting the need for an OGTT at 24-28 weeks include: BMI >30, previous macrosomic baby >=4.5 kg, previous GDM, direct relative with diabetes, or belonging to an ethnic group with a high diabetes prevalence (South Asian, Black Caribbean, Middle Eastern)."
  },
  {
    id: 22,
    chapterId: 2,
    chapterName: "Antenatal Care",
    question: "During the first trimester, a pregnant patient asks about the safety of exercise. Which of the following is correct advice according to RCOG guidelines?",
    options: {
      A: "Exercise should be completely avoided in the first trimester to prevent miscarriage.",
      B: "Pregnant women should aim to reach peak physical fitness during pregnancy.",
      C: "Aerobic and strength conditioning exercises are safe and beneficial.",
      D: "Contact sports are safe as long as the abdomen is not directly hit.",
      E: "Pelvic floor exercises should only begin after the baby is born."
    },
    answer: "C",
    rationale: "Both aerobic and muscular strengthening exercises are safe and highly beneficial. Goal of exercise in pregnancy is maintaining a healthy fitness level rather than reaching novel physical extremes. Contact sports carry a risk of direct abdominal impact and should be avoided."
  },
  {
    id: 23,
    chapterId: 2,
    chapterName: "Antenatal Care",
    question: "What is the most appropriate management for pregnant women regarding Hepatitis C (HCV) screening in the UK?",
    options: {
      A: "Universal screening is offered to all pregnant women at booking.",
      B: "Screening is only offered to those with risk factors, such as previous intravenous drug use.",
      C: "All HCV positive mothers must deliver via elective caesarean section.",
      D: "Ribavirin should be prescribed immediately to HCV positive pregnant women.",
      E: "Breastfeeding is absolutely contraindicated in all women with HCV."
    },
    answer: "B",
    rationale: "Hepatitis C is not universally screened in the UK. Instead, risk-based booking screens are offered to high-risk cohorts (e.g., history of IV drug abuse, multiple partners, tattoos in unregulated venues). Ribavirin is highly teratogenic. HCV is not an absolute contraindication to breastfeeding unless nipples are bleeding."
  },
  {
    id: 24,
    chapterId: 2,
    chapterName: "Antenatal Care",
    question: "A 24-year-old patient with a history of severe spontaneous preterm birth at 26 weeks in her last pregnancy is currently 16 weeks pregnant. What intervention is recommended by NICE to monitor her risk in this pregnancy?",
    options: {
      A: "Serial Symphysis-Fundal Height (SFH) measurements starting now",
      B: "Serial transvaginal ultrasound measurements of cervical length",
      C: "Routine amniocentesis at 18 weeks",
      D: "Weekly fetal fibronectin (fFN) swabs starting at 16 weeks",
      E: "Immediate admission for bed rest until 36 weeks"
    },
    answer: "B",
    rationale: "For women with a history of spontaneous preterm birth, serial cervical length transvaginal scans between 16 and 24 weeks is standard for screening. If the cervix is short (<25 mm), a cervical cerclage or vaginal progesterone is indicated."
  },
  {
    id: 25,
    chapterId: 2,
    chapterName: "Antenatal Care",
    question: "A pregnant woman is found to be a carrier of the sickle cell trait (HbAS). The father of the baby is tested and found to have normal haemoglobin (HbAA). What is the risk that their baby will have sickle cell disease (HbSS)?",
    options: {
      A: "0%",
      B: "25%",
      C: "50%",
      D: "75%",
      E: "100%"
    },
    answer: "A",
    rationale: "Sickle cell anemia is autosomal recessive. Since the father has normal hemoglobin (HbAA), he cannot transmit an abnormal HbS allele. The baby has a 50% chance of being a trait carrier like the mother, but a 0% risk of having the active double-mutant disease (HbSS)."
  },

  // --- CHAPTER 3 ---
  {
    id: 26,
    chapterId: 3,
    chapterName: "Normal Fetal Development and Growth",
    question: "The 'Developmental Origins of Health and Disease' (DOHaD) hypothesis suggests that fetal growth restriction (FGR) increases the susceptibility to which of the following conditions in adult life?",
    options: {
      A: "Asthma and atopic dermatitis",
      B: "Coronary heart disease, stroke, diabetes, and hypertension",
      C: "Multiple sclerosis and rheumatoid arthritis",
      D: "Chronic kidney disease and recurrent pyelonephritis",
      E: "Schizophrenia and bipolar disorder"
    },
    answer: "B",
    rationale: "The DOHaD hypothesis (the Barker hypothesis) states that fetal adaptation to intrauterine nutritional deficiency triggers permanent structural and physiological alterations. In later life, these adaptations increase risks of type 2 diabetes, coronary heart disease, stroke, and hypertension."
  },
  {
    id: 27,
    chapterId: 3,
    chapterName: "Normal Fetal Development and Growth",
    question: "Customized fetal growth centile charts are considered more accurate than population-based charts because they account for physiological variables. Which of the following sets of variables is used to generate a customized growth chart?",
    options: {
      A: "Maternal age, maternal blood pressure, and fetal sex",
      B: "Maternal height, weight, parity, ethnicity, and fetal sex",
      C: "Maternal BMI, diet, smoking status, and fetal sex",
      D: "Maternal weight, paternal height, parity, and placental weight",
      E: "Maternal age, smoking status, ethnicity, and parity"
    },
    answer: "B",
    rationale: "Customized growth charts adjust the normal birthweight expectation for individual maternal characteristics: height, booking weight, parity, ethnic origin, and the baby's sex, to calculate the physiological growth potential."
  },
  {
    id: 28,
    chapterId: 3,
    chapterName: "Normal Fetal Development and Growth",
    question: "In the fetal circulation, which physiological shunt allows well-oxygenated blood from the umbilical vein to bypass the fetal liver and enter the inferior vena cava directly?",
    options: {
      A: "Foramen ovale",
      B: "Ductus arteriosus",
      C: "Ductus venosus",
      D: "Urachus",
      E: "Ligamentum teres"
    },
    answer: "C",
    rationale: "The ductus venosus shunts highly-oxygenated blood arriving via the umbilical vein directly into the inferior vena cava, largely bypassing liver perfusion to preserve high oxygen availability for the fetal brain."
  },
  {
    id: 29,
    chapterId: 3,
    chapterName: "Normal Fetal Development and Growth",
    question: "A pregnant woman at 32 weeks' gestation is prescribed indomethacin (a non-steroidal anti-inflammatory drug) for preterm labour tocolysis. Which of the following fetal complications is a direct risk of this medication?",
    options: {
      A: "Premature closure of the foramen ovale",
      B: "Premature closure of the ductus arteriosus",
      C: "Reversal of flow in the ductus venosus",
      D: "Fetal intraventricular haemorrhage",
      E: "Necrotizing enterocolitis in utero"
    },
    answer: "B",
    rationale: "Endogenous prostaglandins keep the fetal ductus arteriosus patent. Indomethacin and other NSAIDs inhibit prostaglandin synthesis, running the risk of premature ductus arteriosus closure, leading to fetal heart failure or neonatal persistent pulmonary hypertension (PPHN)."
  },
  {
    id: 30,
    chapterId: 3,
    chapterName: "Normal Fetal Development and Growth",
    question: "During embryogenesis, the midgut is extruded into the umbilical cord as a physiological hernia. By what gestational age should the gut normally undergo rotation and re-enter the abdominal cavity?",
    options: {
      A: "8 weeks",
      B: "10 weeks",
      C: "12 weeks",
      D: "16 weeks",
      E: "20 weeks"
    },
    answer: "C",
    rationale: "The midgut herniates into the umbilical cord at ~6 weeks' gestation. By 10-12 weeks' gestation, the intestines rotate 270 degrees counterclockwise and return entirely into the expanding embryonic abdominal cavity."
  },
  {
    id: 31,
    chapterId: 3,
    chapterName: "Normal Fetal Development and Growth",
    question: "A neonate presents with severe respiratory distress immediately after birth. The mother had severe oligohydramnios from 18 weeks' gestation due to bilateral renal agenesis (Potter syndrome). The neonate's respiratory distress is most likely caused by:",
    options: {
      A: "Surfactant deficiency due to prematurity",
      B: "Meconium aspiration syndrome",
      C: "Pulmonary hypoplasia",
      D: "Congenital diaphragmatic hernia",
      E: "Transient tachypnoea of the newborn"
    },
    answer: "C",
    rationale: "Normal fetal lung development relies on fetal respiratory cycles drawing warm amniotic fluid into the airways. Chronic severe early oligohydramnios prevents proper expandability and lung division, culminating in fatal pulmonary hypoplasia."
  },
  {
    id: 32,
    chapterId: 3,
    chapterName: "Normal Fetal Development and Growth",
    question: "An anomaly scan at 20 weeks reveals the 'double bubble' sign in the fetal abdomen and polyhydramnios. What is the most likely diagnosis?",
    options: {
      A: "Oesophageal atresia",
      B: "Duodenal atresia",
      C: "Gastroschisis",
      D: "Exomphalos",
      E: "Posterior urethral valves"
    },
    answer: "B",
    rationale: "The 'double bubble' sign on ultrasound represents a dilated, fluid-filled stomach and duodenum. This is structural duodenal atresia. Polyhydramnios develops because the fetal upper-GI blockage prevents normal resorption of swallowed amniotic fluid."
  },
  {
    id: 33,
    chapterId: 3,
    chapterName: "Normal Fetal Development and Growth",
    question: "A newborn male infant is diagnosed with posterior urethral valves. What classic sign is typically seen on an antenatal ultrasound for this condition?",
    options: {
      A: "The 'lemon' sign",
      B: "The 'banana' sign",
      C: "The 'double bubble' sign",
      D: "The 'keyhole' sign",
      E: "The 'lambda' sign"
    },
    answer: "D",
    rationale: "Posterior urethral valves (PUV) inhibit bladder emptying in male fetuses. On ultrasound, the dilated bladder neck and swollen posterior urethra generate a distinct 'keyhole' profile under the urinary bladder."
  },
  {
    id: 34,
    chapterId: 3,
    chapterName: "Normal Fetal Development and Growth",
    question: "Fetal haemoglobin (HbF) differs from adult haemoglobin (HbA) to allow optimal transfer of oxygen across the placenta. What is the structural composition of HbF?",
    options: {
      A: "Two alpha chains and two beta chains",
      B: "Two alpha chains and two delta chains",
      C: "Two alpha chains and two gamma chains",
      D: "Two beta chains and two gamma chains",
      E: "Four gamma chains"
    },
    answer: "C",
    rationale: "Fetal hemoglobin (HbF) contains two alpha and two gamma chains. Gamma chains decrease interaction with maternal 2,3-BPG, maintaining a significantly higher oxygen affinity than HbA. This facilitates oxygen extraction from maternal blood across the placenta."
  },
  {
    id: 35,
    chapterId: 3,
    chapterName: "Normal Fetal Development and Growth",
    question: "A 37-year-old woman at 18 weeks' gestation has an ultrasound demonstrating a smooth protrusion on the anterior abdominal wall of the fetus covered by a membrane, with the umbilical cord inserting into its apex. Which of the following is true regarding this condition?",
    options: {
      A: "It is called gastroschisis and is rarely associated with chromosomal anomalies.",
      B: "It is called exomphalos and carries a high risk of chromosomal anomalies.",
      C: "It is an isolated finding with an excellent prognosis and no need for karyotyping.",
      D: "The anomaly is caused by a ruptured vitelline duct.",
      E: "The bowel is free-floating in the amniotic fluid."
    },
    answer: "B",
    rationale: "An exomphalos (omphalocele) represents a herniation of gut contents trapped in a protective sac formed by amniotic membrane and peritoneum. The umbilical cord inserts directly at the center apex. There is a high correlation with major chromosomal anomalies (e.g. trisomies)."
  },

  // --- CHAPTER 4 ---
  {
    id: 36,
    chapterId: 4,
    chapterName: "Assessment of Fetal Well-being",
    question: "According to the UK National Screening Committee, the combined test for Down syndrome screening should be performed when the fetal Crown-Rump Length (CRL) is between:",
    options: {
      A: "35.0 mm and 70.0 mm",
      B: "45.0 mm and 84.0 mm",
      C: "55.0 mm and 95.0 mm",
      D: "65.0 mm and 100.0 mm",
      E: "84.0 mm and 110.0 mm"
    },
    answer: "B",
    rationale: "The National Screening Committee establishes guidelines for the first-trimester combined screening (nuchal translucency + maternal blood markers) requiring a fetal CRL strictly between 45.0 mm and 84.0 mm (~11 weeks + 2 days to 14 weeks + 1 day)."
  },
  {
    id: 37,
    chapterId: 4,
    chapterName: "Assessment of Fetal Well-being",
    question: "At a 9-week ultrasound scan for a twin pregnancy, a thick inter-twin separating membrane is seen with a tongue of placental tissue extending into the base of the membrane. This finding is known as the:",
    options: {
      A: "T-sign, indicating a monochorionic pregnancy",
      B: "Lambda (twin peak) sign, indicating a dichorionic pregnancy",
      C: "Keyhole sign, indicating twin-to-twin transfusion syndrome",
      D: "Lemon sign, indicating conjoined twins",
      E: "Double bubble sign, indicating a shared gastrointestinal tract"
    },
    answer: "B",
    rationale: "The 'lambda' (or twin-peak) sign represents a wedge of chorion/placenta invading the dividing membrane. It is pathognomonic for dichorionic twins. A 'T-sign' shows a thin dividing line with no tissue invasion, diagnostic for monochorionic twins."
  },
  {
    id: 38,
    chapterId: 4,
    chapterName: "Assessment of Fetal Well-being",
    question: "During a routine third-trimester ultrasound, a fetus is found to have a normal head circumference (HC) but an abdominal circumference (AC) below the 5th centile. What does this specific pattern indicate?",
    options: {
      A: "Symmetrical fetal growth restriction due to a chromosomal anomaly",
      B: "Macrosomia secondary to gestational diabetes",
      C: "Asymmetrical fetal growth restriction with brain-sparing",
      D: "Constitutionally small fetus",
      E: "Normal fetal growth trajectory"
    },
    answer: "C",
    rationale: "In uteroplacental insufficiency, the fetus redistributes its cardiac output toward vital tissues like the heart and brain at the expense of metabolic tissues like the liver and kidneys. This 'brain-sparing' causes asymmetrical growth restriction (normal HC, small abdominal size)."
  },
  {
    id: 39,
    chapterId: 4,
    chapterName: "Assessment of Fetal Well-being",
    question: "In the assessment of fetal well-being using cardiotocography (CTG), which of the following describes normal baseline variability?",
    options: {
      A: "Less than 5 beats per minute (bpm)",
      B: "Between 5 and 25 beats per minute (bpm)",
      C: "Between 25 and 40 beats per minute (bpm)",
      D: "Greater than 40 beats per minute (bpm)",
      E: "Zero variation (a completely flat line)"
    },
    answer: "B",
    rationale: "Normal CTG baseline variability is between 5 and 25 bpm, denoting a responsive sympathetic/parasympathetic balance within the fetal cardiovascular system."
  },
  {
    id: 40,
    chapterId: 4,
    chapterName: "Assessment of Fetal Well-being",
    question: "A patient at 32 weeks' gestation with severe pre-eclampsia is undergoing umbilical artery Doppler assessment. The waveform shows 'reversed end-diastolic flow'. What is the clinical significance of this finding?",
    options: {
      A: "It is a normal physiological finding in the third trimester.",
      B: "It indicates fetal anaemia and risk of hydrops.",
      C: "It implies low downstream placental resistance.",
      D: "It indicates high placental resistance and is highly correlated with fetal hypoxia and impending intrauterine death.",
      E: "It confirms an impending placental abruption."
    },
    answer: "D",
    rationale: "Under normal placental function, umbilical blood flows continuously forward into passive placental tissue during diastole. Blocked, micro-thrombo-occluded vessels increase resistance. High resistance leads to absent and eventually reversed end-diastolic flow, warning of impending severe hypoxia and mortality."
  },
  {
    id: 41,
    chapterId: 4,
    chapterName: "Assessment of Fetal Well-being",
    question: "Which fetal blood vessel is interrogated using Doppler ultrasound specifically to assess for fetal anaemia (e.g., in rhesus isoimmunization)?",
    options: {
      A: "Umbilical artery",
      B: "Ductus venosus",
      C: "Middle cerebral artery (MCA)",
      D: "Fetal descending aorta",
      E: "Uterine artery"
    },
    answer: "C",
    rationale: "In fetal anemia, blood viscosity drops and cardiac output increases. Doppler measurement of the Peak Systolic Velocity (PSV) of the middle cerebral artery (MCA) is highly sensitive at predicting anemia, avoiding unnecessary invasive samplings."
  },
  {
    id: 42,
    chapterId: 4,
    chapterName: "Assessment of Fetal Well-being",
    question: "A 35-year-old pregnant woman is considering invasive prenatal diagnosis for Down syndrome. Which of the following statements accurately compares Chorionic Villus Sampling (CVS) and Amniocentesis?",
    options: {
      A: "CVS carries a significantly higher risk of miscarriage (5%) compared to amniocentesis (0.5%).",
      B: "Amniocentesis can be performed earlier in pregnancy (at 11 weeks) than CVS.",
      C: "CVS allows for earlier diagnosis (from 11 weeks) compared to amniocentesis (from 15 weeks).",
      D: "CVS tests the amniotic fluid, while amniocentesis tests the placental tissue.",
      E: "Amniocentesis carries a high risk of confined placental mosaicism."
    },
    answer: "C",
    rationale: "CVS biopsies placental villi and can be performed earlier, from 11 weeks onwards. Amniocentesis samples amniotic fluid containing fetal cells and is done after 15 weeks' gestation. Both have a similar average procedure miscarriage risk (~0.5%)."
  },
  {
    id: 43,
    chapterId: 4,
    chapterName: "Assessment of Fetal Well-being",
    question: "Cell-free fetal DNA (cffDNA) testing is now used in Non-Invasive Prenatal Testing (NIPT). Which of the following is an established clinical application of cffDNA from maternal blood?",
    options: {
      A: "Determining fetal rhesus D (RhD) genotype in a RhD-negative mother to avoid unnecessary anti-D administration.",
      B: "Accurately measuring fetal haemoglobin levels to diagnose fetal anaemia.",
      C: "Diagnosing fetal neural tube defects.",
      D: "Replacing the 20-week anatomy ultrasound scan.",
      E: "Measuring fetal blood glucose levels."
    },
    answer: "A",
    rationale: "cffDNA can reliably evaluate the fetal RhD genotype. If the fetus is found to be RhD-negative, there is zero risk of rhesus immunization, avoiding unnecessary anti-D immunoglobulin therapy for the mother."
  },
  {
    id: 44,
    chapterId: 4,
    chapterName: "Assessment of Fetal Well-being",
    question: "A pregnant woman undergoes uterine artery Doppler evaluation at 22 weeks. The presence of a bilateral diastolic 'notch' and high pulsatility index suggests an increased risk of developing which condition?",
    options: {
      A: "Gestational diabetes",
      B: "Pre-eclampsia and Fetal Growth Restriction (FGR)",
      C: "Placenta praevia",
      D: "Vasa praevia",
      E: "Rhesus isoimmunization"
    },
    answer: "B",
    rationale: "A persisting diastolic notch in the uterine artery Doppler during the second trimester signifies high-resistance flow. This is a pathognomonic sign of impaired uterine spiral artery remodeling, indicating a high risk of pre-eclampsia and fetal growth restriction."
  },
  {
    id: 45,
    chapterId: 4,
    chapterName: "Assessment of Fetal Well-being",
    question: "In the interpretation of fetal Cardiotocography (CTG), what is the definition of a fetal heart rate 'acceleration'?",
    options: {
      A: "A transient increase of at least 5 bpm lasting for 5 seconds.",
      B: "A transient increase of at least 15 bpm lasting for at least 15 seconds.",
      C: "A sustained increase to 170 bpm lasting for 10 minutes.",
      D: "A transient decrease of 15 bpm lasting for 15 seconds.",
      E: "An increase in baseline variability to 30 bpm."
    },
    answer: "B",
    rationale: "An acceleration is defined as an abrupt increase in the FHR baseline of >=15 bpm lasting for >=15 seconds. This represents a normal somatic response to fetal nervous activity and indicates high fetal well-being."
  },
  {
    id: 46,
    chapterId: 4,
    chapterName: "Assessment of Fetal Well-being",
    question: "A fetus is diagnosed with severe intrauterine growth restriction (FGR). The clinician performs a Doppler study of the Ductus Venosus (DV). Which finding in the DV waveform would signify imminent fetal death and mandate immediate delivery?",
    options: {
      A: "Increased forward flow during systole",
      B: "Decreased peak systolic velocity",
      C: "Reversed a-wave (atrial contraction)",
      D: "Loss of the diastolic notch",
      E: "Increased forward flow during the a-wave"
    },
    answer: "C",
    rationale: "A reversed 'a-wave' during atrial contraction in the ductus venosus demonstrates high right-atrial pressure, indicating fetal myocardial acidosis, ventricular strain, and cardiac fatigue. It is a critical distress signal indicating immediate delivery to rescue the viable fetus."
  },
  {
    id: 47,
    chapterId: 4,
    chapterName: "Assessment of Fetal Well-being",
    question: "A 28-year-old woman is pregnant with dichorionic twins. Which ultrasound parameter is most reliable for determining chorionicity when performed at 10 weeks gestation?",
    options: {
      A: "Difference in fetal heart rates",
      B: "The 'lambda' or 'twin peak' sign at the membrane insertion",
      C: "The amount of amniotic fluid in each sac",
      D: "The presence of a single yolk sac",
      E: "Gender discordance on early ultrasound"
    },
    answer: "B",
    rationale: "Evaluating chorionicity at 10-12 weeks' gestation via the 'lambda' (twin-peak) sign is highly reliable. It displays the tongue of placenta separating the twin chorionic cavities. Its absence confirms monochorionicity."
  },
  {
    id: 48,
    chapterId: 4,
    chapterName: "Assessment of Fetal Well-being",
    question: "Which of the following non-invasive imaging techniques is most superior at detecting deep grey matter injury in a neonate suspected of having Hypoxic Ischaemic Encephalopathy (HIE)?",
    options: {
      A: "Cranial Ultrasound",
      B: "Transvaginal Ultrasound",
      C: "Computed Tomography (CT) Scan",
      D: "Magnetic Resonance Imaging (MRI)",
      E: "Positron Emission Tomography (PET)"
    },
    answer: "D",
    rationale: "Brain MRI is the most sensitive and specific diagnostic standard for assessing deep grey matter pathology (specifically the basal ganglia and thalamus) in newborns under therapeutic cooling for HIE."
  },
  {
    id: 49,
    chapterId: 4,
    chapterName: "Assessment of Fetal Well-being",
    question: "A 32-year-old pregnant woman has a booking ultrasound that reveals an anembryonic pregnancy (blighted ovum). What is the classic sonographic finding for this condition?",
    options: {
      A: "A gestational sac containing a fetus with no heartbeat.",
      B: "An empty gestational sac with no fetal pole or yolk sac visible.",
      C: "A fetal pole measuring 5 mm with a regular heartbeat.",
      D: "Fluid in the pouch of Douglas with an empty uterus.",
      E: "A 'snowstorm' appearance within the uterine cavity."
    },
    answer: "B",
    rationale: "An anembryonic pregnancy (or blighted ovum) shows a normal-appearing gestational sac, but with an absolute absence of a yolk sac or developing fetal pole, of a diameter indicating development should be apparent."
  },
  {
    id: 50,
    chapterId: 4,
    chapterName: "Assessment of Fetal Well-being",
    question: "Which of the following parameters is NOT included in the biophysical profile (BPP) scoring system used to assess fetal well-being?",
    options: {
      A: "Fetal breathing movements",
      B: "Fetal gross body movements",
      C: "Fetal tone",
      D: "Amniotic fluid volume",
      E: "Middle cerebral artery (MCA) peak systolic velocity"
    },
    answer: "E",
    rationale: "The five classical pillars of BPP are: Fetal breathing, fetal movements, fetal tone, amniotic fluid volume (deep lock), and cardiotocography behavior. MCA PSV is an independent Doppler metrics used exclusively for checking clinical anemia."
  },

  // --- CHAPTER 5 ---
  {
    id: 51,
    chapterId: 5,
    chapterName: "Prenatal Diagnosis",
    question: "A 36-year-old pregnant woman is considering invasive prenatal testing. She asks about the risk of procedure-related miscarriage for Chorionic Villus Sampling (CVS) compared to amniocentesis. According to the text, when performed by an appropriately trained operator, what is the risk of miscarriage for these procedures?",
    options: {
      A: "CVS carries a 1-2% risk, while amniocentesis carries a <0.5% risk.",
      B: "Both CVS and amniocentesis carry a risk of <0.5%.",
      C: "Both procedures carry a 2-5% risk.",
      D: "CVS carries a <0.5% risk, while amniocentesis carries a 1-2% risk.",
      E: "CVS carries a 5% risk, while amniocentesis carries a 2% risk."
    },
    answer: "B",
    rationale: "Large, recent registry trials prove that under highly-trained operators, both CVS and amniocentesis have an identical, low procedure-related risk of miscarriage (<0.5%)."
  },
  {
    id: 52,
    chapterId: 5,
    chapterName: "Prenatal Diagnosis",
    question: "A phenomenon known as 'confined placental mosaicism' occurs when two different cell types are present in a sample, but the abnormal cell line may only be present in the placenta and not in the fetus. This phenomenon is a specific risk associated with which prenatal diagnostic test?",
    options: {
      A: "Non-Invasive Prenatal Testing (NIPT)",
      B: "Amniocentesis",
      C: "Chorionic Villus Sampling (CVS)",
      D: "Cordocentesis",
      E: "Maternal serum quadruple test"
    },
    answer: "C",
    rationale: "Confined placental mosaicism is a risk in ~1-2% of CVS procedures as it samples direct chorionic placental tissue. If mosaicism is identified, an amniocentesis is advised to rule out chromosomal issues in the actual fetus."
  },
  {
    id: 53,
    chapterId: 5,
    chapterName: "Prenatal Diagnosis",
    question: "A routine anomaly scan at 20 weeks reveals an anterior abdominal wall defect in the fetus. The defect is located laterally (to the right of the umbilical cord insertion), the bowel loops are free-floating in the amniotic fluid, and there is no covering membrane. Which of the following is the most accurate statement regarding this condition?",
    options: {
      A: "It is an exomphalos and carries a high incidence of chromosomal abnormalities.",
      B: "It is a gastroschisis and carries a high incidence of chromosomal abnormalities.",
      C: "It is a gastroschisis and there is no increased incidence of chromosomal abnormalities.",
      D: "It is an exomphalos and is usually associated with oligohydramnios.",
      E: "It requires immediate delivery by caesarean section at 34 weeks."
    },
    answer: "C",
    rationale: "The description represents gastroschisis (small, paraumbilical opening, free loop gut). Unlike exomphalos, gastroschisis is not encapsulated by membrane and carries almost no association with standard chromosomal abnormalities. It has excellent postoperative prognosis."
  },
  {
    id: 54,
    chapterId: 5,
    chapterName: "Prenatal Diagnosis",
    question: "During a mid-trimester ultrasound, the sonographer notes an abnormal cranial anatomy in the fetus. The head shape is scalloped anteriorly (the 'lemon' sign) and the cerebellum is curved and elongated (the 'banana' sign). These sonographic markers are classic findings for which of the following conditions?",
    options: {
      A: "Anencephaly",
      B: "Neural tube defect (e.g., spina bifida)",
      C: "Holoprosencephaly",
      D: "Congenital diaphragmatic hernia",
      E: "Cytomegalovirus infection"
    },
    answer: "B",
    rationale: "An open neural tube defect (spina bifida) causes continuous leak of cerebrospinal fluid, causing hindbrain descent. This traction transforms the cerebellum format (the 'banana' sign) and drops skull frontal bones (the 'lemon' sign)."
  },
  {
    id: 55,
    chapterId: 5,
    chapterName: "Prenatal Diagnosis",
    question: "A couple is referred for genetic counselling because the mother's brother has Duchenne muscular dystrophy (DMD). The mother is confirmed to be a carrier. If the fetus is male, what is the chance that he will be affected by DMD?",
    options: {
      A: "0%",
      B: "25%",
      C: "50%",
      D: "75%",
      E: "100%"
    },
    answer: "C",
    rationale: "DMD is an X-linked recessive disorder. Since the mother is a carrier (X'X), there is a 50% chance that her male fetus (inheriting her mutant X' and paternal normal Y) will receive the mutant X'-chromosome, thereby suffering from DMD."
  },
  {
    id: 56,
    chapterId: 5,
    chapterName: "Prenatal Diagnosis",
    question: "A pregnant woman is having non-invasive prenatal diagnosis (NIPD) for an autosomal dominant severe skeletal dysplasia (achondroplasia). The test analyzes cell-free fetal DNA (cffDNA) in her blood. What condition must be met for this test to be accurate?",
    options: {
      A: "The test must be performed in the third trimester.",
      B: "There must be a sufficient 'fetal fraction' of cffDNA in the maternal blood.",
      C: "The mother must undergo a concurrent amniocentesis.",
      D: "The mother must have a BMI over 30 kg/m².",
      E: "The father's blood must be mixed with the sample."
    },
    answer: "B",
    rationale: "NIPD depends heavily upon obtaining a sufficient proportion of placental-derived cell-free DNA (termed the 'fetal fraction', ideally >=4%). Very low fetal fractions (which can occur in maternal obesity) preclude accurate analysis."
  },

  // --- CHAPTER 6 ---
  {
    id: 57,
    chapterId: 6,
    chapterName: "Antenatal Obstetric Complications",
    question: "A pregnant woman at 13 weeks gestation presents with acute, severe urinary retention and lower abdominal pain. Pelvic examination reveals that the cervix is displaced anteriorly and the pouch of Douglas is filled by a large, boggy mass. What is the most likely diagnosis?",
    options: {
      A: "Red degeneration of a uterine fibroid",
      B: "Torsion of an ovarian cyst",
      C: "Incarcerated retroverted uterus",
      D: "Acute pyelonephritis",
      E: "Placental abruption"
    },
    answer: "C",
    rationale: "Between 12 and 14 weeks' gestation, a growing retroverted uterus can get trapped or 'incarcerated' under the sacral promontory. The swelling stretches the bladder neck and causes acute urinary retention. Intermittent catheterization or digital manual repositioning is required."
  },
  {
    id: 58,
    chapterId: 6,
    chapterName: "Antenatal Obstetric Complications",
    question: "A 32-year-old pregnant woman at 33 weeks' gestation complains of severe itching, especially on her palms and soles, which is worse at night. Her serum bile acids are checked and found to be 115 µmol/L. She is diagnosed with obstetric cholestasis. What is the most significant fetal risk associated with a bile acid level this high?",
    options: {
      A: "Congenital heart defects",
      B: "Fetal macrosomia",
      C: "Spontaneous preterm birth and fetal death (stillbirth)",
      D: "Neural tube defects",
      E: "Fetal alcohol syndrome"
    },
    answer: "C",
    rationale: "The primary clinical danger of obstetric cholestasis is intrauterine death and spontaneous preterm delivery. The threshold of concern escalates significantly when serum bile acids exceed 100 µmol/L, requiring targeted induction at 35-36 weeks."
  },
  {
    id: 59,
    chapterId: 6,
    chapterName: "Antenatal Obstetric Complications",
    question: "A 28-year-old primigravida presents at 35 weeks with sudden onset of painful, continuous vaginal bleeding. Her abdomen is tense, rigid, and exquisitely tender to palpation. Fetal movements have reduced. What is the most likely diagnosis?",
    options: {
      A: "Placenta praevia",
      B: "Vasa praevia",
      C: "Placental abruption",
      D: "Cervical ectropion",
      E: "Uterine rupture"
    },
    answer: "C",
    rationale: "The combination of severe abdominal pain, high uterine tone ('woody' rigid uterus), and dark vaginal bleeding is the classic triad of a placental abruption. This contrasts with placenta praevia, which presents as painless, bright-red bleeding."
  },
  {
    id: 60,
    chapterId: 6,
    chapterName: "Antenatal Obstetric Complications",
    question: "A pregnant woman who is RhD-negative experiences a heavy post-coital bleed at 17 weeks gestation. According to UK guidelines, how should anti-D prophylaxis be managed for this sensitizing event?",
    options: {
      A: "Give 250 IU of anti-D within 72 hours; a Kleihauer test is not required.",
      B: "Give 500 IU of anti-D within 72 hours; a Kleihauer test is required.",
      C: "Give 250 IU of anti-D immediately; perform a Kleihauer test.",
      D: "Wait until the routine 28-week prophylactic dose.",
      E: "No anti-D is required as bleeding is likely from a cervical ectropion."
    },
    answer: "A",
    rationale: "Before 20 weeks, 250 IU of anti-D Ig is sufficient for any potentially sensitizing event. No Kleihauer / fetal-maternal hemorrhage quantification is necessary prior to 20 weeks' gestation."
  },
  {
    id: 61,
    chapterId: 6,
    chapterName: "Antenatal Obstetric Complications",
    question: "Which of the following describes the most common type of breech presentation at term?",
    options: {
      A: "Flexed (complete) breech: hips flexed, knees flexed.",
      B: "Footling breech: one or both feet presenting below the buttocks.",
      C: "Extended (frank) breech: hips flexed, knees extended.",
      D: "Kneeling breech: presenting with the knees.",
      E: "Transverse lie."
    },
    answer: "C",
    rationale: "Extended or 'frank' breech is the most common variety (~70% of breech presentations at term), where the thighs are flexed against the torso while the knees are straight, pointing the feet up near the head."
  },
  {
    id: 62,
    chapterId: 6,
    chapterName: "Antenatal Obstetric Complications",
    question: "A multiparous woman is undergoing a vaginal breech delivery. The buttocks and legs have delivered spontaneously. As the body delivers, the obstetrician sees the scapula and spine rotate anteriorly. Which specific obstetric manoeuvre may be used to assist in the delivery of the fetal arms and shoulders if they do not deliver spontaneously?",
    options: {
      A: "Pinard manoeuvre",
      B: "Lovset manoeuvre",
      C: "Mauriceau–Smellie–Veit manoeuvre",
      D: "McRoberts manoeuvre",
      E: "Woods' screw manoeuvre"
    },
    answer: "B",
    rationale: "The Lovset manoeuvre is used to deliver extended arms during breech birth. It involves grasping the pelvic girdle and rotating the baby 180 degrees back and forth while applying gentle downward traction to sweep the arms over the chest."
  },
  {
    id: 63,
    chapterId: 6,
    chapterName: "Antenatal Obstetric Complications",
    question: "A pregnant woman is diagnosed with a Deep Vein Thrombosis (DVT) at 24 weeks gestation. What is the pharmacological treatment of choice for acute venous thromboembolism in pregnancy?",
    options: {
      A: "Intravenous unfractionated heparin",
      B: "Oral warfarin",
      C: "Low-molecular-weight heparin (LMWH)",
      D: "Oral rivaroxaban",
      E: "Low-dose aspirin"
    },
    answer: "C",
    rationale: "Low-Molecular-Weight Heparin (LMWH) is the first-line choice for treating VTE in pregnancy. It is highly effective and cannot cross the placenta. Warfarin is teratogenic, and direct oral anticoagulants (DOACs like rivaroxaban) are contraindicated."
  },
  {
    id: 64,
    chapterId: 6,
    chapterName: "Antenatal Obstetric Complications",
    question: "A 37-week pregnant woman presents to the clinic. Examination confirms the fetus is in a transverse lie. What is the most appropriate immediate management plan?",
    options: {
      A: "Send the patient home and await spontaneous labour.",
      B: "Attempt External Cephalic Version (ECV) in the clinic and discharge.",
      C: "Admit to the antenatal ward due to the high risk of cord prolapse upon rupture of membranes.",
      D: "Immediate induction of labour with oxytocin.",
      E: "Immediate forceps delivery."
    },
    answer: "C",
    rationale: "A transverse lie at term is highly unstable. In the event of spontaneous membrane rupture, there is a extremely high risk of cord prolapse. Therefore, patients should be admitted to the antenatal ward. If the lie remains transverse, a Caesarean delivery is scheduled."
  },
  {
    id: 65,
    chapterId: 6,
    chapterName: "Antenatal Obstetric Complications",
    question: "Which of the following is considered an absolute contraindication to performing an External Cephalic Version (ECV) for a breech presentation?",
    options: {
      A: "Nulliparity",
      B: "Gestational age of 38 weeks",
      C: "Placenta praevia",
      D: "Maternal obesity",
      E: "Previous uncomplicated vaginal delivery"
    },
    answer: "C",
    rationale: "Absolute contraindications to ECV include placenta praevia, active vaginal bleeding, severe oligohydramnios, multiple gestation, ruptured membranes, or fetal growth restriction with abnormal Dopplers. Nulliparity and obesity are complicating factors, but not absolute contraindications."
  },
  {
    id: 66,
    chapterId: 6,
    chapterName: "Antenatal Obstetric Complications",
    question: "Post-term pregnancy is defined as a pregnancy that has extended to or beyond which gestational age?",
    options: {
      A: "40+0 weeks",
      B: "41+0 weeks",
      C: "42+0 weeks",
      D: "43+0 weeks",
      E: "39+0 weeks"
    },
    answer: "C",
    rationale: "A post-term/prolonged pregnancy is defined as reaching or surpassing 42 weeks (>=42+0). Because perinatal mortality rates increase beyond 41 weeks, induction of labor is universally offered to patients starting at 41 weeks."
  },

  // --- CHAPTER 7 ---
  {
    id: 67,
    chapterId: 7,
    chapterName: "Multiple Pregnancy",
    question: "In a monochorionic twin pregnancy, unequal placental sharing and unbalanced vascular anastomoses can lead to Twin-to-Twin Transfusion Syndrome (TTTS). According to the Quintero staging system, what defines Stage III TTTS?",
    options: {
      A: "Oligohydramnios/polyhydramnios sequence, but the donor bladder is still visible.",
      B: "Oligohydramnios/polyhydramnios sequence, and the donor bladder is not visualized.",
      C: "Oligohydramnios/polyhydramnios sequence with abnormal Doppler assessments (e.g., absent/reversed end-diastolic flow in the umbilical artery or reversed ductus venosus a-wave).",
      D: "One or both fetuses show signs of hydrops.",
      E: "One or both fetuses have died."
    },
    answer: "C",
    rationale: "The Quintero classification: Stage I is abnormal amniotic fluid balance (poly/oligo); Stage II is failure to visualize the donor's bladder on scan; Stage III is characterized by abnormal Doppler flows (e.g., absent/reversed end-diastolic flow); Stage IV shows non-immune hydrops; Stage V is death of one or both twins."
  },
  {
    id: 68,
    chapterId: 7,
    chapterName: "Multiple Pregnancy",
    question: "A unique, severe complication of monochorionic twinning is Twin Reversed Arterial Perfusion (TRAP) sequence. Which of the following statements correctly describes this pathophysiology?",
    options: {
      A: "Chronic slow transfusion through very small arteriovenous anastomoses.",
      B: "An acardiac twin is perfused in a retrograde manner by a normal 'pump' twin through an arterioarterial (AA) anastomosis.",
      C: "The donor twin becomes anaemic and develops oligohydramnios.",
      D: "The recipient twin develops severe polycythemia and hydrops without heart failure.",
      E: "It is caused by the entanglement of the umbilical cords."
    },
    answer: "B",
    rationale: "In TRAP sequence, one twin (acardiac) fails to develop a heart. It receives retrograde blood flow from the normal 'pump' twin via a large arterio-arterial anastomosis. This places of massive cardiac workload on the healthy pump twin, risking heart failure."
  },
  {
    id: 69,
    chapterId: 7,
    chapterName: "Multiple Pregnancy",
    question: "Monochorionic monoamniotic (MCMA) twins share both placenta and amniotic sac. What is the most severe risk in MCMA twins, necessitating early delivery and close surveillance?",
    options: {
      A: "Structural cardiac defects in 100% of cases",
      B: "Umbilical cord entanglement",
      C: "Severe fetal macrosomia",
      D: "Placenta accreta",
      E: "Isolated cleft lip and palate"
    },
    answer: "B",
    rationale: "Because MCMA twins are in the same amniotic sac, cord entanglement is an almost universal and unpredictable risk that can lead to sudden fetal death. Planned delivery by Caesarean section is recommended much earlier, typically at 32-33 weeks."
  },
  {
    id: 70,
    chapterId: 7,
    chapterName: "Multiple Pregnancy",
    question: "What is the primary first-line therapeutic intervention for Twin-to-Twin Transfusion Syndrome (TTTS) presenting at 16 to 26 weeks' gestation (Stage >= II)?",
    options: {
      A: "Serial amnioreduction",
      B: "Selective fetocide using potassium chloride",
      C: "Fetoscopic laser ablation of placental anastomoses",
      D: "Immediate Caesarean section",
      E: "Oral maternal digoxin therapy"
    },
    answer: "C",
    rationale: "Fetoscopic laser coagulation of placental vascular connections is the gold-standard treatment for TTTS stage II-IV before 26 weeks. It is superior to serial amnioreduction, yielding higher survival and lower rates of neurological handicap."
  },
  {
    id: 71,
    chapterId: 7,
    chapterName: "Multiple Pregnancy",
    question: "Monochorionic diamniotic (MCDA) twin pregnancies are at elevated risk for TTTS and FGR. What is the recommended frequency for screening ultrasounds in uncomplicated MCDA pregnancies, according to NICE guidelines?",
    options: {
      A: "Every 4 weeks from 20 weeks",
      B: "Every 2 weeks from 16 weeks until delivery",
      C: "At booking, 20 weeks, and 34 weeks",
      D: "Weekly starting from 12 weeks",
      E: "Monthly starting from 28 weeks"
    },
    answer: "B",
    rationale: "Because monochorionic complications (including TTTS) can develop and escalate rapidly, NICE guidelines specify that MCDA pregnancies require screening ultrasound scans every 2 weeks starting from 16 weeks' gestation."
  },

  // --- CHAPTER 8 ---
  {
    id: 72,
    chapterId: 8,
    chapterName: "Pre-existing Medical Disorders",
    question: "A 26-year-old woman with a history of epilepsy is planning her first pregnancy. Which of the following is the most appropriate management regarding her medication?",
    options: {
      A: "Stop all antiepileptic drugs immediately to avoid teratogenesis.",
      B: "Switch her to sodium valproate, as it is the safest antiepileptic in pregnancy.",
      C: "Advise that she must discontinue epilepsy treatment and manage seizures via meditation.",
      D: "Prescribe high-dose folic acid (5 mg daily) and aim for monotherapy at the lowest effective dose, avoiding sodium valproate if possible.",
      E: "Initiate phenobarbital as first-line treatment."
    },
    answer: "D",
    rationale: "Active seizures pose a severe risk to both mother and fetus. The patient should not stop her drugs, but needs counseling. Monotherapy at the lowest effective dose is targeted. Sodium valproate carries a high risk of birth defects and developmental delays and is avoided. High-dose folic acid (5 mg) is essential before and during the first trimester."
  },
  {
    id: 73,
    chapterId: 8,
    chapterName: "Pre-existing Medical Disorders",
    question: "In pregnant patients with pre-existing Type 1 or Type 2 Diabetes, which of the following represents the recommended fasting blood glucose target?",
    options: {
      A: "Fasting < 5.3 mmol/L",
      B: "Fasting < 7.0 mmol/L",
      C: "Fasting < 3.5 mmol/L",
      D: "Fasting < 6.5 mmol/L",
      E: "Fasting < 8.0 mmol/L"
    },
    answer: "A",
    rationale: "To minimize risks of congenital defects, macrosomia, and stillbirth, NICE guidelines recommend tight blood glucose controls for mothers with pre-existing diabetes: Fasting < 5.3 mmol/L, 1-hour postprandial < 7.8 mmol/L, or 2-hour postprandial < 6.4 mmol/L."
  },
  {
    id: 74,
    chapterId: 8,
    chapterName: "Pre-existing Medical Disorders",
    question: "A pregnant patient with Rheumatic Heart Disease and a mechanical heart valve is at high risk of thromboembolism. Which of the following statements regarding anticoagulation in this patient is CORRECT?",
    options: {
      A: "Warfarin should be continued throughout pregnancy, as it is 100% safe for the fetus.",
      B: "Direct oral anticoagulants (DOACs) are first-line for mechanical valves in pregnancy.",
      C: "Heparin should never be used in cardiac patients.",
      D: "Anticoagulation is unnecessary because pregnancy is a hypo-coagulable state.",
      E: "Warfarin has superior efficacy for protecting the valve but is teratogenic; the choice between LMWH and Warfarin in the first trimester requires complex balancing of maternal and fetal risks."
    },
    answer: "E",
    rationale: "This is a challenging clinical dilemma. Warfarin crosses the placenta and is associated with warfarin embryopathy in the first trimester and fetal hemorrhage later. However, switching to LMWH increases the risk of valve thrombosis. Management requires expert multidisciplinary care, balancing risks using therapeutic LMWH or low-dose warfarin."
  },
  {
    id: 75,
    chapterId: 8,
    chapterName: "Pre-existing Medical Disorders",
    question: "In pregnant patients with moderate-to-severe asthma, which statement is TRUE regarding their maintenance treatment?",
    options: {
      A: "Inhaled corticosteroids and beta-agonists should be stopped immediately.",
      B: "Maintenance therapies should be continued as poor control of asthma is a larger threat to the fetus (causing hypoxia) than the medication.",
      C: "Oral prednisolone is completely safe and should replace all inhalers.",
      D: "Epicutaneous allergy immunotherapy should be initiated immediately.",
      E: "Asthmatic patients should deliver at 34 weeks due to respiratory risk."
    },
    answer: "B",
    rationale: "Uncontrolled asthma puts the fetus at risk of intrauterine hypoxia. The medications used for asthma, including inhaled corticosteroids and long-term beta-agonists, have reassuring safety records. Asthma is managed in pregnancy using the same pathways as non-pregnant patients."
  },
  {
    id: 76,
    chapterId: 8,
    chapterName: "Pre-existing Medical Disorders",
    question: "A 32-year-old pregnant woman with chronic hypertension presents at her booking visit. Which of the following is the first-line oral antihypertensive agent recommended by NICE?",
    options: {
      A: "Lisinopril",
      B: "Labetalol",
      C: "Spironolactone",
      D: "Atenolol",
      E: "Losartan"
    },
    answer: "B",
    rationale: "First-line oral antihypertensive medications in pregnancy are Labetalol, Nifedipine, or Methyldopa. ACE inhibitors (like Lisinopril) and ARBs (like Losartan) are contraindicated because they can cause severe fetal renal anomalies and oligohydramnios."
  },

  // --- CHAPTER 9 ---
  {
    id: 77,
    chapterId: 9,
    chapterName: "Obstetric Medicine",
    question: "Which of the following defines Gestational Hypertension, differentiating it from Pre-eclampsia?",
    options: {
      A: "New-onset hypertension (>140/90 mmHg) presenting before 20 weeks with severe proteinuria.",
      B: "New-onset hypertension (>140/90 mmHg) presenting after 20 weeks with the absence of significant proteinuria or organ dysfunction.",
      C: "New-onset hypertension present at any gestational age with generalized seizures.",
      D: "Elevated BP that resolves within 2 days postpartum.",
      E: "A pre-existing high blood pressure presenting before 12 weeks."
    },
    answer: "B",
    rationale: "Gestational hypertension is defined as new-onset hypertension (systolic BP >=140 mmHg and/or diastolic >=90 mmHg) presenting AFTER 20 weeks' gestation without significant proteinuria or maternal multi-organ dysfunction features."
  },
  {
    id: 78,
    chapterId: 9,
    chapterName: "Obstetric Medicine",
    question: "A 28-year-old nulliparous woman is diagnosed with severe pre-eclampsia at 34 weeks and started on an intravenous Magnesium Sulfate infusion. Which of the following clinical findings is the EARLIEST sign of Magnesium toxicity?",
    options: {
      A: "Loss of deep tendon reflexes (patellar reflex)",
      B: "Respiratory depression (<8 breaths/min)",
      C: "Cardiopulmonary arrest",
      D: "Sudden onset oliguria",
      E: "Generalized tonic-clonic seizures"
    },
    answer: "A",
    rationale: "The earliest sign of hypermagnesemia is the loss of deep tendon reflexes, which occurs at serum levels of 4-5 mmol/L (9.6-12 mg/dL). This warns the team of potential progression towards life-threatening complications like respiratory depression (>6 mmol/L) and cardiac arrest (>12 mmol/L)."
  },
  {
    id: 79,
    chapterId: 9,
    chapterName: "Obstetric Medicine",
    question: "A patient with pre-eclampsia is suspected of having HELLP syndrome. Which of the following laboratory findings is essential in confirming this diagnosis?",
    options: {
      A: "Thrombocytosis, with platelets > 450 x 10^9 /L",
      B: "Microangiopathic haemolytic anaemia, elevated liver enzymes (AST/ALT), and low platelets (<100 x 10^9 /L)",
      C: "Elevated blood urea nitrogen (BUN) and creatinine with low transaminases",
      D: "Hypobilirubinemia and low LDH levels",
      E: "Hyperthyroidism and elevated TSH"
    },
    answer: "B",
    rationale: "HELLP syndrome stands for: Hemolysis (evidenced by schistocytes, high LDH, or high bilirubin), Elevated Liver enzymes (AST, ALT), and Low Platelets (<100 x 10^9/L)."
  },
  {
    id: 80,
    chapterId: 9,
    chapterName: "Obstetric Medicine",
    question: "A 34-year-old woman is diagnosed with Gestational Diabetes Mellitus (GDM) at 26 weeks. She fails to achieve adequate glycemic control after 1 week of healthy diet and exercise. What is the recommended first-line medical therapy according to NICE guidelines?",
    options: {
      A: "Metformin",
      B: "Glipizide",
      C: "Subcutaneous insulin immediately",
      D: "Acarbose therapy",
      E: "Strict bed rest and continuous fasting"
    },
    answer: "A",
    rationale: "NICE recommends offering oral Metformin as the first-line pharmacotherapy if dietary measures fail within 1-2 weeks. Insulin is added if glycemic targets are still unmet or immediately if the fasting glucose is >=7.0 mmol/L at diagnosis."
  },
  {
    id: 81,
    chapterId: 9,
    chapterName: "Obstetric Medicine",
    question: "Antiphospholipid Syndrome (APS) is a major autoimmune thrombophilia. Which of the following treatment regimens is recommended during pregnancy to improve outcome in patients with APS and a history of recurrent pregnancy loss?",
    options: {
      A: "Prednisolone throughout the pregnancy",
      B: "A combination of low-dose aspirin and prophylactic Low-Molecular-Weight Heparin (LMWH)",
      C: "Therapeutic dose warfarin throughout pregnancy",
      D: "Oral rivaroxaban alone",
      E: "Intravenous immunoglobulin infusions monthly"
    },
    answer: "B",
    rationale: "For women with APS and a history of recurrent miscarriages, treatment with combined low-dose aspirin and prophylactic LMWH significantly increases the live birth rate, improving placental implantation and decreasing thrombosis risk."
  },

  // --- CHAPTER 10 ---
  {
    id: 82,
    chapterId: 10,
    chapterName: "Antenatal Emergencies",
    question: "A patient at 36 weeks presenting in active labour experiences spontaneous rupture of membranes. Immediately, the fetal heart rate drops to 70 bpm for 3 minutes. Vaginal examination reveals pulsating loops of umbilical cord palpable in the vagina. What is the most crucial immediate intervention?",
    options: {
      A: "Perform an amniotomy to relieve pressure.",
      B: "Inject oxytocin to speed up delivery.",
      C: "Manually elevate the presenting part, place the mother in the knee-chest or left lateral trendelenburg position, and prepare for an emergency Caesarean section.",
      D: "Attempt to push the cord back inside the uterus.",
      E: "Initiate high-dose epidural analgesia."
    },
    answer: "C",
    rationale: "This is a cord prolapse. The cord is compressed by the presenting part, compromising fetal oxygenation. The primary intervention is reducing compression by manually pushing up the presenting part through vaginal examination, positioning the mother to reduce gravity pressure, and proceeding with emergency Caesarean delivery."
  },
  {
    id: 83,
    chapterId: 10,
    chapterName: "Antenatal Emergencies",
    question: "A 30-year-old woman at 38 weeks' gestation presents with painless, bright-red vaginal bleeding. On arrival, she is hemodynamically stable and the fetal heart rate is normal (140 bpm) with reassuring variability. What is the CORRECT approach to abdominal and pelvic examination in this patient?",
    options: {
      A: "Perform an immediate digital vaginal examination to assess cervical dilation.",
      B: "Perform abdominal palpation normally, but avoid ANY vaginal examination until a placenta praevia has been excluded by ultrasound.",
      C: "Perform a speculum examination immediately using a large metal speculum.",
      D: "Perform a sweeping of the membranes.",
      E: "No pelvic examination is ever performed in pregnancy under any circumstances."
    },
    answer: "B",
    rationale: "Never perform a digital vaginal examination in a patient presenting with antenatal bleeding until ultrasound has ruled out a placenta praevia. Doing so can displace the placenta, causing severe, life-threatening maternal hemorrhage."
  },
  {
    id: 84,
    chapterId: 10,
    chapterName: "Antenatal Emergencies",
    question: "Vasa Praevia is a rare, life-threatening obstetric emergency. Which of the following correct describes the etiology of vasa praevia?",
    options: {
      A: "Placental abruption presenting with concealed hemorrhage.",
      B: "Abruptio placentae covering the internal cervical os.",
      C: "Fetal vessels running through the membranes, unsupported by placental tissue or umbilical cord, across the internal cervical os.",
      D: "Severe maternal uterine rupture in labour.",
      E: "Severe fetal intracranial bleeding after instrumentation."
    },
    answer: "C",
    rationale: "Vasa praevia is characterized by fetal blood vessels of a velamentous insertion or succenturiate lobe crossing the cervical os. These vessels are unsupported by Wharton's jelly, making them vulnerable to tearing upon membrane rupture, resulting in rapid fetal exsanguination."
  },
  {
    id: 85,
    chapterId: 10,
    chapterName: "Antenatal Emergencies",
    question: "A 38-week pregnant woman is brought to the emergency department after a sudden collapse. Following the ABCDE algorithm, what specific anatomical maneuver must be performed on the maternal abdomen during cardiopulmonary resuscitation (CPR) to ensure effective cardiac output?",
    options: {
      A: "Tilt the patient 90 degrees to the right.",
      B: "Continuous manual left uterine displacement (LUD) to relieve aortocaval compression.",
      C: "Apply strong fundal pressure.",
      D: "Immediate pelvic compression.",
      E: "Place the patient in a vertical standing position."
    },
    answer: "B",
    rationale: "In resuscitation of a pregnant woman (gestation >20 weeks), the gravid uterus compresses the inferior vena cava and aorta, reducing cardiac output. It is crucial to perform manual left uterine displacement to relieve this compression during chest compressions."
  },

  // --- CHAPTER 11 ---
  {
    id: 86,
    chapterId: 11,
    chapterName: "Normal Labour",
    question: "How is the First Stage of Labour defined?",
    options: {
      A: "The period from full cervical dilation until the delivery of the baby.",
      B: "The period from regular painful contractions and progressive cervical change up to 4 cm dilation.",
      C: "The period from the onset of regular, painful uterine contractions accompanied by progressive cervical effacement and dilation, continuing until full cervical dilation (10 cm).",
      D: "The period between full vaginal effacement and the delivery of the placenta.",
      E: "The phase of labour lasting exactly 12 hours in nulliparous women."
    },
    answer: "C",
    rationale: "The first stage of labour begins with the onset of regular, painful uterine contractions accompanied by progressive cervical effacement and dilation, and ends when the cervix is fully dilated (10 cm). It is divided into latent (<4 cm) and active (>=4 cm or >=5 cm depending on guidelines) phases."
  },
  {
    id: 87,
    chapterId: 11,
    chapterName: "Normal Labour",
    question: "During a normal cephalic delivery, the fetal head must undergo several positional changes to successfully navigate through the birth canal. What is the correct sequence of the 'cardinal movements' of labour?",
    options: {
      A: "Extension, Descent, Engagement, Internal Rotation, External Rotation",
      B: "Engagement, Descent, Flexion, Internal Rotation, Extension, Restitution, External Rotation",
      C: "Descent, Internal Rotation, Flexion, Restitution, Extension, Lateral Flexion",
      D: "Flexion, Extension, Internal Rotation, Lateral Rotation, Descent, Engagement",
      E: "Restitution, Engagement, Flexion, Descent, External Rotation"
    },
    answer: "B",
    rationale: "The correct sequence of cardinal movements is: 1) Engagement in the pelvic inlet, 2) Descent through the pelvis, 3) Flexion of the head to present a smaller diameter, 4) Internal Rotation to align with the pelvic outlet, 5) Extension under the symphysis, 6) Restitution (alignment of head with shoulders), and 7) External rotation of shoulders."
  },
  {
    id: 88,
    chapterId: 11,
    chapterName: "Normal Labour",
    question: "In pelvic anatomy, which of the following diameters of the pelvic inlet is the most restrictive for engagement, and represents the true space available for the fetal head?",
    options: {
      A: "Anteroposterior (Obstetric Conjugate)",
      B: "Transverse diameter",
      C: "Diagonal conjugate",
      D: "Anatomical conjugate",
      E: "Intertochelian diameter"
    },
    answer: "A",
    rationale: "The obstetric conjugate is the shortest distance between the promontory of the sacrum and the symphysis pubis, representing the true anterior-posterior space available for the fetal head during engagement."
  },
  {
    id: 89,
    chapterId: 11,
    chapterName: "Normal Labour",
    question: "Which of the following describes the physiological mechanism responsible for preventing postpartum hemorrhage during the third stage of labour?",
    options: {
      A: "Activation of the extrinsic clotting cascade exclusively.",
      B: "Uterine contraction and retraction, which compresses the spiral arteries like 'living ligatures'.",
      C: "Fibrinolysis within the uterine cavity.",
      D: "Sudden increase in maternal heart rate.",
      E: "The release of high-dose corticosteroids from the placenta."
    },
    answer: "B",
    rationale: "After delivery of the placenta, the uterine muscles contract and retrogress. This mechanical compression clamps the open spiral arteries that supplied the placental bed, acting as 'living ligatures' to prevent hemorrhage."
  },

  // --- CHAPTER 12 ---
  {
    id: 90,
    chapterId: 12,
    chapterName: "Monitoring in Labour",
    question: "The partogram is a tool used to monitor progress in labour. According to traditional WHO paradigms, what is the significance of the 'Action Line'?",
    options: {
      A: "It represents normal progress of cervical dilatation at 1 cm/hour.",
      B: "It is located 4 hours to the right of the Alert Line, and crossing it indicates the need for medical assessment and interventions like amniotomy or oxytocin.",
      C: "It marks the point at which the patient must be prepared for a Caesarean section.",
      D: "It signifies the initiation of epidural analgesia.",
      E: "It is used exclusively to plot the fetal heart rate."
    },
    answer: "B",
    rationale: "The WHO partogram features an Alert Line (normal dilatation slope of 1 cm/hr) and an Action Line positioned 4 hours to its right. Crossing the Action Line indicates slow cervical progress, prompting assessment for interventions (e.g., amniotomy, oxytocin, or Caesarean section)."
  },
  {
    id: 91,
    chapterId: 12,
    chapterName: "Monitoring in Labour",
    question: "During active labor, a cardiotocogram (CTG) shows a 'pathological' pattern with repetitive late decelerations. A fetal scalp blood sampling is performed. Which of the following pH results is considered abnormal (acidemic) and indicates immediate delivery?",
    options: {
      A: "pH >= 7.25",
      B: "pH 7.21 - 7.24",
      C: "pH < 7.20",
      D: "pH 7.35 - 7.40",
      E: "pH > 7.45"
    },
    answer: "C",
    rationale: "Fetal scalp pH values are interpreted as follows: normal is >=7.25; borderline (suspicious) is 7.21-7.24 (usually repeated in 30 mins); and abnormal is <7.20, indicating acidemia and the need for immediate delivery."
  },
  {
    id: 92,
    chapterId: 12,
    chapterName: "Monitoring in Labour",
    question: "Which of the following features on a CTG represents a 'late deceleration', making it highly suspicious of uteroplacental insufficiency?",
    options: {
      A: "A deceleration that starts and ends simultaneously with the uterine contraction, reaching its nadir at the peak of contraction.",
      B: "An abrupt deceleration occurring at variable times relative to the contraction, with a quick return to baseline.",
      C: "A gradual deceleration of the fetal heart rate where the nadir occurs after the peak of the contraction, returning to baseline only after the contraction has finished.",
      D: "A transient increase in heart rate of 25 bpm lasting 30 seconds.",
      E: "A sinusoidal FHR pattern lasting more than 30 minutes."
    },
    answer: "C",
    rationale: "Late decelerations are U-shaped and lag behind uterine contractions, with their nadir occurring after the peak of the contraction. This delay reflects transient hypoxia during contractions due to poor placental reserves (uteroplacental insufficiency)."
  },
  {
    id: 93,
    chapterId: 12,
    chapterName: "Monitoring in Labour",
    question: "Which of the following is an absolute contraindication to performing a fetal scalp blood sampling (FBS)?",
    options: {
      A: "Maternal preference for epidural anesthesia",
      B: "Maternal infection with HIV, Hepatitis B, or active herpes simplex virus, or suspected fetal bleeding disorder",
      C: "Fetal heart rate baseline of 115 bpm",
      D: "Presence of meconium-stained amniotic fluid",
      E: "Gestational age of 38 weeks"
    },
    answer: "B",
    rationale: "FBS is contraindicated in cases of maternal blood-borne infection (HIV, HBV, HCV, HSV) to prevent vertical transmission through the scalp incision, and in case of suspected fetal bleeding disorders (e.g., hemophilia, fetal thrombocytopenia)."
  },

  // --- CHAPTER 13 ---
  {
    id: 94,
    chapterId: 13,
    chapterName: "Pain Relief in Labour",
    question: "Which of the following is the most common maternal side effect of epidural analgesia during labour?",
    options: {
      A: "Maternal hyperthyroidism",
      B: "Maternal hypotension",
      C: "Generalized seizures",
      D: "Permanent lower limb paralysis",
      E: "Acute kidney injury"
    },
    answer: "B",
    rationale: "Epidural block causes vasodilation due to sympathetic blockade, which commonly leads to maternal hypotension. This is typically managed with intravenous fluid preload, positioning, or vasopressors (e.g. ephedrine or phenylephrine)."
  },
  {
    id: 95,
    chapterId: 13,
    chapterName: "Pain Relief in Labour",
    question: "Entonox is a gas mixture widely used for pain relief in labour. What is its composition?",
    options: {
      A: "100% Nitrous oxide",
      B: "50% Nitrous oxide and 50% Oxygen",
      C: "70% Carbon dioxide and 30% Oxygen",
      D: "20% Nitrous oxide and 80% Nitrogen",
      E: "50% Halothane and 50% Oxygen"
    },
    answer: "B",
    rationale: "Entonox is a medical gas mixture of 50% nitrous oxide and 50% oxygen. It is self-administered via a demand-valve inhalation mask, offering rapid, short-acting analgesia without significant maternal or fetal accumulation."
  },
  {
    id: 96,
    chapterId: 13,
    chapterName: "Pain Relief in Labour",
    question: "Which of the following statements is TRUE regarding the effect of epidural analgesia on the stages and outcome of labour?",
    options: {
      A: "It significantly increases the rate of emergency Caesarean sections for fetal distress.",
      B: "It has no effect on any stage of labour and decreases pain completely without side effects.",
      C: "It is associated with a prolonged second stage of labour and an increased risk of operative vaginal delivery.",
      D: "It dramatically shortens the first stage of labour by softening the cervix.",
      E: "It is associated with a higher rate of retained placenta."
    },
    answer: "C",
    rationale: "Epidurals can reduce maternal pelvic muscle tone, which may prolong the second stage of labour and increase the risk of operative vaginal delivery (forceps or ventouse) due to a reduced maternal urge to push."
  },

  // --- CHAPTER 14 ---
  {
    id: 97,
    chapterId: 14,
    chapterName: "Delivery",
    question: "Operative vaginal delivery is indicated in cases of secondary arrest or fetal distress. What is an absolute requirement (pre-requisite) before an instrumental delivery (forceps or ventouse) can be safely attempted?",
    options: {
      A: "The cervix must be at least 5 cm dilated.",
      B: "The patient must have a working epidural in place.",
      C: "The cervix must be fully dilated, membranes ruptured, and the head engaged at or below the ischial spines (station 0 or below).",
      D: "The presentation must be face or shoulder presentation.",
      E: "The fetal weight must be estimated at > 4.5 kg."
    },
    answer: "C",
    rationale: "Instrumental delivery requires several prerequisites (e.g., FORCEPS mnemonic): Fully dilated cervix, Obstruction ruled out, Ruptured membranes, Cephalic presentation (with known position and station 0 or below), Empty bladder, Pain control, and Consent."
  },
  {
    id: 98,
    chapterId: 14,
    chapterName: "Delivery",
    question: "Which of the following is a primary advantage of Ventouse (vacuum extraction) compared to Forceps delivery?",
    options: {
      A: "Ventouse has a lower failure rate.",
      B: "Ventouse can be performed on breech presentations.",
      C: "Ventouse is associated with significantly less maternal perineal trauma.",
      D: "Ventouse reduces the risk of neonatal cephalohematoma.",
      E: "Ventouse can be performed prior to full cervical dilation."
    },
    answer: "C",
    rationale: "Ventouse is associated with lower rates of severe maternal perineal trauma (3rd or 4th-degree tears) and less maternal pain compared to forceps. However, it carries a higher risk of neonatal cephalohematoma and retinal hemorrhages, and has a higher failure rate than forceps."
  },
  {
    id: 99,
    chapterId: 14,
    chapterName: "Delivery",
    question: "A patient undergoing vaginal delivery is noted to have a third-degree perineal tear. What structures are torn in a third-degree tear?",
    options: {
      A: "Vaginal mucosa and perineal skin only.",
      B: "Perineal muscles and fascia, excluding the anal sphincter.",
      C: "Injury to perineal muscles and the anal sphincter complex (external and/or internal anal sphincter), with the rectal mucosa intact.",
      D: "Involvement of the vaginal mucosa, perineal muscles, anal sphincter, and the rectal mucosa.",
      E: "Damage to the urethral meatus exclusively."
    },
    answer: "C",
    rationale: "Perineal tears of 3rd degree involve damage to the anal sphincter complex (3a: <50% of EAS; 3b: >50% of EAS; 3c: EAS and IAS torn) but the rectal mucosa remains intact. 4th-degree tears involve damage to the anal sphincter and the anorectal mucosa."
  },
  {
    id: 100,
    chapterId: 14,
    chapterName: "Delivery",
    question: "In which of the following clinical scenarios is an operative vaginal delivery (instrumental) absolutely contraindicated?",
    options: {
      A: "Active maternal push efforts for over 2 hours in a nulliparous patient",
      B: "Fetal head engaged at station +2, occipito-posterior position",
      C: "Brow presentation, or known fetal osteogenesis imperfecta / bleeding disorder",
      D: "Maternal exhaustion",
      E: "Suspicious fetal heart rate trace"
    },
    answer: "C",
    rationale: "Instrumental delivery is contraindicated in non-cephalic presentations (e.g., brow or shoulder presentations) and in cases where the fetus has a known bleeding disorder, predisposition to fractures (e.g., osteogenesis imperfecta), or when the head is not engaged."
  },
  {
    id: 101,
    chapterId: 14,
    chapterName: "Delivery",
    question: "Which of the following is the most significant long-term risk of a classic midline (vertical) Caesarean section incision compared to the standard lower uterine segment Pfannenstiel incision?",
    options: {
      A: "Increased rate of postoperative wound infection",
      B: "High rate of uterine rupture (up to 4-9%) in subsequent pregnancies",
      C: "Delayed return of bowel function",
      D: "Maternal pelvic floor relaxation",
      E: "Neonatal respiratory distress"
    },
    answer: "B",
    rationale: "A classical (vertical) uterine incision cuts through the active, muscular upper segment of the uterus, which has poor healing and high intramural pressure in future pregnancies. This results in a high risk of uterine rupture (~4-9%) in subsequent pregnancies, contraindicating subsequent trials of vaginal delivery."
  },

  // --- CHAPTER 15 ---
  {
    id: 102,
    chapterId: 15,
    chapterName: "Obstetric Emergencies in Labour",
    question: "Following delivery of the fetal head, the shoulders fail to deliver spontaneously. The head retracts tightly against the maternal perineum ('turtle sign'). What is the recommended first-line maneuver to manage shoulder dystocia?",
    options: {
      A: "Perform strong downward traction on the fetal head to bypass the blockage.",
      B: "McRoberts maneuver (hyperflexion of maternal hips) combined with suprapubic pressure.",
      C: "Apply fundal pressure to help push the baby through.",
      D: "Perform the Zavanelli maneuver immediately.",
      E: "Proceed to an immediate emergency Caesarean section."
    },
    answer: "B",
    rationale: "The first-line management for shoulder dystocia is the McRoberts maneuver (hyperflexion of maternal thighs against the abdomen), which flatters the sacral promontory, combined with assistant suprapubic pressure to disimpact the anterior shoulder. Fundal pressure is absolutely contraindicated as it can cause uterine rupture."
  },
  {
    id: 103,
    chapterId: 15,
    chapterName: "Obstetric Emergencies in Labour",
    question: "A multiparous patient experiences a primary Postpartum Hemorrhage (PPH) of 1,200 mL following delivery of a singleton placenta. The postpartum uterus is soft, boggy, and palpated above the umbilicus. What is the most likely cause, and what is the first-line pharmacotherapy?",
    options: {
      A: "Genital tract trauma; surgical repair is first-line.",
      B: "Uterine atony; active management with continuous uterine massage, emptying the bladder, and administration of intramuscular Syntometrine or intravenous Oxytocin.",
      C: "Retained placental tissue; manual exploration is first-line.",
      D: "Coagulopathy; platelet transfusion is first-line.",
      E: "Uterine inversion; immediate replacement is first-line."
    },
    answer: "B",
    rationale: "Uterine atony is the most common cause of primary PPH (the '4 Ts': Tone, Tissue, Trauma, Thrombin). First-line treatment involves manual massage to stimulate contraction and administration of uterotonic medications (e.g., Oxytocin or Syntometrine)."
  },
  {
    id: 104,
    chapterId: 15,
    chapterName: "Obstetric Emergencies in Labour",
    question: "A patient with a history of a previous Caesarean section is in active labour. Suddenly, she complains of sharp, tearing abdominal pain, followed by the cessation of contractions. The fetal presenting part, which was at station 0, is no longer palpable on vaginal exam, and there is maternal hemodynamic instability. What has occurred?",
    options: {
      A: "Placental abruption",
      B: "Uterine inversion",
      C: "Uterine rupture",
      D: "Vasa praevia tear",
      E: "Umbilical cord prolapse"
    },
    answer: "C",
    rationale: "Uterine rupture is a life-threatening emergency, occurring primarily in patients with a scarred uterus undergoing a trial of labor. Signs include severe abdominal pain, chest pain, shoulder tip pain, loss of contractions, regression of the presenting part, and maternal shock."
  },
  {
    id: 105,
    chapterId: 15,
    chapterName: "Obstetric Emergencies in Labour",
    question: "Which of the following uterotonic agents is strictly CONTRAINDICATED in patients with gestational or pre-existing hypertension due to the risk of triggering severe hypertensive crisis or stroke?",
    options: {
      A: "Oxytocin (Syntocinon)",
      B: "Ergometrine (or Syntometrine)",
      C: "Carboprost (Hemabate)",
      D: "Misoprostol",
      E: "Tranexamic Acid"
    },
    answer: "B",
    rationale: "Ergometrine is a powerful vasoconstrictor that can cause a rapid, severe rise in blood pressure. It is contraindicated in patients with hypertension, pre-eclampsia, or severe cardiac disease."
  },
  {
    id: 106,
    chapterId: 15,
    chapterName: "Obstetric Emergencies in Labour",
    question: "What represents the classic clinical triad of Amniotic Fluid Embolism (AFE)?",
    options: {
      A: "Severe hypertension, proteinuria, and hyperreflexia",
      B: "Maternal fever, foul-smelling amniotic fluid, and fetal tachycardia",
      C: "Acute hypoxia/dyspnoea, sudden cardiovascular collapse, and severe coagulopathy (DIC)",
      D: "Sharp tearing pain, loss of contractions, and recess of fetal presenting part",
      E: "Postpartum hemorrhage, soft boggy uterus, and high fever"
    },
    answer: "C",
    rationale: "Amniotic fluid embolism is an anaphylactoid reaction to amniotic fluid debris entering the maternal circulation, characterized by a triad of hypoxia/cyanosis, cardiorespiratory collapse, and severe disseminated intravascular coagulation (DIC)."
  },

  // --- CHAPTER 16 ---
  {
    id: 107,
    chapterId: 16,
    chapterName: "The Puerperium and Neonate",
    question: "A patient 4 days postpartum complains of being tearful, anxious, irritable, and having sleep disturbances. She is supportive, has normal bonding with her baby, and denies suicidal thoughts. What is the most likely diagnosis, and what is the management?",
    options: {
      A: "Postpartum psychosis; immediate psychiatric admission is needed.",
      B: "Postpartum depression; initiate selective serotonin reuptake inhibitors (SSRIs).",
      C: "Baby blues; offer reassurance as it is common, self-limiting, and resolves within 10-14 days.",
      D: "Postnatal thyroiditis; start levothyroxine.",
      E: "Postpartum PTSD; arrange immediate EMDR therapy."
    },
    answer: "C",
    rationale: "Baby blues affects 50-80% of mothers, appearing 3-5 days postpartum. It is characterized by emotional lability and mild anxiety. It is self-limiting, typical, and does not interfere with infant care, requiring reassurance and support."
  },
  {
    id: 108,
    chapterId: 16,
    chapterName: "The Puerperium and Neonate",
    question: "A lactating patient 3 weeks postpartum presents with a painful, swollen, red area on her left breast, accompanied by a fever of 38.5 C and flu-like symptoms. She is diagnosed with lactational mastitis. What is the correct management regarding breastfeeding?",
    options: {
      A: "Breastfeeding should be ceased immediately from both breasts.",
      B: "Breastfeeding should be stopped on the affected breast and continued on the healthy one.",
      C: "Breastfeeding should be encouraged from both breasts, ensuring effective attachment, as milk stasis is the primary driver of infection.",
      D: "The mother must stop breastfeeding and undergo immediate surgical biopsy.",
      E: "Stop lactation using dopamine agonists."
    },
    answer: "C",
    rationale: "Lactational mastitis is primarily driven by milk stasis. Continued frequent feeding or mechanical expression is essential to empty the breast and resolve the infection. If symptoms persist for >24 hours, antibiotics (e.g., Flucloxacillin) should be started."
  },
  {
    id: 109,
    chapterId: 16,
    chapterName: "The Puerperium and Neonate",
    question: "A newborn is assessed at 1 minute and 5 minutes using the APGAR score. Which scoring parameters are evaluated in this assessment?",
    options: {
      A: "Alveolar exchange, Pupillary response, Gastrointestinal motility, Age, Reflexes",
      B: "Appearance (Skin colour), Pulse (Heart rate), Grimace (Reflex irritability), Activity (Muscle tone), and Respiration",
      C: "Acidity, Percussion, Growth, Auditory response, Respiratory depth",
      D: "Asthma, Pain, Grasping, Amniotic staining, Renal output",
      E: "Acuteness, Pupil dilation, Gestation, Attachment, Response"
    },
    answer: "B",
    rationale: "APGAR evaluates: Appearance (0: blue/pale; 1: pink body, blue extremity; 2: completely pink); Pulse (0: absent; 1: <100; 2: >=100); Grimace (0: floppy; 1: grimace; 2: active withdrawal); Activity (0: limp; 1: moderate flexion; 2: active movement); Respiration (0: absent; 1: slow/irregular; 2: strong cry)."
  },
  {
    id: 110,
    chapterId: 16,
    chapterName: "The Puerperium and Neonate",
    question: "A term baby is born limp and apneic. During basic neonatal resuscitation, if the baby does not establish spontaneous breathing after initial drying, warming, and positional airway clearance, what is the CRITICAL next step?",
    options: {
      A: "Administer chest compressions at a 3:1 ratio.",
      B: "Inject intravenous adrenaline.",
      C: "Give 5 inflation breaths of 2-3 seconds each, using air (21% O2) for a term newborn.",
      D: "Intubate immediately and administer oxygen.",
      E: "Perform vigorous back slaps."
    },
    answer: "C",
    rationale: "For a limp, apneic newborn, the priority is lung aeration. The first active step of resuscitation is 5 inflation breaths (maintained for 2-3 seconds to recruit lung alveoli), using air (21% O2) for term neonates."
  },
  {
    id: 111,
    chapterId: 16,
    chapterName: "The Puerperium and Neonate",
    question: "Postpartum psychosis is a severe psychiatric emergency. What is the typical timeframe of onset, and what represents the recommended clinical environment for treatment?",
    options: {
      A: "Starts within 2 hours of delivery; treated on the acute general medical ward.",
      B: "Onset is usually within the first 2-3 weeks postpartum; treatment requires urgent admission to a specialized joint Mother and Baby psychiatric Unit (MBU).",
      C: "Typically starts after 6 months; managed via outpatient group cognitive behavioral therapy.",
      D: "Begins prior to delivery and resolves within 2 hours.",
      E: "Managed exclusively via self-help groups."
    },
    answer: "B",
    rationale: "Postpartum psychosis is a psychiatric emergency presenting within the first few weeks postpartum, characterized by hallucinations, delusions, mania, and confusion. Admission to a Mother and Baby Unit (MBU) is indicated to treat the mother while ensuring the safety and bonding of the infant."
  }
];

export function getQuestionsByChapter(chapterId: number): Question[] {
  return QUESTIONS.filter(q => q.chapterId === chapterId);
}

export function getRandomQuestions(count: number, chapterId?: number): Question[] {
  let list = QUESTIONS;
  if (chapterId && chapterId > 0) {
    list = list.filter(q => q.chapterId === chapterId);
  }
  const shuffled = [...list].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, shuffled.length));
}
