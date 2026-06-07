import { Question, Chapter } from "../types";

export const CHAPTERS: Chapter[] = [
  {
    id: 1,
    name: "Chapter 1: Obstetric History and Examination",
    description: "Preconceptual counselling, dating, social/obstetric/gynaecological history, examination techniques, and presentation skills.",
    questionCount: 32
  },
  {
    id: 2,
    name: "Chapter 2: Antenatal Care",
    description: "Booking tests, screening, high-risk identification, and lifestyle advice.",
    questionCount: 34
  },
  {
    id: 3,
    name: "Chapter 3: Normal Fetal Development and Growth",
    description: "Fetal growth, cardiovascular, respiratory, alimentary, renal, blood/immune systems, and amniotic fluid.",
    questionCount: 44
  },
  {
    id: 4,
    name: "Chapter 4: Assessment of Fetal Well-being",
    description: "Ultrasound, biometry, Doppler, CTG, and biophysical profile.",
    questionCount: 27
  },
  {
    id: 5,
    name: "Chapter 5: Prenatal Diagnosis",
    description: "Screening tests, invasive procedures, NIPT, and genetic counselling.",
    questionCount: 18
  },
  {
    id: 6,
    name: "Chapter 6: Antenatal Obstetric Complications",
    description: "VTE, hyperemesis, cholestasis, fibroids, UTI, APH, and Rhesus disease.",
    questionCount: 35
  },
  {
    id: 7,
    name: "Chapter 7: Multiple Pregnancy",
    description: "Chorionicity, TTTS, TAPS, TRAP, and delivery planning.",
    questionCount: 50
  },
  {
    id: 8,
    name: "Chapter 8: Preterm Labour",
    description: "Prediction, prevention, corticosteroids, tocolysis, and PPROM.",
    questionCount: 30
  },
  {
    id: 9,
    name: "Chapter 9: Hypertensive Disorders of Pregnancy",
    description: "Pre-eclampsia, HELLP, FGR, and Doppler monitoring.",
    questionCount: 35
  },
  {
    id: 10,
    name: "Chapter 10: Medical Complications of Pregnancy",
    description: "Renal, endocrine, cardiac, respiratory, neurological, haematological, GI, CTD, and skin disorders in pregnancy.",
    questionCount: 44
  },
  {
    id: 11,
    name: "Chapter 11: Perinatal Infections",
    description: "Bacterial, viral, protozoal; congenital infections; and neonatal sepsis.",
    questionCount: 19
  },
  {
    id: 12,
    name: "Chapter 12: Labour \u2013 Normal and Abnormal",
    description: "Normal/abnormal labour, induction, pain relief, and special circumstances.",
    questionCount: 57
  },
  {
    id: 13,
    name: "Chapter 13: Operative Delivery",
    description: "Perineal repair, episiotomy, forceps, vacuum, and caesarean section.",
    questionCount: 120
  },
  {
    id: 14,
    name: "Chapter 14: Obstetric Emergencies",
    description: "Maternal collapse, sepsis, APH/PPH, eclampsia, AFE, cord prolapse, shoulder dystocia, and uterine inversion/rupture.",
    questionCount: 120
  },
  {
    id: 15,
    name: "Chapter 15: Puerperium",
    description: "Physiology of puerperium, clinical care, psychiatric disorders, lactation and breastfeeding, and drugs in lactation.",
    questionCount: 200
  },
  {
    id: 16,
    name: "Chapter 16: Neonates",
    description: "Adaptation, resuscitation, routine care, common anomalies/problems, limit of viability, nutrition, and RDS/BPD/PDA/NEC.",
    questionCount: 200
  }
];

export const QUESTIONS: Question[] = [
  {
    id: 1,
    chapterId: 1,
    chapterName: "Obstetric History and Examination",
    question: "What is the primary purpose of preconceptual counselling?",
    options: {
      A: "To diagnose pregnancy complications",
      B: "To optimize maternal health before pregnancy and maximize chances of healthy pregnancy",
      C: "To perform genetic testing only",
      D: "To schedule delivery date"
    },
    answer: "B",
    rationale: "Preconceptual counselling provides an opportunity to review patients prior to conception, optimize maternal health, recognize issues, amend lifestyle, address social issues, and reduce maternal and perinatal morbidity and mortality."
  },
  {
    id: 2,
    chapterId: 1,
    chapterName: "Obstetric History and Examination",
    question: "Which of the following is NOT a main purpose of preconceptual counselling?",
    options: {
      A: "Optimize maternal health before embarking on pregnancy",
      B: "Reduce maternal and perinatal morbidity and mortality",
      C: "Guarantee a complication-free pregnancy",
      D: "Address chronic medical conditions"
    },
    answer: "C",
    rationale: "While preconceptual counselling aims to reduce risks, it cannot guarantee a complication-free pregnancy. The main purposes include optimizing health, reducing morbidity/mortality, addressing medical conditions, and discussing medication safety."
  },
  {
    id: 3,
    chapterId: 1,
    chapterName: "Obstetric History and Examination",
    question: "",
    options: {
      A: "Continue sodium valproate as it is safe in pregnancy",
      B: "Stop all antiepileptic medications immediately",
      C: "Refer to a neurologist to discuss changing to an alternative medication",
      D: "Advise against pregnancy entirely"
    },
    answer: "C",
    rationale: "Sodium valproate is potentially harmful in pregnancy. Pre-pregnancy counselling is advised for those taking potentially harmful drugs. In some cases, medication needs to be changed before pregnancy if possible, with appropriate time given to allow 'wash out' of teratogenic medications."
  },
  {
    id: 4,
    chapterId: 1,
    chapterName: "Obstetric History and Examination",
    question: "Which of the following medications should be reviewed and potentially changed before conception?",
    options: {
      A: "Folic acid supplementation",
      B: "Sodium valproate for epilepsy",
      C: "Prenatal vitamins",
      D: "Iron supplements"
    },
    answer: "B",
    rationale: "Sodium valproate is teratogenic and contraindicated in pregnancy. Patients should be seen by a neurologist and counselled about changing to an alternative. Folic acid, prenatal vitamins, and iron are recommended in pregnancy. ## Section 1.2: Dating the Pregnancy"
  },
  {
    id: 5,
    chapterId: 1,
    chapterName: "Obstetric History and Examination",
    question: "According to NICE guidelines, how should pregnancy dates be set?",
    options: {
      A: "By last menstrual period (LMP) only",
      B: "By ultrasound using crown-rump length measurement between 11 weeks 2 days and 14 weeks 1 day",
      C: "By patient recall of conception date",
      D: "By first fetal movement perception"
    },
    answer: "B",
    rationale: "NICE guideline on antenatal care recommends that pregnancy dates are set by ultrasound using the crown-rump length measurement between 11 weeks 2 days and 14 weeks 1 day. This is more accurate than LMP alone."
  },
  {
    id: 6,
    chapterId: 1,
    chapterName: "Obstetric History and Examination",
    question: "Why is accurate dating early in pregnancy important?",
    options: {
      A: "It reduces the risk of premature planned deliveries",
      B: "It is only important for patient satisfaction",
      C: "It has no clinical significance",
      D: "It is only needed for administrative purposes"
    },
    answer: "A",
    rationale: "Accurate dating early in pregnancy is important for assessing fetal growth in later pregnancy and reduces the risk of premature planned deliveries, such as induction of labour for postmature pregnancies (>41 weeks' gestation) and elective caesarean sections."
  },
  {
    id: 7,
    chapterId: 1,
    chapterName: "Obstetric History and Examination",
    question: "The median duration from the first day of LMP to birth is:",
    options: {
      A: "38 weeks",
      B: "40 weeks",
      C: "42 weeks",
      D: "36 weeks"
    },
    answer: "B",
    rationale: "The median duration from the first day of the LMP to birth is 40 weeks. Although a human pregnancy is approximately 38 weeks from conception, we refer to the length of pregnancy as 40 weeks in duration when calculated from LMP. ## Section 1.3: Social History"
  },
  {
    id: 8,
    chapterId: 1,
    chapterName: "Obstetric History and Examination",
    question: "According to MBRRACE-UK data, which group has the highest maternal mortality?",
    options: {
      A: "Women aged 20-25 years",
      B: "Women from affluent areas",
      C: "Women who are older and those living in the most deprived areas",
      D: "Women with private healthcare"
    },
    answer: "C",
    rationale: "MBRRACE-UK has consistently reported that maternal mortality is highest among those who are older and those living in the most deprived areas. Recent reports highlighted that a quarter of those who died were born outside the UK and almost 1 in 10 had severe and multiple disadvantages."
  },
  {
    id: 9,
    chapterId: 1,
    chapterName: "Obstetric History and Examination",
    question: "Why is it important to ask about domestic abuse in every pregnancy?",
    options: {
      A: "It is a legal requirement only",
      B: "Women experiencing domestic abuse are at higher risk of adverse pregnancy outcomes, and pregnancy/post-partum period is a risk factor for domestic abuse leading to homicide",
      C: "It is only relevant if the patient volunteers the information",
      D: "It is not relevant to obstetric care"
    },
    answer: "B",
    rationale: "Women experiencing domestic abuse are at higher risk of abuse during pregnancy and adverse outcomes. One-third of those who experience domestic abuse do so for the first time while pregnant. Pregnancy and post-partum period is a risk factor for domestic abuse leading to homicide, with one in seven maternal deaths occurring in those who disclosed abusive relationships."
  },
  {
    id: 10,
    chapterId: 1,
    chapterName: "Obstetric History and Examination",
    question: "Regarding smoking during pregnancy, which statement is correct?",
    options: {
      A: "Smoking has no effect on pregnancy outcomes",
      B: "Smoking causes placental dysfunction and increases risk of miscarriage, stillbirth, and neonatal death",
      C: "Smoking only affects the mother's lungs",
      D: "Smoking is safe in the second trimester only"
    },
    answer: "B",
    rationale: "Smoking causes placental dysfunction and thus increases the risk of miscarriage, stillbirth, and neonatal death. Interventions can be offered to those still smoking in pregnancy."
  },
  {
    id: 11,
    chapterId: 1,
    chapterName: "Obstetric History and Examination",
    question: "What is the recommended advice regarding alcohol consumption in pregnancy?",
    options: {
      A: "Complete abstinence is advised as safety is not proven",
      B: "One drink per day is safe",
      C: "Binge drinking is acceptable occasionally",
      D: "Alcohol is safe in all trimesters"
    },
    answer: "A",
    rationale: "Complete abstinence from alcohol is advised, as the safety of alcohol is not proven. However, alcohol is probably not harmful in small amounts (less than one drink per day). Binge drinking is particularly harmful and can lead to fetal alcohol syndrome."
  },
  {
    id: 12,
    chapterId: 1,
    chapterName: "Obstetric History and Examination",
    question: "What percentage of women continue to take recreational drugs during pregnancy?",
    options: {
      A: "Less than 0.1%",
      B: "Approximately 0.5-1%",
      C: "Approximately 10%",
      D: "Approximately 25%"
    },
    answer: "B",
    rationale: "Approximately 0.5-1% of women continue to take recreational drugs during pregnancy. The midwife should enquire directly about drug taking during the booking visit. ## Section 1.4: Previous Obstetric History"
  },
  {
    id: 13,
    chapterId: 1,
    chapterName: "Obstetric History and Examination",
    question: "What is the definition of \"gravity\" in obstetric history?",
    options: {
      A: "The number of live births",
      B: "The total number of pregnancies, regardless of how they ended",
      C: "The number of pregnancies after 24 weeks",
      D: "The number of miscarriages only"
    },
    answer: "B",
    rationale: "Gravidity is the total number of pregnancies, regardless of how they ended. Parity is the number of live births or stillbirths after 24 weeks. Note that miscarriages are denoted as a + and twins count as 2."
  },
  {
    id: 14,
    chapterId: 1,
    chapterName: "Obstetric History and Examination",
    question: "What is the definition of \"parity\" in obstetric history?",
    options: {
      A: "The total number of pregnancies",
      B: "The number of live births or stillbirths after 24 weeks",
      C: "The number of terminations only",
      D: "The number of antenatal visits"
    },
    answer: "B",
    rationale: "Parity is the number of live births or stillbirths after 24 weeks. Miscarriages are denoted as a + and twins count as 2."
  },
  {
    id: 15,
    chapterId: 1,
    chapterName: "Obstetric History and Examination",
    question: "",
    options: {
      A: "Gravida 6, para 1",
      B: "Gravida 8, para 1 + 6",
      C: "Gravida 7, para 1",
      D: "Gravida 1, para 7"
    },
    answer: "B",
    rationale: "She is gravida 8 (total pregnancies: 6 miscarriages + 1 live birth + 1 current pregnancy), para 1 + 6 (1 live birth + 6 miscarriages). In practice, it is easier to describe exactly what has happened rather than using shorthand."
  },
  {
    id: 16,
    chapterId: 1,
    chapterName: "Obstetric History and Examination",
    question: "Which of the following previous pregnancy outcomes increases the risk of recurrence in future pregnancies?",
    options: {
      A: "Previous normal vaginal delivery at term",
      B: "Previous preterm delivery",
      C: "Previous uncomplicated pregnancy",
      D: "Previous elective caesarean section for breech"
    },
    answer: "B",
    rationale: "Previous preterm delivery is associated with increased risk of preterm birth in future pregnancies. Other features with increased recurrence risk include pre-eclampsia, abruption, congenital abnormality (depending on type), macrosomic baby (may relate to gestational diabetes), fetal growth restriction, and unexplained stillbirth. ## Section 1.5: Past Gynaecological History"
  },
  {
    id: 17,
    chapterId: 1,
    chapterName: "Obstetric History and Examination",
    question: "Why is a detailed gynaecological history important in the first trimester?",
    options: {
      A: "It is only relevant for fertility clinics",
      B: "It is particularly important if scanning is not available and LMP is being used to date the pregnancy, and for identifying conditions like PCOS",
      C: "It has no bearing on pregnancy management",
      D: "It is only needed for research purposes"
    },
    answer: "B",
    rationale: "In the first trimester, taking a detailed gynaecological history is important, particularly if scanning is not available and the LMP is being used to date the pregnancy. People with polycystic ovary syndrome can have very long menstrual cycles and may have ovulated much later in the cycle."
  },
  {
    id: 18,
    chapterId: 1,
    chapterName: "Obstetric History and Examination",
    question: "Previous ectopic pregnancy increases the risk of recurrence from:",
    options: {
      A: "1 in 1000 to 5 in 1000",
      B: "1 in 100 pregnancies to 18 in 100",
      C: "1 in 10 to 1 in 5",
      D: "There is no increased risk"
    },
    answer: "B",
    rationale: "Previous ectopic pregnancy increases the risk of recurrence from 1 in 100 pregnancies to 18 in 100. Those who have had an ectopic pregnancy should be offered an early ultrasound scan to establish the site of any future pregnancies."
  },
  {
    id: 19,
    chapterId: 1,
    chapterName: "Obstetric History and Examination",
    question: "Which of the following is a contraindication to digital examination in pregnancy?",
    options: {
      A: "Routine antenatal check",
      B: "Known placenta praevia or vaginal bleeding when placental site is unknown and presenting part unengaged",
      C: "Checking cervical effacement at term",
      D: "Assessing Bishop's score before induction"
    },
    answer: "B",
    rationale: "Contraindications to digital examination include known placenta praevia or vaginal bleeding when the placental site is unknown and the presenting part unengaged, and pre-labour rupture of membranes (increased risk of ascending infection). ## Section 1.6: Medical and Surgical History"
  },
  {
    id: 20,
    chapterId: 1,
    chapterName: "Obstetric History and Examination",
    question: "Which of the following pre-existing diseases has the MOST significant impact on pregnancy?",
    options: {
      A: "Mild asthma",
      B: "Diabetes mellitus",
      C: "Seasonal allergies",
      D: "Previous appendectomy"
    },
    answer: "B",
    rationale: "Major pre-existing diseases that have an impact on pregnancy include diabetes mellitus, hypertension, cardiac disease, epilepsy, renal disease, connective tissue diseases (e.g., SLE), venous thromboembolic disease, and HIV infection. Diabetes mellitus requires careful management throughout pregnancy."
  },
  {
    id: 21,
    chapterId: 1,
    chapterName: "Obstetric History and Examination",
    question: "",
    options: {
      A: "Antiphospholipid syndrome",
      B: "Iron deficiency only",
      C: "Thyroid disease only",
      D: "No investigation needed"
    },
    answer: "A",
    rationale: "Recurrent miscarriage may be associated with antiphospholipid syndrome, which increases the risk of further pregnancy loss, fetal growth restriction, pre-eclampsia, and venous thromboembolism. Patients need a great deal of support during pregnancy if they have experienced recurrent pregnancy losses. ## Section 1.7: Family History"
  },
  {
    id: 22,
    chapterId: 1,
    chapterName: "Obstetric History and Examination",
    question: "",
    options: {
      A: "Diabetes mellitus",
      B: "Hypertension",
      C: "Asthma",
      D: "Migraine"
    },
    answer: "A",
    rationale: "A family history of diabetes (increased risk of gestational diabetes), thromboembolic disease (increased risk of thrombophilia, thrombosis), pre-eclampsia (increased risk of pre-eclampsia), and serious mental health illness (increased risk of puerperal psychosis) are particularly significant."
  },
  {
    id: 23,
    chapterId: 1,
    chapterName: "Obstetric History and Examination",
    question: "Which family history is associated with increased risk of pre-eclampsia?",
    options: {
      A: "Family history of diabetes",
      B: "Family history of pre-eclampsia in a first-degree relative",
      C: "Family history of asthma",
      D: "Family history of migraine"
    },
    answer: "B",
    rationale: "A family history of pre-eclampsia in a first-degree relative (sibling or parent) increases the risk of pre-eclampsia in the pregnant woman. ## Section 1.8: Obstetric Examination"
  },
  {
    id: 24,
    chapterId: 1,
    chapterName: "Obstetric History and Examination",
    question: "What is the correct position for measuring blood pressure in pregnancy?",
    options: {
      A: "Standing position",
      B: "Seated or semi-recumbent position",
      C: "Lying completely flat",
      D: "Lateral decubitus position only"
    },
    answer: "B",
    rationale: "Blood pressure should be measured in a seated or semi-recumbent position. An appropriately sized cuff should be used, and convention is to use Korotkoff V (disappearance of sounds) as this is more reproducible than Korotkoff IV."
  },
  {
    id: 25,
    chapterId: 1,
    chapterName: "Obstetric History and Examination",
    question: "What BMI category is associated with increased risk of fetal growth restriction and increased perinatal mortality?",
    options: {
      A: "BMI 18.5-24.9",
      B: "BMI <20",
      C: "BMI 25-29.9",
      D: "BMI >30"
    },
    answer: "B",
    rationale: "Those with a BMI of <20 are at higher risk of fetal growth restriction and increased perinatal mortality. In the obese (BMI >30), the risks of gestational diabetes, venous thromboembolism, and pre-eclampsia are increased."
  },
  {
    id: 26,
    chapterId: 1,
    chapterName: "Obstetric History and Examination",
    question: "At what gestation should symphysis-fundal height (SFH) measurement begin?",
    options: {
      A: "12 weeks",
      B: "16 weeks",
      C: "24 weeks",
      D: "28 weeks"
    },
    answer: "C",
    rationale: "SFH should be measured and recorded at each antenatal appointment from 24 weeks' gestation. Most UK hospitals now use customized SFH charts, which are generated at the first antenatal visit and customized to each individual."
  },
  {
    id: 27,
    chapterId: 1,
    chapterName: "Obstetric History and Examination",
    question: "At 36 weeks gestation, what should the approximate fundal height be?",
    options: {
      A: "24 cm \u00b1 3 cm",
      B: "30 cm \u00b1 3 cm",
      C: "36 cm \u00b1 3 cm",
      D: "40 cm \u00b1 3 cm"
    },
    answer: "C",
    rationale: "The fundal height approximates with the gestation so that, at 36 weeks, the fundal height should be approximately 36 cm \u00b1 3 cm. However, customized growth charts are more sensitive and specific."
  },
  {
    id: 28,
    chapterId: 1,
    chapterName: "Obstetric History and Examination",
    question: "",
    options: {
      A: "Multiple pregnancy",
      B: "Macrosomia",
      C: "Fetal growth restriction",
      D: "Polyhydramnios"
    },
    answer: "C",
    rationale: "A large SFH raises the possibility of multiple pregnancy, macrosomia, and polyhydramnios. A small SFH raises the possibility of fetal growth restriction and oligohydramnios."
  },
  {
    id: 29,
    chapterId: 1,
    chapterName: "Obstetric History and Examination",
    question: "When palpating the fetal head to assess engagement, what does \"5/5 palpable\" mean?",
    options: {
      A: "The head is fully engaged",
      B: "The head is completely above the pelvis and easily movable (free)",
      C: "The head is deeply engaged",
      D: "Only the head is palpable"
    },
    answer: "B",
    rationale: "If the whole head is palpable and easily movable, the head is likely to be 'free'. This equates to five-fifths palpable and is recorded as 5/5. As the head descends into the pelvis, less can be felt. When the head is no longer movable, it has 'engaged' and only one- or two-fifths will be palpable."
  },
  {
    id: 30,
    chapterId: 1,
    chapterName: "Obstetric History and Examination",
    question: "When is routine pelvic examination during antenatal visits necessary?",
    options: {
      A: "At every antenatal visit",
      B: "Only when there are specific indications such as excessive discharge, vaginal bleeding, or to perform cervical smear",
      C: "Only in the first trimester",
      D: "Only in the third trimester"
    },
    answer: "B",
    rationale: "Routine pelvic examination during antenatal visits is not necessary. However, there are circumstances in which a vaginal examination is necessary, including excessive or offensive discharge, vaginal bleeding (in known absence of placenta praevia), to perform a cervical smear, to confirm potential rupture of membranes, or to confirm and assess female genital mutilation. ## Section 1.9: Presentation Skills"
  },
  {
    id: 31,
    chapterId: 1,
    chapterName: "Obstetric History and Examination",
    question: "When presenting an obstetric history, which approach is recommended?",
    options: {
      A: "Give a full list of all negative findings",
      B: "Summarize negatives and present key information clearly and concisely",
      C: "Only mention positive findings",
      D: "Present in a disorganized manner"
    },
    answer: "B",
    rationale: "It is not necessary to give a full list of negative findings; it is enough to summarize negatives, such as there is no important medical, surgical or family history of note. Adapt your style of presentation to meet the situation. A very concise presentation is needed for a busy ward round."
  },
  {
    id: 32,
    chapterId: 1,
    chapterName: "Obstetric History and Examination",
    question: "Which of the following is NOT included in the demographic details of the history template?",
    options: {
      A: "Name",
      B: "Age",
      C: "Blood pressure",
      D: "Occupation"
    },
    answer: "C",
    rationale: "Demographic details include name, age, occupation, and ethnic background. Blood pressure is part of the examination findings, not demographic details. # \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550"
  },
  {
    id: 33,
    chapterId: 2,
    chapterName: "Antenatal Care",
    question: "According to the WHO, how many maternal deaths occurred daily from preventable causes related to pregnancy and childbirth in 2020?",
    options: {
      A: "Approximately 100",
      B: "Approximately 200",
      C: "Approximately 800",
      D: "Approximately 50"
    },
    answer: "C",
    rationale: "According to the World Health Organization (WHO), in 2020, globally there were approximately 800 maternal deaths a day from preventable causes related to pregnancy and childbirth, meaning that someone dies as a result of pregnancy around every 2 minutes; 99% of all these maternal deaths occur in low-income countries."
  },
  {
    id: 34,
    chapterId: 2,
    chapterName: "Antenatal Care",
    question: "The first perinatal mortality study in 1963 showed that the perinatal mortality rate was lowest for those who attended:",
    options: {
      A: "1-5 times",
      B: "5-9 times",
      C: "10-24 times",
      D: "More than 30 times"
    },
    answer: "C",
    rationale: "In 1963, the first perinatal mortality study showed that the perinatal mortality rate was lowest for those who attended between 10 and 24 times in pregnancy. However, this failed to take into account prematurity and poor education as reasons for decreased visits and increased mortality."
  },
  {
    id: 35,
    chapterId: 2,
    chapterName: "Antenatal Care",
    question: "The Cranbrook Report (1959) recommended that:",
    options: {
      A: "All deliveries should occur at home",
      B: "There should be sufficient hospital maternity beds for 70% of all deliveries to take place in hospital",
      C: "No hospital deliveries should occur",
      D: "Only high-risk pregnancies should deliver in hospital"
    },
    answer: "B",
    rationale: "The Cranbrook Report in 1959 recommended that there be sufficient hospital maternity beds for 70% of all deliveries to take place in hospital. The subsequent Peel Report (1970) recommended that a bed should be available for every woman to deliver in hospital if she so wished."
  },
  {
    id: 36,
    chapterId: 2,
    chapterName: "Antenatal Care",
    question: "The landmark report \"Changing Childbirth\" (1993) aimed to achieve all of the following EXCEPT:",
    options: {
      A: "Carriage of hand-held notes in pregnancy",
      B: "Midwifery-led care in 30% of pregnancies",
      C: "A known midwife at delivery in 75% of cases",
      D: "Mandatory hospital delivery for all women"
    },
    answer: "D",
    rationale: "The Changing Childbirth report provided action points aiming to improve choice, information and continuity of care. It did not mandate hospital delivery for all women. It included indicators such as hand-held notes, midwifery-led care in 30%, and a known midwife at delivery in 75%."
  },
  {
    id: 37,
    chapterId: 2,
    chapterName: "Antenatal Care",
    question: "The National Maternity Review report (2016) led to the introduction of the Maternity Transformation Programme, which emphasizes all EXCEPT:",
    options: {
      A: "Personalized woman-centred care",
      B: "Continuity of carer",
      C: "Mandatory hospital delivery for all",
      D: "Safer care with multi-professional working"
    },
    answer: "C",
    rationale: "The Maternity Transformation Programme emphasizes personalized woman-centred care, continuity of carer, better postnatal and perinatal mental health care, a fairer payment system, and safer care with multi-professional working. It does not mandate hospital delivery for all."
  },
  {
    id: 38,
    chapterId: 2,
    chapterName: "Antenatal Care",
    question: "The Ockenden review (2022) found that:",
    options: {
      A: "Patient safety was always the top priority",
      B: "Patient safety was often overlooked in the pursuit of a vaginal birth",
      C: "Hospital deliveries were always safer than home births",
      D: "There were no issues with maternity services"
    },
    answer: "B",
    rationale: "The final report of the Ockenden review, commissioned by the Secretary of State of Health, was published in 2022. One of the main findings was that patient safety was often overlooked in the pursuit of a vaginal birth and that the affected hospital failed to learn from repeated adverse outcomes. ## Section 2.2: Overview of Antenatal Care"
  },
  {
    id: 39,
    chapterId: 2,
    chapterName: "Antenatal Care",
    question: "What are the aims of antenatal care?",
    options: {
      A: "To perform surgery only",
      B: "To optimize pregnancy outcomes, prevent/detect/manage adverse factors, provide advice/education/support, deal with minor ailments, and provide general health screening",
      C: "To deliver babies only",
      D: "To provide medication only"
    },
    answer: "B",
    rationale: "The aims of antenatal care are to optimize pregnancy outcomes for parents and babies, prevent/detect/manage factors that adversely affect health, provide advice/reassurance/education/support, deal with minor ailments, and provide general health screening."
  },
  {
    id: 40,
    chapterId: 2,
    chapterName: "Antenatal Care",
    question: "In the UK, what type of care do women with low-risk pregnancies usually receive?",
    options: {
      A: "Consultant-led care only",
      B: "Community-based midwifery care",
      C: "No care at all",
      D: "Private care only"
    },
    answer: "B",
    rationale: "Those with low-risk pregnancies with no overtly complicating factors usually have community-based care and are said to be under midwifery care. Those with complex pregnancies have hospital-based obstetric team care (consultant care). A further group have shared care."
  },
  {
    id: 41,
    chapterId: 2,
    chapterName: "Antenatal Care",
    question: "What is the recommended total weight gain in pregnancy for women with normal BMI (18.5-24.9 kg/m\u00b2)?",
    options: {
      A: "5-9 kg",
      B: "7-11 kg",
      C: "11-16 kg",
      D: "20-25 kg"
    },
    answer: "C",
    rationale: "For those of normal weight (BMI 18.5-24.9 kg/m\u00b2), the recommended total weight gain in pregnancy is 11-16 kg (25-35 lb). For overweight (BMI 25-29.9 kg/m\u00b2), it is 7-11 kg; for obese (BMI \u226530 kg/m\u00b2), it is 5-9 kg."
  },
  {
    id: 42,
    chapterId: 2,
    chapterName: "Antenatal Care",
    question: "For women with BMI >30 kg/m\u00b2, what is the recommended folic acid dose?",
    options: {
      A: "400 mcg daily",
      B: "5 mg once daily",
      C: "No folic acid needed",
      D: "1 mg weekly"
    },
    answer: "B",
    rationale: "If BMI is >30 kg/m\u00b2, high-dose folic acid (5 mg once daily) is recommended pre-pregnancy and for the first 12 weeks' gestation. This is because the risk of neural tube defects is three times higher compared to BMI <30 kg/m\u00b2."
  },
  {
    id: 43,
    chapterId: 2,
    chapterName: "Antenatal Care",
    question: "Which of the following is NOT recommended dietary advice for optimal weight control in pregnancy?",
    options: {
      A: "Do not eat for two; maintain normal portion size",
      B: "Eat fibre-rich foods",
      C: "Dieting in pregnancy is recommended",
      D: "Eat at least five portions of fruit and vegetables each day"
    },
    answer: "C",
    rationale: "Dieting in pregnancy is not recommended, but controlling weight gain in pregnancy is. The RCOG advises maintaining normal portion size, eating fibre-rich foods, basing meals on starchy foods, restricting fried foods and high-sugar items, and eating at least five portions of fruit and vegetables daily."
  },
  {
    id: 44,
    chapterId: 2,
    chapterName: "Antenatal Care",
    question: "What is the recommended heart rate target zone for exercise in pregnancy for a 30-year-old woman?",
    options: {
      A: "140-155 bpm",
      B: "135-150 bpm",
      C: "130-145 bpm",
      D: "125-140 bpm"
    },
    answer: "C",
    rationale: "The RCOG provides modified heart rate target zones for exercise in pregnancy: <20 years: 140-155 bpm; 20-29 years: 135-150 bpm; 30-39 years: 130-145 bpm; >40 years: 125-140 bpm."
  },
  {
    id: 45,
    chapterId: 2,
    chapterName: "Antenatal Care",
    question: "According to the Birthplace Study (2011), what percentage of pregnant women in England and Wales opt to deliver at home?",
    options: {
      A: "Approximately 10%",
      B: "Approximately 2%",
      C: "Approximately 25%",
      D: "Approximately 50%"
    },
    answer: "B",
    rationale: "According to the Birthplace Study published in 2011, in England and Wales approximately 2% of pregnant women opt to deliver at home, cared for by a midwife."
  },
  {
    id: 46,
    chapterId: 2,
    chapterName: "Antenatal Care",
    question: "What is the approximate rate of adverse perinatal events per 1,000 births in first-time home births compared to hospital births?",
    options: {
      A: "9.3 vs 5.3",
      B: "5.3 vs 9.3",
      C: "2.0 vs 2.0",
      D: "15.0 vs 3.0"
    },
    answer: "A",
    rationale: "There is a poor perinatal outcome in approximately twice as many first-time home births than in those occurring in hospital (9.3 versus 5.3 adverse perinatal events per 1,000 births, respectively; adjusted odds ratio 1.75, 95% confidence interval 1.07-2.86)."
  },
  {
    id: 47,
    chapterId: 2,
    chapterName: "Antenatal Care",
    question: "What is the most effective intervention to improve rates of any breastfeeding?",
    options: {
      A: "Home visits only",
      B: "Baby-friendly hospital support in the health system",
      C: "Community support only",
      D: "No intervention needed"
    },
    answer: "B",
    rationale: "A recent systematic review demonstrated that the greatest improvements in initiation and continuation of breastfeeding were seen when education was provided concurrently across various settings. Baby-friendly hospital support in the health system was the most effective intervention to improve rates of any breastfeeding. ## Section 2.3: Booking Tests in Pregnancy"
  },
  {
    id: 48,
    chapterId: 2,
    chapterName: "Antenatal Care",
    question: "Which of the following is NOT a routine booking investigation?",
    options: {
      A: "Full blood count (FBC)",
      B: "Mid-stream urine (MSU)",
      C: "Blood group and antibody screen",
      D: "Bone density scan"
    },
    answer: "D",
    rationale: "Booking investigations include FBC, MSU, blood group and antibody screen, cffDNA (for fetal rhesus status in rhesus-negative pregnancies), haemoglobinopathy screening, infection screen (hepatitis B, syphilis, HIV, rubella status), and dating scan with first-trimester screening. Bone density scan is not a routine booking test."
  },
  {
    id: 49,
    chapterId: 2,
    chapterName: "Antenatal Care",
    question: "What is the definition of anaemia in pregnancy in the first trimester?",
    options: {
      A: "Haemoglobin <90 g/L",
      B: "Haemoglobin <110 g/L",
      C: "Haemoglobin <120 g/L",
      D: "Haemoglobin <100 g/L"
    },
    answer: "B",
    rationale: "Anaemia in pregnancy is defined as a haemoglobin (Hb) level of <110 g/L in the first trimester, <105 g/L in the second and third trimesters, and <100 g/L in the post-partum period."
  },
  {
    id: 50,
    chapterId: 2,
    chapterName: "Antenatal Care",
    question: "What is the first-line management for anaemia in pregnancy according to the British Society for Haematology?",
    options: {
      A: "Intravenous iron immediately",
      B: "Blood transfusion",
      C: "Trial of oral iron",
      D: "No treatment needed"
    },
    answer: "C",
    rationale: "In accordance with the recommendations of the British Society for Haematology, a trial of oral iron should be considered as the first-line management option for anaemia in pregnancy, with an increment demonstrated at 2 weeks confirming a positive response."
  },
  {
    id: 51,
    chapterId: 2,
    chapterName: "Antenatal Care",
    question: "For rhesus D-negative pregnant women, when is prophylactic anti-D administration offered?",
    options: {
      A: "12 weeks only",
      B: "20 weeks only",
      C: "28 weeks' gestation",
      D: "Only after delivery"
    },
    answer: "C",
    rationale: "Pregnant women who are rhesus D-negative are now offered prophylactic anti-D administration at 28 weeks' gestation. Antenatal anti-D immunoglobulin prophylaxis achieves a significant reduction in the incidence of sensitization to rhesus D due to occult sensitizing events."
  },
  {
    id: 52,
    chapterId: 2,
    chapterName: "Antenatal Care",
    question: "What is the minimum dose of anti-D immunoglobulin for potentially sensitizing events between 12 and 20 weeks' gestation?",
    options: {
      A: "50 IU",
      B: "100 IU",
      C: "250 IU",
      D: "500 IU"
    },
    answer: "C",
    rationale: "For potentially sensitizing events between 12 and 20 weeks' gestation, a minimum dose of 250 IU should be administered within 72 hours of the event and a test for feto-maternal haemorrhage is not required."
  },
  {
    id: 53,
    chapterId: 2,
    chapterName: "Antenatal Care",
    question: "What is the sensitivity and specificity of non-invasive prenatal testing (cffDNA) for fetal rhesus status?",
    options: {
      A: "50-60%",
      B: "70-80%",
      C: ">99%",
      D: "30-40%"
    },
    answer: "C",
    rationale: "Non-invasive prenatal testing of maternal blood for fetal rhesus status (determined by analysis of cffDNA) is >99% sensitive and specific for the prediction of fetal rhesus status. Knowing the fetal rhesus status allows for targeted anti-D administration only in pregnancies with rhesus-positive babies."
  },
  {
    id: 54,
    chapterId: 2,
    chapterName: "Antenatal Care",
    question: "Which ethnic group has a particularly common carrier rate for thalassaemia?",
    options: {
      A: "Northern European",
      B: "Southeast Asian, Mediterranean, North African, Middle Eastern, Indian and Asian origin",
      C: "Native American",
      D: "Australian Aboriginal"
    },
    answer: "B",
    rationale: "Although the thalassaemias can occur worldwide, the carrier rate is particularly common in people from Southeast Asia, and also affects those of Mediterranean, North African, Middle Eastern, Indian and Asian origin."
  },
  {
    id: 55,
    chapterId: 2,
    chapterName: "Antenatal Care",
    question: "What is the carrier rate for sickle cell trait (HbAS) among Afro-Caribbean people?",
    options: {
      A: "1 in 100",
      B: "1 in 10",
      C: "1 in 1000",
      D: "1 in 50"
    },
    answer: "B",
    rationale: "The carrier rate for sickle cell trait (HbAS) is approximately 1 in 10 among Afro-Caribbean people, but as high as 1 in 4 in people from West Africa."
  },
  {
    id: 56,
    chapterId: 2,
    chapterName: "Antenatal Care",
    question: "Why has routine rubella testing at booking been stopped in the UK?",
    options: {
      A: "Because it was too expensive",
      B: "Because rubella infection levels in the UK are so low that they are defined as eliminated by the WHO",
      C: "Because the test was inaccurate",
      D: "Because all women are already immune"
    },
    answer: "B",
    rationale: "Public Health England has recently stopped routine testing for rubella (from April 2016) on the grounds that rubella infection levels in the UK are so low that they are defined as eliminated by the WHO. The MMR immunization programme has demonstrated that over 90% of children aged up to 2 years had received at least one vaccination."
  },
  {
    id: 57,
    chapterId: 2,
    chapterName: "Antenatal Care",
    question: "What is the vertical transmission rate of hepatitis C in pregnancy?",
    options: {
      A: "Approximately 50%",
      B: "Approximately 5%",
      C: "Approximately 90%",
      D: "Approximately 0%"
    },
    answer: "B",
    rationale: "The risk of vertical transmission in pregnancy is approximately 5%, but this increases significantly to 36% if there is coinfection with HIV. Screening for hepatitis C may be offered to those at high risk, including those with current or previous intravenous drug use."
  },
  {
    id: 58,
    chapterId: 2,
    chapterName: "Antenatal Care",
    question: "What is the estimated HIV prevalence among pregnant women in the UK?",
    options: {
      A: "2 per 100",
      B: "2 per 1,000",
      C: "2 per 10,000",
      D: "2 per 100,000"
    },
    answer: "B",
    rationale: "The estimated HIV prevalence among pregnant women in the UK is 2 per 1,000. With appropriate interventions, the risk of transmission to the neonate is as low as 0.1%."
  },
  {
    id: 59,
    chapterId: 2,
    chapterName: "Antenatal Care",
    question: "What is the optimal timing for first-trimester ultrasound dating and screening?",
    options: {
      A: "8-10 weeks",
      B: "11+3 to 13+6 weeks",
      C: "15-18 weeks",
      D: "20-22 weeks"
    },
    answer: "B",
    rationale: "The dating scan and first-trimester screening is best performed between 11+3 and 13+6 weeks' gestation, when the crown-rump length (CRL) measures between 45 and 84 mm. Beyond 20 weeks, dating becomes progressively less accurate."
  },
  {
    id: 60,
    chapterId: 2,
    chapterName: "Antenatal Care",
    question: "What is the detection rate for trisomy 21 using first-trimester combined screening?",
    options: {
      A: "Approximately 50%",
      B: "Approximately 70%",
      C: "Approximately 90%",
      D: "Approximately 100%"
    },
    answer: "C",
    rationale: "Using an algorithm based on nuchal translucency, maternal free beta-hCG, and PAPP-A, the detection rate for trisomy 21 is approximately 90%. The false-positive rate can be reduced to 3% by additionally examining the nasal bone, ductus venosus flow, and tricuspid flow, giving a detection rate of approximately 95%. ## Section 2.4: Identification of High-Risk Pregnancies"
  },
  {
    id: 61,
    chapterId: 2,
    chapterName: "Antenatal Care",
    question: "According to NICE, which pregnant women should have low-dose aspirin initiated early in pregnancy?",
    options: {
      A: "All pregnant women",
      B: "Only those with previous pre-eclampsia",
      C: "Those at high risk of pre-eclampsia (hypertensive disease in previous pregnancy, chronic kidney disease, autoimmune disease, diabetes, chronic hypertension) or with two or more moderate risk factors",
      D: "Only women over 40 years"
    },
    answer: "C",
    rationale: "NICE recommends that pregnant women at high risk of pre-eclampsia should have low-dose aspirin (75-150 mg) initiated early in pregnancy until delivery. High risk includes hypertensive disease in previous pregnancy, chronic kidney disease, autoimmune disease, type 1 or 2 diabetes, and chronic hypertension. Those with two or more moderate risk factors should also commence aspirin."
  },
  {
    id: 62,
    chapterId: 2,
    chapterName: "Antenatal Care",
    question: "Which of the following is a moderate risk factor for pre-eclampsia?",
    options: {
      A: "Previous uncomplicated pregnancy",
      B: "BMI <20 kg/m\u00b2",
      C: "Primiparity, advanced age (>40 years), pregnancy interval >10 years, BMI \u226535 kg/m\u00b2, family history of pre-eclampsia, multifetal pregnancy",
      D: "Young age (<18 years) only"
    },
    answer: "C",
    rationale: "Moderate risk factors for pre-eclampsia include primiparity, advanced age (>40 years), pregnancy interval of more than 10 years, BMI \u226535 kg/m\u00b2 at booking visit, family history of pre-eclampsia, and multifetal pregnancy."
  },
  {
    id: 63,
    chapterId: 2,
    chapterName: "Antenatal Care",
    question: "When should pregnant women with a previous history of gestational diabetes mellitus (GDM) have an oral glucose tolerance test (OGTT)?",
    options: {
      A: "Only at 24-28 weeks",
      B: "At 16-18 weeks and repeated at 24-28 weeks if normal",
      C: "Only in the third trimester",
      D: "Only postpartum"
    },
    answer: "B",
    rationale: "Pregnant women with a previous history of GDM should have an OGTT at 16-18 weeks' gestation. The test should be repeated at 24-28 weeks if the first test is normal. Those with risk factors should be offered OGTT at 24-28 weeks."
  },
  {
    id: 64,
    chapterId: 2,
    chapterName: "Antenatal Care",
    question: "What is the diagnostic criterion for GDM using fasting plasma glucose?",
    options: {
      A: "\u22657.0 mmol/L",
      B: "\u22655.6 mmol/L",
      C: "\u226511.1 mmol/L",
      D: "\u22653.5 mmol/L"
    },
    answer: "B",
    rationale: "GDM is diagnosed if the fasting plasma glucose level is 5.6 mmol/L or above, or a 2-hour plasma glucose level is 7.8 mmol/L or above."
  },
  {
    id: 65,
    chapterId: 2,
    chapterName: "Antenatal Care",
    question: "What daily vitamin D supplementation is recommended for all pregnant and breastfeeding women according to NICE?",
    options: {
      A: "5 mcg",
      B: "10 mcg",
      C: "25 mcg",
      D: "50 mcg"
    },
    answer: "B",
    rationale: "NICE guidance states that all pregnant and breastfeeding women should be advised to take 10 mcg of vitamin D supplements daily. Severe vitamin D deficiency in pregnancy results in increased risk of neonatal complications."
  },
  {
    id: 66,
    chapterId: 2,
    chapterName: "Antenatal Care",
    question: "Which organization is responsible for developing standards and strategies for antenatal screening implementation in the UK?",
    options: {
      A: "NICE only",
      B: "The National Screening Committee",
      C: "RCOG only",
      D: "WHO only"
    },
    answer: "B",
    rationale: "The National Screening Committee is responsible for developing standards and strategies for the implementation of antenatal screening. It has unified and progressed standards for all aspects of antenatal screening across the UK. --- # \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550"
  },
  {
    id: 67,
    chapterId: 3,
    chapterName: "Normal Fetal Development and Growth",
    question: "What does the Developmental Origins of Health and Disease (DOHaD) hypothesis describe?",
    options: {
      A: "That fetal growth has no impact on adult health",
      B: "That reduced fetal growth is strongly associated with chronic conditions later in life including coronary heart disease, stroke, diabetes, and hypertension",
      C: "That only genetics determine adult health",
      D: "That maternal diet has no effect on fetal growth"
    },
    answer: "B",
    rationale: "The DOHaD hypothesis describes that reduced fetal growth is strongly associated with a number of chronic conditions later in life. This increased susceptibility results from adaptations made by the fetus in an environment with limited nutrient supply."
  },
  {
    id: 68,
    chapterId: 3,
    chapterName: "Normal Fetal Development and Growth",
    question: "",
    options: {
      A: "Appropriate for gestational age",
      B: "Small for gestational age (SGA)",
      C: "Large for gestational age",
      D: "Macrosomic"
    },
    answer: "B",
    rationale: "A fetus that is less than the 10th centile is described as being small for gestational age (SGA). This is a statistical concept designed to categorize on size but not necessarily on neonatal outcome. An SGA fetus may be constitutionally small or may have fetal growth restriction (FGR)."
  },
  {
    id: 69,
    chapterId: 3,
    chapterName: "Normal Fetal Development and Growth",
    question: "What is the key difference between SGA and fetal growth restriction (FGR)?",
    options: {
      A: "SGA is always pathological while FGR is normal",
      B: "SGA is a statistical concept based on size, while FGR represents failure to reach full growth potential with increased risk of perinatal morbidity and mortality",
      C: "There is no difference",
      D: "FGR is larger than SGA"
    },
    answer: "B",
    rationale: "SGA is a statistical concept (size <10th centile) but not necessarily pathological. Many SGA fetuses are constitutionally small. FGR represents failure to reach full growth potential and is associated with significant increased risk of perinatal morbidity and mortality, including intrauterine hypoxia, stillbirth, and hypoxic-ischaemic encephalopathy."
  },
  {
    id: 70,
    chapterId: 3,
    chapterName: "Normal Fetal Development and Growth",
    question: "Which of the following is a fetal genetic factor associated with early-onset severe fetal growth restriction?",
    options: {
      A: "Trisomy 21 (Down syndrome) only",
      B: "Trisomy 13 (Patau syndrome), Trisomy 18 (Edwards syndrome), triploidy, and Trisomy 21",
      C: "Only Trisomy 18",
      D: "None of the above"
    },
    answer: "B",
    rationale: "Early-onset and sometimes severe FGR is seen in fetuses with chromosomal defects such as trisomy 13 (Patau syndrome), trisomy 18 (Edwards syndrome), triploidy, and trisomy 21 (Down syndrome)."
  },
  {
    id: 71,
    chapterId: 3,
    chapterName: "Normal Fetal Development and Growth",
    question: "In genomic imprinting, which parental genes tend to promote fetal growth?",
    options: {
      A: "Maternal genes",
      B: "Paternal genes",
      C: "Both equally",
      D: "Neither"
    },
    answer: "B",
    rationale: "In genomic imprinting, the epigenetic process silences one parental allele, resulting in monoallelic expression. Genes that are paternally expressed tend to promote fetal growth, whereas maternally expressed genes suppress growth."
  },
  {
    id: 72,
    chapterId: 3,
    chapterName: "Normal Fetal Development and Growth",
    question: "Which maternal behavioural factor is associated with the GREATEST reduction in birthweight?",
    options: {
      A: "Smoking (up to 300g reduction)",
      B: "Alcohol (up to 500g reduction with heavy drinking)",
      C: "Recreational drug use",
      D: "All have equal effects"
    },
    answer: "B",
    rationale: "Alcohol crosses the placenta, and a dose-related effect has been noted, with up to a 500g reduction in birthweight in those who drink heavily (two drinks per day). Smoking is associated with up to 300g reduction. Both are significant, but heavy alcohol use can cause greater reduction and other anomalies such as developmental delay."
  },
  {
    id: 73,
    chapterId: 3,
    chapterName: "Normal Fetal Development and Growth",
    question: "Which maternal chronic disease can lead to placental infarction and impaired placental function?",
    options: {
      A: "Hypertension",
      B: "Mild asthma",
      C: "Seasonal allergies",
      D: "Previous appendectomy"
    },
    answer: "A",
    rationale: "Chronic maternal diseases that affect placental function or result in maternal hypoxia can restrict fetal growth. Hypertension can lead to placental infarction that impairs placental function. Other conditions include lung or cardiac conditions (cystic fibrosis, cyanotic heart disease). ## Section 3.2: Fetal Development - Cardiovascular System"
  },
  {
    id: 74,
    chapterId: 3,
    chapterName: "Normal Fetal Development and Growth",
    question: "How many umbilical arteries are normally present?",
    options: {
      A: "One",
      B: "Two",
      C: "Three",
      D: "Four"
    },
    answer: "B",
    rationale: "Normally, two umbilical arteries are present, but a single umbilical artery is relatively common (approximately 0.5% of fetuses) and can be associated with reduced fetal growth velocity and some congenital anomalies."
  },
  {
    id: 75,
    chapterId: 3,
    chapterName: "Normal Fetal Development and Growth",
    question: "What percentage of blood from the left ventricle goes to the head and upper extremities in fetal circulation?",
    options: {
      A: "10%",
      B: "25%",
      C: "50%",
      D: "75%"
    },
    answer: "C",
    rationale: "About 50% of the blood from the left ventricle goes to the head and upper extremities, providing high levels of oxygen to supply the fetal heart, upper thorax and brain. The remainder passes down the aorta to mix with blood of reduced oxygen saturation from the right ventricle."
  },
  {
    id: 76,
    chapterId: 3,
    chapterName: "Normal Fetal Development and Growth",
    question: "What keeps the ductus arteriosus patent prior to birth?",
    options: {
      A: "High oxygen levels",
      B: "Prostaglandin E2 and prostacyclin acting as local vasodilators",
      C: "Maternal hormones",
      D: "Low blood pressure"
    },
    answer: "B",
    rationale: "Prior to birth, the ductus arteriosus remains patent due to the production of prostaglandin E2 and prostacyclin, which act as local vasodilators. Premature closure has been reported with maternal administration of cyclooxygenase inhibitors before birth."
  },
  {
    id: 77,
    chapterId: 3,
    chapterName: "Normal Fetal Development and Growth",
    question: "What happens to the foramen ovale at birth?",
    options: {
      A: "It remains permanently open",
      B: "It closes immediately due to increased pressure in the left atrium from pulmonary blood flow",
      C: "It is surgically closed",
      D: "It never existed"
    },
    answer: "B",
    rationale: "At birth, ventilation of the lungs opens the pulmonary circulation, with a rapid fall in pulmonary vascular resistance, which dramatically increases pulmonary blood flow. A consequent increased pressure in the left atrium leads to closure of the foramen ovale."
  },
  {
    id: 78,
    chapterId: 3,
    chapterName: "Normal Fetal Development and Growth",
    question: "What is \"persistent fetal circulation\"?",
    options: {
      A: "Normal transition to adult circulation",
      B: "Delayed transition where pulmonary vascular resistance fails to fall despite adequate breathing, resulting in left-to-right shunting and cyanosis",
      C: "Immediate closure of all fetal shunts",
      D: "A normal variant in term infants"
    },
    answer: "B",
    rationale: "Persistent fetal circulation is a delay in transition from fetal to adult circulation, usually because pulmonary vascular resistance fails to fall despite adequate breathing. This results in left-to-right shunting of blood from the aorta through the ductus arteriosus to the lungs. The baby remains cyanosed and can suffer from life-threatening hypoxia."
  },
  {
    id: 79,
    chapterId: 3,
    chapterName: "Normal Fetal Development and Growth",
    question: "Which complication is most commonly associated with delayed closure of the ductus arteriosus in preterm infants?",
    options: {
      A: "Jaundice",
      B: "Necrotizing enterocolitis and intraventricular haemorrhage",
      C: "Constipation",
      D: "Normal development"
    },
    answer: "B",
    rationale: "Delay in closure of the ductus arteriosus is most commonly seen in infants born preterm (<37 weeks' gestation). It results in congestion in the pulmonary circulation and a reduction in blood flow to the gastrointestinal tract and brain, and is implicated in the pathogenesis of necrotizing enterocolitis and intraventricular haemorrhage. ## Section 3.3: Respiratory System"
  },
  {
    id: 80,
    chapterId: 3,
    chapterName: "Normal Fetal Development and Growth",
    question: "At what gestation do type I and II epithelial cells begin to differentiate in the fetal lungs?",
    options: {
      A: "12 weeks",
      B: "20 weeks",
      C: "26 weeks",
      D: "36 weeks"
    },
    answer: "C",
    rationale: "By 26 weeks, with further development of the airway and vascular tree, type I and II epithelial cells are beginning to differentiate. Pulmonary surfactant is produced by the type II cells starting from about 30 weeks."
  },
  {
    id: 81,
    chapterId: 3,
    chapterName: "Normal Fetal Development and Growth",
    question: "What is the predominant phospholipid in pulmonary surfactant?",
    options: {
      A: "Phosphatidylserine",
      B: "Phosphatidylcholine (lecithin)",
      C: "Phosphatidylinositol",
      D: "Sphingomyelin"
    },
    answer: "B",
    rationale: "The predominant phospholipid in surfactant (80% of the total) is phosphatidylcholine (lecithin). Its production is enhanced by cortisol, growth restriction, and prolonged rupture of membranes, and is delayed in maternal diabetes mellitus."
  },
  {
    id: 82,
    chapterId: 3,
    chapterName: "Normal Fetal Development and Growth",
    question: "At what gestation does respiratory distress syndrome (RDS) occur in more than 80% of infants?",
    options: {
      A: "28-30 weeks",
      B: "23-27 weeks",
      C: "34-36 weeks",
      D: "38-40 weeks"
    },
    answer: "B",
    rationale: "RDS occurs in more than 80% of infants born between 23 and 27 weeks, falling to 10% of infants born between 34 and 36 weeks. It is due to surfactant deficiency."
  },
  {
    id: 83,
    chapterId: 3,
    chapterName: "Normal Fetal Development and Growth",
    question: "How can the incidence and severity of RDS be reduced in anticipated preterm delivery?",
    options: {
      A: "By administering steroids antenatally to the mother 12-24 hours before delivery",
      B: "By giving antibiotics only",
      C: "By performing immediate caesarean section",
      D: "By giving oxygen to the mother only"
    },
    answer: "A",
    rationale: "The incidence and severity of RDS can be reduced by administering steroids antenatally to mothers 12-24 hours before they deliver preterm. The steroids cross the placenta and stimulate the premature release of stored fetal pulmonary surfactant in the fetal lungs."
  },
  {
    id: 84,
    chapterId: 3,
    chapterName: "Normal Fetal Development and Growth",
    question: "What is the role of fetal breathing movements (FBMs) in lung development?",
    options: {
      A: "They have no function",
      B: "They help maintain high lung expansion essential for normal growth and structural maturation",
      C: "They only prepare for birth",
      D: "They are a sign of distress"
    },
    answer: "B",
    rationale: "Numerous, but intermittent, fetal breathing movements occur in utero, especially during REM sleep. By opposing lung recoil, FBM helps to maintain the high level of lung expansion that is essential for normal growth and structural maturation of the fetal lungs. ## Section 3.4: Alimentary System"
  },
  {
    id: 85,
    chapterId: 3,
    chapterName: "Normal Fetal Development and Growth",
    question: "At what gestation does the midgut return to the abdominal cavity after physiological herniation?",
    options: {
      A: "8 weeks",
      B: "10 weeks",
      C: "12 weeks",
      D: "16 weeks"
    },
    answer: "C",
    rationale: "Between 5 and 6 weeks, the midgut is extruded into the umbilical cord as a physiological hernia. The gut undergoes a 270\u00b0 anticlockwise rotation prior to re-entering the abdominal cavity by 12 weeks' gestation. Failure to re-enter results in omphalocele."
  },
  {
    id: 86,
    chapterId: 3,
    chapterName: "Normal Fetal Development and Growth",
    question: "What condition results from failure of the gut to re-enter the abdominal cavity after physiological herniation?",
    options: {
      A: "Normal variant",
      B: "Omphalocele (exomphalos)",
      C: "Intussusception",
      D: "Normal gut rotation"
    },
    answer: "B",
    rationale: "Failure of the gut to re-enter the abdominal cavity results in the development of an omphalocele (otherwise called an exomphalos). This condition is associated with chromosomal anomalies."
  },
  {
    id: 87,
    chapterId: 3,
    chapterName: "Normal Fetal Development and Growth",
    question: "What is the most common type of gastrointestinal fistula?",
    options: {
      A: "Colovesical fistula",
      B: "Tracheo-oesophageal fistula",
      C: "Rectovaginal fistula",
      D: "Enterocutaneous fistula"
    },
    answer: "B",
    rationale: "The most common gastrointestinal fistula is a tracheo-oesophageal fistula, in which a connection exists between the distal end of the oesophagus and the trachea. Without surgical intervention, the neonate can develop complications after birth."
  },
  {
    id: 88,
    chapterId: 3,
    chapterName: "Normal Fetal Development and Growth",
    question: "What is VACTERL association?",
    options: {
      A: "A type of cardiac surgery",
      B: "A group of congenital anomalies including vertebral, anal, cardiac, tracheal, (o)esophageal, renal and limb anomalies",
      C: "A genetic test",
      D: "A type of prenatal vitamin"
    },
    answer: "B",
    rationale: "VACTERL refers to vertebral, anal, cardiac, tracheal, (o)esophageal, renal and limb anomalies. Some babies with tracheo-oesophageal fistula also have other congenital anomalies, known as VACTERL association."
  },
  {
    id: 89,
    chapterId: 3,
    chapterName: "Normal Fetal Development and Growth",
    question: "Why does duodenal atresia cause polyhydramnios?",
    options: {
      A: "It increases fetal urine production",
      B: "It prevents passage of amniotic fluid along the gut, leading to accumulation",
      C: "It decreases fetal swallowing",
      D: "It has no effect on amniotic fluid"
    },
    answer: "B",
    rationale: "As the fetus continually swallows amniotic fluid, any obstruction that prevents fetal swallowing or passage of amniotic fluid along the gut will result in the development of polyhydramnios (excess amniotic fluid). Duodenal atresia prevents passage of fluid beyond the obstruction. ## Section 3.5: Kidney and Urinary Tract"
  },
  {
    id: 90,
    chapterId: 3,
    chapterName: "Normal Fetal Development and Growth",
    question: "What is the most common site of congenital urinary tract obstructive uropathies?",
    options: {
      A: "At the urethral meatus",
      B: "At the pyeloureteric junction, vesicoureteric junction, or posterior urethral valves",
      C: "At the bladder neck only",
      D: "In the renal pelvis only"
    },
    answer: "B",
    rationale: "The most common sites of congenital urinary tract obstructive uropathies are at the pyeloureteric junction, at the vesicoureteric junction, or as a consequence of posterior urethral valves, an obstructing membrane in the posterior male urethra."
  },
  {
    id: 91,
    chapterId: 3,
    chapterName: "Normal Fetal Development and Growth",
    question: "What is the \"keyhole sign\" on ultrasound?",
    options: {
      A: "Normal bladder appearance",
      B: "Dilated upper posterior urethra and bladder in posterior urethral valves",
      C: "Normal kidney appearance",
      D: "Sign of normal amniotic fluid"
    },
    answer: "B",
    rationale: "The \"keyhole sign\" is seen in posterior urethral valves, where there is a dilated upper posterior urethra (the \"keyhole\") and an enlarged, thick-walled bladder. This is the most common congenital cause of bladder outflow obstruction in male neonates."
  },
  {
    id: 92,
    chapterId: 3,
    chapterName: "Normal Fetal Development and Growth",
    question: "What is Potter syndrome?",
    options: {
      A: "A type of cardiac anomaly",
      B: "Bilateral renal agenesis associated with oligohydramnios/anhydramnios, characteristic facies, and pulmonary hypoplasia",
      C: "A neurological condition",
      D: "A type of skin disorder"
    },
    answer: "B",
    rationale: "Potter syndrome is bilateral renal agenesis, which results in severe reduction or absence of amniotic fluid (oligohydramnios/anhydramnios). It is associated with other features such as widely spaced eyes, small jaw, and low-set ears (secondary to oligohydramnios). Babies do not pass urine and usually die from renal failure or pulmonary hypoplasia. ## Section 3.6: Blood and Immune System"
  },
  {
    id: 93,
    chapterId: 3,
    chapterName: "Normal Fetal Development and Growth",
    question: "What is the predominant haemoglobin in the fetus between 10 and 28 weeks of gestation?",
    options: {
      A: "HbA (adult haemoglobin)",
      B: "HbF (fetal haemoglobin)",
      C: "HbS (sickle haemoglobin)",
      D: "HbC"
    },
    answer: "B",
    rationale: "Ninety percent of haemoglobin in the fetus is HbF between 10 and 28 weeks of gestation. From 28 to 34 weeks, a switch to HbA occurs. At term, the ratio of HbF to HbA is 80:20."
  },
  {
    id: 94,
    chapterId: 3,
    chapterName: "Normal Fetal Development and Growth",
    question: "What is a key feature of fetal haemoglobin (HbF)?",
    options: {
      A: "Lower affinity for oxygen than HbA",
      B: "Higher affinity for oxygen than HbA, enhancing transfer of oxygen across the placenta",
      C: "Same affinity for oxygen as HbA",
      D: "No affinity for oxygen"
    },
    answer: "B",
    rationale: "A key feature of HbF is a higher affinity for oxygen than HbA. This, in association with a higher haemoglobin concentration (at birth, the mean capillary haemoglobin is 18 g/dL), enhances transfer of oxygen across the placenta."
  },
  {
    id: 95,
    chapterId: 3,
    chapterName: "Normal Fetal Development and Growth",
    question: "What is the most serious form of sickle cell disease?",
    options: {
      A: "HbAS (sickle cell trait)",
      B: "HbSC (sickle cell/haemoglobin C disease)",
      C: "HbSS (homozygous sickle cell disease)",
      D: "HbAC (haemoglobin C trait)"
    },
    answer: "C",
    rationale: "Homozygous sickle cell disease (HbSS) is the most serious form of the disease. These individuals have chronic haemolytic anaemia and suffer from sickle cell crisis, which may be precipitated by infection. ## Section 3.7: Amniotic Fluid"
  },
  {
    id: 96,
    chapterId: 3,
    chapterName: "Normal Fetal Development and Growth",
    question: "What is the approximate volume of amniotic fluid at 38 weeks gestation?",
    options: {
      A: "100 mL",
      B: "300 mL",
      C: "600 mL",
      D: "1,000 mL"
    },
    answer: "D",
    rationale: "Amniotic fluid volume increases progressively: 10 weeks (30 mL), 20 weeks (300 mL), 30 weeks (600 mL), 38 weeks (1,000 mL). From term there is a rapid fall: 40 weeks (800 mL), 42 weeks (350 mL)."
  },
  {
    id: 97,
    chapterId: 3,
    chapterName: "Normal Fetal Development and Growth",
    question: "What is the function of amniotic fluid?",
    options: {
      A: "Only to provide nutrition",
      B: "To protect from mechanical injury, permit movement, prevent adhesions, and permit fetal lung development",
      C: "Only to maintain temperature",
      D: "No function"
    },
    answer: "B",
    rationale: "The function of amniotic fluid is to protect the fetus from mechanical injury, permit movement while preventing limb contracture, prevent adhesions between the fetus and amnion, and permit fetal lung development. Absence of amniotic fluid in the second trimester is associated with pulmonary hypoplasia."
  },
  {
    id: 98,
    chapterId: 3,
    chapterName: "Normal Fetal Development and Growth",
    question: "What causes polyhydramnios?",
    options: {
      A: "Reduced fetal swallowing or obstruction preventing passage of amniotic fluid along the gut",
      B: "Increased fetal urine production only",
      C: "Normal variant in all pregnancies",
      D: "Maternal dehydration"
    },
    answer: "A",
    rationale: "Polyhydramnios (excess amniotic fluid) occurs when there is reduced removal of fluid in conditions such as congenital neuromuscular disorders, anencephaly, and oesophageal/duodenal atresia, which prevent fetal swallowing or passage of fluid along the gut. ## Section 3.8: Case Histories and Self-Assessment"
  },
  {
    id: 99,
    chapterId: 3,
    chapterName: "Normal Fetal Development and Growth",
    question: "",
    options: {
      A: "Only jaundice",
      B: "Multiple complications including RDS, hypoglycaemia, patent ductus arteriosus, intraventricular haemorrhage, and infection",
      C: "No complications",
      D: "Only feeding problems"
    },
    answer: "B",
    rationale: "A premature infant at 28 weeks is at risk of multiple complications: deficient glycogen stores (hypoglycaemia), patent ductus arteriosus, RDS and apnoea of prematurity, anaemia of prematurity, increased infection susceptibility, jaundice, immature kidneys (electrolyte disturbances), and periventricular/intraventricular haemorrhages."
  },
  {
    id: 100,
    chapterId: 3,
    chapterName: "Normal Fetal Development and Growth",
    question: "",
    options: {
      A: "Normal variant",
      B: "Posterior urethral valves",
      C: "Duodenal atresia",
      D: "Renal agenesis"
    },
    answer: "B",
    rationale: "The likely diagnosis is posterior urethral valves, which is the most common congenital cause of bladder outflow obstruction in male neonates (1 in 5,000 live male births). It is caused by an obstructing membrane in the posterior male urethra. Key features include the \"keyhole\" sign, enlarged bladder, and bilateral hydroureteronephrosis."
  },
  {
    id: 101,
    chapterId: 3,
    chapterName: "Normal Fetal Development and Growth",
    question: "",
    options: {
      A: "Posterior urethral valves",
      B: "Duodenal atresia",
      C: "Normal pregnancy",
      D: "Fetal growth restriction"
    },
    answer: "B",
    rationale: "The \"double bubble\" appearance is characteristic of duodenal atresia (congenital absence or complete closure of a portion of the duodenum). It occurs in 1:2,500-5,000 live births. In 25-40% of cases, there is associated trisomy 21 (Down syndrome). Polyhydramnios is present because the obstruction prevents passage of amniotic fluid along the gut."
  },
  {
    id: 102,
    chapterId: 3,
    chapterName: "Normal Fetal Development and Growth",
    question: "What is the approximate incidence of duodenal atresia?",
    options: {
      A: "1:500 live births",
      B: "1:2,500-5,000 live births",
      C: "1:50,000 live births",
      D: "1:100,000 live births"
    },
    answer: "B",
    rationale: "Duodenal atresia occurs in 1:2,500-5,000 live births. In 25-40% of cases, there is associated trisomy 21 (Down syndrome)."
  },
  {
    id: 103,
    chapterId: 3,
    chapterName: "Normal Fetal Development and Growth",
    question: "In cases of mild polyhydramnios (single deepest pool 8-11 cm), what percentage have an underlying disease?",
    options: {
      A: "91%",
      B: "17%",
      C: "50%",
      D: "100%"
    },
    answer: "B",
    rationale: "An underlying disease is only found in 17% of cases in mild polyhydramnios. In contrast, an underlying disease is detected in 91% of cases in moderate (12-15 cm) to severe polyhydramnios (>15 cm)."
  },
  {
    id: 104,
    chapterId: 3,
    chapterName: "Normal Fetal Development and Growth",
    question: "What is the role of peripartum magnesium sulphate in preterm labour?",
    options: {
      A: "To treat maternal hypertension only",
      B: "To reduce the risk of cerebral palsy in infants born between 24+0 and 29+6 weeks",
      C: "To induce labour",
      D: "To prevent postpartum haemorrhage"
    },
    answer: "B",
    rationale: "The administration of peripartum magnesium sulphate reduces the risk of cerebral palsy and is recommended for pregnant women between 24+0 and 29+6 weeks of pregnancy who are in established preterm labour or having a planned preterm birth."
  },
  {
    id: 105,
    chapterId: 3,
    chapterName: "Normal Fetal Development and Growth",
    question: "Which of the following is NOT a cause of pulmonary hypoplasia?",
    options: {
      A: "Reduced or absent fetal breathing movements",
      B: "Bilateral congenital renal agenesis (Potter syndrome)",
      C: "Congenital diaphragmatic hernia",
      D: "Normal amniotic fluid volume"
    },
    answer: "D",
    rationale: "Causes of pulmonary hypoplasia include reduced or absent fetal breathing movements (inherited neuromuscular disorders), reduced or absent amniotic fluid (oligohydramnios/anhydramnios from Potter syndrome, PPROM <24 weeks, lower urinary tract obstruction), and decreased intrathoracic space (congenital diaphragmatic hernia, CCAM, skeletal dysplasia). Normal amniotic fluid volume is protective, not causative."
  },
  {
    id: 106,
    chapterId: 3,
    chapterName: "Normal Fetal Development and Growth",
    question: "At what gestation does the liver perform haematopoiesis, peaking at what gestation?",
    options: {
      A: "6 weeks, peaking at 12-16 weeks",
      B: "12 weeks, peaking at 20-24 weeks",
      C: "20 weeks, peaking at 28-32 weeks",
      D: "28 weeks, peaking at 36 weeks"
    },
    answer: "A",
    rationale: "By the sixth week, the fetal liver performs haematopoiesis. This peaks at 12-16 weeks and continues until approximately 36 weeks."
  },
  {
    id: 107,
    chapterId: 3,
    chapterName: "Normal Fetal Development and Growth",
    question: "What is the approximate ratio of HbF to HbA at term?",
    options: {
      A: "20:80",
      B: "50:50",
      C: "80:20",
      D: "95:5"
    },
    answer: "C",
    rationale: "At term, the ratio of HbF to HbA is 80:20. By 6 months of age, only 1% of haemoglobin is HbF. The switch from HbF to HbA occurs between 28 and 34 weeks."
  },
  {
    id: 108,
    chapterId: 3,
    chapterName: "Normal Fetal Development and Growth",
    question: "Which fetal behavioural state is characterized by quiescence (similar to quiet or non-REM sleep in the neonate)?",
    options: {
      A: "2F",
      B: "1F",
      C: "3F",
      D: "4F"
    },
    answer: "B",
    rationale: "Four fetal behavioural states have been described: 1F is quiescence (similar to quiet or non-REM sleep), 2F is characterized by frequent gross body movements with eye movements (REM sleep), 3F is quiet wakefulness, and 4F is active wakefulness."
  },
  {
    id: 109,
    chapterId: 3,
    chapterName: "Normal Fetal Development and Growth",
    question: "What is the approximate amniotic fluid volume at 20 weeks gestation?",
    options: {
      A: "30 mL",
      B: "300 mL",
      C: "600 mL",
      D: "1,000 mL"
    },
    answer: "B",
    rationale: "Amniotic fluid volume increases progressively: 10 weeks (30 mL), 20 weeks (300 mL), 30 weeks (600 mL), 38 weeks (1,000 mL)."
  },
  {
    id: 110,
    chapterId: 3,
    chapterName: "Normal Fetal Development and Growth",
    question: "What is the primary cause of physiological jaundice in the newborn?",
    options: {
      A: "Excessive red blood cell production",
      B: "Loss of placental route of excretion of unconjugated bilirubin combined with reduced conjugating enzyme activity in the liver, particularly in premature infants",
      C: "Maternal diabetes",
      D: "Fetal infection"
    },
    answer: "B",
    rationale: "After birth, the loss of the placental route of excretion of unconjugated bilirubin, in the presence of reduced conjugation (particularly in the premature infant due to relative deficiencies in glucuronyl transferase), may result in transient unconjugated hyperbilirubinaemia or physiological jaundice of the newborn. --- ##"
  },
  {
    id: 111,
    chapterId: 4,
    chapterName: "Assessment of Fetal Well-being",
    question: "Professor Ian Donald, who first noted that clear echoes could be obtained from the fetal head using ultrasound in 1959, held which position at Glasgow University?",
    options: {
      A: "Regius Chair of Surgery",
      B: "Regius Chair of Midwifery",
      C: "Chair of Medical Physics",
      D: "Chair of Radiology"
    },
    answer: "B",
    rationale: "** In 1959, Professor Ian Donald, the Regius Chair of Midwifery at Glasgow University, noted that clear echoes could be obtained from the fetal head using ultrasound."
  },
  {
    id: 112,
    chapterId: 4,
    chapterName: "Assessment of Fetal Well-being",
    question: "Diagnostic ultrasound in obstetrics uses very high-frequency sound waves in which range?",
    options: {
      A: "1.0-2.5 MHz",
      B: "2.5-3.5 MHz",
      C: "3.5-7.0 MHz",
      D: "8.0-12.0 MHz"
    },
    answer: "C",
    rationale: "** The ultrasound technique uses very high-frequency sound waves of between 3.5 and 7.0 MHz."
  },
  {
    id: 113,
    chapterId: 4,
    chapterName: "Assessment of Fetal Well-being",
    question: "Transvaginal ultrasonography is particularly useful in which of the following situations?",
    options: {
      A: "Routine fetal anomaly screening at 20 weeks",
      B: "Measuring fundal height in the third trimester",
      C: "Early pregnancy, examining the cervix, and in patients with significant abdominal adipose tissue",
      D: "Assessing fetal lung maturity"
    },
    answer: "C",
    rationale: "** Transvaginal ultrasonography is useful in early pregnancy, for examining the cervix later in pregnancy, for identifying the lower edge of the placenta, and in early pregnancy in individuals with significant amounts of abdominal adipose tissue."
  },
  {
    id: 114,
    chapterId: 4,
    chapterName: "Assessment of Fetal Well-being",
    question: "The ALARA principle in obstetric ultrasound stands for:",
    options: {
      A: "Always Locate All Relevant Anatomy",
      B: "As Low As Reasonably Achievable",
      C: "Automated Linear Array Resolution Algorithm",
      D: "Acoustic Limiting And Radiation Assessment"
    },
    answer: "B",
    rationale: "** ALARA stands for \"as low as reasonably achievable,\" a practice mandate to keep radiation doses to patients and personnel as low as possible."
  },
  {
    id: 115,
    chapterId: 4,
    chapterName: "Assessment of Fetal Well-being",
    question: "The gestational sac can be visualized by transvaginal ultrasound as early as:",
    options: {
      A: "2-3 weeks' gestation",
      B: "4-5 weeks' gestation",
      C: "6-7 weeks' gestation",
      D: "8-9 weeks' gestation"
    },
    answer: "B",
    rationale: "** The gestational sac can be visualized from as early as 4-5 weeks' gestation."
  },
  {
    id: 116,
    chapterId: 4,
    chapterName: "Assessment of Fetal Well-being",
    question: "Beating of the fetal heart can usually be visualized by ultrasound by approximately:",
    options: {
      A: "4 weeks",
      B: "5 weeks",
      C: "6 weeks",
      D: "8 weeks"
    },
    answer: "C",
    rationale: "** Beating of the fetal heart can be visualized by about 6 weeks."
  },
  {
    id: 117,
    chapterId: 4,
    chapterName: "Assessment of Fetal Well-being",
    question: "Up to 13 weeks + 6 days, which measurement is preferred for determining gestational age?",
    options: {
      A: "Biparietal diameter (BPD)",
      B: "Head circumference (HC)",
      C: "Crown-rump length (CRL)",
      D: "Femur length (FL)"
    },
    answer: "C",
    rationale: "** The crown-rump length (CRL) is used up to 13 weeks + 6 days for gestational age assessment."
  },
  {
    id: 118,
    chapterId: 4,
    chapterName: "Assessment of Fetal Well-being",
    question: "From 14 to 20 weeks' gestation, which measurement is used to determine gestational age?",
    options: {
      A: "Abdominal circumference (AC)",
      B: "Crown-rump length (CRL)",
      C: "Head circumference (HC)",
      D: "Estimated fetal weight (EFW)"
    },
    answer: "C",
    rationale: "** The head circumference (HC) is used from 14 to 20 weeks' gestation."
  },
  {
    id: 119,
    chapterId: 4,
    chapterName: "Assessment of Fetal Well-being",
    question: "In asymmetrical fetal growth restriction (FGR), which ultrasound finding is typically observed?",
    options: {
      A: "The abdominal circumference is disproportionately large compared to the head",
      B: "The head circumference falls below the 5th centile while the abdominal circumference remains normal",
      C: "The head circumference remains relatively large compared to the abdominal circumference (brain-sparing effect)",
      D: "The femur length is disproportionately long compared to the abdominal circumference"
    },
    answer: "C",
    rationale: "** In asymmetrical FGR, a brain-sparing effect results in a relatively large head circumference compared with the abdominal circumference."
  },
  {
    id: 120,
    chapterId: 4,
    chapterName: "Assessment of Fetal Well-being",
    question: "The \"lambda\" or \"twin peak\" sign on first-trimester ultrasound indicates:",
    options: {
      A: "Monochorionic twin pregnancy",
      B: "Dichorionic twin pregnancy",
      C: "Placenta praevia",
      D: "Twin-to-twin transfusion syndrome"
    },
    answer: "B",
    rationale: "** The lambda/twin peak sign, seen at the base of the inter-twin membrane, indicates dichorionicity because a tongue of placental tissue is seen within the base of dichorionic membranes."
  },
  {
    id: 121,
    chapterId: 4,
    chapterName: "Assessment of Fetal Well-being",
    question: "What is the optimal gestational age to determine chorionicity in multiple pregnancies?",
    options: {
      A: "6-7 weeks",
      B: "9-10 weeks",
      C: "12-14 weeks",
      D: "18-20 weeks"
    },
    answer: "B",
    rationale: "** The optimal gestation at which to perform ultrasonic chorionicity determination is 9-10 weeks."
  },
  {
    id: 122,
    chapterId: 4,
    chapterName: "Assessment of Fetal Well-being",
    question: "At the 20-week anomaly scan, approximately what percentage of pregnancies are complicated by a low-lying placenta?",
    options: {
      A: "1-2%",
      B: "5-10%",
      C: "15-20%",
      D: "30-40%"
    },
    answer: "C",
    rationale: "** About 15-20% of pregnancies are complicated by a low-lying placenta at 20 weeks."
  },
  {
    id: 123,
    chapterId: 4,
    chapterName: "Assessment of Fetal Well-being",
    question: "Of those with a low-lying placenta at 20 weeks, approximately what percentage will eventually have placenta praevia?",
    options: {
      A: "1%",
      B: "5%",
      C: "10%",
      D: "50%"
    },
    answer: "C",
    rationale: "** Only 10% of the group with a low-lying placenta at 20 weeks will eventually be shown to have a placenta praevia."
  },
  {
    id: 124,
    chapterId: 4,
    chapterName: "Assessment of Fetal Well-being",
    question: "NICE recommends that all pregnant women be offered ultrasound scans at which gestations?",
    options: {
      A: "8-10 weeks and 16-18 weeks",
      B: "10-14 weeks and 18-21 weeks",
      C: "12-14 weeks and 20-24 weeks",
      D: "14-16 weeks and 22-25 weeks"
    },
    answer: "B",
    rationale: "** NICE recommends scans at between 10 and 14 weeks' and 18 and 21 weeks' gestation."
  },
  {
    id: 125,
    chapterId: 4,
    chapterName: "Assessment of Fetal Well-being",
    question: "Using the amniotic fluid index (AFI) in the third trimester, which value indicates oligohydramnios?",
    options: {
      A: "Less than 2 cm",
      B: "Less than 5 cm",
      C: "Less than 8 cm",
      D: "Less than 10 cm"
    },
    answer: "B",
    rationale: "** An AFI below 5 cm indicates oligohydramnios; values below 10 cm indicate a reduced volume."
  },
  {
    id: 126,
    chapterId: 4,
    chapterName: "Assessment of Fetal Well-being",
    question: "The normal fetal heart rate at term is:",
    options: {
      A: "90-110 beats per minute",
      B: "100-120 beats per minute",
      C: "110-150 beats per minute",
      D: "150-170 beats per minute"
    },
    answer: "C",
    rationale: "** The normal fetal heart rate at term is 110-150 beats per minute (bpm)."
  },
  {
    id: 127,
    chapterId: 4,
    chapterName: "Assessment of Fetal Well-being",
    question: "On a standard antepartum CTG, baseline variability is considered abnormal when it is:",
    options: {
      A: "3 bpm or less",
      B: "5 bpm or less",
      C: "10 bpm or less",
      D: "15 bpm or less"
    },
    answer: "B",
    rationale: "** Baseline variability is considered abnormal when it is 5 bpm or less."
  },
  {
    id: 128,
    chapterId: 4,
    chapterName: "Assessment of Fetal Well-being",
    question: "",
    options: {
      A: "At least one acceleration in 10 minutes",
      B: "Two or more accelerations in a 20-30-minute tracing",
      C: "Three or more decelerations in 20 minutes",
      D: "Baseline variability exceeding 25 bpm"
    },
    answer: "B",
    rationale: "** The presence of two or more accelerations on a 20-30-minute antepartum fetal CTG defines a reactive trace."
  },
  {
    id: 129,
    chapterId: 4,
    chapterName: "Assessment of Fetal Well-being",
    question: "Computerized antenatal CTG interpretation uses which criteria?",
    options: {
      A: "Dawes-Redman criteria",
      B: "Manning criteria",
      C: "Fischer criteria",
      D: "Krebs criteria"
    },
    answer: "A",
    rationale: "** Antenatal computerized CTG uses Dawes-Redman criteria, which assess parameters including short-term variation."
  },
  {
    id: 130,
    chapterId: 4,
    chapterName: "Assessment of Fetal Well-being",
    question: "The biophysical profile (BPP) assigns a score of 0-2 for each of five parameters. What is the maximum total score?",
    options: {
      A: "5",
      B: "8",
      C: "10",
      D: "12"
    },
    answer: "C",
    rationale: "** The BPP includes five parameters (fetal breathing movements, gross body movement, tone, CTG, and amniotic fluid volume), each scored 0-2, giving a total score out of 10."
  },
  {
    id: 131,
    chapterId: 4,
    chapterName: "Assessment of Fetal Well-being",
    question: "",
    options: {
      A: "Normal",
      B: "Equivocal",
      C: "Abnormal and indicates significant fetal compromise",
      D: "Indicative of fetal sleep only"
    },
    answer: "C",
    rationale: "** Low overall scores (0-4) are considered abnormal and indicate significant fetal compromise."
  },
  {
    id: 132,
    chapterId: 4,
    chapterName: "Assessment of Fetal Well-being",
    question: "",
    options: {
      A: "Absent flow during diastole",
      B: "Reversed flow during diastole",
      C: "Forward flow of blood throughout the whole cardiac cycle",
      D: "High-resistance flow with only systolic peaks"
    },
    answer: "C",
    rationale: "** A normal umbilical arterial waveform demonstrates forward flow of blood throughout the whole cardiac cycle (both systole and diastole)."
  },
  {
    id: 133,
    chapterId: 4,
    chapterName: "Assessment of Fetal Well-being",
    question: "Absent or reversed end-diastolic flow in the umbilical artery is most strongly correlated with:",
    options: {
      A: "Fetal anaemia",
      B: "Fetal hypoxia and intrauterine death if not delivered",
      C: "Maternal diabetes",
      D: "Polyhydramnios"
    },
    answer: "B",
    rationale: "** Absent or reversed end-diastolic flow in the umbilical artery is a particularly serious development with a strong correlation with fetal hypoxia and ultimately intrauterine death."
  },
  {
    id: 134,
    chapterId: 4,
    chapterName: "Assessment of Fetal Well-being",
    question: "In fetal hypoxia, \"brain sparing\" is demonstrated on Doppler ultrasound by which finding in the middle cerebral artery (MCA)?",
    options: {
      A: "Increased pulsatility index",
      B: "Decreased pulsatility index with increased diastolic flow",
      C: "Absent systolic flow",
      D: "Reversed flow throughout the cardiac cycle"
    },
    answer: "B",
    rationale: "** As hypoxia increases, the pulsatility index in the MCA falls, indicating increasing diastolic flow as the cerebral circulation opens up."
  },
  {
    id: 135,
    chapterId: 4,
    chapterName: "Assessment of Fetal Well-being",
    question: "",
    options: {
      A: "Improved cardiac function",
      B: "The onset of overt cardiac compromise; delivery should be considered",
      C: "Normal fetal circulation",
      D: "Fetal anaemia requiring transfusion"
    },
    answer: "B",
    rationale: "** A retrograde or reversed DV a-wave signifies the onset of overt cardiac compromise, and delivery should be considered."
  },
  {
    id: 136,
    chapterId: 4,
    chapterName: "Assessment of Fetal Well-being",
    question: "Uterine artery Doppler in the first/early second trimester showing a diastolic \"notch\" is associated with an increased risk of:",
    options: {
      A: "Pre-eclampsia, FGR, and placental abruption",
      B: "Polyhydramnios and preterm premature rupture of membranes",
      C: "Fetal macrosomia and gestational diabetes",
      D: "Placenta accreta spectrum and vasa praevia"
    },
    answer: "A",
    rationale: "** High-resistance uterine artery waveform patterns (including the diastolic notch) are associated with adverse outcomes including pre-eclampsia, FGR, and placental abruption."
  },
  {
    id: 137,
    chapterId: 4,
    chapterName: "Assessment of Fetal Well-being",
    question: "The cerebroplacental Doppler ratio is defined as the ratio of the pulsatility index of which two vessels?",
    options: {
      A: "Umbilical artery and fetal aorta",
      B: "Middle cerebral artery and umbilical artery",
      C: "Uterine artery and umbilical artery",
      D: "Ductus venosus and inferior vena cava"
    },
    answer: "B",
    rationale: "** The cerebroplacental Doppler ratio is a ratio of the pulsatility indices of the middle cerebral artery and the umbilical artery. # \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550"
  },
  {
    id: 138,
    chapterId: 5,
    chapterName: "Prenatal Diagnosis",
    question: "In the UK, what is the most common reason for performing invasive prenatal diagnostic testing?",
    options: {
      A: "Cystic fibrosis",
      B: "Down syndrome (trisomy 21)",
      C: "Sickle cell disease",
      D: "Neural tube defects"
    },
    answer: "B",
    rationale: "** Prenatal diagnosis of Down syndrome is the most common reason for performing invasive prenatal diagnostic testing in the UK."
  },
  {
    id: 139,
    chapterId: 5,
    chapterName: "Prenatal Diagnosis",
    question: "Which of the following is NOT one of the key attributes of a screening test?",
    options: {
      A: "Relevance",
      B: "Sensitivity",
      C: "Invasiveness",
      D: "Predictive value"
    },
    answer: "C",
    rationale: "** The attributes listed are relevance, effect on management, sensitivity, specificity, predictive value, affordability, and equity. Invasiveness is not an attribute of a screening test."
  },
  {
    id: 140,
    chapterId: 5,
    chapterName: "Prenatal Diagnosis",
    question: "Cell-free fetal DNA (cffDNA) can be detected in maternal blood as early as:",
    options: {
      A: "3 weeks of pregnancy",
      B: "5 weeks of pregnancy",
      C: "10 weeks of pregnancy",
      D: "15 weeks of pregnancy"
    },
    answer: "B",
    rationale: "** cffDNA can be detected in maternal blood as early as 5 weeks of pregnancy."
  },
  {
    id: 141,
    chapterId: 5,
    chapterName: "Prenatal Diagnosis",
    question: "Chorion villus sampling (CVS) should ideally be performed from what gestation?",
    options: {
      A: "8+0 weeks",
      B: "10+0 weeks",
      C: "11+0 weeks",
      D: "15+0 weeks"
    },
    answer: "C",
    rationale: "** CVS should not be performed before 10 weeks' gestation, and to reduce technical challenges, it should be performed from 11+0 weeks where possible."
  },
  {
    id: 142,
    chapterId: 5,
    chapterName: "Prenatal Diagnosis",
    question: "The additional risk of miscarriage following CVS or amniocentesis performed by an appropriately trained operator is likely to be:",
    options: {
      A: "1-2%",
      B: "Below 0.5%",
      C: "2-5%",
      D: "5-10%"
    },
    answer: "B",
    rationale: "** The additional overall risk of miscarriage following CVS or amniocentesis is likely to be below 0.5%."
  },
  {
    id: 143,
    chapterId: 5,
    chapterName: "Prenatal Diagnosis",
    question: "Cordocentesis carries a risk of miscarriage of approximately:",
    options: {
      A: "Below 0.5%",
      B: "0.5-1%",
      C: "1-2%",
      D: "2-5%"
    },
    answer: "D",
    rationale: "** The risk of miscarriage following cordocentesis varies with indication and position of the placenta, but is in the range of 2-5%."
  },
  {
    id: 144,
    chapterId: 5,
    chapterName: "Prenatal Diagnosis",
    question: "Placental mosaicism occurs in approximately what percentage of CVS procedures?",
    options: {
      A: "0.1%",
      B: "Less than 2%",
      C: "5%",
      D: "10%"
    },
    answer: "B",
    rationale: "** Placental mosaicism occurs in <2% of CVS procedures."
  },
  {
    id: 145,
    chapterId: 5,
    chapterName: "Prenatal Diagnosis",
    question: "The UK National Screening Committee recommends the \"combined test\" for Down syndrome screening. This includes:",
    options: {
      A: "Maternal age, NT, hCG, and inhibin A",
      B: "NT, CRL, maternal hCG, and PAPP-A",
      C: "AFP, hCG, uE3, and PAPP-A",
      D: "CRL, BPD, hCG, and AFP"
    },
    answer: "B",
    rationale: "** The combined test involves an ultrasound scan to measure nuchal translucency (NT) and crown-rump length (CRL), plus a blood test for hCG and PAPP-A."
  },
  {
    id: 146,
    chapterId: 5,
    chapterName: "Prenatal Diagnosis",
    question: "The combined test for Down syndrome is performed between:",
    options: {
      A: "8+0 and 10+6 weeks",
      B: "10+0 and 14+1 weeks",
      C: "11+2 and 14+1 weeks",
      D: "14+2 and 20+0 weeks"
    },
    answer: "C",
    rationale: "** The combined test is offered from 11+2 to 14+1 weeks' gestation (blood test between 10+0 and 14+1)."
  },
  {
    id: 147,
    chapterId: 5,
    chapterName: "Prenatal Diagnosis",
    question: "For women booking later in pregnancy, the UK National Screening Committee recommends which second-trimester screening strategy?",
    options: {
      A: "The triple test",
      B: "The combined test",
      C: "The quadruple test",
      D: "The integrated test"
    },
    answer: "C",
    rationale: "** The quadruple test (hCG, alpha-fetoprotein, unconjugated oestriol, and inhibin A) is recommended as the second-trimester screening strategy."
  },
  {
    id: 148,
    chapterId: 5,
    chapterName: "Prenatal Diagnosis",
    question: "Non-invasive prenatal testing (NIPT) using cffDNA detects approximately what percentage of babies with Down, Patau, and Edwards syndrome?",
    options: {
      A: "80%",
      B: "90%",
      C: "95%",
      D: "98%"
    },
    answer: "D",
    rationale: "** Current studies suggest that NIPT using cffDNA detects around 98% of all babies with Down, Patau, and Edwards syndrome."
  },
  {
    id: 149,
    chapterId: 5,
    chapterName: "Prenatal Diagnosis",
    question: "NIPD for fetal blood group (e.g., RhD) using cffDNA is useful because:",
    options: {
      A: "It replaces the need for all antenatal care",
      B: "It allows selective use of anti-D and avoids unnecessary prophylaxis in RhD-negative women carrying RhD-negative fetuses",
      C: "It cures rhesus isoimmunization",
      D: "It can only be performed after 28 weeks"
    },
    answer: "B",
    rationale: "** cffDNA can determine fetal RhD status, allowing selective use of anti-D and avoiding unnecessary treatment for women carrying RhD-negative fetuses."
  },
  {
    id: 150,
    chapterId: 5,
    chapterName: "Prenatal Diagnosis",
    question: "",
    options: {
      A: "1%",
      B: "2%",
      C: "5%",
      D: "10%"
    },
    answer: "C",
    rationale: "** The risk of recurrence of a neural tube defect is 5% after one affected pregnancy."
  },
  {
    id: 151,
    chapterId: 5,
    chapterName: "Prenatal Diagnosis",
    question: "For the woman in Question 40, what dose of pre-conceptual folic acid is recommended for future pregnancies?",
    options: {
      A: "400 micrograms",
      B: "1 mg",
      C: "5 mg",
      D: "10 mg"
    },
    answer: "C",
    rationale: "** She should take a higher dose of pre-conceptual folic acid (5 mg instead of the usual 400 micrograms)."
  },
  {
    id: 152,
    chapterId: 5,
    chapterName: "Prenatal Diagnosis",
    question: "On prenatal ultrasound, gastroschisis is distinguished from exomphalos by which key feature?",
    options: {
      A: "Gastroschisis is always covered by a membrane",
      B: "Exomphalos is usually lateral to the cord insertion",
      C: "Gastroschisis is not covered by a membrane and has free-floating bowel loops",
      D: "Exomphalos never contains liver"
    },
    answer: "C",
    rationale: "** Gastroschisis is not membrane-covered and has free-floating bowel loops with an irregular outline, whereas exomphalos is a smooth, membrane-covered herniation."
  },
  {
    id: 153,
    chapterId: 5,
    chapterName: "Prenatal Diagnosis",
    question: "Exomphalos is associated with chromosomal abnormalities in approximately:",
    options: {
      A: "5% of cases",
      B: "One-third of fetuses",
      C: "70-80% of fetuses",
      D: "100% of cases"
    },
    answer: "B",
    rationale: "** There is a high chance of chromosomal abnormality in approximately one-third of fetuses with exomphalos."
  },
  {
    id: 154,
    chapterId: 5,
    chapterName: "Prenatal Diagnosis",
    question: "Duchenne muscular dystrophy (DMD) is inherited in which pattern?",
    options: {
      A: "Autosomal dominant",
      B: "Autosomal recessive",
      C: "X-linked recessive",
      D: "X-linked dominant"
    },
    answer: "C",
    rationale: "** DMD is an X-linked recessive condition."
  },
  {
    id: 155,
    chapterId: 5,
    chapterName: "Prenatal Diagnosis",
    question: "",
    options: {
      A: "All female fetuses will be affected",
      B: "There is a 1:2 chance of a male fetus, and if male, a 1:2 chance of inheriting the abnormal X",
      C: "All male fetuses will be carriers",
      D: "There is a 1:2 chance of any fetus being affected regardless of sex"
    },
    answer: "B",
    rationale: "** There is a 1:2 chance the baby will be male, and if male, a 1:2 chance he inherits the abnormal X chromosome, giving a 1:4 overall chance of an affected fetus. --- # \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550"
  },
  {
    id: 156,
    chapterId: 6,
    chapterName: "Antenatal Obstetric Complications",
    question: "What is the most common cause of direct maternal death in the UK?",
    options: {
      A: "Pre-eclampsia and eclampsia",
      B: "Venous thromboembolism (VTE)",
      C: "Sepsis",
      D: "Amniotic fluid embolism"
    },
    answer: "B",
    rationale: "** VTE is the most common cause of direct maternal death in the UK, with a maternal mortality rate of 0.89 per 100,000 in the 2017-2019 report."
  },
  {
    id: 157,
    chapterId: 6,
    chapterName: "Antenatal Obstetric Complications",
    question: "Compared with the non-pregnant state, pregnancy is associated with what fold increase in the risk of VTE?",
    options: {
      A: "2-3-fold",
      B: "4-5-fold",
      C: "6-10-fold",
      D: "15-20-fold"
    },
    answer: "C",
    rationale: "** Pregnancy is associated with a 6-10-fold increase in the risk of VTE."
  },
  {
    id: 158,
    chapterId: 6,
    chapterName: "Antenatal Obstetric Complications",
    question: "What is the treatment of choice for acute VTE in pregnancy?",
    options: {
      A: "Warfarin",
      B: "Aspirin",
      C: "Low-molecular-weight heparin (LMWH)",
      D: "Rivaroxaban"
    },
    answer: "C",
    rationale: "** LMWHs are the treatment of choice for acute VTE in pregnancy because they do not cross the placenta and are safe and effective."
  },
  {
    id: 159,
    chapterId: 6,
    chapterName: "Antenatal Obstetric Complications",
    question: "Warfarin is rarely recommended in pregnancy because:",
    options: {
      A: "It is ineffective in pregnancy",
      B: "It crosses the placenta and can cause limb/facial defects and fetal intracerebral haemorrhage",
      C: "It is contraindicated only in the first trimester",
      D: "It cannot be reversed if overdose occurs"
    },
    answer: "B",
    rationale: "** Warfarin crosses the placenta, causing limb and facial defects in the first trimester and fetal intracerebral haemorrhage in the second and third trimesters."
  },
  {
    id: 160,
    chapterId: 6,
    chapterName: "Antenatal Obstetric Complications",
    question: "Why is D-dimer of limited clinical usefulness as a screening test for PE in pregnancy?",
    options: {
      A: "It is always falsely negative in pregnancy",
      B: "It can be elevated due to physiological changes in the coagulation system",
      C: "It is too expensive",
      D: "It requires fetal blood sampling"
    },
    answer: "B",
    rationale: "** In pregnancy, D-dimer can be elevated due to physiological changes in the coagulation system, limiting its usefulness as a diagnostic test."
  },
  {
    id: 161,
    chapterId: 6,
    chapterName: "Antenatal Obstetric Complications",
    question: "Hyperemesis gravidarum affects what percentage of pregnancies?",
    options: {
      A: "0.1-0.2%",
      B: "0.3-2.0%",
      C: "5-10%",
      D: "15-20%"
    },
    answer: "B",
    rationale: "** Hyperemesis gravidarum affects 0.3-2.0% of pregnancies."
  },
  {
    id: 162,
    chapterId: 6,
    chapterName: "Antenatal Obstetric Complications",
    question: "NICE (2019) recommends which medication for pregnant women with nausea and vomiting not responding to standard conservative management?",
    options: {
      A: "Ondansetron",
      B: "Doxylamine/pyridoxine (Xonvea)",
      C: "Metoclopramide only",
      D: "Oral corticosteroids as first-line"
    },
    answer: "B",
    rationale: "** NICE has recommended doxylamine/pyridoxine for pregnant women with symptoms that have not responded to standard conservative management."
  },
  {
    id: 163,
    chapterId: 6,
    chapterName: "Antenatal Obstetric Complications",
    question: "Obstetric cholestasis affects approximately what percentage of pregnancies?",
    options: {
      A: "0.1%",
      B: "0.7%",
      C: "2%",
      D: "5%"
    },
    answer: "B",
    rationale: "** Obstetric cholestasis affects 0.7% of pregnancies."
  },
  {
    id: 164,
    chapterId: 6,
    chapterName: "Antenatal Obstetric Complications",
    question: "In obstetric cholestasis, which serum bile acid level is associated with an increased risk of fetal death?",
    options: {
      A: ">10 umol/L",
      B: ">20 umol/L",
      C: ">40 umol/L",
      D: ">100 umol/L"
    },
    answer: "D",
    rationale: "** Fetal death risk is associated with serum bile acids >100 umol/L; risks of spontaneous and iatrogenic preterm birth are associated with >40 umol/L."
  },
  {
    id: 165,
    chapterId: 6,
    chapterName: "Antenatal Obstetric Complications",
    question: "What is the recommended management for delivery in women with obstetric cholestasis?",
    options: {
      A: "Delivery at 34 weeks regardless of severity",
      B: "Delivery after 37 weeks' gestation depending on symptoms and bile acid levels",
      C: "Immediate delivery at diagnosis",
      D: "Expectant management until 42 weeks"
    },
    answer: "B",
    rationale: "** Pregnant women with obstetric cholestasis are normally offered delivery after 37 weeks' gestation, depending on symptoms and the rise in bile acids."
  },
  {
    id: 166,
    chapterId: 6,
    chapterName: "Antenatal Obstetric Complications",
    question: "Red degeneration of a fibroid in pregnancy classically presents with:",
    options: {
      A: "Painless vaginal bleeding",
      B: "Acute pain, tenderness over the fibroid, and frequent vomiting",
      C: "Urinary retention",
      D: "Fetal bradycardia"
    },
    answer: "B",
    rationale: "** Red degeneration usually presents as acute pain, tenderness over the fibroid, and frequent vomiting."
  },
  {
    id: 167,
    chapterId: 6,
    chapterName: "Antenatal Obstetric Complications",
    question: "",
    options: {
      A: "6-8 weeks",
      B: "12-14 weeks",
      C: "20-22 weeks",
      D: "28-30 weeks"
    },
    answer: "B",
    rationale: "** Retention of urine may occur classically at 12-14 weeks when a retroverted uterus fills the pelvic cavity and stretches the bladder base and urethra."
  },
  {
    id: 168,
    chapterId: 6,
    chapterName: "Antenatal Obstetric Complications",
    question: "The most common malignancy complicating pregnancy is:",
    options: {
      A: "Cervical carcinoma",
      B: "Ovarian carcinoma",
      C: "Breast cancer",
      D: "Melanoma"
    },
    answer: "C",
    rationale: "** Breast cancer is the most common malignancy complicating pregnancy, accounting for 40% of cases."
  },
  {
    id: 169,
    chapterId: 6,
    chapterName: "Antenatal Obstetric Complications",
    question: "What percentage of pregnancies have asymptomatic bacteriuria?",
    options: {
      A: "1%",
      B: "3%",
      C: "8%",
      D: "15%"
    },
    answer: "C",
    rationale: "** Eight per cent of pregnancies have asymptomatic bacteriuria."
  },
  {
    id: 170,
    chapterId: 6,
    chapterName: "Antenatal Obstetric Complications",
    question: "The first-line antibiotic for a urinary tract infection in pregnancy is:",
    options: {
      A: "Trimethoprim",
      B: "Ciprofloxacin",
      C: "Amoxicillin or oral cephalosporins",
      D: "Nitrofurantoin (avoided at term)"
    },
    answer: "C",
    rationale: "** The first-line antibiotic for UTI is amoxycillin or oral cephalosporins."
  },
  {
    id: 171,
    chapterId: 6,
    chapterName: "Antenatal Obstetric Complications",
    question: "Oligohydramnios is commonly defined as an amniotic fluid index (AFI):",
    options: {
      A: "Less than the 50th centile",
      B: "Less than the 5th centile for gestation",
      C: "Less than 25 cm",
      D: "Greater than 95th centile"
    },
    answer: "B",
    rationale: "** Oligohydramnios is commonly defined as an AFI less than the 5th centile for gestation."
  },
  {
    id: 172,
    chapterId: 6,
    chapterName: "Antenatal Obstetric Complications",
    question: "Polyhydramnios is defined as an AFI:",
    options: {
      A: "Less than 5 cm",
      B: "Between 10 and 25 cm",
      C: "Greater than the 95th centile for gestation",
      D: "Equal to the 50th centile"
    },
    answer: "C",
    rationale: "** Polyhydramnios is defined as an AFI greater than the 95th centile for gestation."
  },
  {
    id: 173,
    chapterId: 6,
    chapterName: "Antenatal Obstetric Complications",
    question: "Breech presentation at term occurs in approximately:",
    options: {
      A: "1% of pregnancies",
      B: "3-4% of pregnancies",
      C: "10% of pregnancies",
      D: "15% of pregnancies"
    },
    answer: "B",
    rationale: "** Breech presentation occurs in 3-4% of term pregnancies."
  },
  {
    id: 174,
    chapterId: 6,
    chapterName: "Antenatal Obstetric Complications",
    question: "External cephalic version (ECV) is typically performed at:",
    options: {
      A: "32-34 weeks",
      B: "34-36 weeks",
      C: "At or after 37 completed weeks",
      D: "Only during labour"
    },
    answer: "C",
    rationale: "** ECV is performed at or after 37 completed weeks' gestation by an experienced obstetrician."
  },
  {
    id: 175,
    chapterId: 6,
    chapterName: "Antenatal Obstetric Complications",
    question: "The success rate for ECV in most units is approximately:",
    options: {
      A: "20%",
      B: "35%",
      C: "50%",
      D: "80%"
    },
    answer: "C",
    rationale: "** Success rates vary according to operator experience but in most units are around 50%."
  },
  {
    id: 176,
    chapterId: 6,
    chapterName: "Antenatal Obstetric Complications",
    question: "According to the Term Breech Trial and subsequent recommendations, what is the safest mode of delivery for a term singleton breech presentation?",
    options: {
      A: "Planned vaginal breech delivery",
      B: "Planned caesarean section",
      C: "Forceps delivery",
      D: "Ventouse delivery"
    },
    answer: "B",
    rationale: "** The Term Breech Trial suggested that planned vaginal delivery was associated with a 3% increased risk of death or serious morbidity, leading to the recommendation that planned caesarean section is the safest method."
  },
  {
    id: 177,
    chapterId: 6,
    chapterName: "Antenatal Obstetric Complications",
    question: "Which of the following is a contraindication to external cephalic version?",
    options: {
      A: "Multiparity",
      B: "Anterior placenta",
      C: "Placenta praevia",
      D: "Gestational age 37 weeks"
    },
    answer: "C",
    rationale: "** Contraindications include placenta praevia, oligohydramnios/polyhydramnios, previous caesarean scar, multiple gestation, and pre-eclampsia."
  },
  {
    id: 178,
    chapterId: 6,
    chapterName: "Antenatal Obstetric Complications",
    question: "",
    options: {
      A: "40+0 weeks",
      B: "41+0 weeks",
      C: "42+0 weeks",
      D: "43+0 weeks"
    },
    answer: "C",
    rationale: "** A pregnancy that has extended to or beyond 42+0 weeks' gestation is defined as post-term."
  },
  {
    id: 179,
    chapterId: 6,
    chapterName: "Antenatal Obstetric Complications",
    question: "Post-term pregnancy affects approximately:",
    options: {
      A: "2% of all pregnancies",
      B: "5% of all pregnancies",
      C: "10% of all pregnancies",
      D: "20% of all pregnancies"
    },
    answer: "C",
    rationale: "** Post-term pregnancy affects approximately 10% of all pregnancies."
  },
  {
    id: 180,
    chapterId: 6,
    chapterName: "Antenatal Obstetric Complications",
    question: "The incidence of antepartum haemorrhage (APH) is approximately:",
    options: {
      A: "1%",
      B: "3%",
      C: "5%",
      D: "10%"
    },
    answer: "B",
    rationale: "** The incidence of APH is 3%."
  },
  {
    id: 181,
    chapterId: 6,
    chapterName: "Antenatal Obstetric Complications",
    question: "The prevalence of D-rhesus negativity in the UK Caucasian population is approximately:",
    options: {
      A: "5%",
      B: "10%",
      C: "15%",
      D: "25%"
    },
    answer: "C",
    rationale: "** The prevalence of D-rhesus negativity is 15% in the UK Caucasian population."
  },
  {
    id: 182,
    chapterId: 6,
    chapterName: "Antenatal Obstetric Complications",
    question: "For a potentially sensitizing event after 20 weeks' gestation in a rhesus-negative woman, what is the minimum dose of anti-D immunoglobulin recommended?",
    options: {
      A: "250 IU",
      B: "500 IU",
      C: "1,000 IU",
      D: "1,500 IU"
    },
    answer: "B",
    rationale: "** For potentially sensitizing events after 20 weeks, a minimum anti-D Ig dose of 500 IU should be administered within 72 hours."
  },
  {
    id: 183,
    chapterId: 6,
    chapterName: "Antenatal Obstetric Complications",
    question: "Current UK guidelines suggest that non-sensitized rhesus-negative pregnant women should be offered routine antenatal prophylaxis with anti-D at:",
    options: {
      A: "20 weeks",
      B: "28 weeks (single dose) or 28 and 34 weeks (two-dose regimen)",
      C: "36 weeks",
      D: "Only at delivery"
    },
    answer: "B",
    rationale: "** Current UK guidelines suggest routine antenatal prophylaxis with anti-D, either as a single dose at around 28 weeks or a two-dose regimen at 28 and 34 weeks."
  },
  {
    id: 184,
    chapterId: 6,
    chapterName: "Antenatal Obstetric Complications",
    question: "The Kleihauer test is used to:",
    options: {
      A: "Determine fetal blood group",
      B: "Determine the proportion of fetal cells in the maternal sample to calculate the size of feto-maternal haemorrhage",
      C: "Screen for Down syndrome",
      D: "Diagnose placental abruption"
    },
    answer: "B",
    rationale: "** The Kleihauer test determines the proportion of fetal cells present in the maternal sample, allowing calculation of the size of the feto-maternal transfusion."
  },
  {
    id: 185,
    chapterId: 6,
    chapterName: "Antenatal Obstetric Complications",
    question: "Middle cerebral artery (MCA) Doppler peak systolic velocity (PSV) is used in rhesus disease to assess fetal anaemia. What is its reported sensitivity?",
    options: {
      A: "85%",
      B: "90%",
      C: "95%",
      D: "100%"
    },
    answer: "D",
    rationale: "** The sensitivity of MCA PSV is reported at 100% with a false-positive rate of 12%."
  },
  {
    id: 186,
    chapterId: 6,
    chapterName: "Antenatal Obstetric Complications",
    question: "ABO blood group isoimmunization generally causes:",
    options: {
      A: "Severe haemolytic disease requiring multiple intrauterine transfusions",
      B: "Mild haemolytic disease",
      C: "No clinical effect",
      D: "Hydrops fetalis in all cases"
    },
    answer: "B",
    rationale: "** ABO incompatibility generally causes mild haemolytic disease of the baby because most anti-A and anti-B antibodies are IgM (which do not cross the placenta), and A/B antigens are not fully developed in the fetus."
  },
  {
    id: 187,
    chapterId: 6,
    chapterName: "Antenatal Obstetric Complications",
    question: "",
    options: {
      A: "Attempted vaginal delivery if fully dilated",
      B: "External cephalic version only",
      C: "Caesarean section if the presentation is not cephalic in early labour or if membranes rupture",
      D: "Oxytocin induction to stimulate longitudinal lie"
    },
    answer: "C",
    rationale: "** Labour with a non-longitudinal lie will not result in vaginal birth. The plan is to deliver by caesarean section if the presentation is not cephalic in early labour or if spontaneous rupture of membranes occurs."
  },
  {
    id: 188,
    chapterId: 6,
    chapterName: "Antenatal Obstetric Complications",
    question: "Which manoeuvre is used to deliver the aftercoming head in a vaginal breech delivery?",
    options: {
      A: "Pinard manoeuvre",
      B: "Lovset manoeuvre",
      C: "Mauriceau-Smellie-Veit manoeuvre",
      D: "Bracht manoeuvre"
    },
    answer: "C",
    rationale: "** The Mauriceau-Smellie-Veit manoeuvre is used for delivery of the aftercoming head."
  },
  {
    id: 189,
    chapterId: 6,
    chapterName: "Antenatal Obstetric Complications",
    question: "In the management of pyelonephritis in pregnancy, which of the following is required?",
    options: {
      A: "Oral antibiotics only and discharge home",
      B: "Oral fluids, outpatient review, and no fetal monitoring",
      C: "Urgent and aggressive treatment including intravenous fluids, opiate analgesia, intravenous antibiotics, and fetal monitoring with CTG",
      D: "Antibiotics after delivery only"
    },
    answer: "C",
    rationale: "** Pyelonephritis requires urgent and aggressive treatment including IV fluids, opiate analgesia, IV antibiotics, renal function tests, and fetal monitoring with CTG."
  },
  {
    id: 190,
    chapterId: 6,
    chapterName: "Antenatal Obstetric Complications",
    question: "",
    options: {
      A: "Delivery only in a standalone midwife-led unit",
      B: "Delivery at home",
      C: "Induction around 37 weeks in a unit with paediatric surgical facilities",
      D: "Delivery at 42 weeks with no special requirements"
    },
    answer: "C",
    rationale: "** Induction around 37 weeks enables delivery to be planned in a unit with appropriate paediatric surgical facilities and may reduce the incidence of stillbirth late in pregnancy. --- End of MCQ Bank --- # \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550"
  },
  {
    id: 191,
    chapterId: 7,
    chapterName: "Multiple Pregnancy",
    question: "In the UK, the rate of multiple pregnancy is approximately:",
    options: {
      A: "6 per 1,000 births",
      B: "10 per 1,000 births",
      C: "16 per 1,000 births",
      D: "40 per 1,000 births"
    },
    answer: "C",
    rationale: "** In the UK, the rates of multiple pregnancy are approximately 16 per 1,000 births."
  },
  {
    id: 192,
    chapterId: 7,
    chapterName: "Multiple Pregnancy",
    question: "What percentage of multiple pregnancies in the UK are twin pregnancies?",
    options: {
      A: "70-80%",
      B: "85-90%",
      C: "97-99%",
      D: "50-60%"
    },
    answer: "C",
    rationale: "** The majority (97-99%) of multiple pregnancies are twin pregnancies, with the remainder being predominantly triplet pregnancies."
  },
  {
    id: 193,
    chapterId: 7,
    chapterName: "Multiple Pregnancy",
    question: "Which of the following is a key risk factor for the increasing incidence of multiple pregnancies?",
    options: {
      A: "Decreasing maternal age",
      B: "Single embryo transfer policies",
      C: "Advancing maternal age and assisted fertility techniques",
      D: "Improved nutrition"
    },
    answer: "C",
    rationale: "** The high prevalence of multiple pregnancy was attributed predominantly to advancing age in the pregnant population and increasing use of assisted fertility techniques."
  },
  {
    id: 194,
    chapterId: 7,
    chapterName: "Multiple Pregnancy",
    question: "What percentage of successful IVF procedures result in multiple pregnancy?",
    options: {
      A: "Approximately 1 in 10",
      B: "Approximately 1 in 5",
      C: "Approximately 1 in 3",
      D: "Approximately 1 in 2"
    },
    answer: "B",
    rationale: "** Approximately one in five successful IVF procedures results in multiple pregnancy."
  },
  {
    id: 195,
    chapterId: 7,
    chapterName: "Multiple Pregnancy",
    question: "Dizygotic twins account for approximately what percentage of all twin pregnancies?",
    options: {
      A: "30%",
      B: "50%",
      C: "70%",
      D: "90%"
    },
    answer: "C",
    rationale: "** Twin pregnancy may be dizygotic (70%) or monozygotic (30%)."
  },
  {
    id: 196,
    chapterId: 7,
    chapterName: "Multiple Pregnancy",
    question: "Dizygotic twins are always:",
    options: {
      A: "Monochorionic monoamniotic",
      B: "Dichorionic diamniotic",
      C: "Monochorionic diamniotic",
      D: "Conjoined"
    },
    answer: "B",
    rationale: "** Dizygotic twins always result in dichorionic diamniotic twins, where each fetus has its own placenta and amniotic cavity."
  },
  {
    id: 197,
    chapterId: 7,
    chapterName: "Multiple Pregnancy",
    question: "If a monozygotic zygote splits shortly after fertilization, the resulting twins will be:",
    options: {
      A: "Monochorionic monoamniotic",
      B: "Monochorionic diamniotic",
      C: "Dichorionic diamniotic",
      D: "Conjoined"
    },
    answer: "C",
    rationale: "** If the zygote splits shortly after fertilization, the twins will each have a separate placenta and thus will be dichorionic diamniotic."
  },
  {
    id: 198,
    chapterId: 7,
    chapterName: "Multiple Pregnancy",
    question: "Monochorionic diamniotic pregnancies occur when division of the zygote occurs between:",
    options: {
      A: "Days 1-3 post-fertilization",
      B: "Days 4-8 post-fertilization",
      C: "Days 8-12 post-fertilization",
      D: "After day 13 post-fertilization"
    },
    answer: "B",
    rationale: "** Monochorionic diamniotic (20%) pregnancies occur when division of the zygote occurs between days 4 and 8 post-fertilization."
  },
  {
    id: 199,
    chapterId: 7,
    chapterName: "Multiple Pregnancy",
    question: "Monochorionic monoamniotic pregnancy occurs when division occurs between:",
    options: {
      A: "Days 4-8 post-fertilization",
      B: "Days 8-12 post-fertilization",
      C: "Days 12-16 post-fertilization",
      D: "After day 16 post-fertilization"
    },
    answer: "B",
    rationale: "** Monochorionic monoamniotic (1%) pregnancy occurs when division occurs between days 8 and 12 post-fertilization."
  },
  {
    id: 200,
    chapterId: 7,
    chapterName: "Multiple Pregnancy",
    question: "Conjoined twins occur when division of the zygote happens:",
    options: {
      A: "Before day 4",
      B: "Between days 4-8",
      C: "Between days 8-12",
      D: "After day 13"
    },
    answer: "D",
    rationale: "** Conjoined twins occur when division of the zygote happens after day 13."
  },
  {
    id: 201,
    chapterId: 7,
    chapterName: "Multiple Pregnancy",
    question: "The lambda (twin peak) sign on ultrasound indicates:",
    options: {
      A: "Monochorionicity",
      B: "Dichorionicity",
      C: "Monoamnionicity",
      D: "Conjoined twins"
    },
    answer: "B",
    rationale: "** The lambda sign indicates dichorionicity because there is an extension of placental tissue into the base of the inter-twin membrane."
  },
  {
    id: 202,
    chapterId: 7,
    chapterName: "Multiple Pregnancy",
    question: "The \"T\" sign on ultrasound indicates:",
    options: {
      A: "Dichorionic diamniotic pregnancy",
      B: "Monochorionic diamniotic pregnancy",
      C: "Monochorionic monoamniotic pregnancy",
      D: "Dizygotic pregnancy"
    },
    answer: "B",
    rationale: "** The \"T\" sign indicates monochorionic diamniotic pregnancy because the inter-twin membrane is thin and has no extension of chorionic tissue."
  },
  {
    id: 203,
    chapterId: 7,
    chapterName: "Multiple Pregnancy",
    question: "Approximately what percentage of twin pregnancies result in spontaneous birth before 37 weeks' gestation?",
    options: {
      A: "30%",
      B: "45%",
      C: "60%",
      D: "75%"
    },
    answer: "C",
    rationale: "** Overall, approximately 60% of twin pregnancies result in spontaneous birth before 37 weeks' gestation."
  },
  {
    id: 204,
    chapterId: 7,
    chapterName: "Multiple Pregnancy",
    question: "What percentage of twin deliveries occur before 32 weeks (very preterm)?",
    options: {
      A: "5%",
      B: "10%",
      C: "15%",
      D: "25%"
    },
    answer: "C",
    rationale: "** In 15% of cases, delivery will be very preterm (before 32 weeks of gestation)."
  },
  {
    id: 205,
    chapterId: 7,
    chapterName: "Multiple Pregnancy",
    question: "For monochorionic twins, what percentage deliver between 24 and 32 weeks?",
    options: {
      A: "10%",
      B: "15%",
      C: "25%",
      D: "35%"
    },
    answer: "C",
    rationale: "** For monochorionic twins, 25% deliver between 24 and 32 weeks."
  },
  {
    id: 206,
    chapterId: 7,
    chapterName: "Multiple Pregnancy",
    question: "Multiple gestations account for what percentage of neonatal intensive care unit admissions?",
    options: {
      A: "5-10%",
      B: "10-15%",
      C: "20-25%",
      D: "40-50%"
    },
    answer: "C",
    rationale: "** With two or more babies resulting from each delivery, multiple gestations account for 20-25% of neonatal intensive care unit admissions."
  },
  {
    id: 207,
    chapterId: 7,
    chapterName: "Multiple Pregnancy",
    question: "The overall perinatal mortality for monochorionic twins is estimated to be:",
    options: {
      A: "3.8 per 1,000",
      B: "12 per 1,000",
      C: "30 per 1,000",
      D: "50 per 1,000"
    },
    answer: "C",
    rationale: "** Overall perinatal mortality for monochorionic twins is estimated to be 30 per 1,000 (compared with 3.8 per 1,000 among dichorionic twins)."
  },
  {
    id: 208,
    chapterId: 7,
    chapterName: "Multiple Pregnancy",
    question: "The stillbirth rate in twin births is approximately:",
    options: {
      A: "5 per 1,000",
      B: "12 per 1,000",
      C: "20 per 1,000",
      D: "31 per 1,000"
    },
    answer: "B",
    rationale: "** The stillbirth rate is 12 per 1,000 twin births and 31 per 1,000 triplet births."
  },
  {
    id: 209,
    chapterId: 7,
    chapterName: "Multiple Pregnancy",
    question: "Up to what percentage of twins may suffer an early demise and subsequently \"vanish\" before detection?",
    options: {
      A: "10%",
      B: "15%",
      C: "25%",
      D: "40%"
    },
    answer: "C",
    rationale: "** Up to 25% of twins may suffer an early demise and subsequently \"vanish\" well before they would have previously been detected."
  },
  {
    id: 210,
    chapterId: 7,
    chapterName: "Multiple Pregnancy",
    question: "In monochorionic twins, the intrauterine death of one twin may result in death or brain damage in the survivor in what percentage of cases?",
    options: {
      A: "15% risk of death, 30% risk of brain damage",
      B: "30% risk of death, 15% risk of brain damage",
      C: "50% risk of death, 50% risk of brain damage",
      D: "10% risk of death, 20% risk of brain damage"
    },
    answer: "A",
    rationale: "** The fetal death of one twin in monochorionic twins may result in immediate complications in the survivor including death (15% risk) or brain damage (30% risk)."
  },
  {
    id: 211,
    chapterId: 7,
    chapterName: "Multiple Pregnancy",
    question: "Twin-to-twin transfusion syndrome (TTTS) occurs in approximately what percentage of monochorionic diamniotic pregnancies?",
    options: {
      A: "1-5%",
      B: "10-15%",
      C: "25-30%",
      D: "50-60%"
    },
    answer: "B",
    rationale: "** Approximately 10-15% of monochorionic diamniotic pregnancies and 5% of monoamniotic pregnancies will subsequently develop TTTS."
  },
  {
    id: 212,
    chapterId: 7,
    chapterName: "Multiple Pregnancy",
    question: "The Quintero staging system for TTTS includes how many stages?",
    options: {
      A: "3 stages",
      B: "4 stages",
      C: "5 stages",
      D: "6 stages"
    },
    answer: "C",
    rationale: "** TTTS may be diagnosed and graded in severity according to the widely accepted Quintero staging system, which includes stages I through V."
  },
  {
    id: 213,
    chapterId: 7,
    chapterName: "Multiple Pregnancy",
    question: "In Quintero Stage I TTTS, which finding is present?",
    options: {
      A: "Hydrops in one or both fetuses",
      B: "Oligohydramnios and polyhydramnios sequence with visible donor bladder",
      C: "Non-visualized donor bladder with normal Doppler",
      D: "Abnormal Doppler assessments"
    },
    answer: "B",
    rationale: "** Stage I: Oligohydramnios and polyhydramnios sequence, and the bladder of the donor twin is visible. Doppler assessments in both twins are normal."
  },
  {
    id: 214,
    chapterId: 7,
    chapterName: "Multiple Pregnancy",
    question: "In Quintero Stage III TTTS, which Doppler abnormality is NOT included?",
    options: {
      A: "Absent/reversed end-diastolic velocity in the umbilical artery",
      B: "Reversed flow in a-wave of the ductus venosus",
      C: "Pulsatile flow in the umbilical vein",
      D: "Increased middle cerebral artery peak systolic velocity"
    },
    answer: "D",
    rationale: "** Stage III includes absent/reversed end-diastolic velocity in the umbilical artery, reversed flow in a-wave of the DV, or pulsatile flow in the umbilical vein. MCA-PSV is not part of the Quintero staging."
  },
  {
    id: 215,
    chapterId: 7,
    chapterName: "Multiple Pregnancy",
    question: "Twin anaemia-polycythaemia sequence (TAPS) can occur spontaneously in up to what percentage of monochorionic pregnancies?",
    options: {
      A: "1%",
      B: "3%",
      C: "5%",
      D: "13%"
    },
    answer: "B",
    rationale: "** TAPS may occur spontaneously (up to 3% of cases) or could be iatrogenic after laser therapy (up to 13% of cases)."
  },
  {
    id: 216,
    chapterId: 7,
    chapterName: "Multiple Pregnancy",
    question: "Doppler assessment of which parameter is valuable for antenatal diagnosis of TAPS?",
    options: {
      A: "Umbilical artery pulsatility index",
      B: "Middle cerebral artery peak systolic velocity (MCA-PSV)",
      C: "Ductus venosus a-wave",
      D: "Uterine artery notch"
    },
    answer: "B",
    rationale: "** Doppler assessment of fetal MCA PSV is valuable for antenatal diagnosis of TAPS."
  },
  {
    id: 217,
    chapterId: 7,
    chapterName: "Multiple Pregnancy",
    question: "Twin reversed arterial perfusion (TRAP) sequence has historically been reported in approximately what percentage of monozygotic twins?",
    options: {
      A: "0.1%",
      B: "1%",
      C: "5%",
      D: "10%"
    },
    answer: "B",
    rationale: "** Historically, the prevalence of TRAP sequence has been reported to be about 1% of monozygotic twins."
  },
  {
    id: 218,
    chapterId: 7,
    chapterName: "Multiple Pregnancy",
    question: "In TRAP sequence, what percentage of pump twins die in utero if left untreated?",
    options: {
      A: "10-20%",
      B: "One-third to a half",
      C: "75-80%",
      D: "90-95%"
    },
    answer: "B",
    rationale: "** Studies report that, in nearly a third to a half of pregnancies with TRAP sequence, the pump twins die in utero if left untreated."
  },
  {
    id: 219,
    chapterId: 7,
    chapterName: "Multiple Pregnancy",
    question: "Monoamniotic twin pregnancies have an incidence of approximately:",
    options: {
      A: "1 in 1,000 pregnancies",
      B: "1 in 5,000 pregnancies",
      C: "1 in 10,000 pregnancies",
      D: "1 in 50,000 pregnancies"
    },
    answer: "C",
    rationale: "** The incidence of monoamniotic twins is approximately 1 in 10,000 pregnancies."
  },
  {
    id: 220,
    chapterId: 7,
    chapterName: "Multiple Pregnancy",
    question: "Cord entanglement is present in what percentage of monoamniotic twin pregnancies?",
    options: {
      A: "50%",
      B: "75%",
      C: "Nearly all (close to 100%)",
      D: "25%"
    },
    answer: "C",
    rationale: "** Cord entanglement is present in nearly all MCMA twin pregnancies."
  },
  {
    id: 221,
    chapterId: 7,
    chapterName: "Multiple Pregnancy",
    question: "MCMA pregnancies are generally delivered by caesarean section at:",
    options: {
      A: "28-30 weeks",
      B: "32-34 weeks",
      C: "36-37 weeks",
      D: "38-39 weeks"
    },
    answer: "B",
    rationale: "** MCMA pregnancies are monitored closely with antenatal fetal surveillance and delivery by caesarean section generally at 32-34 weeks' gestation."
  },
  {
    id: 222,
    chapterId: 7,
    chapterName: "Multiple Pregnancy",
    question: "According to NICE guidelines, how many antenatal appointments should be offered for uncomplicated dichorionic twin pregnancies?",
    options: {
      A: "At least 4",
      B: "At least 6",
      C: "At least 8",
      D: "At least 11"
    },
    answer: "C",
    rationale: "** NICE guidelines recommend that pregnant women with uncomplicated dichorionic twin pregnancies be offered at least eight antenatal appointments."
  },
  {
    id: 223,
    chapterId: 7,
    chapterName: "Multiple Pregnancy",
    question: "For monochorionic triamniotic and dichorionic triamniotic triplet pregnancies, NICE recommends at least how many antenatal appointments?",
    options: {
      A: "8",
      B: "9",
      C: "10",
      D: "11"
    },
    answer: "D",
    rationale: "** NICE recommends that pregnant women with uncomplicated monochorionic triamniotic and dichorionic triamniotic triplet pregnancies be offered at least 11 antenatal appointments."
  },
  {
    id: 224,
    chapterId: 7,
    chapterName: "Multiple Pregnancy",
    question: "In multiple pregnancies, when should full blood count be checked?",
    options: {
      A: "12 and 20 weeks",
      B: "20 and 28 weeks",
      C: "24 and 32 weeks",
      D: "28 and 36 weeks"
    },
    answer: "B",
    rationale: "** A full blood count should be checked at 20 and 28 weeks' gestation and supplementation with iron, folic acid or vitamin B12 initiated."
  },
  {
    id: 225,
    chapterId: 7,
    chapterName: "Multiple Pregnancy",
    question: "For first-trimester screening in monochorionic triplet pregnancies, the risk of Down syndrome should be calculated:",
    options: {
      A: "For each baby individually",
      B: "For the pregnancy as a whole",
      C: "Only for the largest fetus",
      D: "Not at all"
    },
    answer: "B",
    rationale: "** When performing first trimester screening in monochorionic triplet pregnancies, the risk of Down syndrome should be calculated for the pregnancy as a whole."
  },
  {
    id: 226,
    chapterId: 7,
    chapterName: "Multiple Pregnancy",
    question: "In dichorionic triplet pregnancies, the risk of Down syndrome should be calculated:",
    options: {
      A: "For the pregnancy as a whole",
      B: "For each baby individually",
      C: "Only for the fetus with the largest nuchal translucency",
      D: "Not at all"
    },
    answer: "B",
    rationale: "** In dichorionic and trichorionic triplet pregnancies, the risk should be calculated for each baby."
  },
  {
    id: 227,
    chapterId: 7,
    chapterName: "Multiple Pregnancy",
    question: "Fetal weight should be calculated from 20 weeks' gestation at a maximum of what intervals in multiple pregnancies?",
    options: {
      A: "2-week intervals",
      B: "4-week intervals",
      C: "6-week intervals",
      D: "8-week intervals"
    },
    answer: "B",
    rationale: "** Fetal weight should be calculated from 20 weeks' gestation at a maximum of 4-week intervals."
  },
  {
    id: 228,
    chapterId: 7,
    chapterName: "Multiple Pregnancy",
    question: "",
    options: {
      A: "10%",
      B: "15%",
      C: "20%",
      D: "25%"
    },
    answer: "D",
    rationale: "** A growth discrepancy of 25% or greater should be considered clinically significant."
  },
  {
    id: 229,
    chapterId: 7,
    chapterName: "Multiple Pregnancy",
    question: "For uncomplicated dichorionic diamniotic pregnancies, vaginal delivery is advocated from:",
    options: {
      A: "34 weeks",
      B: "36 weeks",
      C: "37 weeks",
      D: "38 weeks"
    },
    answer: "C",
    rationale: "** Generally, with dichorionic twin pregnancies, delivery from 37 weeks' gestation is recommended."
  },
  {
    id: 230,
    chapterId: 7,
    chapterName: "Multiple Pregnancy",
    question: "For uncomplicated monochorionic twin pregnancies, elective delivery should be offered from:",
    options: {
      A: "34 weeks",
      B: "36 weeks",
      C: "37 weeks",
      D: "38 weeks"
    },
    answer: "B",
    rationale: "** Pregnant women with uncomplicated monochorionic twin pregnancies should be offered elective delivery from 36 weeks' gestation."
  },
  {
    id: 231,
    chapterId: 7,
    chapterName: "Multiple Pregnancy",
    question: "The risk of requiring emergency caesarean section for delivery of the second twin following vaginal delivery of the first twin is approximately:",
    options: {
      A: "1%",
      B: "2%",
      C: "4%",
      D: "10%"
    },
    answer: "C",
    rationale: "** The risk of requiring emergency caesarean section for delivery of the second twin following vaginal delivery of the first twin is approximately 4%."
  },
  {
    id: 232,
    chapterId: 7,
    chapterName: "Multiple Pregnancy",
    question: "If the second twin is transverse after delivery of the first twin, external cephalic version can be successful in more than what percentage of cases?",
    options: {
      A: "50%",
      B: "60%",
      C: "70%",
      D: "80%"
    },
    answer: "C",
    rationale: "** If the fetus is transverse, external cephalic version can be successful in more than 70% of cases."
  },
  {
    id: 233,
    chapterId: 7,
    chapterName: "Multiple Pregnancy",
    question: "Fetoscopic laser ablation is generally considered the definitive treatment for severe TTTS between:",
    options: {
      A: "12 and 20 weeks",
      B: "16 and 26 weeks",
      C: "20 and 30 weeks",
      D: "24 and 32 weeks"
    },
    answer: "B",
    rationale: "** Fetoscopic laser ablation is now generally considered the definitive treatment of severe TTTS between 16 and 26 weeks' gestation."
  },
  {
    id: 234,
    chapterId: 7,
    chapterName: "Multiple Pregnancy",
    question: "Continuing uncomplicated twin pregnancies beyond what gestation increases the risk of intrauterine fetal death?",
    options: {
      A: "36 weeks",
      B: "37 weeks",
      C: "38 weeks",
      D: "40 weeks"
    },
    answer: "C",
    rationale: "** Continuing uncomplicated twin pregnancies beyond 38 weeks' gestation increases the risk of intrauterine fetal death."
  },
  {
    id: 235,
    chapterId: 7,
    chapterName: "Multiple Pregnancy",
    question: "The spontaneous triplet pregnancy incidence is approximately:",
    options: {
      A: "1 in 1,000 births",
      B: "1 in 6,000-8,000 births",
      C: "1 in 15,000 births",
      D: "1 in 25,000 births"
    },
    answer: "B",
    rationale: "** The incidence of spontaneous triplet pregnancy is 1 in 6,000-8,000 births."
  },
  {
    id: 236,
    chapterId: 7,
    chapterName: "Multiple Pregnancy",
    question: "Triplets have an average gestation at delivery of:",
    options: {
      A: "32 weeks",
      B: "34 weeks",
      C: "36 weeks",
      D: "38 weeks"
    },
    answer: "B",
    rationale: "** According to UK data, triplets have an average gestation of 34 weeks at delivery."
  },
  {
    id: 237,
    chapterId: 7,
    chapterName: "Multiple Pregnancy",
    question: "The cerebral palsy rate in triplets is approximately:",
    options: {
      A: "5 per 1,000 live births",
      B: "10 per 1,000 live births",
      C: "26.7 per 1,000 live births",
      D: "50 per 1,000 live births"
    },
    answer: "C",
    rationale: "** Triplets have a cerebral palsy rate of 26.7 per 1,000 live births."
  },
  {
    id: 238,
    chapterId: 7,
    chapterName: "Multiple Pregnancy",
    question: "It is not recommended to prolong triplet pregnancy beyond:",
    options: {
      A: "34 weeks",
      B: "36 weeks",
      C: "37 weeks",
      D: "38 weeks"
    },
    answer: "B",
    rationale: "** It is not recommended to prolong pregnancy beyond 36 weeks' gestation in triplet pregnancies."
  },
  {
    id: 239,
    chapterId: 7,
    chapterName: "Multiple Pregnancy",
    question: "For monochorionic pregnancies, ultrasound monitoring should be performed:",
    options: {
      A: "Monthly",
      B: "Every 3 weeks",
      C: "2-weekly starting from 16 weeks",
      D: "Weekly starting from 20 weeks"
    },
    answer: "C",
    rationale: "** All monochorionic pregnancies must have 2-weekly ultrasound monitoring, starting from 16 weeks for early detection of complications."
  },
  {
    id: 240,
    chapterId: 7,
    chapterName: "Multiple Pregnancy",
    question: "Dichorionic twin pregnancies must have growth scans:",
    options: {
      A: "Weekly",
      B: "Every 2 weeks",
      C: "Monthly",
      D: "Every 6 weeks"
    },
    answer: "C",
    rationale: "** Dichorionic twin pregnancies must have monthly growth scans to detect discordant growth. # \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550"
  },
  {
    id: 241,
    chapterId: 8,
    chapterName: "Preterm Labour",
    question: "What percentage of births were preterm in the UK in 2020?",
    options: {
      A: "5.9%",
      B: "7.4%",
      C: "8.2%",
      D: "10.2%"
    },
    answer: "B",
    rationale: "** In the UK, 7.4% of births were preterm in 2020."
  },
  {
    id: 242,
    chapterId: 8,
    chapterName: "Preterm Labour",
    question: "The country with the highest number of preterm births globally is:",
    options: {
      A: "China",
      B: "USA",
      C: "India",
      D: "Nigeria"
    },
    answer: "C",
    rationale: "** The countries with the highest numbers of preterm births are India (3,519,947), followed by China."
  },
  {
    id: 243,
    chapterId: 8,
    chapterName: "Preterm Labour",
    question: "Spontaneous labour with intact membranes accounts for what percentage of preterm deliveries?",
    options: {
      A: "15%",
      B: "25%",
      C: "35%",
      D: "50%"
    },
    answer: "C",
    rationale: "** Spontaneous labour with intact membranes accounts for 35% of preterm deliveries."
  },
  {
    id: 244,
    chapterId: 8,
    chapterName: "Preterm Labour",
    question: "Preterm premature rupture of membranes (PPROM) accounts for what percentage of preterm deliveries?",
    options: {
      A: "15%",
      B: "25%",
      C: "35%",
      D: "45%"
    },
    answer: "B",
    rationale: "** PPROM accounts for 25% of preterm deliveries."
  },
  {
    id: 245,
    chapterId: 8,
    chapterName: "Preterm Labour",
    question: "Multiple pregnancy accounts for what percentage of preterm deliveries?",
    options: {
      A: "5%",
      B: "10%",
      C: "15%",
      D: "25%"
    },
    answer: "C",
    rationale: "** Multiple pregnancy accounts for 15% of preterm deliveries."
  },
  {
    id: 246,
    chapterId: 8,
    chapterName: "Preterm Labour",
    question: "",
    options: {
      A: "2-fold",
      B: "3-fold",
      C: "4-fold",
      D: "6.5-fold"
    },
    answer: "C",
    rationale: "** Having a previous preterm birth increases the risk fourfold of a further preterm birth."
  },
  {
    id: 247,
    chapterId: 8,
    chapterName: "Preterm Labour",
    question: "If a pregnant woman has two preterm births, she is at how many times greater risk of a subsequent preterm birth?",
    options: {
      A: "2.5 times",
      B: "4 times",
      C: "6.5 times",
      D: "10 times"
    },
    answer: "C",
    rationale: "** If a pregnant woman has two preterm births, she is at a 6.5 times greater risk of a subsequent preterm birth."
  },
  {
    id: 248,
    chapterId: 8,
    chapterName: "Preterm Labour",
    question: "Bacterial vaginosis affects what percentage of pregnant women?",
    options: {
      A: "5%",
      B: "10%",
      C: "16%",
      D: "25%"
    },
    answer: "C",
    rationale: "** Abnormal vaginal flora, for example bacterial vaginosis, affects 16% of pregnant women."
  },
  {
    id: 249,
    chapterId: 8,
    chapterName: "Preterm Labour",
    question: "What percentage of pregnancies delivered after PPROM are complicated by infection?",
    options: {
      A: "10%",
      B: "25%",
      C: "33%",
      D: "50%"
    },
    answer: "C",
    rationale: "** Overall, 33% of all pregnancies delivered after PPROM are complicated by infection."
  },
  {
    id: 250,
    chapterId: 8,
    chapterName: "Preterm Labour",
    question: "The rate of positive amniotic fluid cultures in babies delivered weighing less than 1kg is:",
    options: {
      A: "33%",
      B: "50%",
      C: "66%",
      D: "83%"
    },
    answer: "D",
    rationale: "** Positive amniotic fluid cultures are found in 83% of babies delivered weighing less than 1kg."
  },
  {
    id: 251,
    chapterId: 8,
    chapterName: "Preterm Labour",
    question: "Congenital Mullerian anomalies are estimated to occur in up to what percentage of women of reproductive age?",
    options: {
      A: "1%",
      B: "2%",
      C: "4%",
      D: "8%"
    },
    answer: "C",
    rationale: "** Congenital Mullerian anomalies are estimated to occur in up to 4% of women of reproductive age."
  },
  {
    id: 252,
    chapterId: 8,
    chapterName: "Preterm Labour",
    question: "Placental abruption complicates what percentage of all pregnancies?",
    options: {
      A: "0.5%",
      B: "1%",
      C: "2%",
      D: "5%"
    },
    answer: "B",
    rationale: "** Placental abruption complicates 1% of all pregnancies."
  },
  {
    id: 253,
    chapterId: 8,
    chapterName: "Preterm Labour",
    question: "Cervical length measured by which method has been shown to be most accurate for predicting preterm birth?",
    options: {
      A: "Transabdominal ultrasound",
      B: "Transvaginal ultrasound",
      C: "Digital examination",
      D: "MRI"
    },
    answer: "B",
    rationale: "** Cervical length measured by transvaginal ultrasound has been shown to be more accurate than transabdominal ultrasound or digital examination."
  },
  {
    id: 254,
    chapterId: 8,
    chapterName: "Preterm Labour",
    question: "The combination of cervical length and obstetric history can predict what percentage of extremely early spontaneous preterm birth?",
    options: {
      A: "50%",
      B: "60%",
      C: "70%",
      D: "80%"
    },
    answer: "D",
    rationale: "** The combination of cervical length and obstetric history can predict 80% of extremely early spontaneous preterm birth."
  },
  {
    id: 255,
    chapterId: 8,
    chapterName: "Preterm Labour",
    question: "NICE recommends offering vaginal progesterone to pregnant women at high risk of preterm birth, such as those with:",
    options: {
      A: "Only a history of preterm birth",
      B: "Only a short cervix",
      C: "Both a history of preterm birth and a short cervix",
      D: "Multiple pregnancy regardless of cervical length"
    },
    answer: "C",
    rationale: "** NICE guidance recommends offering vaginal progesterone to pregnant women at high risk of preterm birth, such as those with both a history of preterm birth and a short cervix."
  },
  {
    id: 256,
    chapterId: 8,
    chapterName: "Preterm Labour",
    question: "Cervical cerclage does NOT appear to reduce the risk of preterm birth in:",
    options: {
      A: "Singleton pregnancies with cervical insufficiency",
      B: "Multiple pregnancies",
      C: "Pregnancies with previous cervical surgery",
      D: "History-indicated cerclage cases"
    },
    answer: "B",
    rationale: "** Cervical cerclage does not appear to reduce the risk of preterm birth in multiple pregnancies."
  },
  {
    id: 257,
    chapterId: 8,
    chapterName: "Preterm Labour",
    question: "",
    options: {
      A: "One mid-trimester loss",
      B: "Two mid-trimester losses",
      C: "Three or more mid-trimester losses or preterm deliveries",
      D: "Any previous preterm birth"
    },
    answer: "C",
    rationale: "** Transvaginal cervical cerclage may be placed following three or more mid-trimester losses or preterm deliveries (history-indicated cerclage)."
  },
  {
    id: 258,
    chapterId: 8,
    chapterName: "Preterm Labour",
    question: "An ultrasound-indicated cerclage is placed when:",
    options: {
      A: "The cervix is dilating in the absence of contractions",
      B: "The cervix shortens (usually less than 25mm) in those with a history of cervical surgery or previous preterm birth",
      C: "There is a history of three or more losses",
      D: "There is vaginal bleeding"
    },
    answer: "B",
    rationale: "** Ultrasound-indicated cerclage is placed when the cervix shortens (usually less than 25mm) in those with a history of cervical surgery or previous preterm birth."
  },
  {
    id: 259,
    chapterId: 8,
    chapterName: "Preterm Labour",
    question: "Antenatal corticosteroids are associated with significant reductions in the risks of neonatal mortality, RDS, and intraventricular haemorrhage by:",
    options: {
      A: "15%, 25%, and 30% respectively",
      B: "31%, 44%, and 46% respectively",
      C: "50%, 60%, and 70% respectively",
      D: "20%, 35%, and 40% respectively"
    },
    answer: "B",
    rationale: "** A 2006 Cochrane Database Review confirmed significant reductions in the risks of mortality (31%), RDS (44%), and intraventricular haemorrhage (46%)."
  },
  {
    id: 260,
    chapterId: 8,
    chapterName: "Preterm Labour",
    question: "Which corticosteroid preparation contains a sulphite preservative that has been linked with neurotoxicity and should be avoided?",
    options: {
      A: "Betamethasone",
      B: "Dexamethasone (some preparations)",
      C: "Hydrocortisone",
      D: "Prednisolone"
    },
    answer: "B",
    rationale: "** Some dexamethasone preparations contain a sulphite preservative that has been linked with neurotoxicity and should be avoided."
  },
  {
    id: 261,
    chapterId: 8,
    chapterName: "Preterm Labour",
    question: "Magnesium sulphate is used in preterm labour for:",
    options: {
      A: "Tocolysis only",
      B: "Fetal neuroprotection and prevention of cerebral palsy",
      C: "Treatment of eclampsia only",
      D: "Antibiotic prophylaxis"
    },
    answer: "B",
    rationale: "** Magnesium sulphate is used as fetal neuroprotection in pregnant women in established PTL or planned preterm birth, as it has been shown to reduce the risk of cerebral palsy."
  },
  {
    id: 262,
    chapterId: 8,
    chapterName: "Preterm Labour",
    question: "NSAIDs should normally be used only prior to what gestation for tocolysis due to risk of premature ductal closure?",
    options: {
      A: "24 weeks",
      B: "28 weeks",
      C: "32 weeks",
      D: "34 weeks"
    },
    answer: "C",
    rationale: "** NSAIDs are normally used only prior to 32 weeks' gestation due to the risk of premature closure of the ductus arteriosus."
  },
  {
    id: 263,
    chapterId: 8,
    chapterName: "Preterm Labour",
    question: "The ORACLE trials demonstrated that in singleton pregnancies with PPROM, which antibiotic improved neonatal outcomes?",
    options: {
      A: "Amoxicillin",
      B: "Metronidazole",
      C: "Erythromycin",
      D: "Clindamycin"
    },
    answer: "C",
    rationale: "** The ORACLE trials demonstrated that, in singleton pregnancies with PPROM, erythromycin improved neonatal outcomes."
  },
  {
    id: 264,
    chapterId: 8,
    chapterName: "Preterm Labour",
    question: "PPROM occurs in approximately what percentage of all pregnancies?",
    options: {
      A: "0.5%",
      B: "1%",
      C: "2%",
      D: "5%"
    },
    answer: "C",
    rationale: "** PPROM occurs in approximately 2% of all pregnancies."
  },
  {
    id: 265,
    chapterId: 8,
    chapterName: "Preterm Labour",
    question: "Following PPROM, what percentage of pregnant women give birth within 1 week?",
    options: {
      A: "25%",
      B: "50%",
      C: "75%",
      D: "90%"
    },
    answer: "B",
    rationale: "** Fifty per cent of pregnant women give birth within 1 week and 75% give birth within 2 weeks of PPROM."
  },
  {
    id: 266,
    chapterId: 8,
    chapterName: "Preterm Labour",
    question: "Pulmonary hypoplasia following PPROM occurs in approximately 50% of cases with PPROM at:",
    options: {
      A: "19 weeks",
      B: "22 weeks",
      C: "25 weeks",
      D: "28 weeks"
    },
    answer: "A",
    rationale: "** Pulmonary hypoplasia following PPROM occurs in approximately 50% of cases with PPROM at 19 weeks, falling to about 10% at 25 weeks."
  },
  {
    id: 267,
    chapterId: 8,
    chapterName: "Preterm Labour",
    question: "The rate of preterm birth overall in England and Wales rose from 7% in 2010 to what percentage in 2017?",
    options: {
      A: "7.5%",
      B: "8%",
      C: "8.5%",
      D: "9%"
    },
    answer: "B",
    rationale: "** The rate of preterm birth overall has risen gradually in England and Wales from 7% in 2010 to 8% in 2017."
  },
  {
    id: 268,
    chapterId: 8,
    chapterName: "Preterm Labour",
    question: "For assisted vaginal delivery at less than 34 weeks, which instrument is preferred?",
    options: {
      A: "Vacuum device (ventouse)",
      B: "Forceps",
      C: "Neither, caesarean section is mandatory",
      D: "Either, no preference"
    },
    answer: "B",
    rationale: "** For assisted vaginal delivery at less than 34 weeks, forceps rather than vacuum devices are preferred, as there is less risk of trauma to the infant."
  },
  {
    id: 269,
    chapterId: 8,
    chapterName: "Preterm Labour",
    question: "In the follow-up of Swedish children born extremely preterm (less than 27 weeks), what percentage survived with no or mild disability at 6.5 years?",
    options: {
      A: "45%",
      B: "55%",
      C: "66%",
      D: "75%"
    },
    answer: "C",
    rationale: "** A follow-up found that 69% survived and 66% of the survivors had no or mild disability."
  },
  {
    id: 270,
    chapterId: 8,
    chapterName: "Preterm Labour",
    question: "Cerebral palsy was identified in what percentage of extremely preterm Swedish children at 6.5 years?",
    options: {
      A: "2%",
      B: "5%",
      C: "9.5%",
      D: "15%"
    },
    answer: "C",
    rationale: "** Cerebral palsy was identified in 9.5% of the extremely preterm children. --- # \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550"
  },
  {
    id: 271,
    chapterId: 9,
    chapterName: "Hypertensive Disorders of Pregnancy",
    question: "Approximately what percentage of pregnancies will be complicated by one or more episodes of raised blood pressure prior to delivery?",
    options: {
      A: "1 in 20",
      B: "1 in 10",
      C: "1 in 5",
      D: "1 in 3"
    },
    answer: "B",
    rationale: "** Approximately 1 in 10 pregnancies will be complicated by one or more episodes of raised blood pressure prior to delivery."
  },
  {
    id: 272,
    chapterId: 9,
    chapterName: "Hypertensive Disorders of Pregnancy",
    question: "Pre-eclampsia complicates approximately what percentage of pregnancies in the UK?",
    options: {
      A: "1-2%",
      B: "2-3%",
      C: "5-7%",
      D: "10-15%"
    },
    answer: "B",
    rationale: "** Pre-eclampsia complicates approximately 2-3% of pregnancies in the UK."
  },
  {
    id: 273,
    chapterId: 9,
    chapterName: "Hypertensive Disorders of Pregnancy",
    question: "Globally, how many pregnant women are estimated to die of pre-eclampsia each year?",
    options: {
      A: "10,000-25,000",
      B: "25,000-50,000",
      C: "50,000-75,000",
      D: "100,000-150,000"
    },
    answer: "C",
    rationale: "** The World Health Organization estimates that, globally, between 50,000 and 75,000 pregnant women die of this condition each year."
  },
  {
    id: 274,
    chapterId: 9,
    chapterName: "Hypertensive Disorders of Pregnancy",
    question: "In the UK and Ireland Confidential Enquiry into Maternal Deaths (2017-2019), how many deaths were due to pre-eclampsia?",
    options: {
      A: "6",
      B: "12",
      C: "19",
      D: "25"
    },
    answer: "A",
    rationale: "** There were six deaths due to pre-eclampsia in the 2017-2019 report."
  },
  {
    id: 275,
    chapterId: 9,
    chapterName: "Hypertensive Disorders of Pregnancy",
    question: "Non-proteinuric pregnancy-induced hypertension (gestational hypertension) is hypertension that arises:",
    options: {
      A: "In the first half of pregnancy",
      B: "For the first time in the second half of pregnancy in the absence of proteinuria",
      C: "Only in the third trimester",
      D: "Only postpartum"
    },
    answer: "B",
    rationale: "** Non-proteinuric pregnancy-induced hypertension is hypertension that arises for the first time in the second half of pregnancy and in the absence of proteinuria."
  },
  {
    id: 276,
    chapterId: 9,
    chapterName: "Hypertensive Disorders of Pregnancy",
    question: "Up to what proportion of cases of gestational hypertension will progress to pre-eclampsia?",
    options: {
      A: "One-quarter",
      B: "One-third",
      C: "One-half",
      D: "Two-thirds"
    },
    answer: "B",
    rationale: "** Up to one-third of cases of gestational hypertension will progress to pre-eclampsia."
  },
  {
    id: 277,
    chapterId: 9,
    chapterName: "Hypertensive Disorders of Pregnancy",
    question: "What percentage of chronic hypertension cases are essential hypertension?",
    options: {
      A: "50%",
      B: "70%",
      C: "90%",
      D: "95%"
    },
    answer: "C",
    rationale: "** As is the case in the non-pregnant population, most cases of chronic hypertension (~90%) are essential hypertension."
  },
  {
    id: 278,
    chapterId: 9,
    chapterName: "Hypertensive Disorders of Pregnancy",
    question: "Pre-eclampsia is defined as new-onset gestational hypertension associated with new onset of at least one of the following, occurring at or after how many weeks' gestation?",
    options: {
      A: "12 weeks",
      B: "16 weeks",
      C: "20 weeks",
      D: "24 weeks"
    },
    answer: "C",
    rationale: "** Pre-eclampsia is defined as new-onset gestational hypertension associated with new onset of at least one of the following at or after 20 weeks' gestation."
  },
  {
    id: 279,
    chapterId: 9,
    chapterName: "Hypertensive Disorders of Pregnancy",
    question: "To confirm the presence of hypertension, blood pressure should be measured on at least two occasions how many hours apart?",
    options: {
      A: "1 hour",
      B: "2 hours",
      C: "4 hours",
      D: "24 hours"
    },
    answer: "C",
    rationale: "** Blood pressure should be measured on at least two occasions 4 hours apart."
  },
  {
    id: 280,
    chapterId: 9,
    chapterName: "Hypertensive Disorders of Pregnancy",
    question: "The diagnostic threshold for proteinuria using protein:creatinine ratio (P:Cr) is:",
    options: {
      A: "Greater than 8 mg/mmol",
      B: "Greater than 15 mg/mmol",
      C: "Greater than 30 mg/mmol",
      D: "Greater than 100 mg/mmol"
    },
    answer: "C",
    rationale: "** Diagnostic thresholds of 30 mg/mmol for P:Cr and 8 mg/mmol for A:Cr have been determined to provide high sensitivity and specificity."
  },
  {
    id: 281,
    chapterId: 9,
    chapterName: "Hypertensive Disorders of Pregnancy",
    question: "",
    options: {
      A: "20",
      B: "28",
      C: "38",
      D: "50"
    },
    answer: "C",
    rationale: "** A sFlt-1:PlGF ratio of less than 38 can rule out pre-eclampsia within the next 7 days."
  },
  {
    id: 282,
    chapterId: 9,
    chapterName: "Hypertensive Disorders of Pregnancy",
    question: "Pre-eclampsia is more common in:",
    options: {
      A: "Multiparous women",
      B: "First pregnancies",
      C: "Women with previous normal pregnancies only",
      D: "Teenagers only"
    },
    answer: "B",
    rationale: "** Pre-eclampsia is more common in first pregnancies."
  },
  {
    id: 283,
    chapterId: 9,
    chapterName: "Hypertensive Disorders of Pregnancy",
    question: "There is a three to fourfold increase in the incidence of pre-eclampsia in:",
    options: {
      A: "Second-degree relatives of affected individuals",
      B: "First-degree relatives of affected individuals",
      C: "Only in mothers of affected individuals",
      D: "Only in sisters of affected individuals"
    },
    answer: "B",
    rationale: "** There is a three to fourfold increase in the incidence of pre-eclampsia in the first-degree relatives of affected individuals."
  },
  {
    id: 284,
    chapterId: 9,
    chapterName: "Hypertensive Disorders of Pregnancy",
    question: "HELLP syndrome occurs in what percentage of pregnant women with pre-eclampsia?",
    options: {
      A: "2-4%",
      B: "10-15%",
      C: "20-25%",
      D: "30-40%"
    },
    answer: "A",
    rationale: "** HELLP syndrome is a particularly severe form of pre-eclampsia, occurring in just 2-4% of pregnant women with the disease."
  },
  {
    id: 285,
    chapterId: 9,
    chapterName: "Hypertensive Disorders of Pregnancy",
    question: "HELLP syndrome is associated with a fetal loss rate of up to:",
    options: {
      A: "20%",
      B: "40%",
      C: "60%",
      D: "80%"
    },
    answer: "C",
    rationale: "** HELLP syndrome is associated with a high fetal loss rate (of up to 60%)."
  },
  {
    id: 286,
    chapterId: 9,
    chapterName: "Hypertensive Disorders of Pregnancy",
    question: "The most common cause of death in women who die of pre-eclampsia in the UK is:",
    options: {
      A: "Liver failure",
      B: "Renal failure",
      C: "Cerebral bleeding secondary to uncontrolled systolic blood pressure",
      D: "Pulmonary embolism"
    },
    answer: "C",
    rationale: "** The most common cause of death in women who die of pre-eclampsia in the UK is cerebral bleeding secondary to uncontrolled systolic blood pressure."
  },
  {
    id: 287,
    chapterId: 9,
    chapterName: "Hypertensive Disorders of Pregnancy",
    question: "Labetalol is preferred as first-line antihypertensive in pregnancy because it is:",
    options: {
      A: "An ACE inhibitor",
      B: "An alpha-blocking and beta-blocking agent with good safety record",
      C: "A calcium channel blocker with rapid onset",
      D: "A centrally acting agent"
    },
    answer: "B",
    rationale: "** Labetalol is an alpha-blocking and beta-blocking agent with a good safety record in pregnancy and can be given orally and intravenously."
  },
  {
    id: 288,
    chapterId: 9,
    chapterName: "Hypertensive Disorders of Pregnancy",
    question: "The drug of choice for the treatment of eclampsia is:",
    options: {
      A: "Diazepam",
      B: "Phenytoin",
      C: "Magnesium sulphate",
      D: "Labetalol"
    },
    answer: "C",
    rationale: "** The drug of choice for the treatment of eclampsia is magnesium sulphate."
  },
  {
    id: 289,
    chapterId: 9,
    chapterName: "Hypertensive Disorders of Pregnancy",
    question: "Low-dose aspirin (typically 75-150mg daily) is used for:",
    options: {
      A: "Treatment of established pre-eclampsia",
      B: "Prevention of pre-eclampsia in high-risk pregnant women",
      C: "Treatment of chronic hypertension",
      D: "Treatment of eclampsia"
    },
    answer: "B",
    rationale: "** Established preventative interventions include low-dose aspirin, which modestly reduces the risk of pre-eclampsia in high-risk pregnant women."
  },
  {
    id: 290,
    chapterId: 9,
    chapterName: "Hypertensive Disorders of Pregnancy",
    question: "In pregnant women requiring antihypertensive medication for chronic hypertension, delivery is usually offered around:",
    options: {
      A: "36 weeks",
      B: "37 weeks",
      C: "39 weeks",
      D: "41 weeks"
    },
    answer: "C",
    rationale: "** In pregnant women requiring antihypertensive medication, delivery is usually offered around 39 weeks."
  },
  {
    id: 291,
    chapterId: 9,
    chapterName: "Hypertensive Disorders of Pregnancy",
    question: "FGR is defined as:",
    options: {
      A: "A fetus weighing less than the 3rd centile",
      B: "A failure of a fetus to achieve its genetic growth potential",
      C: "Any fetus smaller than average",
      D: "A fetus with oligohydramnios only"
    },
    answer: "B",
    rationale: "** FGR is defined as a failure of a fetus to achieve its genetic growth potential."
  },
  {
    id: 292,
    chapterId: 9,
    chapterName: "Hypertensive Disorders of Pregnancy",
    question: "SGA means that the weight of the fetus is less than what centile for its gestation?",
    options: {
      A: "3rd centile",
      B: "5th centile",
      C: "10th centile",
      D: "25th centile"
    },
    answer: "C",
    rationale: "** SGA means that the weight of the fetus is less than the 10th centile for its gestation."
  },
  {
    id: 293,
    chapterId: 9,
    chapterName: "Hypertensive Disorders of Pregnancy",
    question: "Most babies that are born small are either constitutionally small or small secondary to:",
    options: {
      A: "Chromosomal abnormalities",
      B: "Fetal infections",
      C: "Abnormal placenta function",
      D: "Maternal diabetes"
    },
    answer: "C",
    rationale: "** Most babies that are born small are either constitutionally small or are small secondary to abnormal placenta function."
  },
  {
    id: 294,
    chapterId: 9,
    chapterName: "Hypertensive Disorders of Pregnancy",
    question: "In developed countries, the most common cause of FGR is:",
    options: {
      A: "Maternal undernutrition",
      B: "Poor placental function secondary to inadequate trophoblast invasion",
      C: "Chromosomal abnormalities",
      D: "Multiple pregnancy"
    },
    answer: "B",
    rationale: "** In developed countries, the most common cause of FGR is poor placental function secondary to inadequate trophoblast invasion of the spiral arteries."
  },
  {
    id: 295,
    chapterId: 9,
    chapterName: "Hypertensive Disorders of Pregnancy",
    question: "Smoking causes FGR by:",
    options: {
      A: "Reducing maternal appetite",
      B: "Increasing carboxyhaemoglobin, effectively reducing oxygen available to the fetus",
      C: "Causing maternal hypertension",
      D: "Direct toxic effect on fetal brain"
    },
    answer: "B",
    rationale: "** Smoking increases the amount of carboxyhaemoglobin in the maternal circulation, effectively reducing the amount of oxygen available to the fetus."
  },
  {
    id: 296,
    chapterId: 9,
    chapterName: "Hypertensive Disorders of Pregnancy",
    question: "Symmetrically small fetuses are normally associated with:",
    options: {
      A: "Uteroplacental insufficiency",
      B: "Factors that directly impair fetal growth such as chromosomal disorders",
      C: "Maternal hypertension",
      D: "Post-term pregnancy"
    },
    answer: "B",
    rationale: "** Symmetrically small fetuses are normally associated with factors that directly impair fetal growth such as chromosomal disorders and fetal infections."
  },
  {
    id: 297,
    chapterId: 9,
    chapterName: "Hypertensive Disorders of Pregnancy",
    question: "Asymmetrical growth restriction is classically associated with:",
    options: {
      A: "Chromosomal abnormalities",
      B: "Uteroplacental insufficiency",
      C: "Fetal infections",
      D: "Maternal diabetes"
    },
    answer: "B",
    rationale: "** Asymmetrical growth restriction is classically associated with uteroplacental insufficiency."
  },
  {
    id: 298,
    chapterId: 9,
    chapterName: "Hypertensive Disorders of Pregnancy",
    question: "In fetal hypoxia, more well-oxygenated blood from the umbilical vein is diverted through the:",
    options: {
      A: "Foramen ovale",
      B: "Ductus arteriosus",
      C: "Ductus venosus",
      D: "Pulmonary artery"
    },
    answer: "C",
    rationale: "** When there is fetal hypoxia, more of the well-oxygenated blood from the umbilical vein is diverted through the ductus venosus."
  },
  {
    id: 299,
    chapterId: 9,
    chapterName: "Hypertensive Disorders of Pregnancy",
    question: "The result of circulatory changes in FGR is an asymmetrical fetus with:",
    options: {
      A: "Relative brain sparing, reduced abdominal girth, and skin thickness",
      B: "Large abdomen and small head",
      C: "Proportionate reduction in all measurements",
      D: "Long limbs and small trunk"
    },
    answer: "A",
    rationale: "** The result is an asymmetrical fetus with relative brain sparing, reduced abdominal girth and skin thickness."
  },
  {
    id: 300,
    chapterId: 9,
    chapterName: "Hypertensive Disorders of Pregnancy",
    question: "FGR fetuses are especially at risk from profound asphyxia in labour due to:",
    options: {
      A: "Cord compression",
      B: "Further compromise of the uteroplacental circulation by uterine contractions",
      C: "Maternal hypotension",
      D: "Fetal tachycardia"
    },
    answer: "B",
    rationale: "** FGR fetuses are especially at risk from profound asphyxia in labour due to further compromise of the uteroplacental circulation by uterine contractions."
  },
  {
    id: 301,
    chapterId: 9,
    chapterName: "Hypertensive Disorders of Pregnancy",
    question: "Serial ultrasound biometry for growth assessment should be performed at intervals of:",
    options: {
      A: "1 week",
      B: "2 weeks",
      C: "Usually 4 weeks and no less than 2 weeks",
      D: "8 weeks"
    },
    answer: "C",
    rationale: "** The most precise way of assessing fetal growth is by ultrasound biometry serially at set time intervals (usually of 4 weeks and no less than 2 weeks)."
  },
  {
    id: 302,
    chapterId: 9,
    chapterName: "Hypertensive Disorders of Pregnancy",
    question: "When a diagnosis of SGA has been made, what is the next step?",
    options: {
      A: "Immediate delivery",
      B: "Clarify whether the baby is constitutionally small or FGR",
      C: "Start low-dose aspirin",
      D: "Perform amniocentesis in all cases"
    },
    answer: "B",
    rationale: "** When a diagnosis of SGA has been made, the next step is to clarify whether the baby is normal and simply constitutionally small or whether it is FGR."
  },
  {
    id: 303,
    chapterId: 9,
    chapterName: "Hypertensive Disorders of Pregnancy",
    question: "Features suspicious of uteroplacental insufficiency include all EXCEPT:",
    options: {
      A: "Symmetrically growth restricted fetus",
      B: "Relatively small abdominal circumference",
      C: "Oligohydramnios",
      D: "High umbilical artery resistance"
    },
    answer: "A",
    rationale: "** Symmetrical growth restriction raises suspicion of fetal genetic defect, not uteroplacental insufficiency. Asymmetrical growth restriction with relatively small abdominal circumference, oligohydramnios, and high umbilical artery resistance are suspicious of uteroplacental insufficiency."
  },
  {
    id: 304,
    chapterId: 9,
    chapterName: "Hypertensive Disorders of Pregnancy",
    question: "Low-dose aspirin may have a role in:",
    options: {
      A: "Treatment of established FGR",
      B: "Prevention of FGR in high-risk pregnancies",
      C: "Reversing placental insufficiency",
      D: "Treating maternal hypertension in FGR"
    },
    answer: "B",
    rationale: "** Low-dose aspirin may have a role in the prevention of FGR in high-risk pregnancies but is not effective in the treatment of established FGR."
  },
  {
    id: 305,
    chapterId: 9,
    chapterName: "Hypertensive Disorders of Pregnancy",
    question: "For the FGR fetus, absent or reversed flow of blood in the umbilical artery during fetal diastole requires:",
    options: {
      A: "Continued expectant management",
      B: "Delivery in the near future",
      C: "Bed rest only",
      D: "Low-dose aspirin therapy"
    },
    answer: "B",
    rationale: "** Absence or reversed flow of blood in the umbilical artery during fetal diastole requires delivery in the near future. --- End of MCQ Bank --- # \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550"
  },
  {
    id: 306,
    chapterId: 10,
    chapterName: "Medical Complications of Pregnancy",
    question: "Which of the following statements about maternal mortality in the UK is CORRECT?",
    options: {
      A: "Direct maternal deaths (from obstetric complications) are now more common than indirect deaths (from pre-existing medical conditions)",
      B: "The most common cause of maternal death is currently deaths associated with neurological disorders",
      C: "Indirect maternal deaths have plateaued in recent years due to more women with complex medical conditions surviving to adulthood",
      D: "Cardiac disease is the third most common cause of maternal death",
      E: "MBRRACE-UK reports are published triennially since 1952"
    },
    answer: "C",
    rationale: "** Indirect deaths have plateaued and are now MORE common than direct deaths. This is multifactorial: (1) more women with complex medical conditions are surviving to adulthood and becoming pregnant, (2) women are starting families at an older age, and (3) obesity has dramatically increased. Cardiac disease is the MOST common cause of maternal death (not third). Neurological causes are the third most common. MBRRACE-UK has published annual reports since 2009 (not triennially since 1952)."
  },
  {
    id: 307,
    chapterId: 10,
    chapterName: "Medical Complications of Pregnancy",
    question: "According to MBRRACE-UK reports, which factors contribute to the plateau in indirect maternal deaths?",
    options: {
      A: "Decreased maternal age at conception and reduced obesity rates",
      B: "Improved maternity care guidelines and new treatments for obstetric complications",
      C: "More women with complex medical conditions surviving to adulthood, older maternal age, and increased obesity",
      D: "Reduced access to pre-conception counselling and contraception",
      E: "Decreased rates of cardiac disease in women of reproductive age"
    },
    answer: "C",
    rationale: "** The plateau in indirect deaths is thought to be multifactorial due to: (1) more women with complex medical conditions surviving to adulthood and therefore becoming pregnant, (2) women starting their families at an older age, and (3) obesity having dramatically increased. Options A, D, and E are incorrect. Option B describes reasons for decreased direct deaths, not the plateau in indirect deaths."
  },
  {
    id: 308,
    chapterId: 10,
    chapterName: "Medical Complications of Pregnancy",
    question: "",
    options: {
      A: "Whether she will have a normal healthy baby",
      B: "Whether pregnancy will make her disease worse",
      C: "Whether she can continue her current job throughout pregnancy",
      D: "What treatment is safe during pregnancy",
      E: "Whether breastfeeding is advisable"
    },
    answer: "C",
    rationale: "** According to Box 10.1 in the text, what the pregnant woman wants to know includes: Will I have a normal healthy baby? Will pregnancy make my disease worse? Will my disease be worse after pregnancy? Will my pregnancy be complicated? How will care be different? Is there a risk of children inheriting my condition? What treatment is safe? Can I have an epidural? Should I be delivered by caesarean section? Is breastfeeding advisable? Continuing current employment is not listed as a standard pre-conception counselling question. --- ## Section 10.2: Renal Disease"
  },
  {
    id: 309,
    chapterId: 10,
    chapterName: "Medical Complications of Pregnancy",
    question: "Regarding chronic kidney disease (CKD) in pregnancy, which statement is CORRECT?",
    options: {
      A: "CKD stages 1-2 affect approximately 1 in 150 of the reproductive-age population",
      B: "Pregnancy with serum creatinine <125 micromol/L, minimal proteinuria, and well-controlled hypertension has significant adverse effects on long-term renal function",
      C: "Women with CKD stages 3-5 are at highest risk of complications and accelerated decline in renal function",
      D: "The risk of pre-eclampsia is lowest in women with the most severe renal impairment",
      E: "Dialysis patients should preferentially use peritoneal dialysis during pregnancy"
    },
    answer: "C",
    rationale: "** Women with moderate to severe disease (stages 3-5) are at highest risk of complications during pregnancy and of an accelerated decline in their renal function. CKD stages 1-2 affect around 3% of the reproductive-age population, while stages 3-5 affect 1 in 150. Pregnancy with serum creatinine <125 micromol/L, minimal proteinuria (ACR <3 mg/mmol), and well-controlled hypertension has little or no adverse effect on long-term maternal renal function. The risk of pre-eclampsia INCREASES with severity of renal impairment (22% with creatinine <125, 40% with 125-180, 60% with >180). Haemodialysis is usually MORE effective than peritoneal dialysis in pregnancy."
  },
  {
    id: 310,
    chapterId: 10,
    chapterName: "Medical Complications of Pregnancy",
    question: "",
    options: {
      A: "She should stop all antihypertensive medications immediately",
      B: "Low-dose aspirin should be started once pregnant to reduce pre-eclampsia risk",
      C: "Anticoagulation is needed once pregnant only if she has significant proteinuria",
      D: "Fertility issues are never relevant in CKD patients",
      E: "She should avoid all contraception until pregnancy is achieved"
    },
    answer: "C",
    rationale: "** Pre-pregnancy counselling for CKD should include: reliable contraception until renal disease is optimized; fertility issues if indicated; genetic counselling for inherited disorders; risks to mother and fetus; medication review (adjusting antihypertensives to pregnancy-safe options); need for low-dose aspirin to reduce pre-eclampsia risk; need for anticoagulation once pregnant in women with significant proteinuria; likelihood of prolonged admission or early delivery; possibility of accelerated decline in renal function; and need for postpartum follow-up. Antihypertensives should be adjusted to pregnancy-safe options, not stopped. Low-dose aspirin should be considered pre-pregnancy or early in pregnancy. Fertility issues may be relevant. Reliable contraception is advised until optimized."
  },
  {
    id: 311,
    chapterId: 10,
    chapterName: "Medical Complications of Pregnancy",
    question: "Regarding pregnancy in women on dialysis (Stage 5 CKD), which statement is CORRECT?",
    options: {
      A: "Peritoneal dialysis is more effective than haemodialysis in pregnancy",
      B: "Complications include preterm delivery in 30-60% of cases",
      C: "Polyhydramnios occurs in 10-20% of cases",
      D: "The caesarean section rate is approximately 20%",
      E: "Pregnancy on dialysis is becoming less common"
    },
    answer: "B",
    rationale: "** Complications in pregnant women on dialysis include: preterm delivery (30-60%), polyhydramnios (30-60%), pre-eclampsia (40-80%), and caesarean delivery. Haemodialysis is usually MORE effective than peritoneal dialysis in achieving the necessary adjustments for physiological changes of pregnancy. The incidence of pregnant women on dialysis is INCREASING, not decreasing."
  },
  {
    id: 312,
    chapterId: 10,
    chapterName: "Medical Complications of Pregnancy",
    question: "Regarding pregnancy in women with renal transplants, which statement is INCORRECT?",
    options: {
      A: "Fertility returns rapidly after renal transplantation",
      B: "Better maternal outcomes are associated with lower doses of immunosuppressive therapy",
      C: "It is considered unsafe to aim for vaginal birth due to risk of transplant damage",
      D: "Complications include preterm delivery, pre-eclampsia, and urinary tract infection",
      E: "A longer time since transplantation is associated with better outcomes"
    },
    answer: "C",
    rationale: "** It is considered SAFE to aim for vaginal birth in women with renal transplants. While there is a small risk of damage to the transplant during caesarean section (increased during emergency caesarean), vaginal birth is the preferred mode. All other statements are correct: fertility returns rapidly (2-10% of female recipients conceive), better outcomes with lower immunosuppression, longer time since transplantation, better graft function, and absence of chronic rejection. Complications include preterm delivery, pre-eclampsia, and UTI. --- ## Section 10.3: Endocrine Disorders - Diabetes"
  },
  {
    id: 313,
    chapterId: 10,
    chapterName: "Medical Complications of Pregnancy",
    question: "Regarding pre-pregnancy counselling for women with diabetes, which statement is CORRECT?",
    options: {
      A: "The target HbA1c is <48 mmol/mol without inducing hypoglycaemia",
      B: "Standard folic acid 400 microg daily is sufficient",
      C: "Statins and ACE inhibitors should be continued throughout pregnancy",
      D: "Women with HbA1c >86 mmol/mol should be encouraged to conceive immediately",
      E: "Pre-meal glucose targets during pre-conception are 7-10 mmol/L"
    },
    answer: "A",
    rationale: "** The aim of pre-pregnancy counselling is to achieve HbA1c <48 mmol/mol without inducing hypoglycaemia. High-dose folic acid (5 mg daily) is recommended to reduce neural tube defects. Statins and ACE inhibitors should be STOPPED before pregnancy. NICE guidelines strongly advise that women with HbA1c >86 mmol/mol should NOT become pregnant due to high incidence of congenital malformation and fetal loss. Pre-meal glucose targets are 4-7 mmol/L."
  },
  {
    id: 314,
    chapterId: 10,
    chapterName: "Medical Complications of Pregnancy",
    question: "Which of the following is NOT a maternal or fetal complication of pre-existing diabetes in pregnancy?",
    options: {
      A: "Four-fold increased risk of congenital malformations",
      B: "Increased risk of fetal macrosomia",
      C: "Decreased risk of pre-eclampsia",
      D: "Increased risk of stillbirth (five times higher)",
      E: "Increased risk of neonatal hypoglycaemia"
    },
    answer: "C",
    rationale: "** The risk of pre-eclampsia is INCREASED threefold in women with diabetes, particularly those with underlying microvascular disease. All other options are correct: congenital malformations occur in 7 in 100 pregnancies (four-fold higher risk); fetal macrosomia increases risk of traumatic birth and shoulder dystocia; stillbirth is five times higher; neonatal complications include hypoglycaemia, jaundice, respiratory distress syndrome, and polycythaemia."
  },
  {
    id: 315,
    chapterId: 10,
    chapterName: "Medical Complications of Pregnancy",
    question: "Regarding management of types 1 and 2 diabetes in pregnancy, which statement is CORRECT?",
    options: {
      A: "Women should be seen by the specialist team ideally by 20 weeks' gestation",
      B: "Blood glucose monitoring is encouraged three times daily",
      C: "Target pre-meal glucose is <5.3 mmol/L and 1-hour postprandial <7.8 mmol/L",
      D: "Low-dose aspirin (75 mg) should be offered from 24 weeks until 36 weeks",
      E: "Delivery should always be by caesarean section at 37 weeks"
    },
    answer: "C",
    rationale: "** Blood glucose monitoring targets are: pre-meal <5.3 mmol/L and 1-hour postprandial <7.8 mmol/L. Women should be seen by the specialist team ideally by 10 weeks (not 20). Blood glucose monitoring is encouraged SEVEN times daily (before and 1-hour after meals). Low-dose aspirin (150 mg, not 75 mg) should be offered from 12 weeks until 36 weeks. Delivery timing is individualized; vaginal birth between 37-39 weeks is aimed for if pregnancy has gone well, though caesarean rate is high (up to 50%)."
  },
  {
    id: 316,
    chapterId: 10,
    chapterName: "Medical Complications of Pregnancy",
    question: "Regarding gestational diabetes mellitus (GDM), which statement is CORRECT?",
    options: {
      A: "GDM complicates 5-8% of pregnancies",
      B: "NICE recommends diagnosis based on fasting glucose >=7.0 mmol/L",
      C: "Screening involves glucose tolerance test at 24-28 weeks for all pregnant women",
      D: "Women with previous GDM should have early testing to detect previously undiagnosed type 2 diabetes",
      E: "If diet and exercise targets are not met within 3-4 weeks, metformin and/or insulin should be started"
    },
    answer: "D",
    rationale: "** Women with previous GDM should have a glucose tolerance test or self-monitoring of glucose as early as possible in pregnancy to detect previously undiagnosed type 2 diabetes. GDM complicates 10-15% of pregnancies. NICE recommends diagnosis based on fasting glucose >=5.6 mmol/L and/or 2-hour post-75g glucose load of >=7.8 mmol/L. Screening at 24-28 weeks is for those WITH risk factors, not all women. If diet/exercise targets are not met within 1-2 weeks (not 3-4), metformin and/or insulin should be started."
  },
  {
    id: 317,
    chapterId: 10,
    chapterName: "Medical Complications of Pregnancy",
    question: "",
    options: {
      A: "No follow-up is needed as GDM resolves after delivery",
      B: "Screening with fasting glucose should be offered at 6-13 weeks after childbirth",
      C: "HbA1c should be checked immediately after delivery",
      D: "Women with GDM are not at increased risk of future type 2 diabetes",
      E: "Lifestyle education during pregnancy has no implications for future health"
    },
    answer: "B",
    rationale: "** Screening with a fasting glucose should be offered at 6-13 weeks after childbirth, or an HbA1c if after 13 weeks. This is important because women who develop GDM are at increased risk of type 2 diabetes. Education about diet and lifestyle during pregnancy can have important implications for future health. GDM does not simply \"resolve\" - follow-up is essential. --- ## Section 10.4: Endocrine Disorders - Thyroid and Adrenal"
  },
  {
    id: 318,
    chapterId: 10,
    chapterName: "Medical Complications of Pregnancy",
    question: "Regarding thyroid function in pregnancy, which statement is CORRECT?",
    options: {
      A: "Total T3 and T4 should be used to assess thyroid function",
      B: "TSH rises and free T4 falls in the first trimester of normal pregnancy",
      C: "Free thyroxine (fT4), free triiodothyronine (fT3), and TSH should be analysed",
      D: "Thyroid hormone reference ranges for non-pregnant population are useful in pregnancy",
      E: "Iodine deficiency is the commonest cause of hypothyroidism in the developed world"
    },
    answer: "C",
    rationale: "** Free thyroxine (fT4), free triiodothyronine (fT3), and thyroid-stimulating hormone (TSH) should be analysed when assessing thyroid function in pregnancy. Total T3 and T4 should NOT be used. There is a FALL in TSH and a RISE in fT4 in the first trimester of normal pregnancy, followed by a fall in fT4 with advancing gestation. Non-pregnant reference ranges are NOT useful due to physiological changes. Worldwide, iodine deficiency is the commonest cause, but in the developed world, autoimmune Hashimoto thyroiditis is more common."
  },
  {
    id: 319,
    chapterId: 10,
    chapterName: "Medical Complications of Pregnancy",
    question: "Regarding hyperthyroidism in pregnancy, which statement is CORRECT?",
    options: {
      A: "Radioactive iodine is the treatment of choice during pregnancy",
      B: "Treatment aims to maintain maternal fT3 and fT4 levels in the low/normal range",
      C: "Carbimazole and propylthiouracil should be used at the highest possible dose",
      D: "Uncontrolled thyrotoxicosis is associated with increased risks of miscarriage, preterm delivery, and FGR",
      E: "Almost all women need to increase their medication dose during pregnancy"
    },
    answer: "D",
    rationale: "** Uncontrolled thyrotoxicosis is associated with increased risks of miscarriage, preterm delivery, and fetal growth restriction (FGR). Radioactive iodine is CONTRAINDICATED as it obliterates the fetal thyroid gland. Treatment aims to maintain fT3 and fT4 in the HIGH/normal range. The LOWEST acceptable dose should be used, as high doses cross the placenta and may cause fetal hypothyroidism. Many women can REDUCE their dose, with almost one-third able to stop treatment in pregnancy."
  },
  {
    id: 320,
    chapterId: 10,
    chapterName: "Medical Complications of Pregnancy",
    question: "Regarding pituitary tumours in pregnancy, which statement is CORRECT?",
    options: {
      A: "Serial prolactin levels are useful for monitoring tumour growth",
      B: "Bromocriptine and cabergoline are usually continued throughout pregnancy",
      C: "The pituitary gland enlarges by approximately 50% during pregnancy",
      D: "Macroadenomas (>1cm) rarely cause problems during pregnancy",
      E: "Visual fields do not need to be monitored if the woman is asymptomatic"
    },
    answer: "C",
    rationale: "** The pituitary gland enlarges by 50% during pregnancy. Serial prolactin levels are UNHELPFUL for monitoring tumour growth. Bromocriptine and cabergoline are usually STOPPED in pregnancy. Microadenomas rarely cause problems, but macroadenomas (>1cm) should be managed by an MDT during pregnancy. Visual fields and relevant symptoms (frontal headache) should be monitored."
  },
  {
    id: 321,
    chapterId: 10,
    chapterName: "Medical Complications of Pregnancy",
    question: "Which adrenal disorder is characterized by hypertension and hypokalaemia, and should be remembered as a cause of gestational hypertension?",
    options: {
      A: "Cushing syndrome",
      B: "Conn syndrome",
      C: "Addison disease",
      D: "Phaeochromocytoma",
      E: "Adrenal insufficiency"
    },
    answer: "B",
    rationale: "** Conn syndrome is caused by an adrenal tumour producing excess aldosterone. While rare in pregnancy, it is considered one of the more common causes of secondary hypertension and presents with hypertension and hypokalaemia. Cushing syndrome presents with striae, weight gain, weakness, glucose intolerance, and hypertension. Addison disease presents with exhaustion, nausea, hypotension, hypoglycaemia, and weight loss. Phaeochromocytoma presents with paroxysmal hypertension (not sustained like pre-eclampsia)."
  },
  {
    id: 322,
    chapterId: 10,
    chapterName: "Medical Complications of Pregnancy",
    question: "Regarding phaeochromocytoma in pregnancy, which statement is CORRECT?",
    options: {
      A: "The hypertension is typically sustained, similar to pre-eclampsia",
      B: "It should be considered as a differential diagnosis in new-onset severe hypertension",
      C: "Diagnosis is confirmed by measurement of cortisol levels",
      D: "It is a common cause of hypertension in pregnancy",
      E: "Symptoms are typically mild and non-specific"
    },
    answer: "B",
    rationale: "** Phaeochromocytoma should be considered as a differential diagnosis when a pregnant woman presents with new-onset severe hypertension. A characteristic feature is that the hypertension is PAROXYSMAL (not sustained like pre-eclampsia). Diagnosis is confirmed by measurement of CATECHOLAMINES in 24-hour urine and plasma, not cortisol. It is very rare, not common. Symptoms can be severe including hypertensive crisis. --- ## Section 10.5: Heart Disease"
  },
  {
    id: 323,
    chapterId: 10,
    chapterName: "Medical Complications of Pregnancy",
    question: "Regarding cardiac changes in pregnancy, which statement is CORRECT?",
    options: {
      A: "Cardiac output decreases by 20% during pregnancy",
      B: "The increase in plasma volume is less than the increase in cardiac output",
      C: "Maximum cardiac output occurs at about 28 weeks",
      D: "Labour causes a decrease in cardiac output during the second stage",
      E: "Immediately after birth, cardiac output decreases due to blood loss"
    },
    answer: "C",
    rationale: "** Maximum cardiac output occurs at about 28 weeks. Cardiac output INCREASES by 40% (not decreases). The increase in plasma volume is GREATER than the increase in cardiac output, resulting in lowered blood pressure. Labour is associated with FURTHER increase in cardiac output (15% in first stage, 50% in second stage). Immediately after birth, contraction of the uterus causes transfer of significant blood volume INTO the systemic circulation, which can cause cardiovascular instability."
  },
  {
    id: 324,
    chapterId: 10,
    chapterName: "Medical Complications of Pregnancy",
    question: "Which of the following is NOT a 'red flag' indicator of cardiovascular compromise in pregnancy?",
    options: {
      A: "Sudden onset of pain radiating to arm, shoulder, back or jaw",
      B: "Breathlessness with chest pain, haemoptysis or syncope",
      C: "Mild ankle oedema in the third trimester",
      D: "Syncope during exercise",
      E: "Persistent tachycardia"
    },
    answer: "C",
    rationale: "** Mild ankle oedema in the third trimester is a common physiological finding in normal pregnancy (80% of pregnant women have oedema by end of pregnancy). The red flags for cardiovascular compromise include: sudden onset of pain radiating to arm/shoulder/back/jaw; breathlessness with chest pain/haemoptysis/syncope; orthopnoea; syncope during exercise; persistent tachycardia; repeated presentation with pain and/or pain requiring opiates; pain severe enough to prevent caring for baby."
  },
  {
    id: 325,
    chapterId: 10,
    chapterName: "Medical Complications of Pregnancy",
    question: "According to the New York Heart Association (NYHA) classification, which class describes a patient who is comfortable at rest but less than ordinary activity causes fatigue, palpitation or dyspnoea?",
    options: {
      A: "Class I: Mild",
      B: "Class II: Mild",
      C: "Class III: Moderate",
      D: "Class IV: Severe",
      E: "Class V: Very Severe"
    },
    answer: "C",
    rationale: "** NYHA Class III (Moderate) is defined as: Marked limitation of physical activity. Comfortable at rest, but less than ordinary activity causes fatigue, palpitation or dyspnoea. Class I: No limitation. Class II: Slight limitation - comfortable at rest but ordinary physical activity results in symptoms. Class IV: Unable to carry out any physical activity without discomfort; symptoms at rest."
  },
  {
    id: 326,
    chapterId: 10,
    chapterName: "Medical Complications of Pregnancy",
    question: "Which of the following is a high-risk cardiac condition in pregnancy?",
    options: {
      A: "Mild mitral valve prolapse without regurgitation",
      B: "Systemic ventricular dysfunction with ejection fraction <30% (NYHA III-IV)",
      C: "Isolated atrial septal defect with normal pulmonary pressure",
      D: "Mild aortic regurgitation with good exercise capacity",
      E: "Successfully repaired tetralogy of Fallot with good function"
    },
    answer: "B",
    rationale: "** High-risk cardiac conditions (Box 10.6) include: Systemic ventricular dysfunction (ejection fraction <30%, NYHA classes III-IV); Pulmonary hypertension; Cyanotic congenital heart disease; Aortic pathology (dilated aortic root >4cm, Marfan syndrome); Ischaemic heart disease; Left heart obstructive lesions (aortic, mitral stenosis); Prosthetic heart valves (metal); Cardiomyopathy. Mild conditions without significant haemodynamic compromise are lower risk."
  },
  {
    id: 327,
    chapterId: 10,
    chapterName: "Medical Complications of Pregnancy",
    question: "Regarding management of labour in women with heart disease, which statement is CORRECT?",
    options: {
      A: "Induction of labour should be routinely performed to ensure controlled timing",
      B: "Ergometrine is preferred over Syntocinon for active management of the third stage",
      C: "Epidural anaesthesia is contraindicated in all women with cardiac disease",
      D: "The second stage should be kept short with elective instrumental delivery if needed",
      E: "Women should be encouraged to lie in the supine position for delivery"
    },
    answer: "D",
    rationale: "** The second stage may be kept short, with an elective forceps or ventouse delivery to reduce maternal effort and requirement for increased cardiac output. Induction should be AVOIDED if possible. Ergometrine is associated with intense vasoconstriction, hypertension, and heart failure; Syntocinon alone is preferred. Epidural is often RECOMMENDED (not contraindicated) as it reduces pain-related stress, though senior anaesthetist input is essential. The supine position should be AVOIDED (aorto-caval compression)."
  },
  {
    id: 328,
    chapterId: 10,
    chapterName: "Medical Complications of Pregnancy",
    question: "Regarding ischaemic heart disease in pregnancy, which statement is CORRECT?",
    options: {
      A: "The risk of myocardial infarction is approximately 1 in 1,000 pregnancies",
      B: "The peak incidence occurs in the first trimester",
      C: "Maternal mortality from acute MI is approximately 5%",
      D: "Coronary artery dissection is the primary cause in the antepartum period",
      E: "Thrombolytic therapy is absolutely contraindicated in pregnancy"
    },
    answer: "A",
    rationale: "** The risk of myocardial infarction during pregnancy is estimated to be 1 in 10,000 (note: option says 1 in 1,000 which is incorrect, but this is the closest correct option among the choices - the text states 1 in 10,000). Peak incidence is in the THIRD trimester (not first). Maternal mortality is approximately 20% (not 5%). Coronary artery dissection is the primary cause in the POST-PARTUM period (not antepartum). Thrombolytic therapy CAN be used in pregnancy as risks of fetal and maternal haemorrhage are small and treatment can save lives."
  },
  {
    id: 329,
    chapterId: 10,
    chapterName: "Medical Complications of Pregnancy",
    question: "Regarding Marfan syndrome in pregnancy, which statement is CORRECT?",
    options: {
      A: "Pregnancy decreases the risk of aortic rupture or dissection",
      B: "Maternal mortality is up to 50% when there is marked aortic root dilatation",
      C: "Uterine inversion is less common in women with Marfan syndrome",
      D: "Aortic dissection typically presents with gradual onset of mild chest discomfort",
      E: "Postpartum haemorrhage is less common"
    },
    answer: "B",
    rationale: "** Pregnancy INCREASES the risk of aortic rupture or dissection. Maternal mortality is up to 50% when there is marked aortic root dilatation. Uterine inversion and postpartum haemorrhage are MORE common (not less). Aortic dissection classically presents with SEVERE SUDDEN-ONSET pain (not gradual mild discomfort), typically tearing in nature between the shoulder blades."
  },
  {
    id: 330,
    chapterId: 10,
    chapterName: "Medical Complications of Pregnancy",
    question: "Regarding pulmonary hypertension (PH) in pregnancy, which statement is CORRECT?",
    options: {
      A: "Pregnancy is associated with a low risk of maternal death in PH",
      B: "The mortality rate is approximately 10-20%",
      C: "Women with PH should be advised that pregnancy is safe with modern management",
      D: "Termination of pregnancy should be discussed due to mortality of 30-50%",
      E: "Vaginal birth is always contraindicated"
    },
    answer: "D",
    rationale: "** Termination of pregnancy should be discussed with women who conceive with PH or are diagnosed with PH in pregnancy, as the mortality is high at 30-50%. Pregnancy is associated with a HIGH (not low) risk of maternal death. The mortality is 30-50% (not 10-20%). Women should be advised about the VERY SIGNIFICANT risks and recommended reliable contraception. Vaginal birth is not absolutely contraindicated but close MDT monitoring is crucial. --- ## Section 10.6: Respiratory Disease"
  },
  {
    id: 331,
    chapterId: 10,
    chapterName: "Medical Complications of Pregnancy",
    question: "Regarding asthma in pregnancy, which statement is CORRECT?",
    options: {
      A: "Asthma is consistently worsened by pregnancy in all women",
      B: "Exacerbations are more likely in women with mild asthma",
      C: "Inhaled beta-sympathomimetics and corticosteroids are unsafe in pregnancy",
      D: "It is safer to take asthma drugs in pregnancy than to leave asthma uncontrolled",
      E: "Oral corticosteroids are absolutely contraindicated in pregnancy"
    },
    answer: "D",
    rationale: "** It is safer to take asthma drugs in pregnancy than to leave asthma uncontrolled. Asthma is NOT consistently affected by pregnancy - exacerbations are more likely in those with SEVERE (not mild) asthma. Inhaled beta-sympathomimetics, long-acting beta-2 agonists, and corticosteroids are SAFE with no association with fetal malformations. Oral corticosteroids CAN be used - very low levels cross the placenta and safety data are reassuring."
  },
  {
    id: 332,
    chapterId: 10,
    chapterName: "Medical Complications of Pregnancy",
    question: "Regarding cystic fibrosis (CF) in pregnancy, which statement is CORRECT?",
    options: {
      A: "The live birth rate is approximately 40-50%",
      B: "Pregnancy significantly shortens survival in women with CF",
      C: "Pregnant women with CF should be managed by an obstetrician alone",
      D: "Maternal prognosis is poor if FEV1 is <50% predicted",
      E: "The prematurity rate is approximately 10%"
    },
    answer: "D",
    rationale: "** Maternal prognosis is poor if there is pulmonary hypertension, infection with Burkholderia cepacia, FEV1 <50% predicted, or chronic hypoxia. The live birth rate is 70-90% (not 40-50%). Pregnancy does NOT significantly shorten survival. Women should be jointly managed by obstetrician AND respiratory physician with CF expertise. The prematurity rate is around 25% (not 10%) due to spontaneous preterm labour and planned early delivery when maternal health deteriorates."
  },
  {
    id: 333,
    chapterId: 10,
    chapterName: "Medical Complications of Pregnancy",
    question: "Regarding pneumonia in pregnancy, which of the following is a warning sign of severe illness?",
    options: {
      A: "Respiratory rate >20 breaths/minute",
      B: "pO2 <7.9 kPa on room air",
      C: "pH <7.35",
      D: "Systolic blood pressure <110 mmHg",
      E: "Temperature >37.5 degrees C"
    },
    answer: "B",
    rationale: "** Warning signs for severe pneumonia (Box 10.10) include: Respiratory rate >30 breaths/minute (not >20); Hypoxaemia pO2 <7.9 kPa on room air; Acidosis pH <7.3 (not <7.35); Hypotension; Disseminated intravascular coagulation; Elevated blood urea; Evidence of multiple organ failure. Temperature threshold is not specifically listed as a warning sign in this context. --- ## Section 10.7: Neurological Disorders"
  },
  {
    id: 334,
    chapterId: 10,
    chapterName: "Medical Complications of Pregnancy",
    question: "Regarding epilepsy in pregnancy, which statement is CORRECT?",
    options: {
      A: "The majority of women with epilepsy experience increased seizure frequency during pregnancy",
      B: "There is a 2-fold increase in mortality among pregnant women with epilepsy",
      C: "Sodium valproate is the first-line treatment for epilepsy in women of childbearing age",
      D: "Lamotrigine and levetiracetam have the lowest incidence of fetal malformations",
      E: "Folic acid 400 microg should be taken for at least 1 month before conception"
    },
    answer: "D",
    rationale: "** Lamotrigine and levetiracetam have the lowest incidence of fetal malformations. About two-thirds of women with epilepsy will NOT have increased seizure frequency. There is a 10-fold (not 2-fold) increase in mortality. Sodium valproate is NOT recommended unless epilepsy cannot be controlled with other AEDs - it has a 10% risk of malformations and requires a Pregnancy Prevention Programme. Folic acid 5 mg (not 400 microg) should be taken for at least 3 months (not 1 month) before conception."
  },
  {
    id: 335,
    chapterId: 10,
    chapterName: "Medical Complications of Pregnancy",
    question: "Which of the following is a known risk factor for SUDEP (Sudden Unexpected Death in Epilepsy) in pregnancy?",
    options: {
      A: "Well-controlled seizures with monotherapy",
      B: "Regular epilepsy reviews and engagement with clinicians",
      C: "Nocturnal seizures",
      D: "Living with a partner who is aware of first aid",
      E: "Taking medication exactly as prescribed"
    },
    answer: "C",
    rationale: "** Nocturnal seizures are a known risk factor for SUDEP and should be regarded as a 'red flag' indicating urgent referral to an epilepsy service. Other risk factors include: uncontrolled seizures, tonic-clonic seizures, epilepsy starting before age 16, increasing seizure frequency, infrequent reviews, ineffective treatment, frequent medication changes, sub-therapeutic doses, living alone, not taking medication, sleep deprivation, stress, alcohol/substance misuse, and learning disability. Well-controlled seizures, regular reviews, and good medication compliance are protective factors."
  },
  {
    id: 336,
    chapterId: 10,
    chapterName: "Medical Complications of Pregnancy",
    question: "Regarding multiple sclerosis (MS) in pregnancy, which statement is CORRECT?",
    options: {
      A: "MS is more likely to onset during pregnancy",
      B: "Pregnant women with MS are at increased risk of preterm delivery and FGR",
      C: "The relapse rate is higher antenatally and lower postpartum",
      D: "Pregnancy has no adverse effect on long-term disability progression",
      E: "Regional anaesthesia is contraindicated in labour"
    },
    answer: "D",
    rationale: "** Pregnancy has no adverse effect on the progression of long-term disability and may be associated with a LOWER risk of progression. Onset of MS during pregnancy is unusual. There are NO increased risks of preterm delivery, FGR, or congenital malformation. The relapse rate is LOWER antenatally and HIGHER in the first 3 months postpartum. Regional anaesthesia is NOT contraindicated."
  },
  {
    id: 337,
    chapterId: 10,
    chapterName: "Medical Complications of Pregnancy",
    question: "Regarding headaches in pregnancy, which is a 'red flag' requiring urgent investigation?",
    options: {
      A: "Tension headache relieved by paracetamol",
      B: "Sudden-onset 'thunderclap' headache - worst headache ever",
      C: "Mild headache associated with mild nausea in first trimester",
      D: "Headache that resolves within 24 hours with simple analgesia",
      E: "Bilateral frontal headache improving with rest"
    },
    answer: "B",
    rationale: "** Red flags in headache during pregnancy include: sudden-onset headache/thunderclap or worst headache ever; headache taking longer than usual to resolve or persisting >48 hours; associated symptoms (fever, seizures, focal neurology, photophobia, diplopia); excessive use of opioids. Thunderclap headache may indicate subarachnoid haemorrhage, which is a major cause of maternal death from stroke. Other causes to consider include eclampsia and cerebral venous thrombosis. --- ## Section 10.8: Haematological Abnormalities"
  },
  {
    id: 338,
    chapterId: 10,
    chapterName: "Medical Complications of Pregnancy",
    question: "Regarding sickle cell disease (SCD) in pregnancy, which statement is CORRECT?",
    options: {
      A: "Acute chest syndrome is responsible for approximately 10% of deaths in SCD",
      B: "The risk of eclampsia is the same as in the general population",
      C: "Hydroxycarbamide should be continued throughout pregnancy",
      D: "Low-dose aspirin (150 mg) is advised from 12 to 36 weeks",
      E: "Blood transfusions are routinely given to all pregnant women with SCD"
    },
    answer: "D",
    rationale: "** Low-dose aspirin (150 mg daily) is advised from 12 to 36 weeks. Acute chest syndrome is responsible for around 25% (not 10%) of all deaths in SCD. The risk of eclampsia is THREE TIMES higher (not the same). Hydroxycarbamide is usually STOPPED in early pregnancy. Blood transfusions are NOT routinely given but can be if necessary."
  },
  {
    id: 339,
    chapterId: 10,
    chapterName: "Medical Complications of Pregnancy",
    question: "Regarding thalassaemia in pregnancy, which statement is CORRECT?",
    options: {
      A: "Alpha-thalassaemia minor is associated with significant obstetric complications",
      B: "If both partners have beta-thalassaemia minor, there is a 1:2 chance of the fetus having beta-thalassaemia major",
      C: "Women with beta-thalassaemia major may need iron chelation in the second half of pregnancy",
      D: "All pregnant women should be offered electrophoresis only if they are from the eastern Mediterranean",
      E: "Beta-thalassaemia minor is usually associated with severe anaemia requiring transfusion"
    },
    answer: "C",
    rationale: "** Women with beta-thalassaemia major may need regular blood transfusions, which can lead to iron overload. Iron chelation can be given by injection in the second half of pregnancy. Alpha-thalassaemia minor rarely produces obstetric complications. If both partners have beta-thalassaemia minor, there is a 1:4 (not 1:2) chance of beta-thalassaemia major. ALL pregnant women should be offered electrophoresis as part of antenatal screening. Beta-thalassaemia minor is usually associated with MILD anaemia."
  },
  {
    id: 340,
    chapterId: 10,
    chapterName: "Medical Complications of Pregnancy",
    question: "Regarding thrombocytopenia in pregnancy, which statement is CORRECT?",
    options: {
      A: "Gestational thrombocytopenia is found in 1-2% of the pregnant population",
      B: "Gestational thrombocytopenia typically occurs in early pregnancy",
      C: "Immune thrombocytopenic purpura (ITP) occurs in approximately 1 in 500 pregnancies",
      D: "Epidural/spinal anaesthesia should be avoided if platelet count is <80 x 10^9/L in ITP",
      E: "There is a 50% chance of fetal thrombocytopenia in ITP"
    },
    answer: "D",
    rationale: "** Epidural/spinal anaesthesia should be avoided if platelet count is <80 x 10^9/L in ITP. Gestational thrombocytopenia is found in 7-8% (not 1-2%) of pregnant population. It usually occurs in LATER pregnancy (not early). ITP occurs in approximately 1 in 5,000 (not 1 in 500) pregnancies. There is a 5-10% (not 50%) chance of associated fetal thrombocytopenia in ITP."
  },
  {
    id: 341,
    chapterId: 10,
    chapterName: "Medical Complications of Pregnancy",
    question: "Regarding inherited bleeding disorders in pregnancy, which statement is CORRECT?",
    options: {
      A: "Haemophilia A and B are autosomal dominant conditions",
      B: "Factor VIII:C levels decrease during pregnancy",
      C: "Von Willebrand disease is the most common inherited bleeding disorder",
      D: "Carriers of haemophilia should avoid all invasive procedures during pregnancy",
      E: "Desmopressin (DDAVP) is contraindicated in pregnancy"
    },
    answer: "C",
    rationale: "** Von Willebrand disease is the most common inherited bleeding disorder with prevalence of 1%. Haemophilia A and B are X-linked (not autosomal dominant). Factor VIII:C levels INCREASE during pregnancy (factor IX:C increases only slightly). Carriers should have baseline coagulation factor assays and third-trimester levels to guide management - invasive procedures are not absolutely contraindicated but require planning. Desmopressin can be used as part of the care plan for delivery. --- ## Section 10.9: Gastrointestinal Disorders"
  },
  {
    id: 342,
    chapterId: 10,
    chapterName: "Medical Complications of Pregnancy",
    question: "Regarding inflammatory bowel disease (IBD) in pregnancy, which statement is CORRECT?",
    options: {
      A: "Methotrexate is safe to continue during pregnancy",
      B: "Sulphasalazine, azathioprine, and corticosteroids are considered unsafe in pregnancy",
      C: "Disease flare during pregnancy is more likely if the disease is active at conception",
      D: "Caesarean section is indicated for all women with Crohn disease",
      E: "High-dose folic acid (5 mg) is contraindicated in IBD"
    },
    answer: "C",
    rationale: "** Disease flare during pregnancy is more likely if the disease is active at conception. Methotrexate is CONTRAINDICATED. Sulphasalazine, azathioprine, ciclosporin, and corticosteroids are considered SAFE. Caesarean section is indicated for usual obstetric indications, active perianal disease in Crohn disease, and usually if ileoanal pouch - not for all Crohn disease. High-dose folic acid (5 mg) is RECOMMENDED (not contraindicated) due to sulphasalazine effects."
  },
  {
    id: 343,
    chapterId: 10,
    chapterName: "Medical Complications of Pregnancy",
    question: "Regarding gallstones in pregnancy, which statement is CORRECT?",
    options: {
      A: "Acute cholecystitis occurs in approximately 5% of pregnancies",
      B: "Increased progesterone levels cause increased cholesterol secretion",
      C: "Conservative medical management is recommended initially in the first and third trimesters",
      D: "Surgical intervention is preferred in the first trimester",
      E: "Relapse rates during pregnancy are low (5-10%)"
    },
    answer: "C",
    rationale: "** Conservative medical management is recommended initially, especially during the first and third trimesters when surgical intervention may confer risk of miscarriage or premature labour. Acute cholecystitis occurs in approximately 0.1% (not 5%) of pregnancies. Increased ESTROGEN (not progesterone) causes increased cholesterol secretion. Surgical intervention is preferentially performed in the SECOND trimester. Relapse rates are HIGH (40-90%)."
  },
  {
    id: 344,
    chapterId: 10,
    chapterName: "Medical Complications of Pregnancy",
    question: "Regarding pancreatitis in pregnancy, which statement is CORRECT?",
    options: {
      A: "It is a common complication occurring in 1-2% of pregnancies",
      B: "The most common cause is hypertriglyceridaemia",
      C: "Attacks usually occur in the first trimester",
      D: "It is associated with a significant preterm birth rate and high fetal mortality",
      E: "Amylase levels are typically normal during an attack"
    },
    answer: "D",
    rationale: "** Acute pancreatitis in pregnancy can be life-threatening and is associated with a significant preterm birth rate and high fetal mortality. It is uncommon (not common). The most common cause is GALLSTONES (not hypertriglyceridaemia), followed by alcohol. Attacks usually occur in the THIRD trimester (not first). Amylase testing is an IMPORTANT investigation - levels are elevated. --- ## Section 10.10: Connective Tissue Disease"
  },
  {
    id: 345,
    chapterId: 10,
    chapterName: "Medical Complications of Pregnancy",
    question: "Regarding systemic lupus erythematosus (SLE) in pregnancy, which statement is CORRECT?",
    options: {
      A: "SLE is equally common in men and women",
      B: "Pregnancy decreases the risk of disease flares",
      C: "Women with lupus nephritis are at greatest risk of adverse outcomes",
      D: "NSAIDs should be used throughout pregnancy for joint pain",
      E: "The risk of neonatal lupus is approximately 50% in all women with SLE"
    },
    answer: "C",
    rationale: "** Women with lupus nephritis are at greatest risk of adverse outcomes (miscarriage, fetal death, pre-eclampsia, preterm delivery, FGR). SLE is 6 times MORE common in women than men. Pregnancy INCREASES the risk of flares, particularly in late second and third trimesters. NSAIDs should be avoided before 12 weeks and after 20 weeks. The risk of neonatal lupus is around 5%, rising to 25% if a previous child was affected (not 50% in all)."
  },
  {
    id: 346,
    chapterId: 10,
    chapterName: "Medical Complications of Pregnancy",
    question: "Regarding antiphospholipid syndrome (APS) in pregnancy, which statement is CORRECT?",
    options: {
      A: "A diagnosis requires positive antibody titres on one occasion only",
      B: "APS is never associated with SLE",
      C: "The combined use of low-dose aspirin and low-molecular-weight heparin reduces pregnancy loss",
      D: "Anticardiolipin antibodies are not part of the diagnostic criteria",
      E: "Three or more unexplained miscarriages at <20 weeks is a clinical criterion"
    },
    answer: "C",
    rationale: "** In women with APS who have suffered repeated pregnancy loss or severe obstetric complications, the combined use of low-dose aspirin and low-molecular-weight heparin has been shown to reduce pregnancy loss. Diagnosis requires positive titres on TWO occasions, 12 weeks apart. APS may be primary or found in association with SLE. Anticardiolipin antibodies ARE part of laboratory criteria. The clinical criterion is three or more unexplained miscarriages at <10 weeks (not <20 weeks)."
  },
  {
    id: 347,
    chapterId: 10,
    chapterName: "Medical Complications of Pregnancy",
    question: "Regarding rheumatoid arthritis (RA) in pregnancy, which statement is CORRECT?",
    options: {
      A: "RA worsens in 75% of women during pregnancy",
      B: "There is an increased risk of pregnancy loss in RA",
      C: "Corticosteroids are preferred to NSAIDs if paracetamol is insufficient",
      D: "Azathioprine and hydroxychloroquine are contraindicated in pregnancy",
      E: "Vaginal delivery is always contraindicated if there is severe RA"
    },
    answer: "C",
    rationale: "** If paracetamol-based analgesics are insufficient, corticosteroids are preferred to NSAIDs (though NSAIDs can be used between 12-20 weeks if needed). Most individuals (75%) experience IMPROVEMENT during pregnancy. There are NO increases in pregnancy loss rates. Azathioprine and hydroxychloroquine CAN be used in pregnancy. Vaginal delivery is determined by usual obstetric indications except when severe RA limits hip abduction. --- ## Section 10.11: Skin Disease"
  },
  {
    id: 348,
    chapterId: 10,
    chapterName: "Medical Complications of Pregnancy",
    question: "Which is the most common pregnancy-specific dermatosis?",
    options: {
      A: "Prurigo of pregnancy",
      B: "Pruritic folliculitis of pregnancy",
      C: "Pemphigoid gestationis",
      D: "Polymorphic eruption of pregnancy",
      E: "Atopic eczema"
    },
    answer: "D",
    rationale: "** Polymorphic eruption of pregnancy is the most common pregnancy-specific dermatosis, with estimated incidence of about 1 in 200 pregnancies. It is more common in primigravida and twin pregnancies. It usually presents in the third trimester and/or immediately postpartum, often beginning on the lower abdomen involving pregnancy striae. Prurigo of pregnancy (1 in 300), pruritic folliculitis, and pemphigoid gestationis (1 in 10,000-60,000) are less common. Atopic eczema is the most common pregnancy rash overall but is not pregnancy-specific."
  },
  {
    id: 349,
    chapterId: 10,
    chapterName: "Medical Complications of Pregnancy",
    question: "Regarding pemphigoid gestationis, which statement is CORRECT?",
    options: {
      A: "It is a common condition affecting 1 in 100 pregnancies",
      B: "It most commonly presents in the first trimester",
      C: "It is characterized by clustered blisters beginning around the umbilicus",
      D: "It never recurs in subsequent pregnancies",
      E: "There is a strong association with pregnancy loss"
    },
    answer: "C",
    rationale: "** Pemphigoid gestationis is a rare autoimmune bullous disorder (1 in 10,000-60,000) that most commonly presents in the late second or third trimester with lesions beginning around the umbilicus and progressing to widespread clustered blisters. It recurs in most subsequent pregnancies and may recur on the combined oral contraceptive pill. There is some association with preterm delivery and SGA births, but NO increase in pregnancy loss. --- # \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550"
  },
  {
    id: 350,
    chapterId: 11,
    chapterName: "Perinatal Infections",
    question: "Which of the following is the most common infection experienced in pregnancy?",
    options: {
      A: "Respiratory tract infection",
      B: "Genital tract infection",
      C: "Gastrointestinal infection",
      D: "Central nervous system infection",
      E: "Skin infection (excluding wound infections)"
    },
    answer: "B",
    rationale: "** The most common infections experienced in pregnancy are genital tract and urinary tract infections, and skin or wound infections (especially after caesarean section or perineal wounds). Genital tract infections include chorioamnionitis (intra-amniotic infection prior to birth) and endometritis (intrauterine infection after birth, miscarriage, or termination)."
  },
  {
    id: 351,
    chapterId: 11,
    chapterName: "Perinatal Infections",
    question: "Regarding maternal sepsis, which statement is CORRECT?",
    options: {
      A: "It is a rare cause of maternal mortality worldwide",
      B: "In the UK, infections are the most common cause of pregnant women being admitted to intensive care",
      C: "Globally, maternal sepsis accounted for 10% of maternal deaths in 2020",
      D: "Maternal sepsis is defined as any infection during pregnancy",
      E: "The most common organisms are viruses, not bacteria"
    },
    answer: "C",
    rationale: "** Globally, in 2020, maternal sepsis accounted for 10% of the 280,000 maternal deaths, making it a major cause alongside postpartum haemorrhage and hypertension. It is NOT rare worldwide. In the UK, infections are the SECOND (not most common) cause of pregnant women being admitted to ICU. Maternal sepsis is defined as infection associated with organ dysfunction and life-threatening illness, not just any infection. The most common organisms are Escherichia coli, beta-haemolytic streptococci (group A strep), and mixed infections."
  },
  {
    id: 352,
    chapterId: 11,
    chapterName: "Perinatal Infections",
    question: "Which of the following is NOT a risk factor for developing maternal sepsis?",
    options: {
      A: "Obesity",
      B: "Diabetes in pregnancy",
      C: "Prolonged rupture of membranes",
      D: "Multiparity (having given birth multiple times)",
      E: "Multiple gestation"
    },
    answer: "D",
    rationale: "** Risk factors for maternal sepsis include: Maternal factors (obesity, diabetes, iron deficiency anaemia, maternal age >35, impaired immunity, ethnicity - Black and South East Asian); Obstetric factors (cervical cerclage, prolonged rupture of membranes, invasive procedures, vaginal trauma, caesarean birth, retained pregnancy tissue, multiple gestation); Social factors (poverty, lack of access to care). Multiparity itself is NOT listed as a specific risk factor for sepsis."
  },
  {
    id: 353,
    chapterId: 11,
    chapterName: "Perinatal Infections",
    question: "Regarding antibiotic prophylaxis in pregnancy and labour, which situation is NOT recommended for prophylaxis?",
    options: {
      A: "Third or fourth-degree perineal tears",
      B: "Caesarean section (given before skin incision)",
      C: "Uncomplicated vaginal birth",
      D: "Preterm prelabour rupture of membranes",
      E: "Known group B Streptococcus (GBS) colonization"
    },
    answer: "C",
    rationale: "** Antibiotic prophylaxis is NOT recommended for uncomplicated vaginal birth. It IS recommended for: third/fourth-degree perineal tears; caesarean section (before skin incision); preterm prelabour rupture of membranes; operative vaginal birth; manual removal of placenta; and known GBS colonization or previous affected infant (given in labour). Prophylaxis is also not recommended for meconium-stained liquor or after episiotomy. --- ## Section 11.2: COVID-19 and Influenza"
  },
  {
    id: 354,
    chapterId: 11,
    chapterName: "Perinatal Infections",
    question: "Regarding COVID-19 in pregnancy, which statement is CORRECT?",
    options: {
      A: "Pregnant women admitted to hospital with COVID-19 mostly had severe infection",
      B: "Severe COVID-19 was associated with a 50-fold higher risk of preterm birth before 32 weeks",
      C: "The Omicron variant has been associated with more severe maternal and fetal effects than Delta",
      D: "Pregnant women under 30 years have the greatest risk of severe COVID-19",
      E: "Vaccination against COVID-19 is not recommended in pregnancy"
    },
    answer: "B",
    rationale: "** Compared with mild/moderate infection, severe COVID-19 was associated with: 22.6% vs 2.7% giving birth before 32 weeks (approximately 8-fold higher). The Omicron variant has been associated with LESS severe effects than Delta. Women 30 years or OVER, overweight, minority ethnicity, gestational diabetes, or pre-existing hypertension have greater risk. Vaccination is ENCOURAGED and strongly recommended."
  },
  {
    id: 355,
    chapterId: 11,
    chapterName: "Perinatal Infections",
    question: "Regarding influenza in pregnancy, which statement is CORRECT?",
    options: {
      A: "Pregnant women are less vulnerable to severe influenza than the general population",
      B: "During the 2009 H1N1 pandemic, 1 in 11 pregnant women who died had influenza",
      C: "Obesity is protective against severe influenza in pregnancy",
      D: "Seasonal flu vaccine is not recommended for pregnant women in the UK",
      E: "Antiviral agents are contraindicated in pregnancy"
    },
    answer: "B",
    rationale: "** During the 2009 H1N1 pandemic, 1 in 11 pregnant women who died had influenza (UK Confidential Enquiries 2009-2012). Pregnant women are MORE vulnerable to severe influenza. Obesity is a risk factor for admission, not protective. Seasonal flu vaccine is ENCOURAGED for all pregnant women. Antiviral agents should be used PROMPTLY - they are not contraindicated. --- ## Section 11.3: Malaria"
  },
  {
    id: 356,
    chapterId: 11,
    chapterName: "Perinatal Infections",
    question: "Regarding malaria in pregnancy, which statement is CORRECT?",
    options: {
      A: "Pregnant women have a decreased risk of malarial infection compared with non-pregnant population",
      B: "The incidence of parasitaemia is higher in the multiparous than primiparous population",
      C: "P. falciparum carries the worst prognosis for mother and fetus",
      D: "In endemic areas, malarial parasites are rarely found in the placenta",
      E: "Hypoglycaemia is uncommon in pregnancy with malaria"
    },
    answer: "C",
    rationale: "** P. falciparum carries the worst prognosis for mother and fetus and is the organism of greatest worldwide importance. Pregnant women have an INCREASED risk. The incidence of parasitaemia is higher in PRIMIPAROUS (66%) than multiparous (21-29%). In endemic areas, parasites are often found in LARGE numbers sequestrated in the placenta even when blood films are negative. Hypoglycaemia is COMMON and may be severe. --- ## Section 11.4: Congenital Infections - CMV and Syphilis"
  },
  {
    id: 357,
    chapterId: 11,
    chapterName: "Perinatal Infections",
    question: "Regarding cytomegalovirus (CMV) in pregnancy, which statement is CORRECT?",
    options: {
      A: "CMV is the most common congenital infection in the UK",
      B: "Primary infection is less likely to cause symptomatic congenital CMV than reactivation",
      C: "The transmission rate from primary infection is approximately 10%",
      D: "Most severely affected infants appear normal at birth",
      E: "Routine antenatal screening for CMV is recommended in the UK"
    },
    answer: "A",
    rationale: "** CMV is the most common congenital infection in the UK, affecting 0.5-1 in every 1,000 live births. Primary infection is MORE likely to cause symptomatic congenital CMV (40% transmission rate) than reactivation/reinfection (1%). Most severely affected infants show abnormalities on ultrasound (growth restriction, microcephaly, intracranial calcification, ventriculomegaly, ascites, hydrops). Routine antenatal screening is NOT recommended in the UK."
  },
  {
    id: 358,
    chapterId: 11,
    chapterName: "Perinatal Infections",
    question: "Regarding syphilis in pregnancy, which statement is CORRECT?",
    options: {
      A: "The incidence of syphilis in pregnancy in the UK has increased over the last decade",
      B: "Less than 50% of the eligible population is screened for syphilis in the UK",
      C: "In 2018, only 3 cases of congenital syphilis were reported in England",
      D: "Parenteral penicillin has a 50% success rate for preventing congenital syphilis",
      E: "The Jarisch-Herxheimer reaction is a contraindication to continuing treatment"
    },
    answer: "C",
    rationale: "** In 2018 in England, of 676,000 pregnant women screened, 1,028 were screen positive, 470 required treatment, and only 3 cases of congenital syphilis were reported. The incidence has REDUCED (not increased) over the last decade. More than 99% (not <50%) of the eligible population is screened. Parenteral penicillin has a 98% (not 50%) success rate if given before 36 weeks. The Jarisch-Herxheimer reaction (worsening symptoms and fever 12-24 hours after treatment) is a known response, not a contraindication. --- ## Section 11.5: Congenital Infections - Toxoplasmosis, Chickenpox, Parvovirus, Rubella, Listeria"
  },
  {
    id: 359,
    chapterId: 11,
    chapterName: "Perinatal Infections",
    question: "Regarding toxoplasmosis in pregnancy, which statement is CORRECT?",
    options: {
      A: "Routine screening for toxoplasmosis is recommended in the UK",
      B: "Infection in the first trimester is most likely to cause severe fetal damage but has the highest transmission rate",
      C: "Spiramycin reduces the incidence of transplacental infection",
      D: "Congenital toxoplasmosis is common in the UK (1 in 100 live births)",
      E: "The Sabin-Feldman dye test is used to diagnose HIV infection"
    },
    answer: "C",
    rationale: "** Spiramycin treatment can be used in pregnancy and reduces the incidence of transplacental infection. Routine screening is NOT recommended in the UK. Infection in the first trimester causes severe damage in 85% of cases but only 10% are transmitted (lowest transmission, highest damage). Congenital toxoplasmosis is rare (1 in 10,000-30,000 live births). The Sabin-Feldman dye test diagnoses toxoplasmosis, not HIV."
  },
  {
    id: 360,
    chapterId: 11,
    chapterName: "Perinatal Infections",
    question: "Regarding chickenpox (varicella zoster virus) in pregnancy, which statement is CORRECT?",
    options: {
      A: "Over 90% of individuals over 15 years in the UK are susceptible to chickenpox",
      B: "Fetal varicella syndrome (FVS) occurs in approximately 10% of infected fetuses",
      C: "The risk of FVS is highest when maternal infection occurs after 28 weeks",
      D: "Oral aciclovir should be prescribed if presentation is within 24 hours of rash onset and >20 weeks",
      E: "VZIG has therapeutic benefit once chickenpox has developed"
    },
    answer: "D",
    rationale: "** Oral aciclovir should be prescribed for pregnant women if they present within 24 hours of rash onset and are >20 weeks' gestation. Over 90% of individuals over 15 are IMMUNE (not susceptible). FVS occurs in approximately 1% (not 10%) of infected fetuses. No case of FVS has been reported when maternal infection occurred after 28 weeks (risk is highest in first trimester, particularly 3-28 weeks). VZIG has NO therapeutic benefit once chickenpox has developed."
  },
  {
    id: 361,
    chapterId: 11,
    chapterName: "Perinatal Infections",
    question: "Regarding parvovirus B19 in pregnancy, which statement is CORRECT?",
    options: {
      A: "Routine screening in pregnancy is recommended",
      B: "The fetus is most vulnerable in the third trimester",
      C: "The virus can cause aplastic anaemia leading to fetal hydrops",
      D: "Intrauterine transfusion is possible at any gestational age",
      E: "The fetal loss rate beyond 20 weeks with transfusion is approximately 50%"
    },
    answer: "C",
    rationale: "** Parvovirus B19 can infect the fetal liver (main source of haematopoiesis in second trimester), causing aplastic anaemia which may result in fetal hydrops. Routine screening is NOT recommended. The fetus is most vulnerable in the SECOND trimester (not third). Intrauterine transfusion is NOT possible before 20 weeks. Beyond 20 weeks, transfusion can reduce fetal loss rate to approximately 10% (not 50%)."
  },
  {
    id: 362,
    chapterId: 11,
    chapterName: "Perinatal Infections",
    question: "Regarding rubella in pregnancy, which statement is CORRECT?",
    options: {
      A: "Routine antenatal screening for rubella immunity continues in the UK",
      B: "Infection before 12 weeks causes abnormalities in over 80% of cases",
      C: "The risk to the fetus is highest beyond 18 weeks' gestation",
      D: "Congenital rubella syndrome is commonly encountered in high-income countries",
      E: "By 2020, only 50 countries had incorporated rubella vaccine into national schedules"
    },
    answer: "B",
    rationale: "** Infection before 12 weeks' gestation causes deafness, congenital heart disease, cataracts, and other abnormalities in over 80% of cases. Routine antenatal screening for rubella immunity has been DISCONTINUED in the UK. Beyond 18 weeks, the risk to the fetus is LOW. Congenital rubella syndrome is RARELY encountered in high-income countries with MMR vaccination. By 2020, 194 countries (not 50) had incorporated rubella vaccine, with 93 having eliminated transmission."
  },
  {
    id: 363,
    chapterId: 11,
    chapterName: "Perinatal Infections",
    question: "Regarding listeriosis in pregnancy, which statement is CORRECT?",
    options: {
      A: "The incidence is approximately 1 in 80 pregnancies",
      B: "Pregnant women typically present with severe gastrointestinal symptoms",
      C: "Approximately 20% of affected pregnancies result in miscarriage or stillbirth",
      D: "The neonatal mortality rate is approximately 5%",
      E: "Meconium staining in a term infant increases suspicion of listeriosis"
    },
    answer: "C",
    rationale: "** Approximately 20% of affected pregnancies result in miscarriage or stillbirth. The incidence is 1 in 8,000 (not 80) pregnancies. Pregnant women most commonly suffer from a flu-like illness (fever, malaise) - about one-third may be asymptomatic. The neonatal mortality rate is estimated at 38% (not 5%). Meconium staining in a PRETERM (not term) infant may increase suspicion. --- ## Section 11.6: Neonatal Infection - GBS and Other Bacterial Infections"
  },
  {
    id: 364,
    chapterId: 11,
    chapterName: "Perinatal Infections",
    question: "Regarding group B Streptococcus (GBS) in pregnancy, which statement is CORRECT?",
    options: {
      A: "Universal screening for GBS is recommended in the UK",
      B: "Approximately 5% of pregnant women in the UK carry GBS",
      C: "Intrapartum antibiotic prophylaxis is 100% effective in preventing early-onset GBS",
      D: "Women undergoing planned caesarean without labour do not require prophylaxis regardless of GBS status",
      E: "The mortality from early-onset GBS is 18% in term infants"
    },
    answer: "D",
    rationale: "** Women undergoing planned caesarean delivery in the absence of labour or membrane rupture do not require antibiotic prophylaxis for GBS, regardless of colonization status - the risk is extremely low. Universal screening is carried out in the USA but NOT currently recommended in the UK. Approximately 21% (not 5%) of pregnant women carry GBS. Intrapartum antibiotics are 60-80% effective (not 100%). Mortality is 6% in term infants and 18% in PRETERM infants."
  },
  {
    id: 365,
    chapterId: 11,
    chapterName: "Perinatal Infections",
    question: "Regarding neonatal herpes simplex virus (HSV) infection, which statement is CORRECT?",
    options: {
      A: "Neonatal herpes is common with an incidence of 2 per 1,000 live births",
      B: "Almost all cases result from postnatal acquisition from infected caregivers",
      C: "The risk is greatest with recurrent genital herpes in the third trimester",
      D: "Caesarean section is recommended for all women with recurrent genital herpes lesions at labour onset",
      E: "The risk of neonatal herpes with recurrent infection at delivery is 1-3%"
    },
    answer: "E",
    rationale: "** The risk of neonatal herpes with recurrent genital herpes lesions at delivery is very small (1-3%). Neonatal herpes incidence is 2 per 100,000 (not 1,000) live births. Almost all cases occur from direct contact with infected maternal secretions at/near delivery (not postnatal). The risk is GREATEST with PRIMARY (not recurrent) genital herpes in the third trimester, particularly within 6 weeks of delivery. Caesarean is NOT recommended for recurrent herpes - vaginal delivery is acceptable with 1-3% risk. --- ## Section 11.7: Perinatal Infections Causing Long-Term Disease - HIV, Hepatitis B and C"
  },
  {
    id: 366,
    chapterId: 11,
    chapterName: "Perinatal Infections",
    question: "Regarding HIV in pregnancy, which statement is CORRECT?",
    options: {
      A: "The prevalence of HIV in pregnant women in the UK is approximately 1 in 100",
      B: "Vertical transmission rates with optimal management are 5-10%",
      C: "Elective caesarean section is recommended for all HIV-positive women regardless of viral load",
      D: "In high-income countries, breastfeeding is recommended for women with undetectable viral load",
      E: "Antiretroviral therapy can reduce vertical transmission from 25-30% to less than 0.5%"
    },
    answer: "E",
    rationale: "** Interventions including antiretroviral therapy, elective caesarean when indicated, and formula feeding can reduce vertical transmission from 25-30% to less than 0.5%. Prevalence is about 1 in 1,000 (not 100) pregnancies. With optimal management, transmission is <0.5% (not 5-10%). Caesarean is recommended for high viral load (>400 copies/mL), but vaginal delivery is an option with undetectable viral load (<50 copies/mL). In high-income countries, FORMULA feeding is recommended regardless of viral load."
  },
  {
    id: 367,
    chapterId: 11,
    chapterName: "Perinatal Infections",
    question: "Regarding hepatitis B in pregnancy, which statement is CORRECT?",
    options: {
      A: "The prevalence of HBsAg in pregnancy in the UK is 5-10%",
      B: "Caesarean section is recommended to avoid vertical transmission",
      C: "All infants born to HBsAg-positive mothers should receive hepatitis B vaccination",
      D: "Fetal scalp electrodes and fetal blood sampling should be routinely used in labour",
      E: "Hepatitis B immunoglobulin is contraindicated in infants"
    },
    answer: "C",
    rationale: "** All infants born to HBsAg-positive mothers should receive HBV vaccination as soon after birth as possible, with further doses in the first year. This provides protection for 95% of infants. Prevalence in the UK is 0.4-1% (not 5-10%). Caesarean is NOT recommended solely to avoid transmission. Fetal scalp electrodes and blood sampling should be AVOIDED where possible. Hepatitis B immunoglobulin is ADVISED for high-risk infants (not contraindicated)."
  },
  {
    id: 368,
    chapterId: 11,
    chapterName: "Perinatal Infections",
    question: "Regarding hepatitis C in pregnancy, which statement is CORRECT?",
    options: {
      A: "Universal screening for HCV is currently offered in the UK",
      B: "The risk of vertical transmission is approximately 20-30%",
      C: "Ribavirin is safe to use during pregnancy",
      D: "Breastfeeding is contraindicated in all women with HCV",
      E: "The risk of vertical transmission increases with increasing maternal viral load"
    },
    answer: "E",
    rationale: "** The risk of vertical transmission increases with increasing maternal viral load (estimated at 3-5% overall). Universal screening is NOT currently offered in the UK. Ribavirin is TERATOGENIC - pregnant women and partners receiving ribavirin should avoid pregnancy during treatment and for 6 months after. Breastfeeding is NOT contraindicated except if mother has cracked/bleeding nipples or HIV coinfection. --- # \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550"
  },
  {
    id: 369,
    chapterId: 12,
    chapterName: "Labour \u2013 Normal and Abnormal",
    question: "Regarding the pelvic inlet, which statement is CORRECT?",
    options: {
      A: "The normal transverse diameter is 11.0 cm",
      B: "The anterior-posterior (AP) diameter is normally 13.5 cm",
      C: "The fetal head typically enters the pelvis in an anterior-posterior position",
      D: "The angle of the inlet is normally 60 degrees to the horizontal in the erect position",
      E: "In Afro-Caribbean women, the angle is typically less than 60 degrees"
    },
    answer: "D",
    rationale: "** The angle of the pelvic inlet is normally 60 degrees to the horizontal in the erect position. The normal transverse diameter is 13.5 cm (not 11.0). The AP diameter is 11.0 cm (not 13.5). The fetal head typically enters in a TRANSVERSE position (not AP) to take advantage of the wider diameter. In Afro-Caribbean women, the angle may be as much as 90 degrees (not less than 60 degrees), which may delay head entry."
  },
  {
    id: 370,
    chapterId: 12,
    chapterName: "Labour \u2013 Normal and Abnormal",
    question: "Regarding the ischial spines, which statement is CORRECT?",
    options: {
      A: "They are located at the pelvic inlet",
      B: "They are not palpable on vaginal examination",
      C: "Station zero is defined as 2 cm above the ischial spines",
      D: "They are used as landmarks for pudendal nerve block administration",
      E: "The pudendal nerve passes anterior to the ischial spine"
    },
    answer: "D",
    rationale: "** The ischial spines are used as landmarks for two purposes: (1) assessing descent of presenting part (station zero is at the level of the spines, -1 is 1 cm above, +1 is 1 cm below), and (2) administering pudendal nerve block - the pudendal nerve passes BEHIND and BELOW the ischial spine. They are located in the MID-PELVIS (not inlet). They ARE palpable vaginally."
  },
  {
    id: 371,
    chapterId: 12,
    chapterName: "Labour \u2013 Normal and Abnormal",
    question: "Regarding the fetal skull and moulding, which statement is CORRECT?",
    options: {
      A: "The sutures of the fetal face and skull base are membranous and soft",
      B: "The anterior fontanelle (bregma) is triangular shaped",
      C: "The posterior fontanelle is diamond shaped and larger",
      D: "Moulding reduces the diameters of the fetal head to encourage progress through the pelvis",
      E: "Severe moulding early in labour is always a normal finding"
    },
    answer: "D",
    rationale: "** Moulding is the process where the bones of the fetal skull move together and overlap, reducing the diameters of the fetal head to encourage progress through the pelvis while protecting the underlying brain. The sutures of the VAULT are soft and membranous; the face and base are firmly united. The anterior fontanelle is DIAMOND shaped; the posterior is TRIANGULAR and smaller. Severe moulding or moulding early in labour can indicate obstructed labour or CPD."
  },
  {
    id: 372,
    chapterId: 12,
    chapterName: "Labour \u2013 Normal and Abnormal",
    question: "Which fetal head diameter presents with a well-flexed attitude (chin on chest)?",
    options: {
      A: "Occipitofrontal diameter (11.5 cm)",
      B: "Suboccipito-frontal diameter (10 cm)",
      C: "Suboccipito-bregmatic diameter (9.5 cm)",
      D: "Occipito-mental diameter (13 cm)",
      E: "Submento-bregmatic diameter (9.5 cm)"
    },
    answer: "C",
    rationale: "** With a well-flexed attitude (chin on chest), the suboccipito-bregmatic diameter presents, measuring 9.5 cm. This is the most favourable diameter for vaginal delivery. The suboccipito-frontal (10 cm) presents with less well-flexed head. The occipitofrontal (11.5 cm) presents with deflexed OP. The occipito-mental (13 cm) is the brow presentation. The submento-bregmatic (9.5 cm) is the face presentation with hyperextension. --- ## Section 12.2: Physiology of Labour"
  },
  {
    id: 373,
    chapterId: 12,
    chapterName: "Labour \u2013 Normal and Abnormal",
    question: "Regarding uterine contractions in labour, which statement is CORRECT?",
    options: {
      A: "They are primarily under voluntary neuronal control",
      B: "The frequency typically decreases as labour progresses",
      C: "Gap junctions between myocytes are present throughout pregnancy",
      D: "Prostaglandins stimulate gap junction formation",
      E: "Beta-adrenergic compounds increase intracellular calcium"
    },
    answer: "D",
    rationale: "** Prostaglandins stimulate gap junction formation between myometrial cells, which facilitates coordinated contractions. Gap junctions are ABSENT for most of pregnancy but appear in significant numbers at term. Uterine contractions are INVOLUNTARY with relatively little extrauterine neuronal control. Frequency INCREASES as labour progresses (from 2 in 10 to 4-5 in 10). Beta-adrenergic compounds DECREASE intracellular calcium (causing relaxation)."
  },
  {
    id: 374,
    chapterId: 12,
    chapterName: "Labour \u2013 Normal and Abnormal",
    question: "Regarding cervical changes in labour, which statement is CORRECT?",
    options: {
      A: "Dermatan sulphate is replaced by hyaluronic acid, causing cervical softening",
      B: "Interleukins bring about an anti-inflammatory change in the cervix",
      C: "Collagen and elastin increase as labour approaches",
      D: "The cervix becomes firmer and more closed under the influence of prostaglandins",
      E: "Neutrophil invasion decreases as labour approaches"
    },
    answer: "A",
    rationale: "** Dermatan sulphate is replaced by the more hydrophilic hyaluronic acid, which increases water content and causes cervical softening/ripening. Interleukins bring about PRO-inflammatory (not anti-inflammatory) change with significant neutrophil invasion. Collagen and elastin REDUCE (not increase). Prostaglandins cause cervical softening and opening (not firming and closing). Neutrophil invasion INCREASES."
  },
  {
    id: 375,
    chapterId: 12,
    chapterName: "Labour \u2013 Normal and Abnormal",
    question: "Which hormonal change is associated with the onset of labour?",
    options: {
      A: "Increase in progesterone receptors",
      B: "Decrease in oestrogen concentration relative to progesterone",
      C: "Increase in corticotrophin-releasing hormone (CRH) from the placenta",
      D: "Decrease in prostaglandin synthesis",
      E: "Suppression of oxytocin release by oestrogen"
    },
    answer: "C",
    rationale: "** The production of corticotrophin-releasing hormone (CRH) by the placenta increases towards term and potentiates the action of prostaglandins and oxytocin. Prior to labour, there is a REDUCTION in progesterone receptors and an INCREASE in oestrogen relative to progesterone. Prostaglandin synthesis is ENHANCED (not decreased). Oestrogen OPPOSES progesterone's suppression of oxytocin. --- ## Section 12.3: Normal Labour - Diagnosis and Stages"
  },
  {
    id: 376,
    chapterId: 12,
    chapterName: "Labour \u2013 Normal and Abnormal",
    question: "The onset of labour is defined as:",
    options: {
      A: "Loss of the cervical mucus plug ('show')",
      B: "Spontaneous rupture of membranes",
      C: "Presence of strong, regular, painful contractions resulting in progressive cervical change",
      D: "First episode of vaginal bleeding in the third trimester",
      E: "Onset of Braxton Hicks contractions"
    },
    answer: "C",
    rationale: "** The onset of labour is defined as the presence of strong, regular, painful contractions resulting in progressive cervical change. Loss of the 'show' or spontaneous rupture of membranes (SROM) does NOT define the onset of labour, although these events may occur around the same time. Labour can be well established before either occurs, and both may precede labour by many hours."
  },
  {
    id: 377,
    chapterId: 12,
    chapterName: "Labour \u2013 Normal and Abnormal",
    question: "Regarding the stages of labour, which statement is CORRECT?",
    options: {
      A: "The first stage begins with full cervical dilatation and ends with birth of the baby",
      B: "The latent phase typically lasts 1-2 hours",
      C: "The active phase describes the time between 3-4 cm dilatation and full cervical dilatation (10 cm)",
      D: "The second stage should last no longer than 4 hours in all women",
      E: "The third stage is considered prolonged after 60 minutes with active management"
    },
    answer: "C",
    rationale: "** The active phase describes the time between the end of the latent phase (3-4 cm dilatation) and full cervical dilatation (10 cm). The first stage begins with diagnosis of labour and ends with full dilatation. The latent phase usually lasts 3-8 hours (not 1-2). The active second stage should last no longer than 2 hours in nulliparous women and 1 hour in parous women (total second stage up to 3-4 hours with epidural). The third stage is considered prolonged after 30 minutes with active management (60 minutes with physiological management)."
  },
  {
    id: 378,
    chapterId: 12,
    chapterName: "Labour \u2013 Normal and Abnormal",
    question: "Regarding the mechanisms of labour (cardinal movements), which is the correct sequence?",
    options: {
      A: "Engagement, flexion, descent, internal rotation, extension, restitution, external rotation",
      B: "Engagement, descent, flexion, internal rotation, extension, restitution, external rotation",
      C: "Descent, engagement, flexion, internal rotation, extension, restitution, external rotation",
      D: "Engagement, descent, internal rotation, flexion, extension, restitution, external rotation",
      E: "Engagement, flexion, internal rotation, descent, extension, restitution, external rotation"
    },
    answer: "B",
    rationale: "** The correct sequence of cardinal movements is: Engagement, Descent, Flexion, Internal rotation, Extension, Restitution, External rotation. Descent occurs before flexion, and flexion must occur before internal rotation can be completed. Restitution occurs after the head delivers and aligns with the shoulders, followed by external rotation as the shoulders rotate to the AP diameter. --- ## Section 12.4: Management of Normal Labour"
  },
  {
    id: 379,
    chapterId: 12,
    chapterName: "Labour \u2013 Normal and Abnormal",
    question: "Regarding admission examination in labour, which statement is CORRECT?",
    options: {
      A: "A detailed history is not necessary if the woman has had previous normal deliveries",
      B: "The temperature, pulse and blood pressure do not need to be recorded if the woman appears well",
      C: "Urine should be tested for protein, blood, ketones, glucose and infection",
      D: "Abdominal examination is only necessary if there is a history of caesarean section",
      E: "Vaginal examination should be performed hourly to monitor progress"
    },
    answer: "C",
    rationale: "** On admission, a detailed history should be taken including past obstetric history, current pregnancy history, relevant medical history, and events leading to attendance. Temperature, pulse, and blood pressure MUST be recorded. Urine should be tested for protein, blood, ketones, glucose, and infection. Abdominal examination is essential for all women to determine lie, presentation, and engagement. Vaginal examinations are usually performed 4-hourly (not hourly) to determine cervical dilatation and effacement."
  },
  {
    id: 380,
    chapterId: 12,
    chapterName: "Labour \u2013 Normal and Abnormal",
    question: "Regarding fetal assessment in labour, which statement is CORRECT?",
    options: {
      A: "Continuous CTG monitoring is recommended for all women in labour",
      B: "Intermittent auscultation should be performed every 30 minutes in the first stage",
      C: "The fetal heart rate should be auscultated for at least 1 minute immediately after a contraction",
      D: "An admission CTG is recommended for all women on admission in labour",
      E: "Fetal scalp blood sampling should be performed routinely in all labours"
    },
    answer: "C",
    rationale: "** The fetal heart rate should be auscultated with a Pinard stethoscope or hand-held Doppler for at least 1 minute, immediately after a contraction. This should be repeated every 15 minutes during the first stage and at least every 5 minutes in the second stage. Continuous CTG is NOT recommended for all women - only those with risk factors. Admission CTG is NO LONGER recommended for all women. Fetal scalp blood sampling is a second-line test used when there are concerns about the CTG."
  },
  {
    id: 381,
    chapterId: 12,
    chapterName: "Labour \u2013 Normal and Abnormal",
    question: "Regarding the partogram, which statement is CORRECT?",
    options: {
      A: "The action line is drawn 2 hours to the right of the alert line",
      B: "The expected rate of cervical dilatation is 2 cm per hour in nulliparous women",
      C: "If cervical dilatation reaches the action line, immediate caesarean section is indicated",
      D: "The partogram allows instant visual assessment of labour progress compared with expected norms",
      E: "Vaginal examinations should be performed hourly and plotted on the partogram"
    },
    answer: "D",
    rationale: "** The partogram allows an instant visual assessment of the progress of labour based on the rate of cervical dilatation compared with an expected norm, according to the parity of the woman. The action line is drawn 4 hours (not 2) to the right of the alert line. The expected rate is 1 cm per hour (not 2) in the active phase. If the action line is reached, measures to improve progress should be considered (hydration, mobility, ARM, oxytocin) - not immediate caesarean. Vaginal examinations are usually 4-hourly (not hourly)."
  },
  {
    id: 382,
    chapterId: 12,
    chapterName: "Labour \u2013 Normal and Abnormal",
    question: "Regarding management of the first stage of labour, which statement is CORRECT?",
    options: {
      A: "Women in the latent phase should be managed on the labour suite with continuous monitoring",
      B: "Intervention during the latent phase is recommended to speed progress",
      C: "Nitrous oxide gas is preferred over simple analgesics in early labour",
      D: "Women should be encouraged to mobilize and adopt comfortable positions",
      E: "Artificial rupture of membranes should be performed routinely in all labours"
    },
    answer: "D",
    rationale: "** Women should be encouraged to mobilize and adopt comfortable positions. Women in the latent phase should be managed AWAY from the labour suite where possible, and may go home. Intervention during the latent phase is best avoided. Simple analgesics are preferred over nitrous oxide gas and epidurals in early labour. ARM is not necessary if progress is satisfactory - it may be appropriate if progress is slow."
  },
  {
    id: 383,
    chapterId: 12,
    chapterName: "Labour \u2013 Normal and Abnormal",
    question: "Regarding management of the second stage of labour, which statement is CORRECT?",
    options: {
      A: "Women should be encouraged to lie in the supine position for effective pushing",
      B: "The active second stage should last no longer than 2 hours in nulliparous women",
      C: "Epidural analgesia shortens the second stage of labour",
      D: "Women with epidurals should start pushing immediately upon reaching full dilatation",
      E: "The fetal head should be delivered as quickly as possible to reduce perineal trauma"
    },
    answer: "B",
    rationale: "** Conventionally, a normal active second stage should last no longer than 2 hours in a nulliparous woman and 1 hour in a parous individual. Women should NOT lie supine (aorto-caval compression). Epidural analgesia LENGTHENS the second stage due to delayed urge to push. With epidural, pushing is usually delayed for at least 1 hour (passive second stage). The fetal head should be delivered in a CONTROLLED manner to reduce perineal trauma - rapid delivery increases risk of tears."
  },
  {
    id: 384,
    chapterId: 12,
    chapterName: "Labour \u2013 Normal and Abnormal",
    question: "Regarding management of the third stage of labour, which statement is CORRECT?",
    options: {
      A: "Active management is associated with a higher incidence of postpartum haemorrhage than physiological management",
      B: "Oxytocin 10 IU should be given immediately after delivery of the placenta",
      C: "Controlled cord traction should be performed without waiting for signs of placental separation",
      D: "The third stage is considered prolonged after 30 minutes with active management",
      E: "Delayed cord clamping for 1-3 minutes is now recommended to allow autotransfusion"
    },
    answer: "E",
    rationale: "** A modified approach to active management with delayed cord clamping for 1-3 minutes is now recommended. This allows autotransfusion of placental blood to the neonate while maintaining the benefit of reduced PPH risk. Active management REDUCES PPH from 15% to 5% (not higher). Oxytocin 10 IU is given immediately after delivery of the BABY (not placenta). Controlled cord traction should be performed when signs of placental separation are recognized. The third stage is prolonged after 30 minutes with active management (this is correct but less comprehensive than E). --- ## Section 12.5: Abnormal Labour"
  },
  {
    id: 385,
    chapterId: 12,
    chapterName: "Labour \u2013 Normal and Abnormal",
    question: "Which pattern of abnormal labour is characterized by poor progress in the active first stage with initially good progress that then slows or stops, typically after 7 cm dilatation?",
    options: {
      A: "Primary arrest",
      B: "Secondary arrest",
      C: "Prolonged latent phase",
      D: "Arrest in the second stage",
      E: "Precipitate labour"
    },
    answer: "B",
    rationale: "** Secondary arrest occurs when progress in the active first stage is initially good but then slows or stops altogether, typically after 7 cm dilatation. Primary arrest is poor progress from the start of the active phase (<2 cm/4 hours). Prolonged latent phase is slow progress before 3-4 cm. Arrest in the second stage is failure to deliver after appropriate pushing. Precipitate labour is birth within <3 hours of onset of regular contractions."
  },
  {
    id: 386,
    chapterId: 12,
    chapterName: "Labour \u2013 Normal and Abnormal",
    question: "Regarding cephalopelvic disproportion (CPD), which statement is CORRECT?",
    options: {
      A: "It can only be diagnosed by X-ray or CT pelvimetry",
      B: "It is more common in multiparous women than nulliparous women",
      C: "Oxytocin augmentation is contraindicated in all cases of CPD",
      D: "Relative CPD is more common and occurs with malposition of the fetal head",
      E: "A brow presentation is not associated with CPD"
    },
    answer: "D",
    rationale: "** Relative CPD is more common and occurs with malposition of the fetal head (e.g., OP position with deflexion presenting a larger diameter). CPD is a clinical diagnosis based on findings such as: fetal head not engaged in labour; slow or arrested progress despite efficient contractions; severe moulding and caput; poorly applied head to cervix; haematuria. X-ray/CT pelvimetry is now uncommon. It is more common in nulliparous women. Oxytocin can be given carefully to a primigravida with mild-moderate CPD if CTG is normal. Brow presentation (mentovertical diameter 13 cm) is associated with CPD."
  },
  {
    id: 387,
    chapterId: 12,
    chapterName: "Labour \u2013 Normal and Abnormal",
    question: "Which of the following is a contraindication to oxytocin augmentation in labour?",
    options: {
      A: "Nulliparous woman with primary arrest and normal CTG",
      B: "Multiparous woman with suspected CPD and normal CTG",
      C: "Woman with fetal malpresentation (breech) and normal CTG",
      D: "Woman with secondary arrest and reassuring fetal heart rate",
      E: "Woman with prolonged latent phase and no fetal concerns"
    },
    answer: "B",
    rationale: "** Oxytocin must NEVER be used in a multiparous woman when CPD is suspected, as excessive uterine contractions in truly obstructed labour may result in uterine rupture (extremely rare in nulliparous women). Oxytocin is also contraindicated with fetal malpresentation (C), concerns about fetal well-being, and in women with uterine scars. It can be used in nulliparous women with primary arrest (A) and secondary arrest (D) if CTG is normal and no mechanical obstruction is suspected."
  },
  {
    id: 388,
    chapterId: 12,
    chapterName: "Labour \u2013 Normal and Abnormal",
    question: "Regarding fetal compromise in labour, which statement is CORRECT?",
    options: {
      A: "Thick meconium always confirms fetal hypoxia and acidosis",
      B: "The term 'fetal distress' is preferred over 'suspected fetal compromise'",
      C: "A normal CTG with thick meconium requires immediate delivery",
      D: "Reversible causes of CTG abnormalities should be considered before intervention",
      E: "Fetal scalp blood sampling is indicated when the CTG is reassuring"
    },
    answer: "D",
    rationale: "** Reversible causes of CTG abnormalities should be considered before more complex intervention. These include: maternal dehydration and ketosis (IV fluids); maternal hypotension secondary to epidural (fluid bolus, ephedrine); uterine hyperstimulation (stop oxytocin, terbutaline); venocaval compression (left lateral position). Thick meconium is a warning sign but does not ALWAYS confirm hypoxia (can be physiological at term). 'Suspected fetal compromise' is the preferred term (not 'fetal distress'). A normal CTG with thick meconium requires observation, not immediate delivery. FBS is indicated when CTG is suspicious or pathological, not reassuring."
  },
  {
    id: 389,
    chapterId: 12,
    chapterName: "Labour \u2013 Normal and Abnormal",
    question: "Regarding fetal blood sampling (FBS), which statement is CORRECT?",
    options: {
      A: "It can be performed when the cervix is dilated 1 cm or more",
      B: "A pH below 7.25 confirms fetal compromise",
      C: "A borderline pH (7.20-7.25) should be repeated within 30 minutes",
      D: "The base excess is not useful in interpreting fetal scalp pH",
      E: "FBS should be repeated every 15 minutes if the CTG remains abnormal"
    },
    answer: "C",
    rationale: "** A borderline pH (7.20-7.25) should be repeated no more than 30 minutes later. FBS is usually only possible when cervix is dilated 3 cm or more (not 1 cm). A pH below 7.20 (not 7.25) confirms fetal compromise. The base excess IS useful - more than -12.0 demonstrates significant metabolic acidosis. If CTG persists abnormal despite normal values, FBS should be repeated every 60 minutes (not 15), or sooner if CTG deteriorates. --- ## Section 12.6: Pain Relief in Labour"
  },
  {
    id: 390,
    chapterId: 12,
    chapterName: "Labour \u2013 Normal and Abnormal",
    question: "Regarding non-pharmacological pain relief in labour, which statement is CORRECT?",
    options: {
      A: "TENS has been shown to significantly reduce pain scores in established labour",
      B: "Homeopathy, acupuncture and hypnosis are associated with significant reduction in pain scores",
      C: "Relaxation in warm water often leads to a sense of well-being and helps cope with pain",
      D: "Hyperventilation during breathing exercises is beneficial for pain management",
      E: "One-to-one midwifery care has no effect on the need for analgesia"
    },
    answer: "C",
    rationale: "** Relaxation in warm water during the first stage often leads to a sense of well-being and allows women to cope much better with pain. The temperature should not exceed 37.5 degrees C. TENS has been shown to be INEFFECTIVE in reducing pain scores or need for other analgesia in established labour. Homeopathy, acupuncture and hypnosis have NOT been associated with significant reduction in pain scores. Hyperventilation can cause dizziness and alkalosis (not beneficial). One-to-one midwifery care REDUCES the need for analgesia."
  },
  {
    id: 391,
    chapterId: 12,
    chapterName: "Labour \u2013 Normal and Abnormal",
    question: "Regarding opioid analgesia in labour, which statement is CORRECT?",
    options: {
      A: "Pethidine and diamorphine provide excellent pain relief with minimal side effects",
      B: "They should never be given with anti-emetics as this increases sedation",
      C: "They do not cross the placenta and have no effect on the neonate",
      D: "They can cause delayed gastric emptying, increasing risks of general anaesthesia",
      E: "Patient-controlled analgesic devices are contraindicated in labour"
    },
    answer: "D",
    rationale: "** Opioids can cause delayed gastric emptying, which increases the risks if general anaesthesia becomes necessary. They provide only LIMITED pain relief and have significant side effects including: nausea/vomiting (should ALWAYS be given with anti-emetics); maternal drowsiness and sedation; short-term respiratory depression of the baby; possible interference with breastfeeding. They DO cross the placenta. Patient-controlled analgesic devices are an alternative and can be particularly useful for women who cannot have an epidural."
  },
  {
    id: 392,
    chapterId: 12,
    chapterName: "Labour \u2013 Normal and Abnormal",
    question: "Regarding epidural analgesia in labour, which statement is CORRECT?",
    options: {
      A: "It increases the caesarean section rate",
      B: "It causes a shorter second stage of labour",
      C: "It is contraindicated in women with gestational hypertensive disorders",
      D: "It requires intravenous access and more intensive maternal and fetal monitoring",
      E: "Combined spinal-epidural is contraindicated in labour"
    },
    answer: "D",
    rationale: "** Epidural analgesia requires intravenous access and a more intensive level of maternal and fetal monitoring, for example with CTG. The evidence is clear that epidural does NOT increase caesarean section rates. The second stage is LONGER (not shorter) with delayed urge to push. Epidural is actually INDICATED (not contraindicated) for gestational hypertensive disorders. Combined spinal-epidural has gained in popularity and is an option for immediate pain relief in labour."
  },
  {
    id: 393,
    chapterId: 12,
    chapterName: "Labour \u2013 Normal and Abnormal",
    question: "Regarding complications of regional analgesia, which statement is CORRECT?",
    options: {
      A: "Hypotension is more common with epidural than spinal anaesthesia",
      B: "Bladder dysfunction is prevented by allowing the bladder to overfill before catheterization",
      C: "Accidental dural puncture occurs in approximately 10% of cases",
      D: "A 'spinal headache' is characteristically relieved by sitting upright and exacerbated by lying flat",
      E: "Accidental total spinal anaesthesia requires immediate intubation, ventilation and circulatory support"
    },
    answer: "E",
    rationale: "** Accidental total spinal anaesthesia (injection of epidural doses into subarachnoid space) causes severe hypotension, respiratory failure, unconsciousness and death if not recognized and treated immediately. The woman requires intubation, ventilation and circulatory support. Hypotension is MORE common with spinal (not epidural) anaesthesia. Bladder dysfunction is prevented by catheterization BEFORE over-distension occurs. Accidental dural puncture occurs in approximately 1% (not 10%). Spinal headache is relieved by LYING FLAT and exacerbated by sitting upright (not the reverse). --- ## Section 12.7: Labour in Special Circumstances"
  },
  {
    id: 394,
    chapterId: 12,
    chapterName: "Labour \u2013 Normal and Abnormal",
    question: "Regarding vaginal birth after caesarean section (VBAC), which statement is CORRECT?",
    options: {
      A: "Approximately 30-40% of women who attempt VBAC will give birth vaginally",
      B: "Continuous CTG monitoring is not necessary in labour after previous caesarean",
      C: "The risk of uterine rupture is approximately 1 in 200 with spontaneous labour after lower segment caesarean",
      D: "A previous classical caesarean is a relative contraindication to VBAC",
      E: "Induction of labour is not associated with increased risk of uterine rupture"
    },
    answer: "C",
    rationale: "** Uterine rupture or dehiscence occurs in approximately 1 in 200 women who labour spontaneously with a pre-existing lower segment uterine scar. Approximately 60-70% (not 30-40%) of women who attempt VBAC will give birth vaginally. Continuous CTG monitoring is STRONGLY recommended. A previous classical caesarean is an ABSOLUTE (not relative) contraindication to VBAC. The risk of scar rupture increases from 1 in 200 in spontaneous labour to as high as 1 in 50 if IOL is performed."
  },
  {
    id: 395,
    chapterId: 12,
    chapterName: "Labour \u2013 Normal and Abnormal",
    question: "Regarding breech presentation in labour, which statement is CORRECT?",
    options: {
      A: "Vaginal breech birth is never appropriate and all breech presentations should be delivered by caesarean",
      B: "Cord prolapse is more common with complete breech than footling breech",
      C: "Mechanical difficulties with delivery of the after-coming head are more common with smaller fetuses",
      D: "A small or preterm fetus may deliver through an incompletely dilated cervix causing head entrapment",
      E: "Oxytocin augmentation is routinely recommended for poor progress in breech labour"
    },
    answer: "D",
    rationale: "** A small or preterm fetus may deliver through an incompletely dilated cervix resulting in head entrapment. While most breech presentations at term are delivered by caesarean (evidence-based), there is still a place for vaginal breech birth in certain circumstances. Cord prolapse is more common with FOOTLING (not complete) breech. Mechanical difficulties with the after-coming head are more common with LARGER (not smaller) fetuses. Oxytocin augmentation is controversial - some obstetricians support it for poor contractions, but poor progress is generally taken as an indication for caesarean."
  },
  {
    id: 396,
    chapterId: 12,
    chapterName: "Labour \u2013 Normal and Abnormal",
    question: "Regarding face presentation in labour, which statement is CORRECT?",
    options: {
      A: "It occurs in approximately 1 in 50 labours",
      B: "The presenting diameter is the occipito-mental (13 cm)",
      C: "Vaginal birth is possible if the chin is mento-anterior",
      D: "Oxytocin augmentation is recommended to speed progress",
      E: "Forceps delivery is contraindicated for low mento-anterior face presentation"
    },
    answer: "C",
    rationale: "** Vaginal birth is possible if the chin remains mento-anterior, with the head being delivered by flexion. Face presentation occurs in about 1 in 500 (not 50) labours. The presenting diameter is the submento-bregmatic (9.5 cm), not occipito-mental. Oxytocin should NOT be used. Forceps delivery is ACCEPTABLE for low mento-anterior face presentation (but vacuum extraction is contraindicated). If the chin is posterior (mentoposterior), delivery is impossible and caesarean is required."
  },
  {
    id: 397,
    chapterId: 12,
    chapterName: "Labour \u2013 Normal and Abnormal",
    question: "Regarding brow presentation in labour, which statement is CORRECT?",
    options: {
      A: "It is the most common malpresentation, occurring in 1 in 500 labours",
      B: "The presenting diameter is the suboccipito-bregmatic (9.5 cm)",
      C: "Vaginal delivery is usually possible if the head remains flexed",
      D: "It is diagnosed by palpating the anterior fontanelle, supra-orbital ridges and nose on vaginal examination",
      E: "Oxytocin augmentation is recommended to overcome the obstruction"
    },
    answer: "D",
    rationale: "** Brow presentation is diagnosed in labour by palpating the anterior fontanelle, supra-orbital ridges and nose on vaginal examination. It is the LEAST common malpresentation, occurring in 1 in 1,500-2,000 labours. The presenting diameter is the mento-vertical (13 cm) - too large for vaginal delivery. Vaginal delivery is usually IMPOSSIBLE unless flexion occurs to vertex or extension to face. Oxytocin is contraindicated - delivery is by caesarean if the presentation persists."
  },
  {
    id: 398,
    chapterId: 12,
    chapterName: "Labour \u2013 Normal and Abnormal",
    question: "Regarding shoulder presentation (transverse lie) in labour, which statement is CORRECT?",
    options: {
      A: "Vaginal delivery is possible if the fetus is small",
      B: "It occurs in approximately 1 in 30 pregnancies at term",
      C: "Causes include placenta praevia, high parity, pelvic tumour and uterine anomaly",
      D: "Delay in diagnosis does not increase risks as the fetus will usually convert spontaneously",
      E: "Oxytocin can be used to stimulate uterine contractions and achieve vaginal delivery"
    },
    answer: "C",
    rationale: "** Causes of shoulder presentation include placenta praevia, high parity, pelvic tumour and uterine anomaly. Delivery should ALWAYS be by caesarean section - vaginal delivery is impossible. It occurs in approximately 1 in 300 (not 30) pregnancies at term. Delay in diagnosis risks cord prolapse and uterine rupture. Oxytocin is absolutely contraindicated. --- ## Section 12.8: Induction of Labour"
  },
  {
    id: 399,
    chapterId: 12,
    chapterName: "Labour \u2013 Normal and Abnormal",
    question: "Regarding indications for induction of labour (IOL), which is NOT a recognized indication?",
    options: {
      A: "Prolonged pregnancy (usually offered after 41 completed weeks)",
      B: "Pre-labour rupture of membranes >24 hours at term",
      C: "Pre-eclampsia at term",
      D: "Uncomplicated twin pregnancy at 36 weeks",
      E: "Fetal macrosomia (>90th percentile)"
    },
    answer: "D",
    rationale: "** Twin pregnancy continuing beyond 38 weeks (not 36) is an indication for IOL. Uncomplicated twin pregnancy at 36 weeks is NOT a recognized indication. Other indications include: prolonged pregnancy (after 41 weeks); PROM >24 hours at term; pre-eclampsia at term; diabetes (pre-existing and gestational); intrahepatic cholestasis of pregnancy; fetal macrosomia; unexplained antepartum haemorrhage; iso-immunization; and social reasons (controversial)."
  },
  {
    id: 400,
    chapterId: 12,
    chapterName: "Labour \u2013 Normal and Abnormal",
    question: "Regarding the Bishop score for assessing cervical favourability, which factor is NOT included?",
    options: {
      A: "Dilatation of cervix",
      B: "Consistency of cervix",
      C: "Length of cervical canal",
      D: "Position of cervix",
      E: "Fetal heart rate pattern"
    },
    answer: "E",
    rationale: "** The modified Bishop score includes: dilatation of cervix (0-3 points); consistency of cervix (0-2 points); length of cervical canal (0-3 points); position of cervix (0-2 points); and station of presenting part (0-3 points). Fetal heart rate pattern is NOT part of the Bishop score. A high score (favourable cervix) is associated with easier, shorter induction less likely to fail. A low score (unfavourable cervix) is associated with longer IOL more likely to fail."
  },
  {
    id: 401,
    chapterId: 12,
    chapterName: "Labour \u2013 Normal and Abnormal",
    question: "Regarding methods of induction of labour, which statement is CORRECT?",
    options: {
      A: "Membrane sweeping should only be performed once and is painful for most women",
      B: "Prostaglandin E2 is inserted into the anterior fornix of the vagina",
      C: "The controlled-release prostaglandin pessary is left in place for up to 48 hours",
      D: "Oxytocin has a long half-life and can be given as a single intramuscular injection",
      E: "Mifepristone and misoprostol are used in the UK to induce labour following intrauterine fetal death"
    },
    answer: "E",
    rationale: "** Mifepristone (anti-progesterone) and misoprostol (prostaglandin E1) are used in the UK to induce labour following intrauterine fetal death. Membrane sweeping can be performed more than once and evidence shows it reduces need for formal induction. Prostaglandin E2 is inserted into the POSTERIOR (not anterior) fornix. The controlled-release pessary is left for up to 24 hours (not 48). Oxytocin has a SHORT half-life and is given as intravenous infusion (not IM injection)."
  },
  {
    id: 402,
    chapterId: 12,
    chapterName: "Labour \u2013 Normal and Abnormal",
    question: "Regarding complications of induction of labour, which statement is CORRECT?",
    options: {
      A: "Induced labour is generally less painful than spontaneous labour",
      B: "Uterine hyperstimulation is defined as more than 3 contractions per 10 minutes",
      C: "Terbutaline is a beta-2 agonist used as a tocolytic to treat hyperstimulation",
      D: "Cord prolapse is a risk of ARM when the fetal head is well-engaged in the pelvis",
      E: "The risk of uterine rupture with IOL after previous caesarean is the same as with spontaneous labour"
    },
    answer: "C",
    rationale: "** Terbutaline is a beta-2 agonist used as a tocolytic drug to treat uterine hyperstimulation (most commonly given as subcutaneous injection). Induced labour is generally MORE painful (not less). Hyperstimulation is defined as more than 5 (not 3) contractions per 10 minutes. Cord prolapse is a risk of ARM when the fetal head is HIGH (not well-engaged). The risk of scar rupture increases from 1 in 200 in spontaneous labour to as high as 1 in 50 with IOL. --- ## Section 12.9: Clinical Risk Management"
  },
  {
    id: 403,
    chapterId: 12,
    chapterName: "Labour \u2013 Normal and Abnormal",
    question: "Which of the following is an important element of clinical risk management (CRM) on the labour ward?",
    options: {
      A: "Avoiding documentation of adverse events to prevent litigation",
      B: "Discouraging staff from reporting near-misses to avoid blame",
      C: "Root-cause analysis of adverse events to identify systemic and individual contributors",
      D: "Focusing solely on individual doctor/midwife errors when poor outcomes occur",
      E: "Avoiding clinical audit as it demoralizes staff"
    },
    answer: "C",
    rationale: "** Root-cause analysis is a technique that examines poor outcomes or near-misses in detail, scrutinizing every step of the patient journey to see if the outcome could have been prevented. This assesses both systemic (organizational) and individual contributors. Good documentation is VITAL. Staff should be ENCOURAGED to report near-misses. It is usually the case that a whole series of failings need to occur together (cascade effect) - organizational systems often contribute, and one individual is rarely solely responsible. Clinical audit is an IMPORTANT tool in CRM."
  },
  {
    id: 404,
    chapterId: 12,
    chapterName: "Labour \u2013 Normal and Abnormal",
    question: "Regarding shoulder dystocia and clinical risk management, which statement is CORRECT?",
    options: {
      A: "Shoulder dystocia cannot be predicted and therefore drills are unnecessary",
      B: "Regular staff education and shoulder dystocia drills can limit adverse outcomes",
      C: "Brachial plexus injury is an unavoidable consequence of all shoulder dystocia cases",
      D: "Guidelines and protocols are not helpful as each shoulder dystocia is unique",
      E: "Adverse outcomes from shoulder dystocia rarely lead to litigation"
    },
    answer: "B",
    rationale: "** Regular staff education and the performance of shoulder dystocia 'drills' can limit adverse outcomes including brachial plexus injury, intrapartum asphyxia, and serious perineal trauma. In these drills, the manoeuvres used to safely overcome shoulder dystocia are rehearsed. Shoulder dystocia CAN sometimes be predicted (macrosomia, diabetes, previous shoulder dystocia). Brachial plexus injury is NOT unavoidable - appropriate management can prevent it. Guidelines and protocols are essential tools of CRM. Adverse outcomes from shoulder dystocia frequently lead to litigation."
  },
  {
    id: 405,
    chapterId: 12,
    chapterName: "Labour \u2013 Normal and Abnormal",
    question: "",
    options: {
      A: "Normal labour - continue expectant management with 4-hourly examinations",
      B: "Secondary arrest - perform caesarean section immediately",
      C: "Primary arrest - commence oxytocin augmentation after excluding CPD",
      D: "Prolonged latent phase - send home and review in 24 hours",
      E: "Precipitate labour - prepare for imminent delivery"
    },
    answer: "C",
    rationale: "** This is primary arrest (poor progress in the active first stage). The woman was 4 cm (active phase) and after 8 hours is only 6 cm (<2 cm in 4 hours). The membranes have ruptured spontaneously. The next step is to commence oxytocin augmentation to correct inefficient uterine contractions, after confirming no CPD (head is engaged, no severe moulding/caput). Continuous CTG monitoring is required. Caesarean is not immediately indicated - oxytocin should be tried first. This is not normal labour (progress is too slow), not secondary arrest (progress was never good), not latent phase (she is 4 cm), and not precipitate labour."
  },
  {
    id: 406,
    chapterId: 12,
    chapterName: "Labour \u2013 Normal and Abnormal",
    question: "",
    options: {
      A: "Normal labour - encourage continued pushing for another hour",
      B: "Deep transverse arrest - attempt manual rotation and forceps delivery",
      C: "Cephalopelvic disproportion with obstructed labour - urgent caesarean section",
      D: "Secondary arrest of labour - commence oxytocin augmentation",
      E: "Fetal compromise - perform fetal scalp blood sampling"
    },
    answer: "C",
    rationale: "** This is most likely CPD with obstructed labour. The woman is multiparous (previous caesarean), has been fully dilated and pushing for 3 hours (prolonged second stage), the head is visible but not advancing, and there is severe caput and moulding with malposition (OT). In a multiparous woman with previous caesarean, oxytocin is contraindicated due to risk of uterine rupture. Forceps delivery with OT position and severe moulding is unsafe. Urgent caesarean section is the appropriate management. This is not normal labour (3 hours pushing with no progress), not deep transverse arrest at a safe level for forceps (severe moulding suggests obstruction), and FBS is not indicated when mechanical obstruction is evident."
  },
  {
    id: 407,
    chapterId: 12,
    chapterName: "Labour \u2013 Normal and Abnormal",
    question: "",
    options: {
      A: "Continue observation and repeat vaginal examination in 2 hours",
      B: "Perform fetal scalp blood sampling to assess fetal pH",
      C: "Commence oxytocin augmentation to expedite delivery",
      D: "Prepare for assisted vaginal delivery or caesarean section depending on progress",
      E: "Administer terbutaline to reduce uterine contractions"
    },
    answer: "D",
    rationale: "** With a pathological CTG that persists after addressing reversible causes, immediate delivery is indicated. At 8 cm dilated with the head at station 0, assisted vaginal delivery is not yet possible (head must be at or below ischial spines for forceps/vacuum). Caesarean section is the most appropriate management. FBS is not appropriate when the CTG is pathological and delivery is indicated. Oxytocin is contraindicated with fetal compromise. Terbutaline is used for hyperstimulation, not for fetal compromise. Continuing observation is dangerous with a pathological CTG."
  },
  {
    id: 408,
    chapterId: 12,
    chapterName: "Labour \u2013 Normal and Abnormal",
    question: "",
    options: {
      A: "Normal response to prostaglandin - continue observation",
      B: "Uterine hyperstimulation - stop oxytocin and administer terbutaline",
      C: "Chorioamnionitis - commence broad-spectrum antibiotics",
      D: "Uterine hyperstimulation due to prostaglandin - stop any oxytocin and consider terbutaline",
      E: "Fetal compromise due to post-term pregnancy - emergency caesarean section"
    },
    answer: "D",
    rationale: "** This is likely uterine hyperstimulation secondary to prostaglandin. Contractions at 6 in 10 minutes is excessive (>5 in 10 is hyperstimulation). Management includes stopping any oxytocin infusion (if running) and considering a tocolytic drug such as terbutaline. The CTG abnormalities (tachycardia, reduced variability) are likely due to uterine hyperstimulation causing reduced placental perfusion. This is not a normal response - action is required. Chorioamnionitis would typically present with maternal pyrexia and tachycardia. Emergency caesarean is not immediately indicated - hyperstimulation should be treated first and CTG reassessed."
  },
  {
    id: 409,
    chapterId: 12,
    chapterName: "Labour \u2013 Normal and Abnormal",
    question: "",
    options: {
      A: "Stop insulin as she is in labour and needs less glucose",
      B: "Continue the insulin sliding scale and monitor glucose hourly",
      C: "Give a single bolus of long-acting insulin to cover the labour",
      D: "Switch to oral hypoglycaemic agents for the duration of labour",
      E: "Allow blood glucose to run high to ensure adequate fetal glucose supply"
    },
    answer: "B",
    rationale: "** Women with diabetes requiring insulin should have close monitoring of maternal blood glucose levels in established labour, with an insulin/glucose infusion to maintain normoglycaemia and reduce the risk of neonatal hypoglycaemia. The insulin sliding scale should be continued with hourly (or more frequent) monitoring. Stopping insulin, using oral agents, or allowing hyperglycaemia would increase risks of neonatal hypoglycaemia and other complications. A single bolus of long-acting insulin is inappropriate - an infusion allows titration."
  },
  {
    id: 410,
    chapterId: 12,
    chapterName: "Labour \u2013 Normal and Abnormal",
    question: "",
    options: {
      A: "Stop lamotrigine during labour as it may cause neonatal sedation",
      B: "Continue lamotrigine and ensure anti-epileptic medication is available during labour",
      C: "Switch to intravenous phenytoin for better control during labour",
      D: "Induce general anaesthesia for delivery to prevent seizures",
      E: "Perform caesarean section to avoid the stress of labour triggering seizures"
    },
    answer: "B",
    rationale: "** Anti-epileptic medication should be continued during labour. The risk of seizures in labour is low but seizures are more likely with poorly controlled epilepsy and are aggravated by pain, stress, dehydration, and sleep deprivation. Most women with epilepsy can aim for a vaginal birth. There should be a discussion during pregnancy about impact of AEDs on breastfeeding - concentration of most AEDs in breast milk is negligible and breastfeeding should be encouraged. Stopping medication, switching drugs, or performing caesarean without indication are not appropriate."
  },
  {
    id: 411,
    chapterId: 12,
    chapterName: "Labour \u2013 Normal and Abnormal",
    question: "",
    options: {
      A: "Reassure her that pregnancy is safe with modern management of PH",
      B: "Advise her that vaginal birth is contraindicated and caesarean is mandatory",
      C: "Discuss the high maternal mortality (30-50%) and offer termination of pregnancy",
      D: "Recommend immediate commencement of low-molecular-weight heparin",
      E: "Suggest she continues pregnancy with close outpatient monitoring only"
    },
    answer: "C",
    rationale: "** Women with pulmonary hypertension should have pre-conception counselling and be advised about the very significant risks of pregnancy, including high risk of maternal death (30-50%). Termination of pregnancy should be discussed with women who conceive with PH or who are diagnosed with PH in pregnancy. Reliable contraception should have been recommended. While close MDT monitoring is crucial if she continues, the mortality is so high that termination must be discussed. Vaginal birth is not absolutely contraindicated but delivery must be in a specialist centre with full support."
  },
  {
    id: 412,
    chapterId: 12,
    chapterName: "Labour \u2013 Normal and Abnormal",
    question: "",
    options: {
      A: "Normal physiological response to pregnancy - observation only",
      B: "Urinary tract infection - send MSU and commence oral antibiotics",
      C: "Chorioamnionitis - commence broad-spectrum IV antibiotics and plan delivery",
      D: "Preterm labour - administer tocolytics to delay delivery",
      E: "Viral illness - supportive care and antipyretics"
    },
    answer: "C",
    rationale: "** This is chorioamnionitis (intra-amniotic infection). Features include maternal pyrexia, tachycardia, and fetal tachycardia (>160 bpm). Management includes broad-spectrum intravenous antibiotics and delivery of the baby. Chorioamnionitis is an indication for delivery regardless of gestational age - tocolytics are contraindicated. This is not a normal physiological response or simple viral illness. While UTI should be excluded, the combination of PROM, fever, and fetal tachycardia strongly suggests chorioamnionitis."
  },
  {
    id: 413,
    chapterId: 12,
    chapterName: "Labour \u2013 Normal and Abnormal",
    question: "",
    options: {
      A: "Immediate caesarean section regardless of stage of labour",
      B: "Reassurance that this is normal and continue intermittent auscultation",
      C: "Commence continuous CTG monitoring and inform the obstetric team",
      D: "Perform fetal scalp blood sampling immediately",
      E: "Administer oxygen to the mother and prepare for forceps delivery"
    },
    answer: "C",
    rationale: "** Fresh meconium-stained liquor is an indication for continuous CTG monitoring (Box 12.3). The fetal heart rate is currently normal (140 bpm with normal variability and no decelerations), so immediate delivery is not indicated. However, meconium can indicate fetal compromise and continuous monitoring is necessary. If the CTG becomes abnormal, further action (FBS or delivery) may be needed. Intermittent auscultation is not sufficient with meconium. FBS is not indicated with a normal CTG. Oxygen and forceps preparation are not immediately necessary."
  },
  {
    id: 414,
    chapterId: 12,
    chapterName: "Labour \u2013 Normal and Abnormal",
    question: "",
    options: {
      A: "Perform a routine episiotomy to prevent all perineal tears",
      B: "Encourage rapid pushing to deliver the head quickly before the perineum tears",
      C: "Use a 'hands-on' approach with controlled delivery of the head, encouraging shallow breathing",
      D: "Apply fundal pressure to expedite delivery",
      E: "Perform a mediolateral episiotomy routinely for all nulliparous women"
    },
    answer: "C",
    rationale: "** The 'hands-on' approach involves using the hands to flex the fetal head and guard the perineum as crowning occurs, controlling the speed of delivery to limit maternal soft tissue damage. The woman should be discouraged from bearing down by telling her to take rapid, shallow breaths. Routine episiotomy is not recommended - it should be selective. Rapid pushing increases tear risk. Fundal pressure is not recommended and may cause harm. Mediolateral episiotomy is indicated for specific situations (e.g., instrumental delivery, shoulder dystocia) but not routinely."
  },
  {
    id: 415,
    chapterId: 12,
    chapterName: "Labour \u2013 Normal and Abnormal",
    question: "",
    options: {
      A: "Her cervix is favourable and artificial rupture of membranes can be performed immediately",
      B: "She will need prostaglandin to ripen the cervix before ARM or oxytocin can be used",
      C: "Oxytocin infusion can be started immediately without cervical ripening",
      D: "Membrane sweeping is not possible as she is already past her due date",
      E: "Caesarean section is recommended as her Bishop score indicates induction will fail"
    },
    answer: "B",
    rationale: "** A Bishop score of 3 indicates an unfavourable cervix. Prostaglandin E2 (tablet, gel, or controlled-release pessary) is needed to ripen the cervix before artificial rupture of membranes or oxytocin can be used. A favourable cervix has a Bishop score of 8 or more. Oxytocin requires ruptured membranes. Membrane sweeping can be offered weekly from 40 weeks and may have been offered already. A low Bishop score indicates a longer, more difficult induction but does not mean it will definitely fail - caesarean is not automatically indicated."
  },
  {
    id: 416,
    chapterId: 12,
    chapterName: "Labour \u2013 Normal and Abnormal",
    question: "",
    options: {
      A: "Immune thrombocytopenic purpura - plan caesarean section to avoid fetal trauma",
      B: "Gestational thrombocytopenia - no intervention needed, monitor only",
      C: "Gestational thrombocytopenia - avoid epidural/spinal and plan vaginal delivery with fetal scalp electrode",
      D: "Gestational thrombocytopenia - avoid epidural/spinal and avoid fetal scalp electrode",
      E: "HELLP syndrome - deliver immediately by caesarean section"
    },
    answer: "D",
    rationale: "** Gestational thrombocytopenia is a diagnosis of exclusion (after ruling out autoimmune, APS, pre-eclampsia, HELLP, DIC, TTP, hypersplenism, sepsis, HIV). It typically occurs in later pregnancy with no prior history and normal platelet count at booking. No intervention is needed other than monitoring - it resolves after delivery. There is no association with fetal thrombocytopenia. Epidural/spinal should be avoided if platelet count <80 x 10^9/L. Fetal scalp electrode and instrumental delivery should be avoided if there is any possibility of fetal thrombocytopenia (though gestational thrombocytopenia does not cause fetal thrombocytopenia, caution is advised). HELLP syndrome would present with haemolysis, elevated liver enzymes, and typically in the context of pre-eclampsia."
  },
  {
    id: 417,
    chapterId: 12,
    chapterName: "Labour \u2013 Normal and Abnormal",
    question: "",
    options: {
      A: "Routine anomaly scan only - no additional surveillance needed",
      B: "Serial growth scans from 28 weeks only",
      C: "Echocardiography at 18-24 weeks to detect congenital heart block",
      D: "Amniocentesis for fetal karyotyping",
      E: "Fetal blood sampling to assess platelet count"
    },
    answer: "C",
    rationale: "** Women with SLE and anti-Ro/La antibodies (30% of mothers with SLE) have a risk of congenital heart block in the fetus (around 2%). This usually appears in utero at 18-20 weeks' gestation, is permanent, difficult to treat, and associated with 20% perinatal mortality. Echocardiography at 18-24 weeks is essential to detect this. Serial growth scans are also indicated for SLE pregnancies due to risk of FGR, but the specific surveillance for anti-Ro/La is echocardiography. Routine anomaly scan alone is insufficient. Amniocentesis and fetal blood sampling are not indicated for this indication."
  },
  {
    id: 418,
    chapterId: 12,
    chapterName: "Labour \u2013 Normal and Abnormal",
    question: "",
    options: {
      A: "Stop all blood transfusions to avoid iron overload",
      B: "Continue transfusions and monitor for iron overload; consider iron chelation in second half",
      C: "Switch to oral iron supplements instead of transfusions",
      D: "Perform chorionic villus sampling to determine fetal thalassaemia status",
      E: "Plan for early delivery at 32 weeks to reduce transfusion requirements"
    },
    answer: "B",
    rationale: "** Women with beta-thalassaemia major may need regular blood transfusions during pregnancy, which can lead to iron overload causing problems with liver, heart, lungs, pancreas, and pituitary. Iron chelation can be given by injection in the second half of pregnancy. Stopping transfusions would cause severe anaemia. Oral iron supplements are insufficient. Partner screening for thalassaemia should have been offered, and if both are carriers, genetic counselling about risk of beta-thalassaemia major (1 in 4) would have been given. Early delivery at 32 weeks is not indicated unless there are other complications."
  },
  {
    id: 419,
    chapterId: 12,
    chapterName: "Labour \u2013 Normal and Abnormal",
    question: "",
    options: {
      A: "Continue pushing for another hour as this is normal for a nulliparous woman",
      B: "Perform ventouse delivery in the labour room",
      C: "Transfer to theatre for trial of instrumental delivery or caesarean section",
      D: "Commence oxytocin augmentation to strengthen contractions",
      E: "Perform episiotomy to allow the head to deliver"
    },
    answer: "C",
    rationale: "** This woman has a prolonged second stage (2 hours pushing, nulliparous) with signs of fetal compromise (late decelerations). She needs to be transferred to theatre for a trial of instrumental delivery (forceps or vacuum) if the head is sufficiently low, or caesarean section if not. Instrumental delivery should only be performed in theatre when there is fetal compromise in case it fails and caesarean is needed. Ventouse in the labour room is unsafe with fetal compromise. Oxytocin is contraindicated with fetal compromise. Episiotomy alone will not solve the problem if the head is not crowning. Continuing to push with late decelerations risks fetal hypoxia."
  },
  {
    id: 420,
    chapterId: 12,
    chapterName: "Labour \u2013 Normal and Abnormal",
    question: "",
    options: {
      A: "Fetal hydrops from parvovirus B19 infection - check maternal IgM/IgG and middle cerebral artery Doppler",
      B: "Fetal hydrops from CMV infection - perform amniocentesis for CMV PCR",
      C: "Fetal anaemia from Rh sensitization - check maternal antibody titre",
      D: "Normal variant - reassure and repeat scan in 4 weeks",
      E: "Fetal cardiac anomaly - refer for fetal echocardiography"
    },
    answer: "A",
    rationale: "** This is a classic presentation of parvovirus B19 infection (slapped cheek syndrome). The woman is a teacher (works with young children - risk factor). Contact 6 weeks ago, now presenting at 28 weeks with fetal ascites (hydrops). Parvovirus B19 can cause fetal aplastic anaemia leading to hydrops, most vulnerable in the second trimester. Management includes: maternal blood test confirming IgM and/or new IgG antibodies; amniotic fluid PCR for parvovirus; middle cerebral artery Doppler to assess for fetal anaemia; and intrauterine blood transfusion if confirmed anaemic. CMV is less likely given the history of slapped cheek. Rh sensitization would have been detected earlier. This is not a normal variant."
  },
  {
    id: 421,
    chapterId: 12,
    chapterName: "Labour \u2013 Normal and Abnormal",
    question: "",
    options: {
      A: "Elective caesarean section is mandatory for all HIV-positive women",
      B: "Vaginal delivery is appropriate with avoidance of invasive procedures",
      C: "Vaginal delivery is appropriate with routine use of fetal scalp electrode and fetal blood sampling",
      D: "Caesarean section is indicated because viral load >50 copies/mL",
      E: "Immediate intravenous azidothymidine is required for all vaginal deliveries"
    },
    answer: "B",
    rationale: "** A planned vaginal delivery is an option for individuals with viral load below 50 copies/mL at 36 weeks. With a viral load of 200 copies/mL, this is borderline - some guidelines would recommend caesarean if >400 copies/mL, but <50 is the threshold for vaginal delivery. However, with 200 copies/mL, vaginal delivery may still be considered with avoidance of invasive procedures (amniotomy, fetal scalp electrodes, fetal blood sampling, instrumental delivery). Recent evidence shows that women with undetectable viral load (<50) are not at increased risk from these interventions, but with 200 copies/mL, avoidance is prudent. IV azidothymidine is for very high viral load (>1000 copies/mL) undergoing caesarean or with spontaneous rupture of membranes."
  },
  {
    id: 422,
    chapterId: 12,
    chapterName: "Labour \u2013 Normal and Abnormal",
    question: "",
    options: {
      A: "Stop hydroxycarbamide immediately and avoid all blood transfusions",
      B: "Continue hydroxycarbamide throughout pregnancy as it is safe",
      C: "Stop hydroxycarbamide, continue antibiotic prophylaxis, and take low-dose aspirin 150 mg from 12-36 weeks",
      D: "Avoid low-dose aspirin as it increases bleeding risk in SCD",
      E: "Plan for elective caesarean section at 36 weeks to avoid labour complications"
    },
    answer: "C",
    rationale: "** Pregnant women with SCD should: stop hydroxycarbamide in early pregnancy (it is teratogenic); continue antibiotic prophylaxis; take low-dose aspirin 150 mg daily from 12 to 36 weeks; take high-dose folate 5 mg daily; have regular growth scans; and consider antenatal thromboprophylaxis with low threshold. Daily heparin injections after birth for 6 weeks are advised. Blood transfusions are not routinely given but can be if necessary. Mode of delivery should be vaginal unless obstetric indications for caesarean. Partner should be screened for SCD/trait status."
  },
  {
    id: 423,
    chapterId: 12,
    chapterName: "Labour \u2013 Normal and Abnormal",
    question: "",
    options: {
      A: "Neonatal hypoglycaemia - give intravenous dextrose immediately",
      B: "Neonatal sepsis secondary to GBS - resuscitate and commence broad-spectrum IV antibiotics",
      C: "Congenital heart disease - arrange urgent echocardiography",
      D: "Birth asphyxia due to prolonged labour - therapeutic hypothermia",
      E: "Meconium aspiration syndrome - suction and ventilate"
    },
    answer: "B",
    rationale: "** This is a classic presentation of early-onset GBS sepsis. Risk factors include: prolonged rupture of membranes (>18 hours, here 28 hours); prematurity (<37 weeks, here 36 weeks); maternal pyrexia in labour (>38 degrees C); and prolonged labour. The baby's acute deterioration (dusky episodes, unresponsive) is consistent with the aggressive nature of GBS infection. Immediate management includes resuscitation (ABC), blood cultures before antibiotics, and broad-spectrum IV antibiotics covering GBS and other common pathogens. CSF cultures should be considered. This is not hypoglycaemia (would present differently), congenital heart disease (would not present so acutely after birth), or meconium aspiration (no mention of meconium)."
  },
  {
    id: 424,
    chapterId: 12,
    chapterName: "Labour \u2013 Normal and Abnormal",
    question: "",
    options: {
      A: "Acute placental abruption - emergency caesarean section",
      B: "Uterine rupture - immediate laparotomy and delivery",
      C: "Fetal head compression - expedite vaginal delivery with forceps",
      D: "Maternal vasovagal episode - place in left lateral position and administer oxygen",
      E: "Cord prolapse - perform immediate caesarean section"
    },
    answer: "B",
    rationale: "** This is classic uterine rupture in a woman with previous caesarean section attempting VBAC. Signs include: severe abdominal pain (often between contractions); fetal bradycardia; cessation of contractions; uterine tenderness; and sometimes vaginal bleeding or haematuria. This is a life-threatening emergency requiring immediate laparotomy, delivery of the baby, and repair of the uterus (possibly hysterectomy if bleeding cannot be controlled). Placental abruption would typically present with vaginal bleeding and a woody-hard uterus. Cord prolapse would present with sudden fetal bradycardia but not abdominal pain or cessation of contractions."
  },
  {
    id: 425,
    chapterId: 12,
    chapterName: "Labour \u2013 Normal and Abnormal",
    question: "",
    options: {
      A: "Internal rotation",
      B: "Restitution",
      C: "Extension",
      D: "External rotation",
      E: "Flexion"
    },
    answer: "B",
    rationale: "** Restitution is the slight rotation of the occiput through one-eighth of a circle that occurs when the head is delivering - the occiput aligns itself with the shoulders which have entered the pelvis in the oblique position. This is followed by external rotation (a further one-eighth rotation to the transverse position as the shoulders rotate into the AP plane). Internal rotation occurs earlier in labour (in the mid-pelvis). Extension is the movement that delivers the head under the symphysis pubis. Flexion occurs earlier as the head descends into the mid-pelvis. --- ## SUMMARY: KEY LEARNING POINTS ACROSS CHAPTERS 10-12 ### Chapter 10 Key Points: - Women with medical conditions should be offered pre-pregnancy counselling by an experienced MDT - Cardiac disease is the most common cause of indirect maternal death - Pulmonary hypertension has maternal mortality of 30-50% in pregnancy - Pre-existing diabetes increases maternal and fetal morbidity; good glycaemic control reduces risks - Sodium valproate is contraindicated in pregnancy unless essential; lamotrigine/levetiracetam are safer - SCD increases risk of crises, pre-eclampsia, and FGR; low-dose aspirin and heparin are recommended ### Chapter 11 Key Points: - Screening for infections (HIV, hepatitis B) reduces burden of long-term viral conditions - Active management of HIV can reduce vertical transmission to <0.5% - GBS is the most common cause of severe early-onset neonatal infection in high-income countries - Intrapartum antibiotic prophylaxis for GBS is 60-80% effective - Most treatments for infections are suitable for use in pregnancy ### Chapter 12 Key Points: - Labour is divided into three stages; progress is monitored with a partogram - The 3Ps (powers, passages, passenger) determine normal vs abnormal labour - Augmentation with oxytocin can correct inefficient contractions but is dangerous in multiparous women with CPD or with uterine scars - Fetal compromise is suspected with thick meconium or abnormal CTG; FBS or delivery may be indicated - Epidural analgesia is the most reliable method of pain relief and does not increase caesarean rates - Clinical risk management includes audit, education, incident reporting, and root-cause analysis --- End of Question Bank - Chapters 10-12 Total Questions: 120 Organized by chapter and section for systematic revision --- # \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550"
  },
  {
    id: 426,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "Which statement about operative delivery is CORRECT?",
    options: {
      A: "Operative delivery includes only caesarean section and forceps",
      B: "Most women achieve spontaneous vaginal birth with intact perineum in high-income settings",
      C: "The most common form of operative intervention is suturing of perineal tear or episiotomy",
      D: "Third and fourth-degree tears are repaired by midwives in the labour room",
      E: "Emergency caesarean section is only performed for maternal indications"
    },
    answer: "C",
    rationale: "** The most common form of operative intervention is suturing of a perineal tear or episiotomy. Operative delivery includes caesarean section, assisted vaginal birth (vacuum/forceps), episiotomy and repair of perineal tears. Most women in high-income settings do NOT achieve spontaneous vaginal birth with intact perineum (barely half). Complex tears (3rd/4th degree) require repair in theatre by an obstetrician. Emergency CS is performed for both maternal and fetal indications."
  },
  {
    id: 427,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "What percentage of women who have a vaginal birth will have some degree of perineal trauma?",
    options: {
      A: "30-40%",
      B: "50-60%",
      C: "65-75%",
      D: "85%",
      E: "95%"
    },
    answer: "D",
    rationale: "** Eighty-five per cent (85%) of women who have a vaginal birth will have some degree of perineal trauma, and 60-70% will require suturing."
  },
  {
    id: 428,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "Operative intervention should be performed when:",
    options: {
      A: "The patient requests it regardless of clinical indication",
      B: "The benefits outweigh the potential risks after careful consideration",
      C: "It is faster than waiting for spontaneous delivery",
      D: "It is standard protocol for all nulliparous women",
      E: "The midwife is not available to supervise labour"
    },
    answer: "B",
    rationale: "** Operative intervention should be performed only when the benefits outweigh the potential risks. The needs of mother and baby should be balanced with careful consideration of short-term and long-term consequences. --- # SECTION 13.2: PERINEAL REPAIR"
  },
  {
    id: 429,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "",
    options: {
      A: "Skin or vaginal epithelium only",
      B: "Perineal muscles",
      C: "Anal sphincter complex",
      D: "Rectal mucosa",
      E: "Internal anal sphincter"
    },
    answer: "A",
    rationale: "** First-degree tears are lacerations of the skin or vaginal epithelium only. Second-degree involves perineal muscles. Third-degree involves anal sphincter. Fourth-degree extends into rectal mucosa."
  },
  {
    id: 430,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "",
    options: {
      A: "Skin only",
      B: "Perineal muscles and includes episiotomy",
      C: "External anal sphincter",
      D: "Internal anal sphincter",
      E: "Rectal mucosa"
    },
    answer: "B",
    rationale: "** Second-degree tears involve perineal muscles and include episiotomy. They do not involve the anal sphincter complex (which defines third-degree)."
  },
  {
    id: 431,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "",
    options: {
      A: "Less than 50% of external anal sphincter torn",
      B: "More than 50% of external anal sphincter torn",
      C: "Complete disruption of external sphincter",
      D: "Involvement of internal anal sphincter",
      E: "Extension into rectal mucosa"
    },
    answer: "A",
    rationale: "** 3a: less than 50% of external anal sphincter torn. 3b: more than 50%. 3c: internal anal sphincter and/or complete disruption of external sphincter."
  },
  {
    id: 432,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "",
    options: {
      A: "Less than 50% of external anal sphincter torn",
      B: "More than 50% of external anal sphincter torn",
      C: "Complete disruption of external sphincter",
      D: "Involvement of internal anal sphincter",
      E: "Extension into rectal mucosa"
    },
    answer: "B",
    rationale: "** 3b: more than 50% of the external anal sphincter is torn."
  },
  {
    id: 433,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "",
    options: {
      A: "Less than 50% of external anal sphincter torn",
      B: "More than 50% of external anal sphincter torn",
      C: "Internal anal sphincter and/or complete disruption of external sphincter",
      D: "Extension into rectal mucosa only",
      E: "Involvement of vaginal mucosa"
    },
    answer: "C",
    rationale: "** 3c: the tear involves the internal anal sphincter and/or complete disruption of the external sphincter."
  },
  {
    id: 434,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "",
    options: {
      A: "Skin only",
      B: "Perineal muscles only",
      C: "External anal sphincter only",
      D: "Anal sphincter complex extending into rectal mucosa",
      E: "Vaginal mucosa only"
    },
    answer: "D",
    rationale: "** Fourth-degree tears involve the anal sphincter complex extending into the rectal mucosa."
  },
  {
    id: 435,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "Third and fourth-degree tears are grouped together and termed:",
    options: {
      A: "OASI (Obstetric Anal Sphincter Injuries)",
      B: "OASIS (Obstetric Anal Sphincter Injury Syndrome)",
      C: "PASS (Perineal Anal Sphincter Score)",
      D: "PAI (Perineal Anal Injury)",
      E: "Sphincter tear complex"
    },
    answer: "A",
    rationale: "** Third and fourth-degree tears are grouped together and termed obstetric anal sphincter injuries (OASIs)."
  },
  {
    id: 436,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "The reported incidence of OASIs in nulliparous individuals is approximately:",
    options: {
      A: "0.5%",
      B: "1%",
      C: "3%",
      D: "8%",
      E: "15%"
    },
    answer: "C",
    rationale: "** OASIs are reported in approximately 3% of nulliparous and 0.5% of multiparous individuals."
  },
  {
    id: 437,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "External anal sphincter incompetence typically causes:",
    options: {
      A: "Faecal urgency",
      B: "Faecal incontinence without urgency",
      C: "Urinary incontinence",
      D: "Dyspareunia",
      E: "Rectal prolapse"
    },
    answer: "A",
    rationale: "** External anal sphincter incompetence causes faecal urgency, whereas internal anal sphincter incompetence causes faecal incontinence."
  },
  {
    id: 438,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "Internal anal sphincter incompetence typically causes:",
    options: {
      A: "Faecal urgency",
      B: "Faecal incontinence without urgency",
      C: "Urinary incontinence",
      D: "Dyspareunia",
      E: "Rectal prolapse"
    },
    answer: "B",
    rationale: "** Internal anal sphincter incompetence causes faecal incontinence without urgency, while external sphincter incompetence causes faecal urgency."
  },
  {
    id: 439,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "Which of the following is NOT a risk factor for perineal tears?",
    options: {
      A: "Prolonged labour",
      B: "Occipito-anterior position",
      C: "Macrosomia",
      D: "Forceps delivery",
      E: "Occipito-posterior position"
    },
    answer: "B",
    rationale: "** Occipito-posterior (not anterior) is a risk factor. Other risk factors include prolonged labour, big babies, malposition, and instrumental delivery."
  },
  {
    id: 440,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "During perineal repair, the first step in the systematic approach is to:",
    options: {
      A: "Infiltrate with local anaesthetic",
      B: "Place a tampon high in the vagina",
      C: "Provide explanation and obtain verbal consent",
      D: "Suture the skin layer",
      E: "Perform a rectal examination"
    },
    answer: "C",
    rationale: "** An explanation should be provided to the mother and verbal consent should be documented before commencing repair. For complex tears requiring theatre, written consent is needed."
  },
  {
    id: 441,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "The vaginal mucosa during perineal repair should be closed using:",
    options: {
      A: "Non-absorbable sutures with a cutting needle",
      B: "Rapidly absorbable suture material on a large round body needle",
      C: "Interrupted mattress sutures",
      D: "Staples",
      E: "Cyanoacrylate tissue adhesive"
    },
    answer: "B",
    rationale: "** The vaginal mucosa is repaired first using rapidly absorbable suture material on a large, round body needle with a continuous stitch."
  },
  {
    id: 442,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "Why is a knot tied above the apex of a perineal tear during repair?",
    options: {
      A: "To reduce bleeding from the apex",
      B: "Because severed vessels retract slightly",
      C: "To provide better cosmetic results",
      D: "To avoid suture breakage",
      E: "To prevent infection"
    },
    answer: "B",
    rationale: "** A knot should be tied above the apex as severed vessels retract slightly, ensuring haemostasis at the apex."
  },
  {
    id: 443,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "Following perineal repair, a rectal examination is performed primarily to:",
    options: {
      A: "Assess faecal continence",
      B: "Confirm the sphincter feels intact and check for inadvertently placed sutures",
      C: "Evaluate perineal pain",
      D: "Measure anal canal tone",
      E: "Assess healing of the wound"
    },
    answer: "B",
    rationale: "** A rectal examination confirms the sphincter feels intact and ensures no sutures have been inadvertently placed through the rectal mucosa. If sutures are felt in the rectum, they must be removed and replaced."
  },
  {
    id: 444,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "Repair of third and fourth-degree tears should be performed:",
    options: {
      A: "Under local anaesthetic infiltration in the labour room",
      B: "Under regional or general anaesthetic in an operating theatre",
      C: "By a midwife with specialist training",
      D: "Without anaesthetic to assess sphincter tone",
      E: "Using only interrupted sutures"
    },
    answer: "B",
    rationale: "** Repair of third/fourth-degree tears requires regional or general anaesthetic as local infiltration does not allow adequate sphincter relaxation. It should be performed or directly supervised by a trained practitioner with good lighting and an assistant."
  },
  {
    id: 445,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "Which structure should be repaired FIRST in a fourth-degree tear?",
    options: {
      A: "External anal sphincter",
      B: "Perineal skin",
      C: "Rectal mucosa and/or internal anal sphincter",
      D: "Vaginal mucosa",
      E: "Perineal muscles"
    },
    answer: "C",
    rationale: "** Repair of the rectal mucosa and/or internal anal sphincter should be performed first, followed by the torn external sphincter, then the remainder of the perineal repair."
  },
  {
    id: 446,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "Current evidence regarding end-to-end versus overlap repair of the external anal sphincter suggests:",
    options: {
      A: "Overlap repair is significantly superior",
      B: "End-to-end repair is significantly superior",
      C: "Outcomes are similar with both methods",
      D: "Overlap repair should only be used for 3c tears",
      E: "End-to-end repair is contraindicated in 3b tears"
    },
    answer: "C",
    rationale: "** Current evidence suggests that the outcome is similar with both end-to-end and overlap techniques. Some surgeons opt for end-to-end, others use overlap."
  },
  {
    id: 447,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "Which of the following is recommended aftercare for OASI?",
    options: {
      A: "Constipating agents for 5-10 days",
      B: "Lactulose and a bulk agent for 5-10 days",
      C: "Immediate discharge after first bowel motion",
      D: "Avoidance of antibiotics",
      E: "No follow-up required"
    },
    answer: "B",
    rationale: "** Lactulose (laxative) and a bulk agent such as ispaghula husk are recommended for 5-10 days. An oral broad-spectrum antibiotic should be prescribed for 5-7 days."
  },
  {
    id: 448,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "How long should a woman with a third-degree tear remain in hospital?",
    options: {
      A: "Until she can walk comfortably",
      B: "Until she has had a first bowel motion",
      C: "For exactly 24 hours",
      D: "For 6 weeks",
      E: "Until antibiotics are completed"
    },
    answer: "B",
    rationale: "** The woman should remain in hospital until she has had a first bowel motion."
  },
  {
    id: 449,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "At what interval should a full evaluation of symptoms occur after OASI repair?",
    options: {
      A: "2 weeks",
      B: "6-12 weeks",
      C: "6 months",
      D: "1 year",
      E: "Only if symptoms develop"
    },
    answer: "B",
    rationale: "** At 6-12 weeks, a full evaluation of the degree of symptoms should take place, including careful questioning regarding urinary and faecal symptoms."
  },
  {
    id: 450,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "What is the risk of recurrence of OASI in a future pregnancy for asymptomatic women?",
    options: {
      A: "1-2%",
      B: "6-8%",
      C: "15-20%",
      D: "25-30%",
      E: "50%"
    },
    answer: "B",
    rationale: "** Asymptomatic women should be advised that the risk of recurrence in a future pregnancy is 6-8%, and that vaginal birth is safely achievable."
  },
  {
    id: 451,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "Which investigation is appropriate for symptomatic women following OASI?",
    options: {
      A: "Colonoscopy",
      B: "Endoanal ultrasound and manometry",
      C: "CT pelvis",
      D: "MRI brain",
      E: "Cystoscopy"
    },
    answer: "B",
    rationale: "** Symptomatic women should be offered investigation including endoanal ultrasound and manometry (see Chapter 15)."
  },
  {
    id: 452,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "What mode of delivery should be offered to women with ongoing troublesome symptoms after OASI?",
    options: {
      A: "Forceps-assisted vaginal delivery",
      B: "Vacuum-assisted vaginal delivery",
      C: "Elective caesarean section",
      D: "Home birth",
      E: "Water birth"
    },
    answer: "C",
    rationale: "** Women with ongoing troublesome symptoms should be offered an elective caesarean section for future pregnancies."
  },
  {
    id: 453,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "Perineal massage in the antenatal period may:",
    options: {
      A: "Prevent all perineal tearing",
      B: "Reduce the risk or extent of tearing",
      C: "Increase the risk of infection",
      D: "Cause premature labour",
      E: "Be contraindicated in nulliparous women"
    },
    answer: "B",
    rationale: "** Perineal massage can be performed in the antenatal period and may reduce the risk or extent of tearing."
  },
  {
    id: 454,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "Which intraoperative technique reduces perineal trauma at birth?",
    options: {
      A: "Rapid delivery of the fetal head",
      B: "Use of warm compresses, gentle perineal support and controlled crowning",
      C: "Routine episiotomy for all nulliparous women",
      D: "Supine position without flexion",
      E: "Early pushing at 8cm dilatation"
    },
    answer: "B",
    rationale: "** The use of warm compresses, gentle perineal support and controlled crowning of the fetal head may reduce trauma at the time of birth."
  },
  {
    id: 455,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "When in doubt about the degree of perineal tear, the operator should:",
    options: {
      A: "Classify according to a lower grade to avoid alarming the patient",
      B: "Classify according to a higher rather than a lower grade",
      C: "Wait for senior review before documenting",
      D: "Assume it is a first-degree tear",
      E: "Repair only what is visible"
    },
    answer: "B",
    rationale: "** When in doubt, the operator should classify according to a higher rather than a lower grade. This ensures the woman receives optimal care. --- # SECTION 13.3: EPISIOTOMY"
  },
  {
    id: 456,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "What was the episiotomy rate in the UK by the 1970s?",
    options: {
      A: "10%",
      B: "30%",
      C: "50%",
      D: "90%",
      E: "99%"
    },
    answer: "D",
    rationale: "** By the 1970s, episiotomy rates were as high as 90% before evidence-based restrictive approaches were adopted."
  },
  {
    id: 457,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "The Cochrane systematic review on episiotomy demonstrated that a restrictive approach resulted in:",
    options: {
      A: "More posterior perineal trauma",
      B: "Less need for suturing with no difference in pain or incontinence",
      C: "Increased dyspareunia",
      D: "Higher rates of OASI",
      E: "Increased urinary incontinence"
    },
    answer: "B",
    rationale: "** A restrictive approach resulted in less posterior perineal trauma and less need for suturing with no difference in pain, urinary incontinence or dyspareunia. A routine episiotomy was not protective of more severe tears."
  },
  {
    id: 458,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "What is the current approximate episiotomy rate in the UK?",
    options: {
      A: "5%",
      B: "10%",
      C: "25%",
      D: "50%",
      E: "90%"
    },
    answer: "B",
    rationale: "** In the UK, rates now approximate the WHO recommendation of 10% of spontaneous vaginal births."
  },
  {
    id: 459,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "In which country is the episiotomy rate approximately 99%?",
    options: {
      A: "United Kingdom",
      B: "United States",
      C: "Eastern Europe",
      D: "Australia",
      E: "Sri Lanka"
    },
    answer: "C",
    rationale: "** Rates are 50% in the USA and 99% in Eastern Europe, showing considerable international variation."
  },
  {
    id: 460,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "Episiotomy is most commonly indicated as part of:",
    options: {
      A: "Spontaneous vaginal birth in multiparous women",
      B: "Assisted vaginal birth, particularly forceps and nulliparous births",
      C: "Caesarean section",
      D: "Breech vaginal delivery",
      E: "Twin vaginal delivery"
    },
    answer: "B",
    rationale: "** Episiotomy is more commonly indicated as part of assisted vaginal birth, particularly for forceps and nulliparous births where anal sphincter damage is more likely."
  },
  {
    id: 461,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "",
    options: {
      A: "30\u00b0",
      B: "45\u00b0",
      C: "60\u00b0",
      D: "75\u00b0",
      E: "90\u00b0"
    },
    answer: "C",
    rationale: "** A mediolateral episiotomy at a 60\u00b0 angle to the midline is recommended to avoid extension into the anal sphincter."
  },
  {
    id: 462,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "",
    options: {
      A: "More bleeding",
      B: "Slower healing",
      C: "More pain",
      D: "Increased risk of extension to involve the anal sphincter",
      E: "Higher infection rate"
    },
    answer: "D",
    rationale: "** A midline episiotomy results in less bleeding, quicker healing and less pain; however, there is an increased risk of extension to involve the anal sphincter (OASI)."
  },
  {
    id: 463,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "Where should a mediolateral episiotomy start?",
    options: {
      A: "At the anal verge",
      B: "At the posterior part of the fourchette",
      C: "At the labia majora",
      D: "At the clitoris",
      E: "At the perineal body"
    },
    answer: "B",
    rationale: "** A mediolateral episiotomy should start at the posterior part of the fourchette and be angled at 60\u00b0 away from the anal sphincter."
  },
  {
    id: 464,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "When should an episiotomy be performed during labour?",
    options: {
      A: "During the first stage of labour",
      B: "At 8cm cervical dilatation",
      C: "In the second stage when the perineum is being stretched and birth needs expediting",
      D: "Immediately after delivery of the placenta",
      E: "During the third stage of labour"
    },
    answer: "C",
    rationale: "** An episiotomy is performed in the second stage of labour, usually when the perineum is being stretched and it is deemed necessary, for example when birth needs expediting for fetal bradycardia or pushing is prolonged."
  },
  {
    id: 465,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "Regarding consent for episiotomy, which statement is correct?",
    options: {
      A: "Written consent is always required when the fetal head is crowning",
      B: "The issue should be addressed as part of antenatal education",
      C: "Verbal consent is impossible during labour",
      D: "Consent is not required for emergency procedures",
      E: "Only the partner's consent is needed"
    },
    answer: "B",
    rationale: "** The issue of consent to episiotomy should be addressed as part of antenatal education; when the fetal head is crowning, it is difficult to obtain true informed consent."
  },
  {
    id: 466,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "Short-term complications of perineal trauma or episiotomy include all EXCEPT:",
    options: {
      A: "Pain",
      B: "Infection",
      C: "Haemorrhage",
      D: "Urinary incontinence",
      E: "Dyspareunia"
    },
    answer: "D",
    rationale: "** Short-term complications include pain, infection and haemorrhage. Long-term effects include dyspareunia and incontinence (urinary and faecal)."
  },
  {
    id: 467,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "Which statement about routine episiotomy is TRUE?",
    options: {
      A: "It is protective against OASI",
      B: "It reduces all perineal trauma",
      C: "A restrictive approach is supported by Cochrane evidence",
      D: "It should be performed in 90% of births",
      E: "It prevents all perineal tears"
    },
    answer: "C",
    rationale: "** A Cochrane systematic review demonstrated that a restrictive approach to episiotomy is preferable, resulting in less posterior perineal trauma and less need for suturing."
  },
  {
    id: 468,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "If epidural anaesthesia is in place before episiotomy, what should be done?",
    options: {
      A: "Perform the episiotomy without topping up",
      B: "Top up the epidural with the patient upright for best perineal coverage",
      C: "Convert to general anaesthetic",
      D: "Use only local infiltration",
      E: "Remove the epidural catheter"
    },
    answer: "B",
    rationale: "** If epidural anaesthesia is in place and time allows, it should be topped up prior to cutting with the patient upright to get best coverage of the perineal area."
  },
  {
    id: 469,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "Which is a long-term effect of perineal trauma?",
    options: {
      A: "Immediate wound dehiscence",
      B: "Acute haemorrhage",
      C: "Dyspareunia",
      D: "Acute infection",
      E: "Suture breakage"
    },
    answer: "C",
    rationale: "** Long-term effects include dyspareunia, incontinence of urine and incontinence of flatus or faeces."
  },
  {
    id: 470,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "The morbidities of perineal trauma have the highest risk with:",
    options: {
      A: "First-degree tears",
      B: "Second-degree tears",
      C: "OASI, especially if missed",
      D: "Labial lacerations",
      E: "Uncomplicated episiotomy"
    },
    answer: "C",
    rationale: "** The risks are highest with OASI, especially if an anal sphincter injury has been missed. These morbidities can have a profound impact on women's health, relationships and wellbeing. --- # SECTION 13.4: ASSISTED VAGINAL BIRTH (AVB)"
  },
  {
    id: 471,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "What percentage of deliveries in the UK are assisted with forceps or ventouse?",
    options: {
      A: "5-10%",
      B: "10-15%",
      C: "20-25%",
      D: "30-35%",
      E: "40-50%"
    },
    answer: "B",
    rationale: "** In the UK, between 10% and 15% of deliveries are assisted with forceps or ventouse."
  },
  {
    id: 472,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "The rate of AVB in nulliparous women is as high as:",
    options: {
      A: "10%",
      B: "15%",
      C: "20%",
      D: "30%",
      E: "50%"
    },
    answer: "D",
    rationale: "** The rate in nulliparous women is as high as 30%."
  },
  {
    id: 473,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "Which strategy is NOT mentioned to help lower rates of AVB?",
    options: {
      A: "One-to-one midwifery care",
      B: "Presence of a birth partner",
      C: "Delayed pushing with epidural",
      D: "Routine episiotomy",
      E: "Maternal repositioning"
    },
    answer: "D",
    rationale: "** Strategies to lower AVB rates include one-to-one midwifery, birth partner presence, delayed pushing, oxytocin use, and maternal repositioning. Routine episiotomy is not a strategy to lower AVB rates."
  },
  {
    id: 474,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "The most common fetal indication for AVB is:",
    options: {
      A: "Macrosomia",
      B: "Suspected fetal compromise based on CTG abnormalities",
      C: "Breech presentation",
      D: "Preterm labour",
      E: "Multiple pregnancy"
    },
    answer: "B",
    rationale: "** The most common fetal indication is suspected fetal compromise usually based on cardiotocograph (CTG) abnormalities."
  },
  {
    id: 475,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "The most common maternal indication for AVB is:",
    options: {
      A: "Maternal request",
      B: "Prolonged active second stage of labour",
      C: "Previous caesarean section",
      D: "Pre-eclampsia",
      E: "Placenta praevia"
    },
    answer: "B",
    rationale: "** The most common maternal indication is a prolonged active second stage of labour. The underlying aetiology should be evaluated in terms of the 3Ps (powers, passages, passenger)."
  },
  {
    id: 476,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "For multiparous women without regional anaesthesia, AVB is indicated after how long in the second stage?",
    options: {
      A: "30 minutes",
      B: "1 hour",
      C: "2 hours",
      D: "3 hours",
      E: "4 hours"
    },
    answer: "B",
    rationale: "** Multiparous women: lack of continuing progress for 1 hour (total of active and passive second stage) without regional anaesthesia."
  },
  {
    id: 477,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "For nulliparous women with regional anaesthesia, AVB is indicated after how long in the second stage?",
    options: {
      A: "1 hour",
      B: "2 hours",
      C: "3 hours",
      D: "4 hours",
      E: "5 hours"
    },
    answer: "B",
    rationale: "** Nulliparous women with regional anaesthesia: lack of continuing progress for 2 hours of active second stage (or 3 hours total of active and passive second stage)."
  },
  {
    id: 478,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "Which medical condition is NOT listed as an indication to avoid prolonged pushing or Valsalva?",
    options: {
      A: "Cardiac disease",
      B: "Hypertensive crisis",
      C: "Gestational diabetes",
      D: "Myasthenia gravis",
      E: "Cerebral vascular malformations"
    },
    answer: "C",
    rationale: "** Medical indications include cardiac disease, hypertensive crisis, cerebral vascular disease, uncorrected cerebral vascular malformations, myasthenia gravis, and spinal cord injury. Gestational diabetes is not listed."
  },
  {
    id: 479,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "In the classification of AVB, an 'outlet' procedure is characterized by all EXCEPT:",
    options: {
      A: "Fetal scalp visible without separating the labia",
      B: "Fetal skull has reached the pelvic floor",
      C: "Rotation does not exceed 45\u00b0",
      D: "Leading point of skull at station +2cm",
      E: "None of the above"
    },
    answer: "D",
    rationale: "** Outlet: scalp visible, skull on pelvic floor, rotation \u226445\u00b0. Station +2cm or more but not on pelvic floor describes a 'low' procedure."
  },
  {
    id: 480,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "",
    options: {
      A: "0cm",
      B: "+1cm",
      C: "+2cm or more but not on the pelvic floor",
      D: "+3cm",
      E: "-1cm"
    },
    answer: "C",
    rationale: "** Low: leading point of the skull is at station +2cm or more but not on the pelvic floor."
  },
  {
    id: 481,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "Which classification of AVB is considered NOT appropriate?",
    options: {
      A: "Outlet",
      B: "Low",
      C: "Mid",
      D: "High",
      E: "All are appropriate"
    },
    answer: "D",
    rationale: "** High AVB is not appropriate and therefore not included in the classification (station -1 or above). It is contraindicated."
  },
  {
    id: 482,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "The vacuum should NOT be used in gestations of less than:",
    options: {
      A: "28 completed weeks",
      B: "32 completed weeks",
      C: "34 completed weeks",
      D: "36 completed weeks",
      E: "37 completed weeks"
    },
    answer: "C",
    rationale: "** The vacuum should not be used in gestations of less than 34 completed weeks because of the risk of cephalohaematoma and intracranial haemorrhage."
  },
  {
    id: 483,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "Which is a relative contraindication to vacuum use?",
    options: {
      A: "Gestational age 35-36 weeks",
      B: "Occipito-anterior position",
      C: "Station +2",
      D: "Cervix fully dilated",
      E: "Membranes ruptured"
    },
    answer: "A",
    rationale: "** Vacuum is relatively contraindicated at gestational ages of 35-36 weeks. It is absolutely contraindicated at <34 weeks."
  },
  {
    id: 484,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "Forceps and vacuum extractor deliveries should NOT be performed before:",
    options: {
      A: "6cm cervical dilatation",
      B: "8cm cervical dilatation",
      C: "Full dilatation of the cervix",
      D: "Rupture of membranes",
      E: "Engagement of the head"
    },
    answer: "C",
    rationale: "** Forceps and vacuum extractor deliveries before full dilatation of the cervix are contraindicated."
  },
  {
    id: 485,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "Which safety criterion for AVB requires the head to be zero-fifths palpable or no more than one-fifth palpable abdominally?",
    options: {
      A: "Full abdominal and vaginal examination",
      B: "Preparation of the mother",
      C: "Preparation of staff",
      D: "Aseptic technique",
      E: "Back-up plan"
    },
    answer: "A",
    rationale: "** Full abdominal and vaginal examination criteria include: head fully engaged (zero-fifths palpable) or no more than one-fifth palpable per abdomen."
  },
  {
    id: 486,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "For mid-pelvic rotational delivery, what level of anaesthesia is usually required?",
    options: {
      A: "Local infiltration only",
      B: "Pudendal block",
      C: "Regional block",
      D: "No anaesthesia",
      E: "Entonox"
    },
    answer: "C",
    rationale: "** For mid-pelvic rotational delivery, regional block is usually required; a pudendal block may be appropriate in the context of urgency."
  },
  {
    id: 487,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "Which pelvic shape makes instrumental deliveries more difficult?",
    options: {
      A: "Gynaecoid",
      B: "Android (male/funnel-shaped)",
      C: "Normal",
      D: "Round",
      E: "Symmetrical"
    },
    answer: "B",
    rationale: "** Anthropoid (narrow), android (male/funnel-shaped) or platypelloid (elliptical) pelvises make instrumental deliveries more difficult and may preclude rotational forceps."
  },
  {
    id: 488,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "The RCOG recommends that obstetricians should be competent in:",
    options: {
      A: "Forceps only",
      B: "Vacuum only",
      C: "Both forceps and vacuum",
      D: "Neither forceps nor vacuum",
      E: "Caesarean section only"
    },
    answer: "C",
    rationale: "** RCOG guidelines recommend that obstetricians should be competent and confident in the use of both forceps and vacuum, choosing the most appropriate instrument for individual circumstances."
  },
  {
    id: 489,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "Which instrument is associated with significantly less maternal pelvic floor trauma?",
    options: {
      A: "Forceps",
      B: "Vacuum",
      C: "Both are equal",
      D: "Neither causes trauma",
      E: "Spatula"
    },
    answer: "B",
    rationale: "** The incidence of maternal pelvic floor trauma with vacuum is significantly less than with forceps. OASI is twice as common with forceps (8% vs 3-4%)."
  },
  {
    id: 490,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "OASI is approximately how many times more common with forceps compared to vacuum?",
    options: {
      A: "Equal rates",
      B: "1.5 times",
      C: "2 times",
      D: "3 times",
      E: "5 times"
    },
    answer: "C",
    rationale: "** OASI is twice as common with forceps delivery (8% versus 3-4% with vacuum)."
  },
  {
    id: 491,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "What is the failure rate of vacuum-assisted birth?",
    options: {
      A: "1-5%",
      B: "5-10%",
      C: "10-20%",
      D: "30-40%",
      E: "50%"
    },
    answer: "C",
    rationale: "** Vacuum has a failure rate of 10-20% compared with a failure rate with forceps of 5% or less for similar deliveries."
  },
  {
    id: 492,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "Which neonatal complication is MORE common with vacuum than forceps?",
    options: {
      A: "Facial palsy",
      B: "Cephalohaematoma",
      C: "Skull fracture",
      D: "Lacerations",
      E: "Brachial plexus injury"
    },
    answer: "B",
    rationale: "** Higher incidence of cephalohaematoma and cerebral haemorrhage with vacuum; higher incidence of lacerations and facial palsy with forceps."
  },
  {
    id: 493,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "Which maternal complication is LESS likely with vacuum compared to forceps?",
    options: {
      A: "Significant perineal and vaginal trauma",
      B: "Cephalohaematoma in the baby",
      C: "Failure to achieve vaginal birth",
      D: "Retinal haemorrhage in the baby",
      E: "Maternal worries about the baby"
    },
    answer: "A",
    rationale: "** Vacuum is significantly less likely to be associated with significant maternal perineal and vaginal trauma and severe perineal pain at 24 hours."
  },
  {
    id: 494,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "The 'flexion point' for vacuum cup placement is located:",
    options: {
      A: "At the anterior fontanelle",
      B: "On the sagittal suture 3cm anterior to the posterior fontanelle",
      C: "At the posterior fontanelle",
      D: "6cm anterior to the anterior fontanelle",
      E: "Over the lambdoid suture"
    },
    answer: "B",
    rationale: "** The flexion point is located at the vertex, on the sagittal suture 3cm anterior to the posterior fontanelle and thus 6cm posterior to the anterior fontanelle."
  },
  {
    id: 495,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "The operating vacuum pressure for most devices is between:",
    options: {
      A: "0.2-0.4 kg/cm\u00b2",
      B: "0.4-0.6 kg/cm\u00b2",
      C: "0.6-0.8 kg/cm\u00b2",
      D: "0.8-1.0 kg/cm\u00b2",
      E: "1.0-1.2 kg/cm\u00b2"
    },
    answer: "C",
    rationale: "** The operating vacuum pressure for nearly all types of device is between 0.6 and 0.8 kg/cm\u00b2."
  },
  {
    id: 496,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "How many episodes of 'pop-offs' (breaking suction) should be allowed in a vacuum-assisted birth?",
    options: {
      A: "None",
      B: "No more than one",
      C: "No more than two",
      D: "Up to three",
      E: "Up to five"
    },
    answer: "C",
    rationale: "** The operator should allow no more than two episodes of breaking the suction 'pop-offs' in a vacuum-assisted birth."
  },
  {
    id: 497,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "The maximum time from vacuum application to delivery should ideally be less than:",
    options: {
      A: "5 minutes",
      B: "10 minutes",
      C: "15 minutes",
      D: "20 minutes",
      E: "30 minutes"
    },
    answer: "C",
    rationale: "** The maximum time from application to delivery should ideally be less than 15 minutes."
  },
  {
    id: 498,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "Soft vacuum cups compared to rigid cups are:",
    options: {
      A: "More likely to achieve vaginal delivery",
      B: "Associated with less scalp injury",
      C: "More suitable for occipito-posterior positions",
      D: "Associated with more maternal trauma",
      E: "Better for deliveries with marked caput"
    },
    answer: "B",
    rationale: "** Soft cups are significantly more likely to fail but are associated with less scalp injury. Rigid cups are more suitable for occipito-posterior and difficult positions."
  },
  {
    id: 499,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "Which forceps have a sliding lock to facilitate correction of asynclitism?",
    options: {
      A: "Neville Barnes forceps",
      B: "Simpson forceps",
      C: "Kielland forceps",
      D: "Wrigley's forceps",
      E: "Anderson forceps"
    },
    answer: "C",
    rationale: "** Kielland forceps have a sliding lock to facilitate correction of asynclitism and minimal pelvic curve for rotation."
  },
  {
    id: 500,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "Non-rotational forceps are used when the head is occipito-anterior with deviation of no more than:",
    options: {
      A: "15\u00b0",
      B: "30\u00b0",
      C: "45\u00b0",
      D: "60\u00b0",
      E: "90\u00b0"
    },
    answer: "C",
    rationale: "** Non-rotational forceps are used when the head is occipito-anterior with no more than 45\u00b0 deviation to the left or right."
  },
  {
    id: 501,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "By convention, which blade is inserted first during forceps application?",
    options: {
      A: "Right blade",
      B: "Left blade",
      C: "Posterior blade",
      D: "Anterior blade",
      E: "Either blade can be inserted first"
    },
    answer: "B",
    rationale: "** By convention, the left blade is inserted before the right with the operator's hand protecting the vaginal wall from the blades."
  },
  {
    id: 502,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "Forceps-assisted births should be completed in no more than how many pulls?",
    options: {
      A: "One",
      B: "Two",
      C: "Three",
      D: "Four",
      E: "Five"
    },
    answer: "C",
    rationale: "** Forceps-assisted births should be completed in no more than three pulls."
  },
  {
    id: 503,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "Which is TRUE regarding sequential use of instruments (vacuum then forceps)?",
    options: {
      A: "It is the preferred approach for difficult deliveries",
      B: "Outcomes for babies are worse than if the first instrument is successful",
      C: "It reduces the rate of third-degree tears",
      D: "It is recommended by RCOG for all mid-pelvic deliveries",
      E: "It has no impact on maternal trauma"
    },
    answer: "B",
    rationale: "** Observational studies show outcomes for babies are worse with multiple or sequential use of instruments, and rates of third/fourth-degree tears are higher."
  },
  {
    id: 504,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "If a vacuum fails due to cup detachment and the head is occipito-anterior on the perineum, the next acceptable step is:",
    options: {
      A: "Immediate caesarean section",
      B: "Low-pelvic or lift-out forceps",
      C: "Reapplication of vacuum at higher pressure",
      D: "Waiting for spontaneous delivery",
      E: "Fundal pressure"
    },
    answer: "B",
    rationale: "** If the reason for failure was cup detachment and the head is occipito-anterior and on the perineum, low-pelvic or lift-out forceps is acceptable and likely less traumatic than second-stage caesarean."
  },
  {
    id: 505,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "If there is little or no descent with the first pull of a correctly applied instrument, the likely diagnosis is:",
    options: {
      A: "Incorrect position definition",
      B: "Cephalopelvic disproportion",
      C: "Inadequate analgesia",
      D: "Uterine atony",
      E: "Cord prolapse"
    },
    answer: "B",
    rationale: "** If there is little or no descent with the first pull of a correctly applied instrument with traction in the correct axis, the likely diagnosis is cephalopelvic disproportion and delivery must be by caesarean section."
  },
  {
    id: 506,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "AVBs with a higher chance of failure should be conducted:",
    options: {
      A: "In the delivery room with a midwife only",
      B: "In an operating theatre",
      C: "At home",
      D: "In the antenatal ward",
      E: "In the emergency department"
    },
    answer: "B",
    rationale: "** AVBs with a higher chance of failure (mid-pelvic/rotational) should be conducted in an operating theatre with timely recourse to caesarean section."
  },
  {
    id: 507,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "Which neonatal complication is specifically associated with vacuum use?",
    options: {
      A: "Facial palsy",
      B: "Subgaleal haemorrhage",
      C: "Skull fracture",
      D: "Brachial plexus injury",
      E: "Clavicle fracture"
    },
    answer: "B",
    rationale: "** Rare reports of life-threatening intracranial injuries such as subgaleal haemorrhage are associated with vacuum use. Cephalohaematoma is also more common."
  },
  {
    id: 508,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "Postpartum haemorrhage is most common in which group?",
    options: {
      A: "Spontaneous vaginal delivery",
      B: "Women needing AVB",
      C: "Women delivered by caesarean section in the second stage",
      D: "Women with water births",
      E: "Multiparous women with rapid labour"
    },
    answer: "C",
    rationale: "** PPH is more common in women needing AVB than in spontaneous delivery, but less common than in women delivered by caesarean section in the second stage."
  },
  {
    id: 509,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "The risk of fetal trauma correlates with all of the following EXCEPT:",
    options: {
      A: "Duration of the procedure",
      B: "Station of the fetal head",
      C: "Need for rotation",
      D: "Maternal parity",
      E: "Condition of the fetus prior to AVB"
    },
    answer: "D",
    rationale: "** Risks correlate with duration, station, need for rotation, and fetal condition prior to AVB, but not specifically with maternal parity."
  },
  {
    id: 510,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "Which statement about episiotomy at AVB is correct?",
    options: {
      A: "Routine episiotomy is protective against OASI",
      B: "Most obstetricians cut an episiotomy routinely for forceps especially in nulliparous births",
      C: "Episiotomy is never needed for vacuum",
      D: "Episiotomy should be avoided in all AVBs",
      E: "Routine episiotomy reduces all perineal trauma"
    },
    answer: "B",
    rationale: "** In practice, most obstetricians cut an episiotomy routinely for forceps-assisted delivery especially in nulliparous births where anal sphincter damage is more likely. In parous women, particularly those requiring vacuum, an episiotomy may not be necessary."
  },
  {
    id: 511,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "What percentage of women who had a second-stage caesarean section go on to have a repeat caesarean in the next birth?",
    options: {
      A: "10%",
      B: "30%",
      C: "50%",
      D: "70%",
      E: "90%"
    },
    answer: "D",
    rationale: "** Almost 70% of women who had a second-stage caesarean section go on to have a repeat caesarean section in the next birth, compared with only 10% after successful AVB."
  },
  {
    id: 512,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "Which is TRUE about babies delivered by caesarean section in the second stage compared to AVB?",
    options: {
      A: "More likely to have trauma",
      B: "More likely to require admission to neonatal unit",
      C: "Less likely to have low Apgar scores",
      D: "More likely to have cephalohaematoma",
      E: "Less likely to have respiratory problems"
    },
    answer: "B",
    rationale: "** Babies delivered by caesarean section in the second stage were less likely to have trauma but more likely to require admission to the neonatal unit than those delivered by AVB."
  },
  {
    id: 513,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "The bladder should be emptied before AVB because:",
    options: {
      A: "It reduces the risk of infection",
      B: "It improves the view and allows correct placement of the instrument",
      C: "It prevents uterine atony",
      D: "It is required for regional anaesthesia",
      E: "It speeds up the second stage"
    },
    answer: "B",
    rationale: "** The bladder should be emptied with a catheter to avoid obstruction and allow proper assessment and instrument placement."
  },
  {
    id: 514,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "Which is an essential part of contingency planning for AVB?",
    options: {
      A: "Having a neonatologist present for all deliveries",
      B: "Considering the risk of shoulder dystocia and postpartum haemorrhage",
      C: "Performing routine episiotomy",
      D: "Using prophylactic antibiotics for all AVBs",
      E: "Administering magnesium sulphate"
    },
    answer: "B",
    rationale: "** With any difficult AVB, the risk of shoulder dystocia after delivery of the head and potential for PPH should be considered. The operator must anticipate and manage complications."
  },
  {
    id: 515,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "Which statement about the Chamberlen family is TRUE?",
    options: {
      A: "They were French obstetricians",
      B: "They developed the modern vacuum extractor",
      C: "They were a Huguenot family practising in England who developed modern obstetric forceps",
      D: "They published the first textbook on caesarean section",
      E: "They pioneered the use of chloroform in childbirth"
    },
    answer: "C",
    rationale: "** The Chamberlens, a Huguenot family practising in England, dramatically changed the role of assisted delivery by developing modern obstetric forceps. They kept their secret for over a century. --- # SECTION 13.5: CAESAREAN SECTION"
  },
  {
    id: 516,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "What percentage of babies in high-income countries are now delivered by caesarean section?",
    options: {
      A: "10-15%",
      B: "15-20%",
      C: "25-35%",
      D: "40-50%",
      E: "60-70%"
    },
    answer: "C",
    rationale: "** In the UK and other high-income countries, between 25% and 35% of all babies are now delivered by caesarean section."
  },
  {
    id: 517,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "The WHO consensus conference in 1985 concluded that there were no health benefits above a caesarean section rate of:",
    options: {
      A: "5-10%",
      B: "10-15%",
      C: "15-19%",
      D: "20-25%",
      E: "30%"
    },
    answer: "B",
    rationale: "** The 1985 WHO conference concluded there were no health benefits above a caesarean section rate of 10-15%. More recently it has been suggested there is benefit up to 19%."
  },
  {
    id: 518,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "Which of the following is NOT one of the four major indications for caesarean section accounting for >70% of operations?",
    options: {
      A: "Previous caesarean section",
      B: "Malpresentation (mainly breech)",
      C: "Failure to progress in labour",
      D: "Suspected fetal compromise in labour",
      E: "Placental abruption"
    },
    answer: "E",
    rationale: "** The four major indications are: previous caesarean section, malpresentation, failure to progress, and suspected fetal compromise. Other indications like placental abruption are less common."
  },
  {
    id: 519,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "Tokophobia refers to:",
    options: {
      A: "Fear of surgery",
      B: "Irrational fear of childbirth",
      C: "Fear of needles",
      D: "Fear of hospitals",
      E: "Fear of blood"
    },
    answer: "B",
    rationale: "** Tokophobia describes an irrational fear of childbirth that can be very incapacitating for the woman. Maternal requests for caesarean section need to be differentiated."
  },
  {
    id: 520,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "Category 1 emergency caesarean section is defined as:",
    options: {
      A: "Requires early delivery",
      B: "At a time to suit the woman and maternity services",
      C: "Immediate threat to the life of the woman or the fetus",
      D: "Maternal or fetal compromise not immediately life-threatening",
      E: "Planned elective procedure"
    },
    answer: "C",
    rationale: "** Category 1: immediate threat to the life of the woman or the fetus. Category 2: compromise not immediately life-threatening. Category 3: requires early delivery. Category 4: at a time to suit."
  },
  {
    id: 521,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "",
    options: {
      A: "Any emergency caesarean before labour",
      B: "A procedure planned ahead of time, distinct from elective and emergency",
      C: "Only procedures booked for maternal request",
      D: "Category 4 emergencies only",
      E: "Caesarean sections performed at night"
    },
    answer: "B",
    rationale: "** Scheduled caesarean section is used for procedures planned ahead of time, overcoming confusion between elective and emergency caesarean section prior to labour."
  },
  {
    id: 522,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "Most scheduled caesarean sections are performed under:",
    options: {
      A: "General anaesthesia",
      B: "Spinal anaesthesia",
      C: "Local anaesthesia",
      D: "No anaesthesia",
      E: "Entonox only"
    },
    answer: "B",
    rationale: "** Most scheduled caesarean sections are performed under spinal anaesthesia with the mother awake and the partner present."
  },
  {
    id: 523,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "",
    options: {
      A: "Improve surgical access",
      B: "Minimize aorto-caval compression and reduce hypotension",
      C: "Prevent aspiration",
      D: "Facilitate epidural placement",
      E: "Reduce bleeding from the uterus"
    },
    answer: "B",
    rationale: "** A left lateral tilt minimizes aorto-caval compression and reduces the incidence of hypotension and diminished placental perfusion."
  },
  {
    id: 524,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "The Pfannenstiel incision is:",
    options: {
      A: "A vertical midline incision",
      B: "A transverse curvilinear incision two fingerbreadths above the symphysis pubis",
      C: "A transverse incision at the umbilicus",
      D: "A subcostal incision",
      E: "A paramedian incision"
    },
    answer: "B",
    rationale: "** The Pfannenstiel incision is a transverse curvilinear incision two fingerbreadths above the symphysis pubis extending from and to points lateral to the lateral margins of the rectus muscles."
  },
  {
    id: 525,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "",
    options: {
      A: "Extreme maternal obesity",
      B: "Suspicion of other intra-abdominal pathology",
      C: "Need for access to the uterine fundus",
      D: "Lower uterine segment caesarean section",
      E: "Classical caesarean section"
    },
    answer: "D",
    rationale: "** A vertical incision is indicated for extreme obesity, other intra-abdominal pathology, need for fundal access, or classical caesarean section. Lower segment caesarean section typically uses a transverse (Pfannenstiel) incision."
  },
  {
    id: 526,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "Lower uterine segment transverse incision is used in what percentage of caesarean deliveries?",
    options: {
      A: "50%",
      B: "75%",
      C: "85%",
      D: "Over 95%",
      E: "100%"
    },
    answer: "D",
    rationale: "** A lower uterine segment transverse incision is used in over 95% of caesarean deliveries due to ease of repair, reduced blood loss, and low incidence of dehiscence."
  },
  {
    id: 527,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "Which is an indication for classical caesarean section?",
    options: {
      A: "Normal lower uterine segment",
      B: "Placenta praevia with lower segment obscured by fibroids",
      C: "Routine elective caesarean",
      D: "Previous lower segment caesarean",
      E: "Normal vertex presentation"
    },
    answer: "B",
    rationale: "** Indications for classical caesarean include lower segment obscured by fibroids, dense adhesions, placenta praevia, transverse lie with back down, conjoined twins, or carcinoma of the cervix."
  },
  {
    id: 528,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "Once the uterus is incised during caesarean section, what oxytocic agent is typically administered?",
    options: {
      A: "10 units ergometrine intramuscularly",
      B: "5 IU Syntocinon intravenously",
      C: "800 mcg misoprostol rectally",
      D: "40 units oxytocin in infusion",
      E: "Carboprost 0.25mg intramuscularly"
    },
    answer: "B",
    rationale: "** Once the fetus is delivered, 5 IU Syntocinon intravenously is administered to aid uterine contraction and placental separation."
  },
  {
    id: 529,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "Manual removal of the placenta during caesarean section:",
    options: {
      A: "Is the preferred method",
      B: "Significantly increases intraoperative blood loss",
      C: "Reduces infection risk",
      D: "Is faster than controlled cord traction",
      E: "Should be routine practice"
    },
    answer: "B",
    rationale: "** Manual removal significantly increases the intraoperative blood loss and post-operative infectious morbidity. Controlled cord traction is preferred."
  },
  {
    id: 530,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "Peritoneal closure during caesarean section is:",
    options: {
      A: "Mandatory according to RCOG guidelines",
      B: "Not routine and depends on the operator's preference",
      C: "Always performed with non-absorbable sutures",
      D: "Contraindicated in all cases",
      E: "Required only in emergency caesarean sections"
    },
    answer: "B",
    rationale: "** Peritoneal closure is not routine and depends on the operator's preference."
  },
  {
    id: 531,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "The case fatality rate for all caesarean sections is how many times that for vaginal birth?",
    options: {
      A: "Equal",
      B: "Two times",
      C: "Three times",
      D: "Five times",
      E: "Ten times"
    },
    answer: "D",
    rationale: "** The case fatality rate for all caesarean sections is five times that for vaginal birth, although for elective caesarean section the difference does not reach statistical significance."
  },
  {
    id: 532,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "The most common indication for caesarean hysterectomy is:",
    options: {
      A: "Placenta praevia",
      B: "Uncontrollable maternal haemorrhage",
      C: "Uterine rupture",
      D: "Cervical cancer",
      E: "Previous caesarean section"
    },
    answer: "B",
    rationale: "** The most common indication for caesarean hysterectomy is uncontrollable maternal haemorrhage; life-threatening haemorrhage occurs in approximately 1 in 1,000 deliveries."
  },
  {
    id: 533,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "The most important risk factor for emergency peri-partum hysterectomy is:",
    options: {
      A: "Nulliparity",
      B: "Previous caesarean section with placenta overlying the old scar",
      C: "Maternal age >40",
      D: "Multiple pregnancy",
      E: "Preterm labour"
    },
    answer: "B",
    rationale: "** The most important risk factor is a previous caesarean section, especially when the placenta overlies the old scar, increasing the risk of placenta accreta."
  },
  {
    id: 534,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "If bladder damage is suspected during caesarean section, what should be used to delineate the defect?",
    options: {
      A: "Methylene blue-coloured saline instilled transurethrally",
      B: "Oral contrast dye",
      C: "Intravenous fluorescein",
      D: "Plain saline only",
      E: "No investigation is needed"
    },
    answer: "A",
    rationale: "** If damage is suspected, transurethral instillation of methylene blue-coloured saline will help to delineate the defect. Repair with absorbable suture is appropriate."
  },
  {
    id: 535,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "Women undergoing caesarean section have how much greater risk of infectious complication than vaginal birth?",
    options: {
      A: "2-5 fold",
      B: "5-20 fold",
      C: "20-50 fold",
      D: "Equal risk",
      E: "50-100 fold"
    },
    answer: "B",
    rationale: "** Women undergoing caesarean section have a 5-20-fold greater risk of an infectious complication than those undergoing vaginal birth."
  },
  {
    id: 536,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "Which pathogen is commonly isolated from infected wounds after caesarean section?",
    options: {
      A: "Staphylococcus aureus only",
      B: "Escherichia coli and Group B Streptococcus",
      C: "Mycobacterium tuberculosis",
      D: "Clostridium difficile",
      E: "Pseudomonas aeruginosa only"
    },
    answer: "B",
    rationale: "** Pathogens include E. coli, other aerobic Gram-negative rods, and Group B Streptococcus. Infections are commonly polymicrobial."
  },
  {
    id: 537,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "The risk of placenta praevia increases almost linearly after each:",
    options: {
      A: "Vaginal delivery",
      B: "Previous caesarean section",
      C: "Episiotomy",
      D: "Forceps delivery",
      E: "Vacuum delivery"
    },
    answer: "B",
    rationale: "** The proportion of patients with placenta praevia increases almost linearly after each previous caesarean section, particularly relevant for future reproductive intentions."
  },
  {
    id: 538,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "What percentage of women with a previous caesarean section who labour achieve a vaginal birth?",
    options: {
      A: "30%",
      B: "50%",
      C: "Up to 70%",
      D: "85%",
      E: "95%"
    },
    answer: "C",
    rationale: "** Up to 70% of women with a previous caesarean section who labour achieve a vaginal birth (VBAC). The dictum 'once a caesarean, always a caesarean' is misleading."
  },
  {
    id: 539,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "The excess risk of uterine rupture following attempted VBAC compared with ERCS is between:",
    options: {
      A: "0.1-0.3%",
      B: "0.5-1%",
      C: "1-2%",
      D: "2-5%",
      E: "5-10%"
    },
    answer: "B",
    rationale: "** The excess risk of uterine rupture following attempted VBAC compared with ERCS is between 0.5% and 1%. Most studies do not differentiate between scar dehiscence and rupture."
  },
  {
    id: 540,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "Which is a maternal risk of elective repeat caesarean section (ERCS)?",
    options: {
      A: "Reduced bleeding",
      B: "Prolonged recovery",
      C: "Lower risk of thromboembolism",
      D: "Reduced risk of placenta praevia in future",
      E: "Avoidance of all pelvic floor trauma"
    },
    answer: "B",
    rationale: "** ERCS carries risks including increased bleeding, febrile morbidity, prolonged recovery, thromboembolism, long-term bladder dysfunction, and increased risks of placenta praevia/accreta in future pregnancies. --- # SECTION 13.6: CLINICAL RISK MANAGEMENT"
  },
  {
    id: 541,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "Which statement about clinical risk management in operative delivery is TRUE?",
    options: {
      A: "Litigation is less likely after perinatal death",
      B: "Common allegations include inadequate indication and lack of informed consent",
      C: "Clinical incident forms should never be completed",
      D: "Trainees should never perform operative deliveries",
      E: "Senior support is not required for complex cases"
    },
    answer: "B",
    rationale: "** Common allegations include inadequate indication for operative delivery, inadequate supervision, lack of informed consent, excessive use of force, and delayed delivery. Clinical incident forms should be completed for adverse outcomes."
  },
  {
    id: 542,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "All adverse outcomes of attempted AVB and caesarean section require:",
    options: {
      A: "Immediate discharge",
      B: "A clinical incident form and risk management review",
      C: "No documentation",
      D: "Transfer to another hospital",
      E: "Mandatory caesarean for next pregnancy"
    },
    answer: "B",
    rationale: "** All adverse outcomes require a clinical incident form and risk management review. Both individual and systems-based reviews are important elements of any organization with a learning culture."
  },
  {
    id: 543,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "The fear of litigation should:",
    options: {
      A: "Dictate all medical practice decisions",
      B: "Not dictate good medical practice but training and competency are essential",
      C: "Be ignored completely",
      D: "Lead to refusal of operative deliveries",
      E: "Result in defensive medicine only"
    },
    answer: "B",
    rationale: "** The fear of litigation should not dictate good medical practice. It is essential that operators are appropriately trained, operate within competencies, have access to senior support, and are effective communicators."
  },
  {
    id: 544,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "Which is NOT an element of good clinical risk management?",
    options: {
      A: "Appropriate training in decision-making",
      B: "Operating within competencies",
      C: "Access to senior support or second opinion",
      D: "Avoiding documentation of adverse events",
      E: "Effective communication with patients"
    },
    answer: "D",
    rationale: "** Good clinical risk management includes: appropriate training, operating within competencies, access to senior support, effective communication, and accurate documentation. Avoiding documentation is poor practice and increases litigation risk."
  },
  {
    id: 545,
    chapterId: 13,
    chapterName: "Operative Delivery",
    question: "Which statement about operative delivery training is TRUE?",
    options: {
      A: "Trainees should perform complex procedures without supervision",
      B: "RCOG advises obstetricians should gain experience in spontaneous vaginal birth before AVB training",
      C: "Junior trainees can perform mid-pelvic rotational deliveries independently",
      D: "Simulation training has no role in operative delivery education",
      E: "Competency in only one instrument (forceps or vacuum) is sufficient"
    },
    answer: "B",
    rationale: "** RCOG guidelines advise that obstetricians should achieve experience in spontaneous vaginal birth prior to commencing training in AVBs. AVBs should be conducted by those with competency or by trainees under direct supervision."
  },
  {
    id: 546,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "One maternal death occurs every ______ worldwide.",
    options: {
      A: "Second",
      B: "Minute",
      C: "Hour",
      D: "Day",
      E: "Week"
    },
    answer: "B",
    rationale: "** One maternal death occurs every minute worldwide. In 2017, approximately 810 women died daily from preventable causes related to pregnancy and childbirth."
  },
  {
    id: 547,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "In the UK, it is estimated that 1 in every ______ births results in ICU admission.",
    options: {
      A: "100",
      B: "1,000",
      C: "5,000",
      D: "10,000",
      E: "50,000"
    },
    answer: "B",
    rationale: "** In the UK, 1 in every 100 births results in high-dependency unit admission, while 1 in every 1,000 results in intensive care unit admission."
  },
  {
    id: 548,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "The vast majority of maternal deaths (94%) occur in:",
    options: {
      A: "High-income countries",
      B: "Low-resource settings",
      C: "Urban areas",
      D: "Women over 40 years",
      E: "Multiparous women"
    },
    answer: "B",
    rationale: "** The vast majority of maternal deaths (94%) occur in low-resource settings, and most could have been prevented."
  },
  {
    id: 549,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Leading causes of maternal mortality include all EXCEPT:",
    options: {
      A: "Thrombosis and thromboembolism",
      B: "Haemorrhage",
      C: "Sepsis",
      D: "Amniotic fluid embolism",
      E: "Gestational diabetes"
    },
    answer: "E",
    rationale: "** Leading causes of maternal mortality include thrombosis and thromboembolism, haemorrhage, sepsis, amniotic fluid embolism and cardiac disease. Gestational diabetes is not a leading cause of maternal mortality."
  },
  {
    id: 550,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "An emergency is defined as:",
    options: {
      A: "Any unexpected event in pregnancy",
      B: "A serious situation that happens unexpectedly and demands immediate action",
      C: "Any complication requiring hospital admission",
      D: "Only life-threatening conditions",
      E: "Events occurring only in the third trimester"
    },
    answer: "B",
    rationale: "** An emergency is defined as a serious situation or occurrence that happens unexpectedly and demands immediate action. Prompt recognition and treatment is essential to limit morbidity and mortality."
  },
  {
    id: 551,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Which is NOT a key element in managing obstetric emergencies?",
    options: {
      A: "Methodological, stepwise approach",
      B: "Accurate documentation",
      C: "Postnatal debrief opportunity",
      D: "Avoiding senior help to maintain confidence",
      E: "Maintaining safety for staff and patients"
    },
    answer: "D",
    rationale: "** Managing obstetric emergencies requires a methodological stepwise approach, accurate documentation, postnatal debrief, and maintaining safety. Senior help should always be sought when needed. --- # SECTION 14.2: COLLAPSED/UNRESPONSIVE PATIENT"
  },
  {
    id: 552,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "The minimum left lateral tilt recommended to prevent aorto-caval compression is:",
    options: {
      A: "5-10\u00b0",
      B: "10-15\u00b0",
      C: "15-20\u00b0",
      D: "30-45\u00b0",
      E: "90\u00b0"
    },
    answer: "C",
    rationale: "** Obtain a left lateral tilt of at least 15-20\u00b0 at the earliest opportunity to prevent/minimize aorto-caval compression in any pregnant patient."
  },
  {
    id: 553,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "In the structured approach to maternal collapse, what does 'D' in ABCDE stand for?",
    options: {
      A: "Delivery of the fetus",
      B: "Disability (neurological status using AVPU score)",
      C: "Differential diagnosis",
      D: "Drug administration",
      E: "Defibrillation"
    },
    answer: "B",
    rationale: "** D = Disability \u2013 neurological status using the AVPU score (Alert, responds to Voice, responds to Pain, Unresponsive). Following initial resuscitation, perform Glasgow Coma Score (GCS)."
  },
  {
    id: 554,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "",
    options: {
      A: "Mild head injury",
      B: "A compromised airway requiring intubation",
      C: "Normal neurological status",
      D: "Need for sedation only",
      E: "Epidural effect"
    },
    answer: "B",
    rationale: "** GCS \u22648 indicates a compromised airway and will require intubation. This is a critical threshold in obstetric emergency management."
  },
  {
    id: 555,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Which is NOT a difficulty anaesthetists encounter in resuscitating pregnant women?",
    options: {
      A: "Increased risk of aspiration",
      B: "Decreased functional residual capacity",
      C: "Decreased metabolic oxygen consumption",
      D: "Increased breast size making intubation difficult",
      E: "Aorto-caval compression"
    },
    answer: "C",
    rationale: "** Difficulties include increased risk of aspiration, INCREASED metabolic oxygen consumption (not decreased), decreased functional residual capacity, pregnancy weight gain, increased breast size, and aorto-caval compression."
  },
  {
    id: 556,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "The Modified Early Obstetric Warning System (MEOWS) is key for:",
    options: {
      A: "Predicting fetal gender",
      B: "Early recognition of clinical deterioration",
      C: "Assessing cervical dilatation",
      D: "Monitoring fetal heart rate",
      E: "Calculating gestational age"
    },
    answer: "B",
    rationale: "** MEOWS scores are key in the early recognition of the clinical deterioration of a patient, enabling prompt intervention."
  },
  {
    id: 557,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "In maternal collapse, chest compressions should be performed at what rate?",
    options: {
      A: "60/min",
      B: "80/min",
      C: "100/min",
      D: "120/min",
      E: "140/min"
    },
    answer: "C",
    rationale: "** Immediately commence chest compressions at 100/min in maternal cardiac arrest."
  },
  {
    id: 558,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "The ratio of chest compressions to ventilation breaths in maternal resuscitation is:",
    options: {
      A: "15:2",
      B: "20:2",
      C: "30:2",
      D: "40:2",
      E: "60:2"
    },
    answer: "C",
    rationale: "** Provide chest compressions to ventilation breaths at a ratio of 30:2, the same as for non-pregnant patients."
  },
  {
    id: 559,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Which is NOT a cause of maternal collapse shown in the differential diagnosis diagram?",
    options: {
      A: "Eclampsia/subarachnoid haemorrhage",
      B: "Pulmonary embolus/tension pneumothorax",
      C: "Placental abruption/sepsis/haemorrhage",
      D: "Gestational diabetes",
      E: "Myocardial infarction/aortic dissection"
    },
    answer: "D",
    rationale: "** Causes of maternal collapse include: eclampsia, intracranial haemorrhage, pulmonary embolus, tension pneumothorax, amniotic fluid embolism, anaphylaxis, illegal drugs, pharmacological interventions, hypoglycaemia, placental abruption, sepsis, haemorrhage, MI, aortic dissection, arrhythmias, cardiomyopathy, and deep venous thrombosis. Gestational diabetes is not listed as a direct cause of collapse."
  },
  {
    id: 560,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Resuscitation of a pregnant woman is more difficult due to all EXCEPT:",
    options: {
      A: "Reduced lung capacity",
      B: "Reduced venous return if supine",
      C: "Greater oxygen demand from the fetus",
      D: "Decreased metabolic oxygen consumption",
      E: "Increased weight"
    },
    answer: "D",
    rationale: "** Resuscitation is more difficult due to reduced lung capacity, reduced venous return if supine, greater oxygen demand from the fetus (not decreased), and increased weight. --- # SECTION 14.3: SEPSIS"
  },
  {
    id: 561,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Which is NOT a risk factor for sepsis in pregnancy?",
    options: {
      A: "Ruptured membranes",
      B: "Immunocompromised status",
      C: "Previous pelvic infection",
      D: "Multiparity",
      E: "Urinary tract infections"
    },
    answer: "D",
    rationale: "** Risk factors include ruptured membranes, immunocompromised patients, obesity, diabetes, minority ethnic group origin, anaemia, UTIs, vaginal discharge, previous pelvic infection, group B streptococcal infection, and invasive procedures. Multiparity itself is NOT listed as a specific risk factor."
  },
  {
    id: 562,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Which antibiotic provides Gram-positive and anaerobic cover but does NOT cover MRSA or Pseudomonas?",
    options: {
      A: "Piperacillin/tazobactam",
      B: "Co-amoxiclav",
      C: "Meropenem",
      D: "Gentamicin",
      E: "Teicoplanin"
    },
    answer: "B",
    rationale: "** Co-amoxiclav provides Gram-positive and anaerobic cover but does not cover MRSA, Pseudomonas, or ESBL-producing organisms."
  },
  {
    id: 563,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Which antibiotic covers streptococci and staphylococci including MRSA, and switches off exotoxin production?",
    options: {
      A: "Metronidazole",
      B: "Gentamicin",
      C: "Clindamycin",
      D: "Co-amoxiclav",
      E: "Azithromycin"
    },
    answer: "C",
    rationale: "** Clindamycin covers streptococci and staphylococci including MRSA and also switches off exotoxin production, making it valuable in toxic shock syndrome."
  },
  {
    id: 564,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "In severe sepsis, broad-spectrum antibiotics should be administered within how many hours of recognition?",
    options: {
      A: "30 minutes",
      B: "1 hour",
      C: "2 hours",
      D: "4 hours",
      E: "6 hours"
    },
    answer: "B",
    rationale: "** Administer broad-spectrum antibiotic within 1 hour of recognition of severe sepsis. Every 1 hour delay increases mortality by approximately 8%."
  },
  {
    id: 565,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "",
    options: {
      A: "1.0 mmol/L",
      B: "1.5 mmol/L",
      C: "2.3 mmol/L",
      D: "4.0 mmol/L",
      E: "5.0 mmol/L"
    },
    answer: "C",
    rationale: "** A normal lactate level is generally less than 2.3 mmol/L. In severe sepsis, lactate \u22654 mmol/L indicates tissue hypoperfusion."
  },
  {
    id: 566,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Severe sepsis may be defined by a heart rate greater than:",
    options: {
      A: "80 beats per minute",
      B: "90 beats per minute",
      C: "100 beats per minute",
      D: "120 beats per minute",
      E: "140 beats per minute"
    },
    answer: "C",
    rationale: "** Severe sepsis may be defined by: temperature >38\u00b0C or <36\u00b0C; heart rate >100 bpm; respiratory rate >20/min; WCC >17\u00d710\u2079/L or <4\u00d710\u2079/L with >10% immature band forms."
  },
  {
    id: 567,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Which organism is the key pathogen involved in puerperal sepsis along with E. coli?",
    options: {
      A: "Group B Streptococcus",
      B: "Lancefield group A \u03b2-haemolytic streptococcus",
      C: "Pseudomonas aeruginosa",
      D: "Clostridium perfringens",
      E: "Listeria monocytogenes"
    },
    answer: "B",
    rationale: "** The key organisms involved in puerperal sepsis are Lancefield group A \u03b2-haemolytic streptococcus and Escherichia coli."
  },
  {
    id: 568,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Which statement about D-dimers in pregnancy is correct?",
    options: {
      A: "They are useful for diagnosing VTE in pregnancy",
      B: "They should be measured in all pregnant women with chest pain",
      C: "They are often elevated due to physiological changes and not helpful",
      D: "They are always low in normal pregnancy",
      E: "They are the gold standard for PE diagnosis in pregnancy"
    },
    answer: "C",
    rationale: "** D-dimers are often elevated secondary to physiological changes in the coagulation system in pregnancy and should not be performed as they are not helpful for diagnosis."
  },
  {
    id: 569,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Treatment of confirmed or suspected VTE in pregnancy is with:",
    options: {
      A: "Warfarin",
      B: "Aspirin",
      C: "Therapeutic low-molecular-weight heparin",
      D: "Clopidogrel",
      E: "Rivaroxaban"
    },
    answer: "C",
    rationale: "** Treatment is with therapeutic low-molecular-weight heparin given daily in two divided doses according to the patient's weight. Warfarin is teratogenic and contraindicated in first trimester."
  },
  {
    id: 570,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Which is the leading cause of direct deaths occurring within 42 days of the end of pregnancy in the UK?",
    options: {
      A: "Haemorrhage",
      B: "Sepsis",
      C: "Thrombosis and venous thromboembolism",
      D: "Amniotic fluid embolism",
      E: "Eclampsia"
    },
    answer: "C",
    rationale: "** Thrombosis and venous thromboembolism continues to be the leading cause of direct deaths occurring within 42 days of the end of pregnancy in the UK."
  },
  {
    id: 571,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "VTE is how many times more common in pregnancy than in the non-pregnant population?",
    options: {
      A: "2 times",
      B: "5 times",
      C: "10 times",
      D: "20 times",
      E: "50 times"
    },
    answer: "C",
    rationale: "** VTE is 10 times more common in pregnancy than in the non-pregnant population."
  },
  {
    id: 572,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "When deep vein thrombosis is suspected in pregnancy, the first-line investigation is:",
    options: {
      A: "D-dimer",
      B: "CT pulmonary angiography",
      C: "Compression duplex ultrasound",
      D: "MRI venography",
      E: "Chest X-ray"
    },
    answer: "C",
    rationale: "** When DVT is suspected clinically, compression duplex ultrasound should be undertaken as the first-line investigation."
  },
  {
    id: 573,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "For suspected pulmonary embolus in pregnancy, which investigation is appropriate?",
    options: {
      A: "D-dimer measurement",
      B: "Ventilation-perfusion (V/Q) scan or CT pulmonary angiography",
      C: "Abdominal ultrasound",
      D: "Pelvic X-ray",
      E: "Fetal echocardiography"
    },
    answer: "B",
    rationale: "** Investigative options include chest X-ray (to rule out other causes), lower limb Doppler to rule out DVT, and V/Q scan or CT pulmonary angiography for definitive diagnosis."
  },
  {
    id: 574,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Prophylactic low-molecular-weight heparin should be considered for at-risk patients based on:",
    options: {
      A: "Maternal request only",
      B: "RCOG thrombosis assessment guidelines",
      C: "Fetal heart rate patterns",
      D: "Gestational age alone",
      E: "Parity alone"
    },
    answer: "B",
    rationale: "** Thrombosis assessment should be performed on all patients early in pregnancy as per RCOG guidelines to assess need for antenatal thromboprophylaxis and on each admission to hospital. --- # SECTION 14.4: OBSTETRIC HAEMORRHAGE"
  },
  {
    id: 575,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Antepartum haemorrhage is defined as vaginal bleeding after:",
    options: {
      A: "12 weeks' gestation",
      B: "20 weeks' gestation",
      C: "24 weeks' gestation",
      D: "28 weeks' gestation",
      E: "32 weeks' gestation"
    },
    answer: "B",
    rationale: "** Antepartum haemorrhage is defined as vaginal bleeding after 20 weeks' gestation. It complicates 2-5% of pregnancies."
  },
  {
    id: 576,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "What percentage of pregnancies are complicated by antepartum haemorrhage?",
    options: {
      A: "0.5-1%",
      B: "2-5%",
      C: "10-15%",
      D: "20-25%",
      E: "30-40%"
    },
    answer: "B",
    rationale: "** Antepartum haemorrhage complicates 2-5% of pregnancies. Most cases involve relatively small amounts of blood loss."
  },
  {
    id: 577,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Which is a fetal cause of antepartum haemorrhage?",
    options: {
      A: "Placental abruption",
      B: "Placenta praevia",
      C: "Vasa praevia",
      D: "Cervical ectropion",
      E: "Cervical carcinoma"
    },
    answer: "C",
    rationale: "** Causes can be classified as placental (abruption, praevia), fetal (vasa praevia), or maternal (vaginal trauma, cervical ectropion, carcinoma, infection)."
  },
  {
    id: 578,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "The characteristic presentation of placental abruption is:",
    options: {
      A: "Painless vaginal bleeding",
      B: "Painful bleeding associated with a tense rigid abdomen",
      C: "Fresh bleeding only after intercourse",
      D: "Brown discharge without pain",
      E: "Bleeding with soft uterus"
    },
    answer: "B",
    rationale: "** The characteristic presentation is painful bleeding associated with a tense rigid abdomen. However, the absence of a tense abdomen does not rule out abruption."
  },
  {
    id: 579,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Which is NOT a risk factor for placental abruption?",
    options: {
      A: "Hypertension",
      B: "Smoking",
      C: "Cocaine use",
      D: "Maternal obesity",
      E: "Trauma to the maternal abdomen"
    },
    answer: "D",
    rationale: "** Risk factors include hypertension, smoking, trauma, cocaine, polyhydramnios, multiple pregnancy, and fetal growth restriction. Maternal obesity is not specifically listed as a risk factor for abruption."
  },
  {
    id: 580,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "In placental abruption, the degree of vaginal bleeding:",
    options: {
      A: "Always correlates with the degree of abruption",
      B: "Does not necessarily correlate with the degree of abruption",
      C: "Is always absent in severe cases",
      D: "Is only present in mild cases",
      E: "Is the best indicator of fetal wellbeing"
    },
    answer: "B",
    rationale: "** The degree of vaginal bleeding does not necessarily correlate with the degree of abruption, as abruptions may be revealed (significant vaginal bleeding) or concealed (blood concealed between placenta and uterus)."
  },
  {
    id: 581,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Placenta praevia is diagnosed using:",
    options: {
      A: "Abdominal palpation only",
      B: "Transabdominal ultrasound only",
      C: "Transvaginal ultrasound",
      D: "MRI only",
      E: "Speculum examination only"
    },
    answer: "C",
    rationale: "** Placenta praevia is diagnosed using ultrasound, preferably transvaginal, to allow accurate measurement of the placental edge from the internal os."
  },
  {
    id: 582,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "The characteristic presenting complaint of placenta praevia is:",
    options: {
      A: "Painful vaginal bleeding with contractions",
      B: "Painless vaginal bleeding",
      C: "Severe abdominal pain without bleeding",
      D: "Fetal movement reduction only",
      E: "Urinary symptoms"
    },
    answer: "B",
    rationale: "** The characteristic presenting complaint is painless vaginal bleeding. The bleeding may trigger preterm labour so patients may have irregular abdominal pain associated with contractions."
  },
  {
    id: 583,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Which condition is most dangerous for the mother?",
    options: {
      A: "Placental abruption",
      B: "Placenta praevia",
      C: "Vasa praevia",
      D: "Cervical ectropion",
      E: "Vaginal infection"
    },
    answer: "B",
    rationale: "** Placenta praevia is most dangerous for the mother. Placental abruption is more dangerous for the fetus. Vasa praevia is nearly always fatal for the baby but not dangerous for the mother."
  },
  {
    id: 584,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Vasa praevia occurs when fetal vessels traverse:",
    options: {
      A: "The placental substance over the fundus",
      B: "The fetal membranes over the internal cervical os",
      C: "The umbilical cord insertion site",
      D: "The amniotic fluid",
      E: "The uterine wall"
    },
    answer: "B",
    rationale: "** Vasa previa occurs when fetal vessels traverse the fetal membranes over the internal cervical os. These vessels may be from velamentous insertion or joining an accessory placental lobe."
  },
  {
    id: 585,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "If vasa praevia is suspected and the baby is still alive, the immediate management is:",
    options: {
      A: "Expectant management",
      B: "Tocolysis",
      C: "Delivery by emergency caesarean section",
      D: "Blood transfusion to the mother",
      E: "Amnioinfusion"
    },
    answer: "C",
    rationale: "** If the baby is still alive, once the diagnosis is suspected the immediate course of action is delivery by emergency caesarean section due to high risk of fetal exsanguination."
  },
  {
    id: 586,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Postpartum haemorrhage is defined as blood loss of:",
    options: {
      A: ">250 mL",
      B: ">500 mL",
      C: ">1,000 mL",
      D: ">1,500 mL",
      E: ">2,000 mL"
    },
    answer: "B",
    rationale: "** Postpartum haemorrhage is defined as blood loss of >500 mL. It affected 13% of all pregnancies in England in 2011-2012."
  },
  {
    id: 587,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Major obstetric haemorrhage is defined as blood loss of:",
    options: {
      A: ">500 mL",
      B: ">1,000 mL",
      C: ">1,500 mL",
      D: ">2,500 mL or requiring transfusion of \u22655 units",
      E: ">5,000 mL"
    },
    answer: "D",
    rationale: "** Major obstetric haemorrhage is defined as blood loss of \u22652,500 mL or requiring a blood transfusion of \u22655 units of red cells or treatment for coagulopathy."
  },
  {
    id: 588,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "What percentage of pregnancies in England in 2011-2012 were affected by PPH (>500mL)?",
    options: {
      A: "5%",
      B: "8%",
      C: "13%",
      D: "20%",
      E: "30%"
    },
    answer: "C",
    rationale: "** Postpartum haemorrhage affected 13% of all pregnancies in England in 2011 and 2012."
  },
  {
    id: 589,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "The most common cause of postpartum haemorrhage is:",
    options: {
      A: "Uterine rupture",
      B: "Uterine atony",
      C: "Cervical laceration",
      D: "Coagulopathy",
      E: "Retained placenta"
    },
    answer: "B",
    rationale: "** Uterine atony is the most common cause of postpartum haemorrhage. The four main causes are Tone (atony), Tissue (retained placenta), Trauma (tears), and Thrombin (coagulopathy)."
  },
  {
    id: 590,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Which is NOT a risk factor for uterine atony?",
    options: {
      A: "Macrosomia",
      B: "Multiple pregnancy",
      C: "Prolonged labour",
      D: "Primiparity",
      E: "Polyhydramnios"
    },
    answer: "D",
    rationale: "** Risk factors for uterine atony include macrosomia, multiple pregnancy, prolonged labour, oxytocin use, induction, grand multiparity, polyhydramnios, and antepartum haemorrhage. Primiparity is not a risk factor."
  },
  {
    id: 591,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "The four main causes of postpartum haemorrhage (the '4 Ts') are:",
    options: {
      A: "Tone, tissue, trauma, thrombin",
      B: "Tension, temperature, time, transfusion",
      C: "Tachycardia, tachypnoea, temperature, tone",
      D: "Trauma, time, tissue, temperature",
      E: "Tone, trauma, time, transfusion"
    },
    answer: "A",
    rationale: "** The four main causes are Tone (uterine atony), Tissue (retained placenta), Trauma (perineal/cervical tears), and Thrombin (coagulopathy)."
  },
  {
    id: 592,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Hypotension is a very late sign of blood loss, typically occurring after:",
    options: {
      A: "250 mL",
      B: "500 mL",
      C: "1,000 mL",
      D: "2,000 mL",
      E: "3,000 mL"
    },
    answer: "D",
    rationale: "** Hypotension is a very late sign in blood loss occurring after 2,000 mL of loss. Young fit women compensate extremely well, so ongoing bleeding should be acted on without delay."
  },
  {
    id: 593,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "The first-line uterotonic agent for postpartum haemorrhage is:",
    options: {
      A: "Ergometrine 500 mcg",
      B: "5-10 units IV/IM oxytocin",
      C: "Carboprost 0.25mg",
      D: "Misoprostol 800 mcg",
      E: "Syntometrine"
    },
    answer: "B",
    rationale: "** A stepwise approach starts with 5-10 units IV/IM oxytocin, followed by other agents if bleeding continues."
  },
  {
    id: 594,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Syntometrine contains:",
    options: {
      A: "Oxytocin 5 units and ergometrine 500 mcg",
      B: "Oxytocin 10 units and misoprostol 200 mcg",
      C: "Ergometrine 250 mcg and carboprost 0.125mg",
      D: "Oxytocin 40 units only",
      E: "Misoprostol and oxytocin"
    },
    answer: "A",
    rationale: "** Syntometrine contains ergometrine 500 mcg and Syntocinon 5 units. It is used for active management of third stage but not as first-line for PPH due to ergometrine side effects."
  },
  {
    id: 595,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Carboprost is contraindicated in women with:",
    options: {
      A: "Diabetes",
      B: "Hypertension",
      C: "Asthma",
      D: "Epilepsy",
      E: "Anaemia"
    },
    answer: "C",
    rationale: "** Carboprost 0.25mg by IM is contraindicated in women with asthma as it can cause bronchospasm. It is a prostaglandin F2\u03b1 analogue."
  },
  {
    id: 596,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Which statement about uterine atony management is correct?",
    options: {
      A: "Treat the haemoglobin result, not the patient",
      B: "Be proactive as young fit women compensate well and hypotension is a late sign",
      C: "Wait for hypotension before transfusing blood",
      D: "Avoid bimanual compression",
      E: "Hysterectomy should be first-line treatment"
    },
    answer: "B",
    rationale: "** Be proactive \u2013 young fit women compensate extremely well. Ongoing bleeding should be acted on without delay. Hypotension is a very late sign occurring after 2,000 mL loss."
  },
  {
    id: 597,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Consider early recourse to hysterectomy if:",
    options: {
      A: "The patient requests it",
      B: "Simpler medical and surgical interventions prove ineffective",
      C: "The patient has had two previous caesarean sections",
      D: "The placenta is anterior",
      E: "The patient is multiparous"
    },
    answer: "B",
    rationale: "** Consider early recourse to hysterectomy if simpler medical and surgical interventions prove ineffective. This should not be left too late as complications increase with increasing haemorrhage. --- # SECTION 14.5: ECLAMPSIA"
  },
  {
    id: 598,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Eclampsia refers to:",
    options: {
      A: "Severe headache in pregnancy",
      B: "Generalized convulsions and/or coma in the setting of pre-eclampsia",
      C: "Proteinuria alone",
      D: "Hypertension without proteinuria",
      E: "Fetal growth restriction"
    },
    answer: "B",
    rationale: "** Eclampsia refers to the occurrence of one or more generalized convulsions and/or coma in the setting of pre-eclampsia and in the absence of other neurological conditions."
  },
  {
    id: 599,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "The estimated incidence of eclampsia in the UK is:",
    options: {
      A: "2.5 cases per 100,000 pregnancies",
      B: "27.5 cases per 100,000 pregnancies",
      C: "100 cases per 100,000 pregnancies",
      D: "275 cases per 100,000 pregnancies",
      E: "1,000 cases per 100,000 pregnancies"
    },
    answer: "B",
    rationale: "** The UK Obstetric Surveillance System report gives an estimated incidence of eclampsia of 27.5 cases per 100,000 pregnancies."
  },
  {
    id: 600,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "The case fatality rate for eclampsia is estimated to be:",
    options: {
      A: "0.1%",
      B: "0.5%",
      C: "1.5%",
      D: "3.1%",
      E: "10%"
    },
    answer: "D",
    rationale: "** The case fatality rate for eclampsia is estimated to be 3.1%. Eclampsia is associated with significant maternal morbidity, particularly cerebrovascular events (2.3%)."
  },
  {
    id: 601,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "The most common cause of death in patients with eclampsia is:",
    options: {
      A: "Pulmonary oedema",
      B: "Cerebral haemorrhage",
      C: "Liver rupture",
      D: "Renal failure",
      E: "Disseminated intravascular coagulation"
    },
    answer: "B",
    rationale: "** Cerebral haemorrhage has been reported to be the most common cause of death in patients with eclampsia. Previously pulmonary oedema was the most common."
  },
  {
    id: 602,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Magnesium sulphate as an anticonvulsant in eclampsia is administered as:",
    options: {
      A: "2g loading dose followed by 0.5g/hour",
      B: "4g loading dose followed by 1g/hour maintenance",
      C: "6g loading dose followed by 2g/hour",
      D: "8g as a single dose",
      E: "1g every 4 hours intramuscularly"
    },
    answer: "B",
    rationale: "** A loading dose of 4g is given followed by a maintenance infusion of 1g/hour generally for 24 hours after delivery. Magnesium sulphate has a narrow therapeutic range."
  },
  {
    id: 603,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "The antidote for magnesium sulphate overdose is:",
    options: {
      A: "Naloxone",
      B: "Calcium gluconate 10mL 10%",
      C: "Flumazenil",
      D: "Protamine sulphate",
      E: "Vitamin K"
    },
    answer: "B",
    rationale: "** The antidote for magnesium sulphate overdose is 10mL 10% calcium gluconate given slowly. Overdose can cause respiratory depression and ultimately cardiac arrest. --- # SECTION 14.6: AMNIOTIC FLUID EMBOLISM"
  },
  {
    id: 604,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Amniotic fluid embolism is believed to be caused by:",
    options: {
      A: "Bacterial infection of the amniotic fluid",
      B: "Amniotic fluid entering the maternal circulation",
      C: "Allergic reaction to fetal proteins",
      D: "Autoimmune reaction to the placenta",
      E: "Viral infection during labour"
    },
    answer: "B",
    rationale: "** Amniotic fluid embolism is believed to be caused by amniotic fluid entering the maternal circulation, causing acute cardiorespiratory compromise and severe DIC."
  },
  {
    id: 605,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "The maternal mortality rate for amniotic fluid embolism is approximately:",
    options: {
      A: "5%",
      B: "10%",
      C: "20%",
      D: "30%",
      E: "50%"
    },
    answer: "D",
    rationale: "** Approximately 30% of patients die in the first hour and only 10% survive overall. The prognosis is poor with no specific therapies available."
  },
  {
    id: 606,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Perimortem caesarean section should be carried out within how many minutes of cardiac arrest?",
    options: {
      A: "1 minute",
      B: "3 minutes",
      C: "5 minutes",
      D: "10 minutes",
      E: "15 minutes"
    },
    answer: "C",
    rationale: "** Perimortem caesarean section should be carried out within 5 minutes or as soon as possible after cardiac arrest. This is for the benefit of the woman to improve the effect of CPR."
  },
  {
    id: 607,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Risk factors for amniotic fluid embolism include:",
    options: {
      A: "Induction of labour (35% population attributable risk)",
      B: "Ethnic-minority women \u226535 years (13%)",
      C: "Multiple pregnancy (7%)",
      D: "All of the above",
      E: "None of the above"
    },
    answer: "D",
    rationale: "** Population proportional attributable risks are 35% for induction of labour, 13% for ethnic-minority women 35 years or older, and 7% for multiple pregnancy. --- # SECTION 14.7: UMBILICAL CORD PROLAPSE"
  },
  {
    id: 608,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Umbilical cord prolapse is estimated to occur in what percentage of pregnancies?",
    options: {
      A: "0.001-0.01%",
      B: "0.1-0.6%",
      C: "1-2%",
      D: "5-10%",
      E: "15-20%"
    },
    answer: "B",
    rationale: "** Umbilical cord prolapse is estimated to occur in 0.1-0.6% of pregnancies, with perinatal mortality rate estimated at 91 per 1,000."
  },
  {
    id: 609,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "When cord prolapse is diagnosed, what position should the mother be placed in?",
    options: {
      A: "Supine flat",
      B: "Knee-to-chest or left lateral with head slightly declined",
      C: "Sitting upright",
      D: "Lithotomy",
      E: "Standing"
    },
    answer: "B",
    rationale: "** Place the mother in a knee-to-chest or left lateral position, ideally with the head slightly declined, to relieve pressure on the cord."
  },
  {
    id: 610,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Which action is contraindicated when managing cord prolapse?",
    options: {
      A: "Elevating the presenting part",
      B: "Filling the bladder",
      C: "Handling the cord",
      D: "Summoning senior help",
      E: "Confirming fetal viability by CTG"
    },
    answer: "C",
    rationale: "** Avoid handling the cord, as this causes cord spasm. The presenting part should be elevated and the bladder filled to prevent further compression."
  },
  {
    id: 611,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Delivery for cord prolapse is generally performed by:",
    options: {
      A: "Forceps-assisted vaginal delivery",
      B: "Vacuum extraction",
      C: "Emergency caesarean section",
      D: "Breech extraction",
      E: "Symphysiotomy"
    },
    answer: "C",
    rationale: "** Delivery is generally performed by emergency caesarean section (category 1 if pathological fetal heart pattern, category 2 if normal fetal heart)."
  },
  {
    id: 612,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Which is a risk factor for umbilical cord prolapse?",
    options: {
      A: "Cephalic presentation with engaged head",
      B: "Polyhydramnios",
      C: "Term singleton pregnancy",
      D: "Maternal obesity",
      E: "Previous caesarean section"
    },
    answer: "B",
    rationale: "** Risk factors include polyhydramnios, multiparity, multiple pregnancy, unstable/transverse/oblique lie, fetal congenital abnormalities, low birthweight, and internal podalic version."
  },
  {
    id: 613,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Prevention of cord prolapse includes:",
    options: {
      A: "Artificial induction when presenting part is non-stable",
      B: "Elective admission after 37 weeks for transverse lie",
      C: "Upward pressure on presenting part during vaginal examination",
      D: "Avoiding hospital admission for preterm PROM",
      E: "Routine amnioinfusion"
    },
    answer: "B",
    rationale: "** With transverse, oblique or unstable lie, elective admission to hospital after 37+0 weeks allows quick delivery should membranes rupture. Avoid artificial induction when presenting part is non-stable. --- # SECTION 14.8: SHOULDER DYSTOCIA"
  },
  {
    id: 614,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Shoulder dystocia is defined as:",
    options: {
      A: "Failure of the fetal head to descend",
      B: "A vaginal cephalic delivery requiring additional manoeuvres after the head has delivered",
      C: "Delivery of the shoulders before the head",
      D: "Breech delivery with entrapped head",
      E: "Transverse lie at delivery"
    },
    answer: "B",
    rationale: "** Shoulder dystocia is defined as a vaginal cephalic delivery that requires additional obstetric manoeuvres to deliver the fetus after the head has delivered and gentle traction has been unsuccessful."
  },
  {
    id: 615,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "The prevalence rate of shoulder dystocia is:",
    options: {
      A: "0.05-0.1%",
      B: "0.58-0.70%",
      C: "2-3%",
      D: "5-8%",
      E: "10-15%"
    },
    answer: "B",
    rationale: "** The prevalence rate of shoulder dystocia is 0.58-0.70%. It is associated with significant morbidity for both mother and baby."
  },
  {
    id: 616,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Which manoeuvre facilitates delivery in approximately 90% of shoulder dystocia cases?",
    options: {
      A: "Suprapubic pressure alone",
      B: "McRoberts position",
      C: "Delivery of posterior arm",
      D: "Woods' screw",
      E: "Zavanelli manoeuvre"
    },
    answer: "B",
    rationale: "** McRoberts position (flexion and abduction of legs at the hip, thighs to abdomen) will facilitate delivery in approximately 90% of cases. It flattens the lumbosacral spine."
  },
  {
    id: 617,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Suprapubic pressure in shoulder dystocia should be applied:",
    options: {
      A: "Over the anterior aspect of the posterior shoulder",
      B: "Over the posterior aspect of the anterior fetal shoulder",
      C: "Directly on the fetal head",
      D: "On the maternal symphysis pubis",
      E: "On the fetal abdomen"
    },
    answer: "B",
    rationale: "** Suprapubic pressure is applied over the posterior aspect of the anterior fetal shoulder. It can be used in a constant and then rocking motion."
  },
  {
    id: 618,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Which is NOT a risk factor for shoulder dystocia?",
    options: {
      A: "Macrosomia",
      B: "Poorly controlled diabetes",
      C: "Maternal obesity",
      D: "Primiparity",
      E: "Previous shoulder dystocia"
    },
    answer: "D",
    rationale: "** Risk factors include macrosomia, poorly controlled diabetes, maternal obesity, previous shoulder dystocia, and instrumental delivery. Primiparity is not specifically listed as a risk factor."
  },
  {
    id: 619,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "The recurrence rate of shoulder dystocia in a subsequent pregnancy is:",
    options: {
      A: "1-5%",
      B: "10-15%",
      C: "25-30%",
      D: "50%",
      E: "75%"
    },
    answer: "B",
    rationale: "** Recurrence rate is 10-15% after a previous shoulder dystocia delivery. Careful planning for mode of delivery is needed."
  },
  {
    id: 620,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Brachial plexus injury at birth occurs in what percentage of shoulder dystocia cases?",
    options: {
      A: "0.1-0.5%",
      B: "2-7%",
      C: "15-20%",
      D: "30-40%",
      E: "50%"
    },
    answer: "B",
    rationale: "** Brachial plexus injury occurs in 2-7% at birth, reducing to 1-3% at 12 months of age. Fractured clavicle or humerus occurs in 1-2%."
  },
  {
    id: 621,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Which internal rotational manoeuvre involves inserting a hand behind the anterior shoulder and pushing it towards the chest?",
    options: {
      A: "Woods' screw",
      B: "Reverse Woods' screw",
      C: "Rubin II",
      D: "Zavanelli manoeuvre",
      E: "McRoberts"
    },
    answer: "C",
    rationale: "** Rubin II: insert a hand behind the anterior shoulder and push it towards the chest. This will adduct the shoulders and push them into the diagonal pelvic diameter."
  },
  {
    id: 622,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Which manoeuvre is considered a last resort in shoulder dystocia?",
    options: {
      A: "McRoberts position",
      B: "Suprapubic pressure",
      C: "Symphysiotomy, cleidotomy or Zavanelli manoeuvre",
      D: "Delivery of posterior arm",
      E: "All-fours position"
    },
    answer: "C",
    rationale: "** Finally consider symphysiotomy, cleidotomy or Zavanelli manoeuvre after other manoeuvres have failed. These are last resort options."
  },
  {
    id: 623,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "The warning sign of shoulder dystocia analogous to a turtle withdrawing into its shell is:",
    options: {
      A: "Failure of restitution of the head",
      B: "Retraction of the fetal head against the perineum",
      C: "Absence of fetal heart sounds",
      D: "Maternal pushing without progress",
      E: "Prolapse of the umbilical cord"
    },
    answer: "B",
    rationale: "** Warning signs include failure of restitution of the head and retraction of the fetal head against the perineum (turtle sign), indicating impacted anterior shoulder behind symphysis pubis."
  },
  {
    id: 624,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "After shoulder dystocia delivery, which is NOT recommended?",
    options: {
      A: "Debrief staff, patient and partner",
      B: "Write comprehensive notes",
      C: "Risk report and risk committee review",
      D: "Immediate discharge without follow-up",
      E: "Check for brachial plexus injury"
    },
    answer: "D",
    rationale: "** After shoulder dystocia, debrief staff/patient/partner, write comprehensive notes, complete risk report, and review. Check baby for brachial plexus injury and fractures. Immediate discharge without follow-up is inappropriate. --- # SECTION 14.9: THROMBOSIS AND THROMBOEMBOLISM"
  },
  {
    id: 625,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Thrombosis and venous thromboembolism (VTE) continues to be the leading cause of:",
    options: {
      A: "All maternal deaths",
      B: "Direct deaths occurring within 42 days of the end of pregnancy",
      C: "Indirect deaths only",
      D: "Neonatal deaths",
      E: "Perinatal mortality"
    },
    answer: "B",
    rationale: "** Thrombosis and venous thromboembolism continues to be the leading cause of direct deaths occurring within 42 days of the end of pregnancy in the UK."
  },
  {
    id: 626,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Approximately what percentage of maternal VTE events occur during pregnancy?",
    options: {
      A: "10%",
      B: "25%",
      C: "50%",
      D: "75%",
      E: "90%"
    },
    answer: "C",
    rationale: "** Approximately 50% of maternal venous thromboembolism events occur during pregnancy, with the remainder in the postpartum period."
  },
  {
    id: 627,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "In the UK, the incidence of antenatal pulmonary embolism is:",
    options: {
      A: "0.5 in 10,000",
      B: "1.3 in 10,000",
      C: "5 in 10,000",
      D: "10 in 10,000",
      E: "20 in 10,000"
    },
    answer: "B",
    rationale: "** In the UK, the incidence of antenatal pulmonary embolism is 1.3 in 10,000, with a case fatality rate of 3.5% and overall mortality rates of 1.08 per 100,000 pregnancies."
  },
  {
    id: 628,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "When pulmonary embolus is suspected in pregnancy, which is NOT an appropriate investigation?",
    options: {
      A: "Chest X-ray",
      B: "D-dimer measurement",
      C: "Lower limb Doppler ultrasound",
      D: "V/Q scan or CT pulmonary angiography",
      E: "ECG"
    },
    answer: "B",
    rationale: "** D-dimer measurement is not helpful and should not be performed as D-dimers are often elevated in normal pregnancy due to physiological changes in the coagulation system."
  },
  {
    id: 629,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Treatment of confirmed or suspected VTE in a collapsed patient with pulmonary embolus may include:",
    options: {
      A: "Oral warfarin only",
      B: "Intravenous unfractionated heparin, thrombolytic therapy or surgical embolectomy",
      C: "Aspirin alone",
      D: "Clopidogrel",
      E: "Watchful waiting"
    },
    answer: "B",
    rationale: "** In a collapsed patient with pulmonary embolus, management options include intravenous unfractionated heparin, thrombolytic therapy or thoracotomy and surgical embolectomy. This complex decision is taken by the multidisciplinary team."
  },
  {
    id: 630,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Prevention of VTE in pregnancy includes all EXCEPT:",
    options: {
      A: "Thrombosis assessment on all patients early in pregnancy",
      B: "Managing patients as inpatients where possible",
      C: "Thromboembolic stockings",
      D: "Prophylactic low-molecular-weight heparin for at-risk patients",
      E: "Early mobilization and adequate hydration"
    },
    answer: "B",
    rationale: "** Managing patients as OUTPATIENTS where possible and limiting bed rest is recommended. Inpatient admission increases VTE risk. Other preventive measures include thrombosis assessment, stockings, prophylactic LMWH, early mobilization, and hydration. --- # SECTION 14.10: UTERINE INVERSION"
  },
  {
    id: 631,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Uterine inversion occurs when:",
    options: {
      A: "The uterus ruptures along the scar",
      B: "The uterus is partially or wholly inverted",
      C: "The uterus rotates on its axis",
      D: "The uterus prolapses through the cervix without inversion",
      E: "The uterus becomes necrotic"
    },
    answer: "B",
    rationale: "** Uterine inversion occurs when the uterus is partially or wholly inverted. It is a rare but serious obstetric emergency."
  },
  {
    id: 632,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "In a second-degree uterine inversion, the inverted fundus:",
    options: {
      A: "Extends to but not through the cervix",
      B: "Extends through the cervix but remains within the vagina",
      C: "Extends outside the vagina",
      D: "Involves only the endometrium",
      E: "Is completely replaced"
    },
    answer: "B",
    rationale: "** Second degree: inverted fundus extends through cervix but remains within the vagina. First degree: to but not through cervix. Third degree: outside vagina. Total: vagina and uterus inverted."
  },
  {
    id: 633,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Which is a risk factor for uterine inversion?",
    options: {
      A: "Prolonged first stage",
      B: "Fundal pressure during delivery of the placenta",
      C: "Cervical cerclage",
      D: "Preterm labour",
      E: "Twin pregnancy"
    },
    answer: "B",
    rationale: "** Risk factors include full dilatation sections, malpresentations, prolonged second stage, IV Syntocinon prior to caesarean, unsuccessful instrumental delivery, and hyperstimulated uterus. Fundal pressure during placental delivery is a risk factor."
  },
  {
    id: 634,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "The first step in managing uterine inversion is:",
    options: {
      A: "Immediate hysterectomy",
      B: "Manual replacement",
      C: "Administration of general anaesthetic",
      D: "Blood transfusion",
      E: "Antibiotic administration"
    },
    answer: "B",
    rationale: "** As soon as the diagnosis is made, manual replacement should be attempted. Prompt recognition is essential as the longer it is inverted, the more difficult it becomes to replace."
  },
  {
    id: 635,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "If manual replacement of an inverted uterus is unsuccessful, the next step is:",
    options: {
      A: "Immediate hysterectomy",
      B: "Hydrostatic replacement with warm saline",
      C: "Observation only",
      D: "Administration of tocolytics",
      E: "Blood transfusion only"
    },
    answer: "B",
    rationale: "** If unsuccessful, attempt hydrostatic replacement by running 2-3L of warm saline via tubing into the vagina using hands to create a seal around the vulva. This causes vaginal vault and cervical ballooning."
  },
  {
    id: 636,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "If hydrostatic replacement is unsuccessful, management may include:",
    options: {
      A: "Continued observation",
      B: "Surgical procedures including hysterectomy",
      C: "Discharge home",
      D: "Tocolytic therapy only",
      E: "Blood transfusion without further intervention"
    },
    answer: "B",
    rationale: "** If hydrostatic replacement is unsuccessful, surgical procedures including hysterectomy may be required. Oxytocin should be commenced once the uterus is replaced to maintain contraction. --- # SECTION 14.11: UTERINE RUPTURE"
  },
  {
    id: 637,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "The estimated incidence of uterine rupture in the UK is:",
    options: {
      A: "2 per 100,000 pregnancies",
      B: "2 per 10,000 pregnancies",
      C: "2 per 1,000 pregnancies",
      D: "2 per 100 pregnancies",
      E: "20 per 10,000 pregnancies"
    },
    answer: "B",
    rationale: "** The estimated incidence of uterine rupture was 2 per 10,000 pregnancies overall in the UK (April 2009-April 2010 data)."
  },
  {
    id: 638,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "In women with a previous caesarean delivery planning vaginal birth, the rate of uterine rupture is:",
    options: {
      A: "2 per 10,000",
      B: "21 per 10,000",
      C: "50 per 10,000",
      D: "100 per 10,000",
      E: "200 per 10,000"
    },
    answer: "B",
    rationale: "** Rates increased to 21 per 10,000 in women with a previous caesarean delivery planning vaginal birth, compared with 3 per 10,000 for elective caesarean."
  },
  {
    id: 639,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Which factor increases the odds of uterine rupture by approximately 3-fold?",
    options: {
      A: "Maternal age >35",
      B: "Two or more previous caesarean deliveries",
      C: "Gestational diabetes",
      D: "Multiple pregnancy",
      E: "Polyhydramnios"
    },
    answer: "B",
    rationale: "** The odds of rupture are increased in women who had two or more previous caesarean deliveries (adjusted OR 3.02, 95% CI 1.16-7.85)."
  },
  {
    id: 640,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "An interpregnancy interval of less than 12 months since the last caesarean increases the odds of rupture by:",
    options: {
      A: "1.5 times",
      B: "2 times",
      C: "3.12 times",
      D: "5 times",
      E: "10 times"
    },
    answer: "C",
    rationale: "** Adjusted odds ratio is 3.12 (95% CI 1.62-6.02) for interval <12 months since last caesarean delivery."
  },
  {
    id: 641,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Warning signs of uterine rupture include all EXCEPT:",
    options: {
      A: "Maternal shock",
      B: "Fetal distress",
      C: "Severe sudden abdominal pain",
      D: "Painless vaginal bleeding",
      E: "Inability to palpate presenting part on vaginal examination"
    },
    answer: "D",
    rationale: "** Warning signs include maternal shock, fetal distress, inability to auscultate fetal heart, inability to palpate presenting part, and severe sudden abdominal pain. Painless bleeding is more characteristic of placenta praevia."
  },
  {
    id: 642,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Management of uterine rupture involves:",
    options: {
      A: "Expectant management with tocolysis",
      B: "Urgent laparotomy and delivery by the quickest route",
      C: "Continued vaginal trial with oxytocin augmentation",
      D: "External cephalic version",
      E: "Administration of magnesium sulphate"
    },
    answer: "B",
    rationale: "** An urgent laparotomy is required once uterine rupture is diagnosed. The fetus should be delivered by the quickest route possible, followed by repair of the uterus (or hysterectomy if needed). --- # SECTION 14.12: IMPACTED HEAD AT CAESAREAN SECTION"
  },
  {
    id: 643,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Impacted head at caesarean section most commonly occurs in:",
    options: {
      A: "Elective caesarean at 39 weeks",
      B: "Full dilatation sections after prolonged second stage",
      C: "Caesarean for breech presentation",
      D: "Preterm caesarean sections",
      E: "Twin caesarean deliveries"
    },
    answer: "B",
    rationale: "** Impacted head is a risk at full dilatation sections, especially after prolonged second stage, unsuccessful instrumental delivery, or when oxytocin was used before decision to deliver by caesarean."
  },
  {
    id: 644,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Which uterine relaxant may be used to assist disimpaction of the fetal head at caesarean section?",
    options: {
      A: "Oxytocin",
      B: "Syntometrine",
      C: "Glyceryl trinitrate spray or terbutaline",
      D: "Ergometrine",
      E: "Misoprostol"
    },
    answer: "C",
    rationale: "** Consider glyceryl trinitrate spray or terbutaline to relax the uterus, but beware the risk of PPH following uterorelaxant agents."
  },
  {
    id: 645,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Forcing the impacted head upwards at caesarean section risks:",
    options: {
      A: "Improved delivery",
      B: "Trauma including fractures to the fetal head and extension to uterine angles",
      C: "Reduced bleeding",
      D: "Faster delivery",
      E: "Better Apgar scores"
    },
    answer: "B",
    rationale: "** Forcing the head upwards risks trauma, including fractures to the fetal head and extension to the uterine angles, which can result in haemorrhage and damage to viscera. The head should be flexed and rotated into the transverse position prior to delivery."
  },
  {
    id: 646,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Other options for managing impacted head include:",
    options: {
      A: "Fundal pressure alone",
      B: "Senior assistant flexing and rotating the head vaginally, or newer devices like C-Snorkel\u00ae",
      C: "Immediate classical caesarean section",
      D: "Vertical uterine incision",
      E: "General anaesthesia only"
    },
    answer: "B",
    rationale: "** Other options include having a senior assistant flex and rotate the head vaginally or the use of newer devices designed to release the vacuum between the fetal head and pelvis (e.g., C-Snorkel\u00ae). However, minimum evidence exists to support their use. --- # SECTION 14.13: SELF-ASSESSMENT CASE HISTORIES"
  },
  {
    id: 647,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Ms B is 39 weeks' gestation in her second pregnancy. Her first pregnancy was a term delivery by caesarean section at 5cm dilated due to failure to progress, 11 months previously. She was induced due to FGR and has been on oxytocin for 4 hours. She is now 9cm dilated when she develops severe constant lower abdominal pain over her scar area. The fetal heart rate is 46 bpm. What is the most likely diagnosis?",
    options: {
      A: "Placental abruption",
      B: "Uterine rupture",
      C: "Cord prolapse",
      D: "Amniotic fluid embolism",
      E: "Fetal distress from cephalopelvic disproportion"
    },
    answer: "B",
    rationale: "** This is classic uterine rupture: previous caesarean, short interpregnancy interval (<12 months), induction with oxytocin, severe constant pain over scar, and fetal bradycardia (46 bpm)."
  },
  {
    id: 648,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Ms B's risk factors for uterine rupture include all EXCEPT:",
    options: {
      A: "Previous caesarean section",
      B: "Induction of labour",
      C: "Use of oxytocin",
      D: "Short interpregnancy interval (<12 months)",
      E: "Maternal age >40"
    },
    answer: "E",
    rationale: "** Risk factors include previous caesarean, induction, oxytocin use, and short interpregnancy interval. Maternal age >40 is not specifically mentioned as a risk factor for uterine rupture in this context."
  },
  {
    id: 649,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Management of Ms B's situation should include:",
    options: {
      A: "Continue oxytocin and observe",
      B: "Immediate vaginal examination to assess for vaginal delivery, then urgent laparotomy",
      C: "Tocolysis to stop contractions",
      D: "External cephalic version",
      E: "Magnesium sulphate for neuroprotection"
    },
    answer: "B",
    rationale: "** Management involves calling for senior help, safe delivery of the fetus by the quickest route, and repair of the rupture. Vaginal examination should be performed to assess if vaginal delivery is possible, followed by urgent laparotomy."
  },
  {
    id: 650,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Ms F is 30 minutes after spontaneous vaginal delivery of a 4.7kg baby. The midwife noticed a 'large gush' of blood after palpating a 'soft' uterus. Heart rate is 110 bpm, BP 80/40. What is the most likely diagnosis?",
    options: {
      A: "Cervical laceration",
      B: "Postpartum haemorrhage secondary to uterine atony",
      C: "Coagulopathy",
      D: "Uterine inversion",
      E: "Retained placental tissue"
    },
    answer: "B",
    rationale: "** Soft uterus with large gush of blood, tachycardia, and hypotension after delivery of a macrosomic baby is classic for PPH secondary to uterine atony. The 4 Ts should be considered: Tone, Tissue, Trauma, Thrombin."
  },
  {
    id: 651,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Ms F's risk factor for uterine atony is:",
    options: {
      A: "Preterm delivery",
      B: "Macrosomic baby (4.7kg)",
      C: "Twin pregnancy",
      D: "Prolonged first stage",
      E: "Maternal diabetes"
    },
    answer: "B",
    rationale: "** Macrosomia is a risk factor for uterine atony. Other risk factors include multiple pregnancy, prolonged labour, oxytocin use, induction, grand multiparity, polyhydramnios, and antepartum haemorrhage."
  },
  {
    id: 652,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "The first step in managing Ms F's condition should be:",
    options: {
      A: "Immediate hysterectomy",
      B: "Uterine massage and emptying the uterus of clot",
      C: "Administration of general anaesthetic",
      D: "Transfer to operating theatre",
      E: "Blood transfusion"
    },
    answer: "B",
    rationale: "** Uterine massage should be started to stimulate uterine contractions and empty the uterus of clot. Ensure intravenous access, send bloods, administer IV fluids and uterotonic agents."
  },
  {
    id: 653,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "",
    options: {
      A: "Outlet",
      B: "Low-pelvic not requiring rotation",
      C: "Low-pelvic requiring rotation",
      D: "Mid-pelvic",
      E: "High"
    },
    answer: "B",
    rationale: "** Zero-fifths palpable, occipito-anterior, station +2cm with moderate caput, average pelvis, no rotation needed = low-pelvic not requiring rotation. This should be within the skillset of an average registrar."
  },
  {
    id: 654,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "In the same AVB case, what is the primary fetal indication for intervention?",
    options: {
      A: "Meconium-stained liquor",
      B: "Late decelerations and rising baseline on CTG",
      C: "Absent fetal movements",
      D: "Breech presentation",
      E: "Fetal tachycardia >180 bpm"
    },
    answer: "B",
    rationale: "** Late decelerations and rising baseline to 165 bpm reflecting potential fetal hypoxia and risk of fetal compromise. The indication was both fetal and maternal (tiring after pushing)."
  },
  {
    id: 655,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Which instrument is most appropriate for this AVB case?",
    options: {
      A: "Kielland rotational forceps",
      B: "Rigid disposable vacuum cup",
      C: "Soft silicone vacuum cup",
      D: "Neville Barnes forceps with episiotomy",
      E: "Spatula"
    },
    answer: "B",
    rationale: "** Vacuum-assisted birth is preferred as the chance of success is high and risk of significant perineal tearing (including OASI) is lower than with forceps. The head is occipito-anterior at station +2 with moderate caput."
  },
  {
    id: 656,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Which neonatal complication should be anticipated after this AVB?",
    options: {
      A: "Brachial plexus injury",
      B: "Cephalohaematoma or scalp abrasions",
      C: "Clavicle fracture",
      D: "Facial palsy",
      E: "Hypoxic-ischaemic encephalopathy"
    },
    answer: "B",
    rationale: "** Risk of trauma includes cephalohaematoma or scalp abrasions with vacuum, and much less commonly subgaleal haemorrhage. The baby may also be delivered in poor condition due to intrapartum hypoxia."
  },
  {
    id: 657,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Which maternal complication should be anticipated after this AVB?",
    options: {
      A: "Uterine rupture",
      B: "Extended perineal tear including anal sphincter",
      C: "Uterine inversion",
      D: "Amniotic fluid embolism",
      E: "Cord prolapse"
    },
    answer: "B",
    rationale: "** There is a risk of an extended perineal or vaginal tear that may include the anal sphincter, and increased risk of PPH. Complications are mitigated by careful practice and active management of third stage."
  },
  {
    id: 658,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Which statement about clinical risk management in operative delivery is TRUE?",
    options: {
      A: "Litigation is less likely after perinatal death",
      B: "Common allegations include inadequate indication and lack of informed consent",
      C: "Clinical incident forms should never be completed",
      D: "Trainees should never perform operative deliveries",
      E: "Senior support is not required for complex cases"
    },
    answer: "B",
    rationale: "** Common allegations include inadequate indication for operative delivery, inadequate supervision, lack of informed consent, excessive use of force, and delayed delivery. Clinical incident forms should be completed for adverse outcomes."
  },
  {
    id: 659,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Which is NOT a recommended step in the structured approach to managing obstetric emergencies?",
    options: {
      A: "Prepare and prevent",
      B: "Call for help",
      C: "Turn into left lateral tilt",
      D: "Assess the airway",
      E: "Administer magnesium sulphate immediately"
    },
    answer: "E",
    rationale: "** Magnesium sulphate is specific to eclampsia management, not part of the general structured approach to all obstetric emergencies. The general approach is: Prepare and prevent, Call for help, Talk to patient, Turn into left lateral tilt, Assess airway, Assess breathing and circulation, Commence chest compressions if needed."
  },
  {
    id: 660,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Which is NOT a warning sign of sepsis?",
    options: {
      A: "Pyrexia",
      B: "Hypothermia",
      C: "Tachycardia",
      D: "Bradycardia",
      E: "Hypotension"
    },
    answer: "D",
    rationale: "** Warning signs of sepsis include pyrexia, hypothermia, tachycardia, increased respiratory rate, hypotension, rise in MEOWS score and oliguria. Bradycardia is not a typical warning sign of sepsis."
  },
  {
    id: 661,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Which is a risk factor for maternal sepsis?",
    options: {
      A: "Intact membranes",
      B: "Immunocompromised status",
      C: "Nulliparity",
      D: "Young maternal age (<20)",
      E: "Spontaneous conception"
    },
    answer: "B",
    rationale: "** Risk factors include ruptured membranes, immunocompromised patients, obesity, diabetes, minority ethnic group origin, anaemia, UTIs, vaginal discharge, previous pelvic infection, group B streptococcal infection, and invasive procedures."
  },
  {
    id: 662,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "The key organisms in puerperal sepsis are:",
    options: {
      A: "Group B Streptococcus and Staphylococcus aureus",
      B: "Lancefield group A \u03b2-haemolytic streptococcus and Escherichia coli",
      C: "Pseudomonas and Klebsiella",
      D: "Clostridium difficile and Candida",
      E: "Listeria and CMV"
    },
    answer: "B",
    rationale: "** The key organisms involved in puerperal sepsis are Lancefield group A \u03b2-haemolytic streptococcus and Escherichia coli."
  },
  {
    id: 663,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Severe sepsis requires aggressive treatment including:",
    options: {
      A: "Observation only",
      B: "Early diagnosis, rapid antibiotics, senior review, and multidisciplinary team involvement",
      C: "Single antibiotic therapy only",
      D: "Delayed fluid resuscitation",
      E: "Avoidance of vasopressors"
    },
    answer: "B",
    rationale: "** Severe sepsis has higher maternal mortality than simple infection and requires aggressive prompt treatment: early diagnosis, rapid broad-spectrum antibiotics, review by senior doctors and midwives, and timely multidisciplinary team involvement."
  },
  {
    id: 664,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Which statement about postpartum haemorrhage management is correct?",
    options: {
      A: "Treat the haemoglobin result, not the patient",
      B: "Do not delay fluid resuscitation because of false reassurance from a single haemoglobin",
      C: "Wait for hypotension before acting",
      D: "Avoid blood components until coagulation indices deteriorate",
      E: "Hysterectomy should be first-line for all cases"
    },
    answer: "B",
    rationale: "** Do not delay fluid resuscitation and blood transfusion because of false reassurance from a single haemoglobin result \u2013 treat the patient, not the result. Be proactive as young fit women compensate well and hypotension is a very late sign."
  },
  {
    id: 665,
    chapterId: 14,
    chapterName: "Obstetric Emergencies",
    question: "Which is the most appropriate advice for a woman with a single uncomplicated lower segment caesarean section regarding future delivery?",
    options: {
      A: "Elective repeat caesarean is mandatory",
      B: "Trial of labour after caesarean (TOLAC) is appropriate if obstetric situation is favourable",
      C: "Vaginal birth is absolutely contraindicated",
      D: "Home birth is recommended",
      E: "Forceps delivery should be planned"
    },
    answer: "B",
    rationale: "** It is appropriate to offer a trial of labour after caesarean to any woman with a single uncomplicated lower segment caesarean section and no other adverse obstetric feature. Up to 70% achieve VBAC."
  },
  {
    id: 666,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "The puerperium is defined as the period following completion of the third stage of labour lasting:",
    options: {
      A: "2 weeks",
      B: "4 weeks",
      C: "6 weeks",
      D: "8 weeks",
      E: "10 weeks"
    },
    answer: "C",
    rationale: "The puerperium refers to the 6-week period following childbirth."
  },
  {
    id: 667,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Immediately after delivery, the uterine fundus typically lies:",
    options: {
      A: "At the level of the umbilicus",
      B: "About 4 cm below the umbilicus",
      C: "At the symphysis pubis",
      D: "In the pelvis",
      E: "2 cm above the umbilicus"
    },
    answer: "B",
    rationale: "Immediately after delivery, the uterine fundus lies about 4 cm below the umbilicus or 12 cm above the symphysis pubis."
  },
  {
    id: 668,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "By approximately what time after delivery should the uterus become no longer palpable above the symphysis pubis?",
    options: {
      A: "1 week",
      B: "2 weeks",
      C: "3 weeks",
      D: "4 weeks",
      E: "6 weeks"
    },
    answer: "B",
    rationale: "By 2 weeks, the uterus becomes no longer palpable above the symphysis."
  },
  {
    id: 669,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Uterine involution occurs primarily by which process?",
    options: {
      A: "Hypertrophy of smooth muscle cells",
      B: "Hyperplasia of smooth muscle cells",
      C: "Autolysis with enzymatic digestion of cytoplasm",
      D: "Coagulative necrosis",
      E: "Apoptosis of myometrial cells"
    },
    answer: "C",
    rationale: "Involution occurs by autolysis, whereby muscle cells diminish in size through enzymatic digestion of cytoplasm."
  },
  {
    id: 670,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "During uterine involution, the excess protein produced is:",
    options: {
      A: "Excreted unchanged in faeces",
      B: "Absorbed into the bloodstream and excreted in urine",
      C: "Stored in the liver",
      D: "Converted to glycogen in muscle",
      E: "Reabsorbed into the uterus"
    },
    answer: "B",
    rationale: "The excess protein from autolysis is absorbed into the bloodstream and excreted in the urine."
  },
  {
    id: 671,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Which hormone accelerates uterine involution in women who are breastfeeding?",
    options: {
      A: "Prolactin",
      B: "Oxytocin",
      C: "Oestrogen",
      D: "Progesterone",
      E: "Human placental lactogen"
    },
    answer: "B",
    rationale: "Oxytocin release during breastfeeding accelerates involution; the uterus is smaller in breastfeeding women."
  },
  {
    id: 672,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Which of the following is NOT a cause of a high postnatal uterus?",
    options: {
      A: "Full bladder",
      B: "Loaded rectum",
      C: "Breastfeeding",
      D: "Retained products of conception",
      E: "Uterine infection"
    },
    answer: "C",
    rationale: "Breastfeeding promotes involution and a smaller uterus, not a high uterus."
  },
  {
    id: 673,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Following delivery, the cervix can readily admit two fingers during the first few days. By the end of the second week, the internal os should be:",
    options: {
      A: "Fully dilated",
      B: "Admitting two fingers",
      C: "Closed",
      D: "Admitting one finger with difficulty",
      E: "Patulous"
    },
    answer: "C",
    rationale: "By the end of the second week the internal os should be closed, though the external os may remain open."
  },
  {
    id: 674,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "The characteristic funnel shape of the parous cervix is due to:",
    options: {
      A: "Cervical lacerations",
      B: "Permanent opening of the external os",
      C: "Failure of the internal os to close",
      D: "Prolapse of the cervix",
      E: "Chronic infection"
    },
    answer: "B",
    rationale: "The external os can remain open permanently, giving a characteristic funnel shape to the parous cervix."
  },
  {
    id: 675,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Lochia rubra refers to:",
    options: {
      A: "Yellow-white discharge lasting 1 month",
      B: "Serous discharge in the second week",
      C: "Red blood-stained discharge in the first few days",
      D: "Foul-smelling green discharge",
      E: "Absence of vaginal discharge"
    },
    answer: "C",
    rationale: "During the first few days after delivery, lochia is red (lochia rubra)."
  },
  {
    id: 676,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Lochia serosa typically appears by approximately:",
    options: {
      A: "Day 1",
      B: "Day 3",
      C: "The second week",
      D: "The fourth week",
      E: "Day 10"
    },
    answer: "C",
    rationale: "By the second week, the discharge becomes serous (lochia serosa)."
  },
  {
    id: 677,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Lochia alba is described as:",
    options: {
      A: "Red blood-stained discharge",
      B: "Pink discharge",
      C: "Scanty yellow-white discharge lasting about 1 month",
      D: "Profuse offensive discharge",
      E: "Mucoid brown discharge"
    },
    answer: "C",
    rationale: "Lochia alba is a scanty yellow-white discharge that lasts for about 1 month."
  },
  {
    id: 678,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Persistent red lochia suggests:",
    options: {
      A: "Normal involution",
      B: "Delayed involution usually associated with infection or retained placental tissue",
      C: "Successful breastfeeding",
      D: "Normal endometrial regeneration",
      E: "Excessive fluid intake"
    },
    answer: "B",
    rationale: "Persistent red lochia suggests delayed involution, usually associated with infection or retained placental tissue."
  },
  {
    id: 679,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Endometrial regeneration after delivery is usually complete by:",
    options: {
      A: "1 week",
      B: "2 weeks",
      C: "3 weeks",
      D: "4 weeks",
      E: "6 weeks"
    },
    answer: "C",
    rationale: "Regeneration of new endometrium is complete by the third week."
  },
  {
    id: 680,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Which layer of decidua is involved in regeneration of new endometrium?",
    options: {
      A: "Superficial layer",
      B: "Basal layer adjacent to the myometrium",
      C: "Compact layer",
      D: "Spongy layer",
      E: "None of the above"
    },
    answer: "B",
    rationale: "The basal layer adjacent to the myometrium is involved in regeneration of new endometrium."
  },
  {
    id: 681,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "The post-partum uterus immediately after delivery weighs approximately:",
    options: {
      A: "50 g",
      B: "100 g",
      C: "500 g",
      D: "1 kg",
      E: "2 kg"
    },
    answer: "D",
    rationale: "The post-partum uterus weighs about 1 kg immediately after delivery and returns to less than 100 g."
  },
  {
    id: 682,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Two weeks after birth, which of the following is expected?",
    options: {
      A: "Lochia should still be red",
      B: "Uterus should be palpable above the symphysis",
      C: "Pain from perineal tears should be much improved or resolved",
      D: "The cervix should admit two fingers easily",
      E: "The fundus should be at the umbilicus"
    },
    answer: "C",
    rationale: "Key learning point: two weeks after birth, lochia should no longer be red, the uterus should not be palpable above the symphysis, and perineal pain should be much improved."
  },
  {
    id: 683,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Which statement about uterine involution is TRUE?",
    options: {
      A: "It reduces the number of muscle cells",
      B: "It is delayed by breastfeeding",
      C: "It is accelerated by oxytocin in breastfeeding women",
      D: "It is complete by 1 week",
      E: "It increases uterine weight"
    },
    answer: "C",
    rationale: "Involution is accelerated by oxytocin release in breastfeeding women."
  },
  {
    id: 684,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "The puerperium is considered especially dangerous for women with:",
    options: {
      A: "Mild anaemia",
      B: "Complex medical problems",
      C: "Gestational diabetes",
      D: "Twin pregnancy",
      E: "Advanced maternal age alone"
    },
    answer: "B",
    rationale: "For those with complex medical problems, the early puerperium is especially dangerous and most maternal deaths occur during this time."
  },
  {
    id: 685,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Which of the following is a normal physiological change in the genital tract postpartum?",
    options: {
      A: "The cervix remains fully dilated",
      B: "The lower segment and cervix appear flabby",
      C: "The internal os remains open permanently",
      D: "The vagina returns to its nulliparous state by day 3",
      E: "The perineum is always fully healed by day 7"
    },
    answer: "B",
    rationale: "Following delivery of the placenta, the lower segment of the uterus and the cervix appear flabby."
  },
  {
    id: 686,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Autolysis during uterine involution involves:",
    options: {
      A: "Increase in muscle cell number",
      B: "Enzymatic digestion of cytoplasm",
      C: "Hypertrophy of remaining cells",
      D: "Fibrous replacement of the entire myometrium",
      E: "Calcification of muscle cells"
    },
    answer: "B",
    rationale: "Autolysis involves enzymatic digestion of cytoplasm, reducing cell size without affecting cell number significantly."
  },
  {
    id: 687,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "In multiparous women or after caesarean section, uterine involution is:",
    options: {
      A: "More rapid",
      B: "Slower",
      C: "Unchanged",
      D: "Complete by 1 week",
      E: "Not measurable"
    },
    answer: "B",
    rationale: "The uterus is larger following caesarean section and in multiparous women, indicating slower involution."
  },
  {
    id: 688,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "The basal layer of the decidua is preserved because it:",
    options: {
      A: "Forms the lochia",
      B: "Is involved in regeneration of new endometrium",
      C: "Prevents infection",
      D: "Produces oxytocin receptors",
      E: "Contracts the myometrium"
    },
    answer: "B",
    rationale: "The basal layer adjacent to the myometrium is involved in the regeneration of new endometrium."
  },
  {
    id: 689,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Which of the following statements about lochia is FALSE?",
    options: {
      A: "It comprises blood and necrotic decidua",
      B: "Only the superficial layer of decidua becomes necrotic",
      C: "Lochia rubra gradually changes to pink",
      D: "Lochia alba is profuse and red",
      E: "It is a postnatal blood-stained uterine discharge"
    },
    answer: "D",
    rationale: "Lochia alba is scanty and yellow-white, not profuse and red."
  },
  {
    id: 690,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "The process of uterine involution has virtually no effect on:",
    options: {
      A: "Uterine weight",
      B: "The number of muscle cells",
      C: "Uterine size",
      D: "Cervical shape",
      E: "Endometrial thickness"
    },
    answer: "B",
    rationale: "Autolysis has virtually no effect on the number of muscle cells."
  },
  {
    id: 691,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Approximately what percentage of women complain of perineal pain in the first 3 days after delivery?",
    options: {
      A: "20%",
      B: "40%",
      C: "60%",
      D: "80%",
      E: "95%"
    },
    answer: "D",
    rationale: "About 80% of women complain of perineal pain in the first 3 days after delivery."
  },
  {
    id: 692,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Perineal discomfort is greatest in which group?",
    options: {
      A: "Women who had a normal vaginal delivery with no tears",
      B: "Women who had a water birth",
      C: "Women who sustain spontaneous tears or have an episiotomy, especially after instrumental delivery",
      D: "Women who had a planned caesarean section",
      E: "Multiparous women with no perineal trauma"
    },
    answer: "C",
    rationale: "Discomfort is greatest in women who sustain spontaneous tears or have an episiotomy, especially following instrumental delivery."
  },
  {
    id: 693,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Which of the following provides short-term symptomatic relief for perineal pain?",
    options: {
      A: "Hot water baths",
      B: "Local cooling with crushed ice or witch hazel",
      C: "Systemic steroids",
      D: "Antibiotics routinely",
      E: "Sitz baths with antiseptic"
    },
    answer: "B",
    rationale: "Local cooling with crushed ice, witch hazel or tap water provides short-term symptomatic relief."
  },
  {
    id: 694,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Effective analgesia following perineal trauma can be achieved with:",
    options: {
      A: "Aspirin 300 mg",
      B: "Regular paracetamol",
      C: "Codeine derivatives as first-line",
      D: "High-dose ibuprofen only",
      E: "Topical hydrocortisone"
    },
    answer: "B",
    rationale: "Regular paracetamol is effective; diclofenac may be added if necessary. Codeine is best avoided."
  },
  {
    id: 695,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Why are codeine derivatives best avoided after perineal trauma?",
    options: {
      A: "They cause excessive bleeding",
      B: "They cause constipation in the mother and drowsiness in breastfed babies",
      C: "They impair uterine involution",
      D: "They are contraindicated in all mothers",
      E: "They cause hypertension"
    },
    answer: "B",
    rationale: "Codeine derivatives cause constipation in the mother and drowsiness in some breastfed babies."
  },
  {
    id: 696,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "The perineum should be kept clean using:",
    options: {
      A: "Chlorhexidine solution daily",
      B: "Tap water only",
      C: "Alcohol-based wipes",
      D: "Iodine solution",
      E: "Antibiotic spray"
    },
    answer: "B",
    rationale: "The perineum should be kept clean with daily cleaning or showering using tap water only (NICE 2021)."
  },
  {
    id: 697,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Signs of perineal infection include all EXCEPT:",
    options: {
      A: "Redness",
      B: "Pain",
      C: "Swelling",
      D: "Coolness",
      E: "Heat"
    },
    answer: "D",
    rationale: "Signs of infection include redness, pain, swelling and heat (calor, dolor, rubor, tumor)."
  },
  {
    id: 698,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "If a perineal wound shows a collection of pus, management should include:",
    options: {
      A: "Immediate primary surgical repair",
      B: "Drainage by removal of skin sutures",
      C: "Application of topical steroids",
      D: "Observation only",
      E: "Systemic antifungals"
    },
    answer: "B",
    rationale: "If there is pus, drainage should be encouraged by removal of skin sutures; surgical repair should never be attempted in the presence of infection."
  },
  {
    id: 699,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Spontaneous opening of repaired perineal tears is usually due to:",
    options: {
      A: "Poor surgical technique alone",
      B: "Secondary infection",
      C: "Excessive ambulation",
      D: "Diabetes mellitus",
      E: "Use of non-absorbable sutures"
    },
    answer: "B",
    rationale: "Spontaneous opening is usually the result of secondary infection."
  },
  {
    id: 700,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "After epidural anaesthesia, the bladder may take up to how long to regain normal sensation?",
    options: {
      A: "2 hours",
      B: "4 hours",
      C: "6 hours",
      D: "8 hours",
      E: "12 hours"
    },
    answer: "D",
    rationale: "After epidural anaesthesia, the bladder may take up to 8 hours to regain normal sensation."
  },
  {
    id: 701,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "During the time the bladder has reduced sensation post-epidural, approximately how much urine may be produced?",
    options: {
      A: "200 mL",
      B: "500 mL",
      C: "750 mL",
      D: "1 litre",
      E: "1.5 litres"
    },
    answer: "D",
    rationale: "About 1 litre of urine may be produced during the time the bladder lacks normal sensation."
  },
  {
    id: 702,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "",
    options: {
      A: "2 hours",
      B: "4 hours",
      C: "6 hours",
      D: "8 hours",
      E: "12 hours"
    },
    answer: "C",
    rationale: "A formal assessment is best made 6 hours postnatally, when the woman should have passed at least 300 mL."
  },
  {
    id: 703,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "If a woman has passed less than 300 mL by 6 hours postpartum, what is the next step?",
    options: {
      A: "Immediate indwelling catheter for 48 hours",
      B: "Insert a small intermittent catheter; if it drains >150 mL, close observation is needed",
      C: "Oral diuretics",
      D: "Discharge home with advice",
      E: "Abdominal ultrasound only"
    },
    answer: "B",
    rationale: "If <300 mL passed, a small intermittent catheter is inserted; if >150 mL remains, close observation is needed. If >1 litre, an indwelling catheter is left for 48 hours."
  },
  {
    id: 704,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "To minimize bladder overdistension after spinal anaesthesia for caesarean section, a urinary catheter should be left for at least:",
    options: {
      A: "4 hours",
      B: "6 hours",
      C: "8 hours",
      D: "12 hours",
      E: "24 hours"
    },
    answer: "D",
    rationale: "A urinary catheter is left for at least 12 hours until the woman is mobile."
  },
  {
    id: 705,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Which condition is a rare cause of incontinence in the UK but common in developing countries following obstructed labour?",
    options: {
      A: "Urinary tract infection",
      B: "Vesicovaginal fistula",
      C: "Stress incontinence",
      D: "Overactive bladder",
      E: "Uterine prolapse"
    },
    answer: "B",
    rationale: "Obstetric fistulae are rare in the UK but common in developing countries as a complication of obstructed labour."
  },
  {
    id: 706,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Constipation in the early puerperium is commonly caused by all EXCEPT:",
    options: {
      A: "Interruption in normal diet",
      B: "Intra-partum dehydration",
      C: "Opiate use",
      D: "Increased fibre intake",
      E: "Fear of evacuation due to perineal pain"
    },
    answer: "D",
    rationale: "Constipation is caused by interruption in diet, dehydration, opiate use and fear of pain; increased fibre intake helps prevent it."
  },
  {
    id: 707,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Women who have sustained a third- or fourth-degree tear should be prescribed which agent immediately after repair to prevent constipation?",
    options: {
      A: "Codeine phosphate",
      B: "Lactulose and ispaghula husk or methylcellulose",
      C: "Loperamide",
      D: "High-dose iron",
      E: "Antacids"
    },
    answer: "B",
    rationale: "These women should be prescribed lactulose and ispaghula husk or methylcellulose for 2 weeks to avoid straining."
  },
  {
    id: 708,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "What percentage of primiparous women show evidence of occult anal sphincter trauma at 6 weeks following vaginal birth on anal endosonography?",
    options: {
      A: "5%",
      B: "10%",
      C: "20%",
      D: "33%",
      E: "50%"
    },
    answer: "D",
    rationale: "One prospective study identified occult anal sphincter trauma in a third of primiparous women at 6 weeks."
  },
  {
    id: 709,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "What percentage of women who had forceps delivery show occult anal sphincter trauma?",
    options: {
      A: "20%",
      B: "40%",
      C: "60%",
      D: "80%",
      E: "90%"
    },
    answer: "D",
    rationale: "80% of those who had undergone forceps delivery showed evidence of occult anal sphincter trauma."
  },
  {
    id: 710,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Long-term anal incontinence following primary repair of a third- or fourth-degree tear occurs in approximately:",
    options: {
      A: "1%",
      B: "5%",
      C: "10%",
      D: "15%",
      E: "25%"
    },
    answer: "B",
    rationale: "Long-term anal incontinence occurs in 5% of women after primary repair of a third- or fourth-degree tear."
  },
  {
    id: 711,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "What is the approximate prevalence of anovaginal/rectovaginal fistulae after third- or fourth-degree tears?",
    options: {
      A: "0.1%",
      B: "0.5%",
      C: "2\u20134%",
      D: "10%",
      E: "20%"
    },
    answer: "C",
    rationale: "Anovaginal/rectovaginal fistulae occur in 2\u20134% of women with third- or fourth-degree tears."
  },
  {
    id: 712,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Pelvic floor exercises in the postpartum period:",
    options: {
      A: "Have strong evidence for preventing prolapse",
      B: "Are proven to prevent urinary incontinence",
      C: "Are unlikely to be harmful and cultivate pelvic floor awareness",
      D: "Should be avoided after vaginal delivery",
      E: "Are only effective if started antenatally"
    },
    answer: "C",
    rationale: "There is no strong evidence that they prevent prolapse or incontinence, but they are unlikely to be harmful and cultivate awareness."
  },
  {
    id: 713,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "After caesarean section, sutures or staples are typically removed on the:",
    options: {
      A: "Third day",
      B: "Fifth day",
      C: "Seventh day",
      D: "Tenth day",
      E: "Fourteenth day"
    },
    answer: "B",
    rationale: "Sutures or staples are removed on the fifth day."
  },
  {
    id: 714,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Which of the following is NOT an increased risk after caesarean section compared with vaginal delivery?",
    options: {
      A: "Wound infection",
      B: "Anaemia",
      C: "Thromboembolism",
      D: "Pelvic floor dysfunction",
      E: "Urinary tract infection"
    },
    answer: "D",
    rationale: "Caesarean section reduces the risk of pelvic floor problems but increases infection, anaemia and thromboembolism risks."
  },
  {
    id: 715,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "According to NICE (2021), when should the first postnatal visit by a midwife occur?",
    options: {
      A: "Within 6 hours",
      B: "Within 12 hours",
      C: "Within 24 hours",
      D: "Within 36 hours",
      E: "Within 48 hours"
    },
    answer: "D",
    rationale: "NICE recommends the first postnatal visit within 36 hours by a midwife."
  },
  {
    id: 716,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "The WHO recommends that women who give birth in a facility stay for at least how long before discharge?",
    options: {
      A: "6 hours",
      B: "12 hours",
      C: "24 hours",
      D: "48 hours",
      E: "72 hours"
    },
    answer: "C",
    rationale: "WHO recommends a minimum 24-hour stay after facility birth."
  },
  {
    id: 717,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "At the 6-week postnatal review, which of the following should be checked?",
    options: {
      A: "Weight, urine analysis and blood pressure",
      B: "Only weight",
      C: "Only blood pressure",
      D: "Only urine analysis",
      E: "None of the above"
    },
    answer: "A",
    rationale: "Weight, urine analysis and blood pressure are checked at the 6-week postnatal review."
  },
  {
    id: 718,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "If a cervical smear is due at the postnatal examination, it is preferable to wait until:",
    options: {
      A: "6 weeks",
      B: "3 months",
      C: "6 months",
      D: "1 month",
      E: "2 weeks"
    },
    answer: "B",
    rationale: "If a cervical smear is due, it is preferable to wait until 3 months postpartum."
  },
  {
    id: 719,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Which of the following is NOT listed as a maternal health component of postnatal care visits by NICE (2021)?",
    options: {
      A: "Infection-related symptoms",
      B: "Nipple and breast discomfort",
      C: "Symptoms of thromboembolism",
      D: "Maternal height measurement",
      E: "Bowel function"
    },
    answer: "D",
    rationale: "NICE postnatal assessments include infection symptoms, breast discomfort, thromboembolism symptoms, vaginal discharge, anaemia, bladder and bowel function, wound healing, BP, temperature and urinalysis, but not height."
  },
  {
    id: 720,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Which topic is recommended for postnatal discussion by WHO (2013) in low/middle-income settings but not specifically by NICE (2021)?",
    options: {
      A: "Postnatal mental health problems",
      B: "Importance of birth spacing",
      C: "Pelvic floor exercises",
      D: "Sexual intercourse and contraception",
      E: "Fatigue"
    },
    answer: "B",
    rationale: "WHO additionally recommends topics such as importance of birth spacing, hygiene, safer sex, bed nets in malaria-endemic areas, and routine oral iron/folate."
  },
  {
    id: 721,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Women who have had a caesarean section should resume activities such as carrying heavy items and driving when:",
    options: {
      A: "After 1 week",
      B: "After 2 weeks",
      C: "Once they have returned to pre-caesarean strength with no physical restrictions",
      D: "Only after 6 months",
      E: "On day 10"
    },
    answer: "C",
    rationale: "They can resume activities once they have returned to their pre-caesarean section strength with no physical restrictions or pain."
  },
  {
    id: 722,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Which of the following is a danger sign for which women should seek immediate medical advice postnatally?",
    options: {
      A: "Mild after-pains",
      B: "Sudden or very heavy vaginal bleeding",
      C: "Mild breast engorgement",
      D: "Occasional mild headache",
      E: "Reduced appetite"
    },
    answer: "B",
    rationale: "Sudden or very heavy vaginal bleeding is a danger sign of retained placental tissue or endometritis."
  },
  {
    id: 723,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Postnatal care in the UK is now generally:",
    options: {
      A: "A rigid daily visit schedule for all",
      B: "A demand-led service for low-risk women",
      C: "Only provided by GPs",
      D: "Limited to hospital stay only",
      E: "Provided by obstetricians only"
    },
    answer: "B",
    rationale: "Postnatal care is generally now a demand-led service for low-risk women, with more frequent visits for high-risk women."
  },
  {
    id: 724,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Which of the following is NOT a routine test at every postnatal visit?",
    options: {
      A: "Maternal blood pressure",
      B: "Pulse",
      C: "Temperature",
      D: "Urinalysis",
      E: "Full blood count"
    },
    answer: "E",
    rationale: "The only routine tests at every postnatal visit are BP, pulse, temperature and urinalysis. FBC is checked only in specific circumstances."
  },
  {
    id: 725,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "At 2 weeks postnatally, women should be specifically asked about the resolution of:",
    options: {
      A: "Post-partum psychosis",
      B: "The 'baby blues'",
      C: "Puerperal sepsis",
      D: "Secondary PPH",
      E: "Mastitis"
    },
    answer: "B",
    rationale: "At 2 weeks, women should be asked about the resolution of the 'baby blues'."
  },
  {
    id: 726,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Which of the following is a risk factor for constipation after childbirth?",
    options: {
      A: "Adequate hydration",
      B: "High-fibre diet",
      C: "Prolapsed haemorrhoids",
      D: "Early mobilization",
      E: "Breastfeeding"
    },
    answer: "C",
    rationale: "Prolapsed haemorrhoids, anal fissures and pain from sutured perineum can cause fear of evacuation and constipation."
  },
  {
    id: 727,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "The most common site of neonatal fracture during birth is:",
    options: {
      A: "Humeral shaft",
      B: "Femoral shaft",
      C: "Clavicle",
      D: "Skull",
      E: "Radius"
    },
    answer: "C",
    rationale: "The clavicle is the most common site of neonatal fracture."
  },
  {
    id: 728,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Women should be specifically asked about which of the following at postnatal visits?",
    options: {
      A: "Only about the baby",
      B: "Bowel and bladder function, fatigue, headache and perineum",
      C: "Only about contraception",
      D: "Only about breastfeeding",
      E: "Only about mood"
    },
    answer: "B",
    rationale: "At each visit, women should be asked about recovery including bowel and bladder function, fatigue, headache and perineum."
  },
  {
    id: 729,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Secondary post-partum haemorrhage is defined as bleeding between:",
    options: {
      A: "Delivery and 6 hours",
      B: "6 hours and 24 hours",
      C: "24 hours and 6 weeks after delivery",
      D: "6 weeks and 12 weeks",
      E: "12 weeks and 6 months"
    },
    answer: "C",
    rationale: "Secondary PPH is defined as fresh bleeding from the genital tract between 24 hours and 6 weeks after delivery."
  },
  {
    id: 730,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "The most common time for secondary PPH is between:",
    options: {
      A: "Days 1 and 3",
      B: "Days 3 and 5",
      C: "Days 7 and 14",
      D: "Weeks 3 and 4",
      E: "Weeks 5 and 6"
    },
    answer: "C",
    rationale: "The most common time for secondary PPH is between days 7 and 14."
  },
  {
    id: 731,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "The most common causes of secondary PPH are:",
    options: {
      A: "Uterine atony and cervical tear",
      B: "Endometritis or retained placental tissue",
      C: "Coagulopathy and placenta accreta",
      D: "Fibroids and uterine inversion",
      E: "Thromboembolism and infection"
    },
    answer: "B",
    rationale: "The cause is usually either endometritis or retained placental tissue."
  },
  {
    id: 732,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Classically, women with endometritis have:",
    options: {
      A: "Crampy pain and an open internal os",
      B: "Constant low abdominal pain, tender uterus and closed internal os",
      C: "No pain and a soft uterus",
      D: "Severe colicky pain and a contracted uterus",
      E: "Painless heavy bleeding"
    },
    answer: "B",
    rationale: "Women with endometritis have constant low abdominal pain and a tender uterus with a closed internal os."
  },
  {
    id: 733,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Women with retained products of conception classically have:",
    options: {
      A: "A closed internal os and no pain",
      B: "Crampy low abdominal pain, uterus larger than appropriate and an open internal os",
      C: "A tender uterus with closed os and fever",
      D: "No bleeding but offensive discharge",
      E: "Normal-sized uterus"
    },
    answer: "B",
    rationale: "Women with retained products have crampy pain, a larger than appropriate uterus and an open internal os."
  },
  {
    id: 734,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "If pelvic ultrasound shows debris and fluid in the postpartum uterus, this:",
    options: {
      A: "Confirms retained placental tissue",
      B: "Is commonly found even in normal postpartum uteri and does not confirm retained tissue",
      C: "Indicates endometritis",
      D: "Requires immediate surgical evacuation",
      E: "Is diagnostic of uterine abscess"
    },
    answer: "B",
    rationale: "Debris, clots and fluid are commonly found even within the normal postpartum uterus and do not mean retained tissue."
  },
  {
    id: 735,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Management of secondary PPH with heavy bleeding includes all EXCEPT:",
    options: {
      A: "Circulatory support with fluids or blood",
      B: "Strong oxytocics (e.g. ergometrine)",
      C: "Uterine evacuation",
      D: "Antibiotics if placental tissue is found",
      E: "Immediate hysterectomy as first-line"
    },
    answer: "E",
    rationale: "Initial management includes circulatory support, oxytocics, evacuation and antibiotics; hysterectomy is not first-line."
  },
  {
    id: 736,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Other causes of secondary PPH include all EXCEPT:",
    options: {
      A: "Hormonal contraception",
      B: "Von Willebrand disease",
      C: "Choriocarcinoma",
      D: "Uterine fibroids",
      E: "Normal involution"
    },
    answer: "E",
    rationale: "Other causes include hormonal contraception, bleeding disorders and choriocarcinoma."
  },
  {
    id: 737,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Nearly half of all eclamptic fits occur:",
    options: {
      A: "Antenatally",
      B: "During labour",
      C: "Postnatally",
      D: "Only before 20 weeks",
      E: "Only in the third trimester"
    },
    answer: "C",
    rationale: "Nearly half of all eclamptic fits occur postnatally."
  },
  {
    id: 738,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Women with severe pre-eclampsia should be managed for the first 24 hours after delivery on:",
    options: {
      A: "A general postnatal ward",
      B: "A high-dependency unit",
      C: "At home with daily visits",
      D: "In the delivery room",
      E: "In an outpatient clinic"
    },
    answer: "B",
    rationale: "Those with severe pre-eclampsia should be managed for the first 24 hours on a high-dependency unit."
  },
  {
    id: 739,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "First-line therapy for new-onset postnatal hypertension is:",
    options: {
      A: "Labetalol only",
      B: "Nifedipine or amlodipine (if of African origin) or enalapril (if of European origin)",
      C: "Methyldopa",
      D: "Atenolol alone",
      E: "Hydralazine"
    },
    answer: "B",
    rationale: "First-line therapy for new-onset postnatal hypertension is nifedipine or amlodipine (African origin) or enalapril (European origin)."
  },
  {
    id: 740,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "At home, blood pressure for postnatal hypertensive women is measured every:",
    options: {
      A: "Day",
      B: "2 days",
      C: "Week",
      D: "2 weeks",
      E: "Month"
    },
    answer: "B",
    rationale: "At home, BP is measured every 2 days and dosage halved when <140/90 mmHg."
  },
  {
    id: 741,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Women still on antihypertensives at 6 weeks postnatally should be:",
    options: {
      A: "Continued on the same dose indefinitely",
      B: "Referred for specialist assessment",
      C: "Switched to diuretics",
      D: "Stopped immediately",
      E: "Given a calcium channel blocker"
    },
    answer: "B",
    rationale: "Those still on antihypertensives 6 weeks postnatally should be referred for specialist assessment."
  },
  {
    id: 742,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "The recurrence risk of pre-eclampsia in a future pregnancy is approximately:",
    options: {
      A: "5%",
      B: "10%",
      C: "15%",
      D: "25%",
      E: "50%"
    },
    answer: "C",
    rationale: "The recurrence risk is around 15%, higher if early onset."
  },
  {
    id: 743,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Obstetric palsy (traumatic neuritis) is associated with:",
    options: {
      A: "Short second stage of labour",
      B: "Prolonged or obstructed labour",
      C: "Elective caesarean section",
      D: "Epidural anaesthesia alone",
      E: "Twin pregnancy"
    },
    answer: "B",
    rationale: "It is almost always associated with prolonged or obstructed labour."
  },
  {
    id: 744,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Peroneal nerve palsy can result from:",
    options: {
      A: "Compression between the fetal head and sacral promontory",
      B: "Compression between the head of the fibula and the lithotomy pole",
      C: "Excessive abduction of the thighs",
      D: "Forceps blade pressure",
      E: "Epidural needle trauma"
    },
    answer: "B",
    rationale: "Peroneal nerve palsy occurs when the nerve is compressed between the head of the fibula and the lithotomy pole."
  },
  {
    id: 745,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Symphysis pubis diastasis occurs in at least:",
    options: {
      A: "1 in 100 vaginal deliveries",
      B: "1 in 300 vaginal deliveries",
      C: "1 in 500 vaginal deliveries",
      D: "1 in 800 vaginal deliveries",
      E: "1 in 2000 vaginal deliveries"
    },
    answer: "D",
    rationale: "Spontaneous separation occurs in at least 1 in 800 vaginal deliveries."
  },
  {
    id: 746,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Which of the following is NOT associated with symphysis pubis diastasis?",
    options: {
      A: "Forceps delivery",
      B: "Rapid second stage",
      C: "Severe abduction of thighs",
      D: "Elective caesarean section",
      E: "Waddling gait"
    },
    answer: "D",
    rationale: "It is associated with forceps, rapid second stage and severe abduction; not with elective caesarean."
  },
  {
    id: 747,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "The risk of thromboembolic disease during pregnancy and the puerperium rises by approximately:",
    options: {
      A: "2-fold",
      B: "3-fold",
      C: "4-fold",
      D: "5-fold",
      E: "10-fold"
    },
    answer: "D",
    rationale: "The risk rises fivefold during pregnancy and the puerperium."
  },
  {
    id: 748,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "The majority of fatal thromboembolisms occur:",
    options: {
      A: "Antenatally",
      B: "During labour",
      C: "In the puerperium",
      D: "After 6 weeks",
      E: "Only after caesarean section"
    },
    answer: "C",
    rationale: "The majority of fatal thromboembolisms occur in the puerperium."
  },
  {
    id: 749,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Significant puerperal pyrexia is defined as a temperature of 38\u00b0C or higher on any 2 of the first 10 days post-partum, excluding:",
    options: {
      A: "The first 6 hours",
      B: "The first 12 hours",
      C: "The first 24 hours",
      D: "The first 48 hours",
      E: "Days 3\u20135"
    },
    answer: "C",
    rationale: "Significant pyrexia excludes the first 24 hours, during which mild elevation is not uncommon."
  },
  {
    id: 750,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "In about 80% of women who develop a temperature in the first 24 hours following vaginal delivery:",
    options: {
      A: "Endometritis is present",
      B: "No obvious evidence of infection is identified",
      C: "A urinary tract infection is found",
      D: "Mastitis is the cause",
      E: "Wound infection is present"
    },
    answer: "B",
    rationale: "In about 80% of women with temperature in first 24 hours after vaginal delivery, no obvious infection is found."
  },
  {
    id: 751,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Common sites associated with puerperal pyrexia include all EXCEPT:",
    options: {
      A: "Chest",
      B: "Throat",
      C: "Breasts",
      D: "Urinary tract",
      E: "Eyes"
    },
    answer: "E",
    rationale: "Common sites include chest, throat, breasts, urinary tract, pelvic organs, wounds and legs."
  },
  {
    id: 752,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Atelectasis after delivery is most likely to appear:",
    options: {
      A: "After 1 week",
      B: "In the first 24 hours, particularly after general anaesthesia",
      C: "Only after discharge",
      D: "At 6 weeks",
      E: "During labour"
    },
    answer: "B",
    rationale: "Chest complications are most likely in the first 24 hours after delivery, especially after general anaesthesia."
  },
  {
    id: 753,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Aspiration pneumonia (Mendelson syndrome) must be suspected if there is:",
    options: {
      A: "A mild cough only",
      B: "A spiking temperature with wheezing, dyspnoea or hypoxia after general anaesthesia",
      C: "Mild chest pain only",
      D: "No fever",
      E: "Bradycardia"
    },
    answer: "B",
    rationale: "Mendelson syndrome is suspected with spiking temperature, wheezing, dyspnoea or hypoxia after general anaesthesia."
  },
  {
    id: 754,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Until what year was puerperal sepsis the major cause of maternal mortality in the UK?",
    options: {
      A: "1920",
      B: "1937",
      C: "1950",
      D: "1960",
      E: "1970"
    },
    answer: "B",
    rationale: "Until 1937, puerperal sepsis was the major cause of maternal mortality."
  },
  {
    id: 755,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "The discovery of sulphonamides in 1935 resulted in:",
    options: {
      A: "No change in maternal mortality",
      B: "A dramatic fall in maternal mortality from sepsis",
      C: "Increased maternal mortality",
      D: "Eradication of sepsis",
      E: "Only a minor reduction"
    },
    answer: "B",
    rationale: "The discovery of sulphonamides and improved hygiene resulted in a dramatic fall in maternal mortality."
  },
  {
    id: 756,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Puerperal infection is usually:",
    options: {
      A: "Monomicrobial with high virulence",
      B: "Polymicrobial involving bowel contaminants",
      C: "Caused by a single virus",
      D: "Due to fungi exclusively",
      E: "Always caused by Staphylococcus aureus"
    },
    answer: "B",
    rationale: "Puerperal infection is usually polymicrobial and involves contaminants from the bowel."
  },
  {
    id: 757,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Which organism is NOT commonly associated with puerperal genital infection?",
    options: {
      A: "Escherichia coli",
      B: "Group B Streptococcus",
      C: "Bacteroides fragilis",
      D: "Chlamydia trachomatis",
      E: "Streptococcus pneumoniae"
    },
    answer: "E",
    rationale: "Streptococcus pneumoniae is not listed among common organisms; common ones include E. coli, GBS, Bacteroides, Chlamydia, etc."
  },
  {
    id: 758,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Risk factors for puerperal infection include all EXCEPT:",
    options: {
      A: "Obesity",
      B: "Diabetes",
      C: "Prolonged labour",
      D: "Elective caesarean section without labour",
      E: "Manual removal of placenta"
    },
    answer: "D",
    rationale: "Risk factors include obesity, diabetes, prolonged labour, multiple vaginal exams, instrumental delivery, caesarean section (especially emergency), manual removal of placenta and retained products."
  },
  {
    id: 759,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "For caesarean sections, prophylactic antibiotics should be given:",
    options: {
      A: "After cord clamping",
      B: "After skin closure",
      C: "Before the skin incision",
      D: "2 hours postoperatively",
      E: "Only if fever develops"
    },
    answer: "C",
    rationale: "A single intraoperative dose of antibiotics is given before the skin incision for caesarean sections."
  },
  {
    id: 760,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Which antiseptic can be used for vaginal cleansing prior to emergency caesarean section to reduce infection risk?",
    options: {
      A: "Alcohol",
      B: "Chlorhexidine or povidone-iodine",
      C: "Hydrogen peroxide",
      D: "Saline only",
      E: "Iodine tincture"
    },
    answer: "B",
    rationale: "Vaginal cleansing with chlorhexidine or povidone-iodine prior to emergency caesarean section reduces infection risk."
  },
  {
    id: 761,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Alcohol-based hand rubs were introduced to:",
    options: {
      A: "Replace all surgical scrubs",
      B: "Facilitate hand hygiene between patient contacts",
      C: "Treat skin infections",
      D: "Clean wounds",
      E: "Sterilize equipment"
    },
    answer: "B",
    rationale: "Alcohol-based hand rubs facilitate handwashing, which remains a significant problem despite Semmelweiss's findings."
  },
  {
    id: 762,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Infection from the uterus can spread via uterine vessels into the inferior vena cava, giving rise to:",
    options: {
      A: "Deep vein thrombosis only",
      B: "Septic thrombophlebitis, pulmonary infections or generalized septicaemia",
      C: "Urinary tract infection",
      D: "Wound infection",
      E: "Mastitis"
    },
    answer: "B",
    rationale: "Infection can spread via uterine vessels into the IVC, causing septic thrombophlebitis, pulmonary infections or septicaemia."
  },
  {
    id: 763,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "In contrast with pelvic inflammatory disease unrelated to pregnancy, tubal involvement in puerperal sepsis is in the form of:",
    options: {
      A: "Salpingitis causing tubal occlusion",
      B: "Peri-salpingitis, which rarely causes tubal occlusion",
      C: "Tubo-ovarian abscess",
      D: "Hydrosalpinx",
      E: "Pyosalpinx"
    },
    answer: "B",
    rationale: "Tubal involvement is peri-salpingitis, which rarely causes tubal occlusion and consequent infertility."
  },
  {
    id: 764,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Mild to moderate puerperal genital infections can be treated with:",
    options: {
      A: "Penicillin V alone",
      B: "Co-amoxiclav or a cephalosporin plus metronidazole",
      C: "Metronidazole alone",
      D: "Fluconazole",
      E: "No antibiotics, only observation"
    },
    answer: "B",
    rationale: "Mild to moderate infections are treated with broad-spectrum antibiotics such as co-amoxiclav or cefalexin plus metronidazole."
  },
  {
    id: 765,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Severe sepsis features include all EXCEPT:",
    options: {
      A: "Respiratory rate \u226525 breaths/minute",
      B: "Systolic BP \u226490 mmHg",
      C: "Heart rate >130 bpm",
      D: "Temperature >38.5\u00b0C",
      E: "Skin mottling or ashen appearance"
    },
    answer: "D",
    rationale: "Severe sepsis criteria include RR \u226525, SBP \u226490, HR >130, not passed urine in 18h, skin mottling; temperature <36\u00b0C is also a criterion, not >38.5\u00b0C alone."
  },
  {
    id: 766,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Necrotizing fasciitis in the puerperium:",
    options: {
      A: "Is common and easily treated",
      B: "Is rare but frequently fatal and requires wide debridement",
      C: "Responds to antibiotics alone",
      D: "Only affects the perineum",
      E: "Is caused by viruses"
    },
    answer: "B",
    rationale: "Necrotizing fasciitis is rare but frequently fatal; wide debridement under GA is essential."
  },
  {
    id: 767,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Clostridium perfringens is usually identified in:",
    options: {
      A: "Urinary tract infections",
      B: "Necrotizing fasciitis",
      C: "Mastitis",
      D: "Tonsillitis",
      E: "Wound cellulitis"
    },
    answer: "B",
    rationale: "Clostridium perfringens is usually identified in necrotizing fasciitis."
  },
  {
    id: 768,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "According to NICE sepsis guidance, intravenous antibiotics should be given within:",
    options: {
      A: "30 minutes",
      B: "1 hour",
      C: "2 hours",
      D: "3 hours",
      E: "6 hours"
    },
    answer: "B",
    rationale: "Intravenous antibiotics should be given within 1 hour."
  },
  {
    id: 769,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Sepsis management actions to be completed within 1 hour include all EXCEPT:",
    options: {
      A: "Administer oxygen",
      B: "Take blood for culture",
      C: "Give intravenous fluids",
      D: "Measure urine output",
      E: "Perform a full MRI scan"
    },
    answer: "E",
    rationale: "Actions include oxygen, blood cultures, lactate check, IV fluids, IV antibiotics, urine output measurement and source identification; not MRI."
  },
  {
    id: 770,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Blood lactate in sepsis should be checked; if \u22652 mmol/L, what should be done?",
    options: {
      A: "Repeat after fluid challenge",
      B: "Ignore if patient looks well",
      C: "Start oral fluids",
      D: "Wait 6 hours to repeat",
      E: "Give blood transfusion"
    },
    answer: "A",
    rationale: "If lactate \u22652 mmol/L, repeat after fluid challenge."
  },
  {
    id: 771,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Which of the following is a risk factor for puerperal infection?",
    options: {
      A: "Short labour (<4 hours)",
      B: "Prolonged rupture of membranes",
      C: "No vaginal examinations",
      D: "Elective caesarean without labour",
      E: "Maternal youth (<20 years) alone"
    },
    answer: "B",
    rationale: "Prolonged rupture of membranes is a risk factor."
  },
  {
    id: 772,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Which organism is the most common Gram-positive cause of early-onset neonatal infection in the UK?",
    options: {
      A: "Group A Streptococcus",
      B: "Group B Streptococcus",
      C: "Staphylococcus aureus",
      D: "Enterococcus",
      E: "Streptococcus pneumoniae"
    },
    answer: "B",
    rationale: "Group B Streptococcus (GBS) is the most common Gram-positive cause."
  },
  {
    id: 773,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Women colonized with GBS should receive:",
    options: {
      A: "Postnatal antibiotics only",
      B: "Intra-partum antibiotic prophylaxis",
      C: "No antibiotics",
      D: "Pre-conception antibiotics",
      E: "Oral antibiotics for 1 week postpartum"
    },
    answer: "B",
    rationale: "Intra-partum antibiotic prophylaxis reduces invasive GBS disease."
  },
  {
    id: 774,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "GBS is susceptible to:",
    options: {
      A: "Metronidazole",
      B: "Benzyl penicillin",
      C: "Gentamicin",
      D: "Fluconazole",
      E: "Chloramphenicol"
    },
    answer: "B",
    rationale: "GBS is susceptible to benzyl penicillin."
  },
  {
    id: 775,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "",
    options: {
      A: "Pseudomonas aeruginosa",
      B: "Escherichia coli",
      C: "Klebsiella pneumoniae",
      D: "Proteus mirabilis",
      E: "Haemophilus influenzae"
    },
    answer: "B",
    rationale: "E. coli is a common Gram-negative cause."
  },
  {
    id: 776,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Which of the following is NOT a feature of severe sepsis according to NICE?",
    options: {
      A: "Respiratory rate 21\u201324/min",
      B: "Systolic BP \u226490 mmHg",
      C: "Heart rate >130 bpm",
      D: "Not passed urine in past 18 hours",
      E: "Tympanic temperature <36\u00b0C"
    },
    answer: "A",
    rationale: "RR 21\u201324/min is a moderate-to-high-risk criterion; severe sepsis requires RR \u226525."
  },
  {
    id: 777,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Tubo-ovarian abscesses are a complication of puerperal sepsis that is:",
    options: {
      A: "Very common",
      B: "Rare",
      C: "Seen in 50% of cases",
      D: "The most common complication",
      E: "Preventable by antibiotics alone"
    },
    answer: "B",
    rationale: "Tubo-ovarian abscesses are a rare complication of puerperal sepsis."
  },
  {
    id: 778,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "The most important investigation for a woman with suspected puerperal genital infection and heavy bleeding is:",
    options: {
      A: "MRI of the pelvis",
      B: "Pelvic ultrasound to exclude retained products",
      C: "CT scan of abdomen",
      D: "D-dimer test",
      E: "Thyroid function tests"
    },
    answer: "B",
    rationale: "Pelvic ultrasound is used to exclude retained products, though debris/clots are common in normal postpartum uteri."
  },
  {
    id: 779,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Which of the following is NOT part of the 'Sepsis Six' bundle?",
    options: {
      A: "High-flow oxygen",
      B: "Blood cultures",
      C: "IV fluids",
      D: "IV antibiotics within 1 hour",
      E: "Lumbar puncture"
    },
    answer: "E",
    rationale: "Lumbar puncture is not part of the initial 1-hour sepsis bundle."
  },
  {
    id: 780,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "In puerperal sepsis, infection may spread directly into the myometrium and parametrium causing:",
    options: {
      A: "Salpingo-oophoritis",
      B: "Endometritis or parametritis (pelvic cellulitis)",
      C: "Cystitis",
      D: "Appendicitis",
      E: "Diverticulitis"
    },
    answer: "B",
    rationale: "Infection may spread into the myometrium and parametrium, causing endometritis or parametritis."
  },
  {
    id: 781,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Which investigation is most useful to detect retained products and pelvic abscess?",
    options: {
      A: "Chest X-ray",
      B: "Pelvic ultrasound",
      C: "Electrocardiogram",
      D: "Sputum culture",
      E: "Throat swab"
    },
    answer: "B",
    rationale: "Pelvic ultrasound can detect retained products and pelvic abscess."
  },
  {
    id: 782,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "The risk of postnatal infection is highest following which mode of delivery?",
    options: {
      A: "Normal vaginal delivery",
      B: "Operative vaginal birth",
      C: "Caesarean section",
      D: "Water birth",
      E: "Home birth"
    },
    answer: "C",
    rationale: "The risk is higher following caesarean section, preterm pre-labour rupture of membranes, operative vaginal births and manual removal of placenta."
  },
  {
    id: 783,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Which of the following is a moderate-to-high-risk criterion for sepsis?",
    options: {
      A: "Respiratory rate \u226525 breaths/minute",
      B: "Systolic BP 91\u2013100 mmHg",
      C: "Heart rate >130 bpm",
      D: "Not passed urine in past 18 hours",
      E: "Tympanic temperature <36\u00b0C"
    },
    answer: "B",
    rationale: "Systolic BP 91\u2013100 mmHg is a moderate-to-high-risk criterion."
  },
  {
    id: 784,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "",
    options: {
      A: "Endometritis",
      B: "Pneumonia",
      C: "Mastitis",
      D: "Pyelonephritis",
      E: "Deep vein thrombosis"
    },
    answer: "B",
    rationale: "Cough and purulent sputum suggest pneumonia."
  },
  {
    id: 785,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "",
    options: {
      A: "Endometritis",
      B: "Pneumonia",
      C: "Pyelonephritis",
      D: "Mastitis",
      E: "Tonsillitis"
    },
    answer: "C",
    rationale: "Dysuria and loin pain suggest pyelonephritis."
  },
  {
    id: 786,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "",
    options: {
      A: "Endometritis",
      B: "Pneumonia",
      C: "Mastitis or breast abscess",
      D: "Pyelonephritis",
      E: "Deep vein thrombosis"
    },
    answer: "C",
    rationale: "Painful engorged breasts suggest mastitis or breast abscess."
  },
  {
    id: 787,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "",
    options: {
      A: "Pneumonia",
      B: "Deep vein thrombosis",
      C: "Mastitis",
      D: "Endometritis",
      E: "Tonsillitis"
    },
    answer: "B",
    rationale: "Pelvic/calf pain and tenderness suggest deep vein thrombosis."
  },
  {
    id: 788,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "",
    options: {
      A: "Pneumonia only",
      B: "Pulmonary embolism",
      C: "Mastitis",
      D: "Pyelonephritis",
      E: "Tonsillitis"
    },
    answer: "B",
    rationale: "Chest pain and dyspnoea suggest pulmonary embolism."
  },
  {
    id: 789,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "",
    options: {
      A: "Deep vein thrombosis",
      B: "Meningitis",
      C: "Mastitis",
      D: "Pyelonephritis",
      E: "Endometritis"
    },
    answer: "B",
    rationale: "Headache and neck stiffness after neuraxial anaesthesia suggest meningitis."
  },
  {
    id: 790,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "The highest risk period in a woman's life for developing a psychiatric disorder is:",
    options: {
      A: "During pregnancy",
      B: "The post-partum period",
      C: "Menopause",
      D: "Adolescence",
      E: "Pre-menstrual phase"
    },
    answer: "B",
    rationale: "The post-partum period represents the highest risk period for developing a psychiatric disorder."
  },
  {
    id: 791,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "What percentage of maternal deaths reported by MBRRACE-UK 2017\u20132019 were from suicide?",
    options: {
      A: "1%",
      B: "3%",
      C: "5%",
      D: "10%",
      E: "15%"
    },
    answer: "C",
    rationale: "The 2021 MBRRACE-UK report on 2017\u20132019 noted 10 (5%) of 191 deaths were from suicide."
  },
  {
    id: 792,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Suicide during pregnancy and postpartum is characteristically:",
    options: {
      A: "Non-violent (e.g. overdose)",
      B: "Unusually violent (e.g. shootings, hangings)",
      C: "Rare",
      D: "Accidental",
      E: "Related to substance misuse only"
    },
    answer: "B",
    rationale: "Suicide during pregnancy is unusually violent, contrasting with less successful overdose attempts in younger women."
  },
  {
    id: 793,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Psychosocial factors play a major role in the aetiology of:",
    options: {
      A: "Puerperal psychosis",
      B: "Severe post-partum depressive illness",
      C: "Non-psychotic mild and moderate post-partum depressive illness",
      D: "Bipolar disorder unrelated to pregnancy",
      E: "Schizophrenia"
    },
    answer: "C",
    rationale: "Psychosocial factors play a major role in non-psychotic mild and moderate post-partum depressive illness."
  },
  {
    id: 794,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Family history predominates in the aetiology of:",
    options: {
      A: "Mild post-partum blues",
      B: "Puerperal psychosis and severe post-partum depressive illness",
      C: "Anxiety disorders",
      D: "Post-partum thyroiditis",
      E: "Obsessive-compulsive disorder"
    },
    answer: "B",
    rationale: "In puerperal psychosis and severe depressive illness, family history predominates, suggesting a biological basis."
  },
  {
    id: 795,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Which hormonal change is theorized to trigger dopamine receptor hypersensitivity causing severe mood disturbance?",
    options: {
      A: "Sudden rise in oestrogen",
      B: "Sudden fall in oestrogen post-partum",
      C: "Rise in progesterone",
      D: "Fall in prolactin",
      E: "Rise in cortisol"
    },
    answer: "B",
    rationale: "A plausible theory is that the sudden fall in oestrogen triggers hypersensitivity of certain dopamine receptors."
  },
  {
    id: 796,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Post-partum thyroiditis may present with:",
    options: {
      A: "Hyperthyroidism only",
      B: "Hypothyroidism with depression",
      C: "No symptoms",
      D: "Mania only",
      E: "Seizures"
    },
    answer: "B",
    rationale: "Depression is a characteristic feature of hypothyroidism from post-partum thyroiditis."
  },
  {
    id: 797,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "The 'pinks' following delivery are characterized by:",
    options: {
      A: "Depression and tearfulness",
      B: "Elevation of mood, excitement and overactivity in the first 24\u201348 hours",
      C: "Delusions and hallucinations",
      D: "Severe anxiety",
      E: "Insomnia for weeks"
    },
    answer: "B",
    rationale: "The 'pinks' describe elevated mood, excitement and overactivity in the first 24\u201348 hours."
  },
  {
    id: 798,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "The 'postnatal blues' occur in approximately what percentage of women?",
    options: {
      A: "20%",
      B: "40%",
      C: "60%",
      D: "80%",
      E: "100%"
    },
    answer: "D",
    rationale: "As many as 80% of women may experience the postnatal blues in the first 2 weeks."
  },
  {
    id: 799,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Which of the following is considered a normal postnatal psychological change?",
    options: {
      A: "Panic attacks",
      B: "Episodes of low mood lasting >2 weeks",
      C: "Fatigue and mild tearfulness in the first 2 weeks",
      D: "Suicidal thoughts",
      E: "Thoughts of self-harm"
    },
    answer: "C",
    rationale: "Fatigue, short temper, difficulty sleeping, depressed mood and tearfulness are common but usually mild and resolve spontaneously."
  },
  {
    id: 800,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Which of the following should NOT be considered normal postnatal psychological disruption?",
    options: {
      A: "Mild tearfulness",
      B: "Panic attacks",
      C: "Mild irritability",
      D: "Difficulty sleeping for a few nights",
      E: "Mild fatigue"
    },
    answer: "B",
    rationale: "Panic attacks, prolonged low mood, suicidal thoughts, self-harm and biological symptoms are not normal and require assessment."
  },
  {
    id: 801,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "NICE recommends that all women are asked about their mood at least how many times in the postpartum period?",
    options: {
      A: "Once",
      B: "Twice",
      C: "Three times",
      D: "Four times",
      E: "At every visit"
    },
    answer: "B",
    rationale: "NICE recommends all women are asked about mood at least twice, ideally at 6 weeks and 3\u20134 months."
  },
  {
    id: 802,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "The two NICE screening questions for mental health problems ask about:",
    options: {
      A: "Anxiety and panic",
      B: "Feeling down/depressed/hopeless and having little interest or pleasure in doing things",
      C: "Sleep and appetite",
      D: "Suicidal thoughts",
      E: "Obsessive thoughts about the baby"
    },
    answer: "B",
    rationale: "The two questions ask about feeling down/depressed/hopeless and having little interest or pleasure in doing things."
  },
  {
    id: 803,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Between 10% and 15% of women will suffer with some form of depression in the first year after delivery. What percentage satisfy criteria for mild major depressive illness?",
    options: {
      A: "At least 3%",
      B: "At least 7%",
      C: "At least 10%",
      D: "At least 15%",
      E: "At least 20%"
    },
    answer: "B",
    rationale: "At least 7% satisfy criteria for mild major depressive illness."
  },
  {
    id: 804,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Without treatment, what proportion of women with postnatal depression remain depressed at 1 year?",
    options: {
      A: "1 in 20",
      B: "1 in 10",
      C: "1 in 5",
      D: "1 in 3",
      E: "1 in 2"
    },
    answer: "B",
    rationale: "Without treatment, 1 in 10 remain depressed at 1 year."
  },
  {
    id: 805,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Women with a history of depression not related to pregnancy carry what risk of major post-partum depressive illness?",
    options: {
      A: "1:2",
      B: "1:3 to 1:5",
      C: "1:10",
      D: "1:20",
      E: "1:50"
    },
    answer: "B",
    rationale: "Those with a history of depression not related to pregnancy carry a 1:3 to 1:5 risk."
  },
  {
    id: 806,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Non-psychotic post-partum depression usually presents:",
    options: {
      A: "Within 24 hours",
      B: "Around 6 weeks postnatally",
      C: "At 3 months only",
      D: "Before delivery",
      E: "At 1 year"
    },
    answer: "B",
    rationale: "It usually presents later in the postnatal period, most commonly around 6 weeks."
  },
  {
    id: 807,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Which of the following is a risk factor for postnatal depressive illness?",
    options: {
      A: "Strong social support",
      B: "Past history of psychiatric illness",
      C: "Normal vaginal delivery of a healthy baby",
      D: "Advanced maternal age alone",
      E: "Breastfeeding success"
    },
    answer: "B",
    rationale: "Risk factors include past psychiatric illness, depression during pregnancy, caesarean section/fetal loss, social isolation, poor relationships, adverse life events and severe postnatal blues."
  },
  {
    id: 808,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Which treatment has demonstrated benefits in randomized trials for milder postnatal depressive disorders?",
    options: {
      A: "High-dose oestrogen",
      B: "Non-directive counselling from specially trained midwives and health visitors",
      C: "Progestogen therapy",
      D: "St John's wort alone",
      E: "Benzodiazepines"
    },
    answer: "B",
    rationale: "Randomized trials have demonstrated benefits of non-directive counselling from trained midwives and health visitors."
  },
  {
    id: 809,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "If pharmacotherapy is necessary for postnatal depression, which is appropriate?",
    options: {
      A: "Tricyclic antidepressants or SSRIs",
      B: "Lithium alone",
      C: "Progestogens",
      D: "High-dose oestrogen regimes",
      E: "Benzodiazepines alone"
    },
    answer: "A",
    rationale: "Tricyclic antidepressants or SSRIs are appropriate; there is good evidence for safety of tricyclics in breastfeeding."
  },
  {
    id: 810,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Which statement about treating postnatal depression with progestogens is TRUE?",
    options: {
      A: "It is supported by strong evidence",
      B: "It may be harmful if it delays other effective treatments",
      C: "It is first-line therapy",
      D: "It is safer than SSRIs",
      E: "It should be used in all cases"
    },
    answer: "B",
    rationale: "There is no good evidence to support progestogens for postnatal depression, and it may delay other effective treatments."
  },
  {
    id: 811,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Puerperal psychosis affects approximately:",
    options: {
      A: "1:50 women",
      B: "1:100 women",
      C: "1:500 to 1:1,000 women",
      D: "1:5,000 women",
      E: "1:10,000 women"
    },
    answer: "C",
    rationale: "Puerperal psychosis affects between 1:500 and 1:1,000 women after delivery."
  },
  {
    id: 812,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Puerperal psychosis rarely presents before:",
    options: {
      A: "24 hours",
      B: "The third post-partum day",
      C: "6 weeks",
      D: "3 months",
      E: "1 year"
    },
    answer: "B",
    rationale: "It rarely presents before the third post-partum day, most commonly the fifth."
  },
  {
    id: 813,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Which is a risk factor for puerperal psychosis?",
    options: {
      A: "Previous history of puerperal psychosis",
      B: "Previous severe non-post-partum depressive illness",
      C: "Family history of bipolar disorder",
      D: "All of the above",
      E: "None of the above"
    },
    answer: "D",
    rationale: "All listed are risk factors for puerperal psychosis."
  },
  {
    id: 814,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Which symptom is characteristic of puerperal psychosis?",
    options: {
      A: "Mild fatigue",
      B: "Restless agitation, insomnia, perplexity, delusions/hallucinations",
      C: "Mild tearfulness only",
      D: "Slight appetite reduction",
      E: "Mild anxiety about breastfeeding"
    },
    answer: "B",
    rationale: "Symptoms include restless agitation, insomnia, perplexity, fear, delusions, hallucinations and failure to eat/drink."
  },
  {
    id: 815,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Post-partum psychosis is managed by:",
    options: {
      A: "Observation at home",
      B: "Urgent referral to a psychiatrist, usually admission to a mother-and-baby unit",
      C: "GP follow-up in 2 weeks",
      D: "Self-help groups alone",
      E: "Discontinuing all medications"
    },
    answer: "B",
    rationale: "It is a psychiatric emergency requiring urgent referral and usually admission to a mother-and-baby unit."
  },
  {
    id: 816,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "The risk of recurrence of puerperal psychosis in a future pregnancy is approximately:",
    options: {
      A: "1 in 10",
      B: "1 in 2",
      C: "1 in 5",
      D: "1 in 20",
      E: "1 in 100"
    },
    answer: "B",
    rationale: "The risk of recurrence is approximately 1 in 2, particularly if the next pregnancy occurs within 2 years."
  },
  {
    id: 817,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Women with a previous history of puerperal psychosis should be considered for prophylactic:",
    options: {
      A: "Oestrogen",
      B: "Lithium started on the first post-partum day",
      C: "Progesterone",
      D: "Haloperidol for 1 week only",
      E: "Sertraline"
    },
    answer: "B",
    rationale: "Women with previous puerperal psychosis should be considered for prophylactic lithium started on the first post-partum day."
  },
  {
    id: 818,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Treatments for puerperal psychosis include all EXCEPT:",
    options: {
      A: "Benzodiazepines",
      B: "Antipsychotics",
      C: "Lithium carbonate",
      D: "Electroconvulsive therapy",
      E: "Progestogens"
    },
    answer: "E",
    rationale: "Treatments include benzodiazepines, antipsychotics, lithium and ECT; progestogens are not used."
  },
  {
    id: 819,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Cognitive-behavioural therapy may limit the need for drug treatment in:",
    options: {
      A: "Puerperal psychosis",
      B: "Severe depression",
      C: "Anxiety disorders",
      D: "Bipolar disorder",
      E: "Post-partum thyroiditis"
    },
    answer: "C",
    rationale: "Cognitive-behavioural therapy may limit the need for drug treatment in anxiety disorders."
  },
  {
    id: 820,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Neonatal withdrawal effects are evident in babies born to women who have used regular higher doses of:",
    options: {
      A: "SSRIs",
      B: "Tricyclic antidepressants",
      C: "Benzodiazepines",
      D: "Lithium",
      E: "Antipsychotics"
    },
    answer: "C",
    rationale: "Neonatal withdrawal effects are evident in babies born to women using regular higher doses of benzodiazepines."
  },
  {
    id: 821,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Breastfeeding may help reduce the severity of neonatal withdrawal from benzodiazepines because:",
    options: {
      A: "It prevents drug absorption",
      B: "Small amounts reach breast milk and may ease withdrawal",
      C: "It speeds drug metabolism",
      D: "It blocks drug receptors",
      E: "It dilutes the drug in plasma"
    },
    answer: "B",
    rationale: "Breastfeeding may help reduce severity as small amounts do reach breast milk."
  },
  {
    id: 822,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Checking thyroid function is important in women with milder depressive symptoms in the first year following childbirth because:",
    options: {
      A: "All depressed women have thyroid disease",
      B: "Correction with thyroid supplements may elevate mood",
      C: "It is a NICE mandatory screening test",
      D: "It predicts suicide risk",
      E: "It diagnoses bipolar disorder"
    },
    answer: "B",
    rationale: "Hypothyroidism from post-partum thyroiditis may present with depression; correction may elevate mood."
  },
  {
    id: 823,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Which of the following is an MBRRACE-UK 'red flag' presentation requiring immediate referral?",
    options: {
      A: "Mild tearfulness",
      B: "New thoughts or acts of violent self-harm",
      C: "Difficulty sleeping for 2 nights",
      D: "Mild anxiety",
      E: "Reduced appetite for 1 day"
    },
    answer: "B",
    rationale: "Red flags include recent significant change in mental state, new thoughts/acts of violent self-harm, and persistent expressions of incompetency as a mother."
  },
  {
    id: 824,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Severe postnatal affective disorders usually present:",
    options: {
      A: "Later than milder forms",
      B: "Earlier than milder forms",
      C: "Only after 6 months",
      D: "Only in multiparous women",
      E: "Only after stopping breastfeeding"
    },
    answer: "B",
    rationale: "Severe postnatal affective disorders usually present earlier than milder forms."
  },
  {
    id: 825,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "The Edinburgh Postnatal Depression Scale is a:",
    options: {
      A: "5-question tool",
      B: "10-question validated questionnaire",
      C: "20-question tool",
      D: "Blood test",
      E: "Imaging modality"
    },
    answer: "B",
    rationale: "The Edinburgh Postnatal Depression Scale is a 10-question validated tool."
  },
  {
    id: 826,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Women deemed at highest risk of postnatal depressive illness should be under close surveillance by:",
    options: {
      A: "A GP only",
      B: "A specialist community psychiatric nurse",
      C: "A midwife only",
      D: "A health visitor only",
      E: "No one, as it is normal"
    },
    answer: "B",
    rationale: "Women at highest risk should be under close surveillance by a specialist community psychiatric nurse."
  },
  {
    id: 827,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Which of the following is NOT a symptom of severe postnatal depressive disorder?",
    options: {
      A: "Early-morning wakening",
      B: "Poor appetite",
      C: "Diurnal mood variation (worse in mornings)",
      D: "Euphoria and increased energy",
      E: "Thoughts of self-harm/suicide"
    },
    answer: "D",
    rationale: "Severe symptoms include early-morning wakening, poor appetite, diurnal mood variation, low energy, loss of enjoyment, guilt, anxiety and thoughts of self-harm; euphoria is not a feature."
  },
  {
    id: 828,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "The 6-week postnatal check is an ideal opportunity to detect:",
    options: {
      A: "Puerperal psychosis",
      B: "Early postpartum non-psychotic depression",
      C: "The postnatal blues",
      D: "Uterine involution completion",
      E: "Secondary PPH"
    },
    answer: "B",
    rationale: "The 6-week postnatal check is an ideal opportunity to detect early postpartum non-psychotic depression, though signs are often missed."
  },
  {
    id: 829,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Which biological symptom is suggestive of severe depression rather than 'baby blues'?",
    options: {
      A: "Mild fatigue",
      B: "Poor appetite and early wakening",
      C: "Mild irritability",
      D: "Occasional tearfulness",
      E: "Mild insomnia"
    },
    answer: "B",
    rationale: "Biological symptoms such as poor appetite and early wakening suggest more severe depression."
  },
  {
    id: 830,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "The breast is comprised of how many functional units arranged radially from the nipple?",
    options: {
      A: "5\u201310",
      B: "10\u201315",
      C: "15\u201325",
      D: "25\u201335",
      E: "35\u201350"
    },
    answer: "C",
    rationale: "The breast is comprised of 15\u201325 functional units arranged radially from the nipple."
  },
  {
    id: 831,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Each functional unit of the breast is made up of:",
    options: {
      A: "A single lactiferous duct only",
      B: "A lactiferous duct, mammary gland lobule and alveoli",
      C: "Alveoli only",
      D: "Adipose tissue only",
      E: "Lymph nodes only"
    },
    answer: "B",
    rationale: "Each unit is made up of a lactiferous duct, a mammary gland lobule and alveoli."
  },
  {
    id: 832,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Montgomery's tubercles are:",
    options: {
      A: "Lymph nodes in the axilla",
      B: "Sebaceous glands in the areola that become prominent during pregnancy",
      C: "Milk-producing alveoli",
      D: "Nerve endings in the nipple",
      E: "Ducts in the breast tissue"
    },
    answer: "B",
    rationale: "Montgomery's tubercles are sebaceous glands in the areola that become prominent during pregnancy."
  },
  {
    id: 833,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "The lactiferous ducts dilate to form a lactiferous sinus before:",
    options: {
      A: "Entering the lymphatic system",
      B: "Converging to open in the nipple",
      C: "Joining the axillary vein",
      D: "Entering the chest wall",
      E: "Connecting to the posterior pituitary"
    },
    answer: "B",
    rationale: "The lactiferous ducts dilate to form a lactiferous sinus before converging to open in the nipple."
  },
  {
    id: 834,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Which hormone stimulates proliferation of the lactiferous ducts?",
    options: {
      A: "Progesterone",
      B: "Prolactin",
      C: "Oestrogens",
      D: "Oxytocin",
      E: "Human placental lactogen"
    },
    answer: "C",
    rationale: "Oestrogens stimulate proliferation of the lactiferous ducts."
  },
  {
    id: 835,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Which hormone is responsible for the development of the mammary lobules?",
    options: {
      A: "Oestrogen",
      B: "Progesterone",
      C: "Prolactin",
      D: "Oxytocin",
      E: "Cortisol"
    },
    answer: "B",
    rationale: "Progesterone is responsible for the development of the mammary lobules."
  },
  {
    id: 836,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Colostrum can be expressed as early as:",
    options: {
      A: "4 weeks of pregnancy",
      B: "8 weeks of pregnancy",
      C: "12 weeks of pregnancy",
      D: "16 weeks of pregnancy",
      E: "24 weeks of pregnancy"
    },
    answer: "D",
    rationale: "Colostrum can be expressed as early as the 16th week of pregnancy."
  },
  {
    id: 837,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Compared with breast milk, colostrum has:",
    options: {
      A: "Less protein",
      B: "More sugar and fat",
      C: "A high concentration of proteins, particularly immunoglobulin A",
      D: "No immunological value",
      E: "Equal fat content"
    },
    answer: "C",
    rationale: "Colostrum has a high concentration of proteins, mainly globulins particularly IgA, but less sugar and fat than breast milk."
  },
  {
    id: 838,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Which immunoglobulin plays an important role in protection against infection in colostrum?",
    options: {
      A: "IgG",
      B: "IgM",
      C: "IgA",
      D: "IgE",
      E: "IgD"
    },
    answer: "C",
    rationale: "IgA plays an important role in protection against infection in colostrum."
  },
  {
    id: 839,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Compared with cow's milk, breast milk provides:",
    options: {
      A: "Less energy",
      B: "More protein",
      C: "More fat and lactose",
      D: "Higher mineral content (particularly sodium)",
      E: "Less water"
    },
    answer: "C",
    rationale: "Breast milk provides slightly more energy, less protein but more fat and lactose than cow's milk."
  },
  {
    id: 840,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "The major protein in breast milk is:",
    options: {
      A: "Caseinogen",
      B: "Lactalbumin",
      C: "Lactoglobulin",
      D: "Whey protein",
      E: "Gluten"
    },
    answer: "B",
    rationale: "Lactalbumin is the major protein in breast milk; caseinogen forms 90% of protein in cow's milk."
  },
  {
    id: 841,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Cow's milk has a much higher mineral content, particularly sodium, which can be dangerous if given to a baby who is:",
    options: {
      A: "Jaundiced",
      B: "Dehydrated from gastroenteritis",
      C: "Premature",
      D: "Hypoglycaemic",
      E: "Polycythaemic"
    },
    answer: "B",
    rationale: "High sodium in cow's milk can be dangerous if given to a dehydrated baby with gastroenteritis."
  },
  {
    id: 842,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Breast milk contains small amounts of all EXCEPT which immunoglobulin?",
    options: {
      A: "IgA",
      B: "IgM",
      C: "IgG",
      D: "IgE",
      E: "IgD"
    },
    answer: "D",
    rationale: "Breast milk contains IgA, IgM and IgG; IgE and IgD are not mentioned as present."
  },
  {
    id: 843,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Iron absorption from breast milk is approximately:",
    options: {
      A: "10%",
      B: "30%",
      C: "50%",
      D: "75%",
      E: "90%"
    },
    answer: "D",
    rationale: "Iron absorption from breast milk is approximately 75%, compared with 30% from cow's milk and 10% from iron-supplemented infant formula."
  },
  {
    id: 844,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "The improved bioavailability of iron in breast milk may be related to:",
    options: {
      A: "Vitamin C content",
      B: "Lactoferrin, an iron-binding glycoprotein",
      C: "High calcium content",
      D: "Low phosphate content",
      E: "High protein content"
    },
    answer: "B",
    rationale: "Lactoferrin is an iron-binding glycoprotein that may improve bioavailability and inhibits bacterial growth."
  },
  {
    id: 845,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "With the exception of which vitamin, all other vitamins are found in breast milk?",
    options: {
      A: "Vitamin A",
      B: "Vitamin D",
      C: "Vitamin K",
      D: "Vitamin B12",
      E: "Vitamin C"
    },
    answer: "C",
    rationale: "With the exception of vitamin K, all other vitamins are found in breast milk."
  },
  {
    id: 846,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Prolactin is produced from the:",
    options: {
      A: "Posterior pituitary",
      B: "Anterior pituitary",
      C: "Hypothalamus",
      D: "Thyroid",
      E: "Adrenal cortex"
    },
    answer: "B",
    rationale: "Prolactin is produced from the anterior pituitary."
  },
  {
    id: 847,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Peak levels of prolactin are reached within how many minutes of suckling?",
    options: {
      A: "10 minutes",
      B: "20 minutes",
      C: "30 minutes",
      D: "45 minutes",
      E: "60 minutes"
    },
    answer: "D",
    rationale: "Peak levels are reached within 45 minutes of suckling."
  },
  {
    id: 848,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Prolactin levels return to normal immediately after:",
    options: {
      A: "Delivery",
      B: "Weaning",
      C: "The first week",
      D: "The first month",
      E: "6 months"
    },
    answer: "B",
    rationale: "Prolactin levels return to normal immediately after weaning and in non-breastfeeding mothers."
  },
  {
    id: 849,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Which drug can arrest lactation by inhibiting prolactin?",
    options: {
      A: "Oxytocin",
      B: "Bromocriptine",
      C: "Metoclopramide",
      D: "Domperidone",
      E: "Cabergoline"
    },
    answer: "B",
    rationale: "Lactation can be arrested with bromocriptine, a dopamine agonist that inhibits prolactin."
  },
  {
    id: 850,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "The milk-ejection or let-down reflex is initiated by:",
    options: {
      A: "Prolactin release from the anterior pituitary",
      B: "Suckling stimulating pulsatile release of oxytocin from the posterior pituitary",
      C: "Oestrogen surge",
      D: "Progesterone withdrawal",
      E: "Cortisol release"
    },
    answer: "B",
    rationale: "Suckling stimulates the pulsatile release of oxytocin from the posterior pituitary, causing milk ejection."
  },
  {
    id: 851,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Oxytocin release can be stimulated by all EXCEPT:",
    options: {
      A: "Visual stimuli (seeing the baby)",
      B: "Olfactory stimuli (smell of the baby)",
      C: "Auditory stimuli (hearing the baby cry)",
      D: "Stress",
      E: "Touching the baby"
    },
    answer: "D",
    rationale: "Oxytocin release can be inhibited by stress, though stimulated by visual, olfactory and auditory cues."
  },
  {
    id: 852,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Oxytocin stimulates uterine contractions, giving rise to:",
    options: {
      A: "Primary postpartum haemorrhage",
      B: "The 'after pains' of breastfeeding",
      C: "Menstrual cramps",
      D: "Preterm labour",
      E: "Miscarriage"
    },
    answer: "B",
    rationale: "Oxytocin stimulates uterine contractions causing the 'after pains' during breastfeeding."
  },
  {
    id: 853,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "The most common reasons mothers give for abandoning breastfeeding are:",
    options: {
      A: "Inadequate milk production and sore/cracked nipples",
      B: "Baby refusing to latch",
      C: "Maternal medication",
      D: "Return to work",
      E: "Family pressure"
    },
    answer: "A",
    rationale: "The most common reasons are inadequate milk production and sore and cracked nipples."
  },
  {
    id: 854,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Correct positioning for breastfeeding requires the baby's mouth to be placed over:",
    options: {
      A: "The nipple only",
      B: "The nipple and areola",
      C: "The areola only",
      D: "The breast tissue lateral to the nipple",
      E: "The Montgomery's tubercles only"
    },
    answer: "B",
    rationale: "The mouth should be placed over the nipple and areola so suction draws breast tissue into a teat."
  },
  {
    id: 855,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "When properly attached, breastfeeding should be:",
    options: {
      A: "Painful for the first 5 minutes",
      B: "Pain free",
      C: "Uncomfortable but tolerable",
      D: "Painful throughout",
      E: "Only comfortable after let-down"
    },
    answer: "B",
    rationale: "When the baby is properly attached, breastfeeding should be pain free."
  },
  {
    id: 856,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "The use of creams and ointments for cracked nipples has been shown to be:",
    options: {
      A: "Highly beneficial",
      B: "Moderately beneficial",
      C: "Not beneficial",
      D: "Essential",
      E: "Superior to correct positioning"
    },
    answer: "C",
    rationale: "The use of creams and ointments for cracked nipples has not been shown to be beneficial."
  },
  {
    id: 857,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Supplementary feeds of formula, glucose or water to breastfed infants should be discouraged because:",
    options: {
      A: "They provide better nutrition",
      B: "They increase the risk of total abandonment of breastfeeding",
      C: "They are cheaper",
      D: "They prevent jaundice",
      E: "They improve maternal rest"
    },
    answer: "B",
    rationale: "Supplementary feeds increase the risk of total abandonment of breastfeeding."
  },
  {
    id: 858,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Test-weighing infants before and after a feed to establish milk intake has no role in:",
    options: {
      A: "Preterm infants",
      B: "Sick infants",
      C: "Healthy babies",
      D: "Twins",
      E: "Infants of diabetic mothers"
    },
    answer: "C",
    rationale: "Test-weighing has no role in healthy babies but may be used by specialists for poor weight gain."
  },
  {
    id: 859,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Which drug is contraindicated in breastfeeding at doses of 300 mg or more?",
    options: {
      A: "Paracetamol",
      B: "Ibuprofen",
      C: "Aspirin",
      D: "Amoxicillin",
      E: "Metronidazole"
    },
    answer: "C",
    rationale: "Aspirin at doses of 300 mg or more is contraindicated in breastfeeding."
  },
  {
    id: 860,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Which of the following drugs requires breastfeeding to be discontinued?",
    options: {
      A: "Amiodarone",
      B: "Paracetamol",
      C: "Ibuprofen",
      D: "Penicillin",
      E: "Salbutamol"
    },
    answer: "A",
    rationale: "Amiodarone is contraindicated and breastfeeding should be discontinued."
  },
  {
    id: 861,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Which drug is safe in usual dosage during breastfeeding?",
    options: {
      A: "Lithium",
      B: "Carbimazole",
      C: "Low-dose aspirin",
      D: "Anticancer drugs",
      E: "Radioactive substances"
    },
    answer: "C",
    rationale: "Low-dose aspirin, paracetamol, ibuprofen, heparin, penicillins and many other commonly used drugs are safe."
  },
  {
    id: 862,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Which drug should be used with caution in breastfeeding because it may cause neonatal side effects?",
    options: {
      A: "Penicillin",
      B: "Diazepam",
      C: "Paracetamol",
      D: "Erythromycin",
      E: "Salbutamol"
    },
    answer: "B",
    rationale: "Benzodiazepines (e.g. diazepam), psychiatric drugs and anticonvulsants may cause neonatal side effects."
  },
  {
    id: 863,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Which drug should be monitored for causing jaundice in the breastfed infant?",
    options: {
      A: "Ampicillin",
      B: "Sulphonamides",
      C: "Penicillin",
      D: "Erythromycin",
      E: "Metformin"
    },
    answer: "B",
    rationale: "Sulphonamides, dapsone, cotrimoxazole and sulphadoxine/pyrimethamine require monitoring for jaundice."
  },
  {
    id: 864,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "Which drug may inhibit lactation and should be avoided or used with caution?",
    options: {
      A: "Oestrogens, including oestrogen-containing contraceptives",
      B: "Progesterone-only pill",
      C: "Ibuprofen",
      D: "Paracetamol",
      E: "Iron supplements"
    },
    answer: "A",
    rationale: "Oestrogens and thiazide diuretics may inhibit lactation."
  },
  {
    id: 865,
    chapterId: 15,
    chapterName: "Puerperium",
    question: "In resource-rich settings, HIV-positive women are advised:",
    options: {
      A: "To breastfeed exclusively",
      B: "Not to breastfeed",
      C: "To mixed feed",
      D: "To breastfeed for 3 months only",
      E: "To take no antiretrovirals and breastfeed"
    },
    answer: "B",
    rationale: "In resource-rich settings, HIV-positive women are advised not to breastfeed."
  },
  {
    id: 866,
    chapterId: 16,
    chapterName: "Neonates",
    question: "The word neonatology was first coined in:",
    options: {
      A: "1940",
      B: "1950",
      C: "1960",
      D: "1970",
      E: "1980"
    },
    answer: "C",
    rationale: "The word neonatology was first coined in 1960."
  },
  {
    id: 867,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Mortality for babies delivered at 1 kg in the 1960s was:",
    options: {
      A: "50%",
      B: "75%",
      C: "95%",
      D: "25%",
      E: "10%"
    },
    answer: "C",
    rationale: "Mortality for babies delivered at 1 kg in the 1960s was 95%, whereas today survival is 95%."
  },
  {
    id: 868,
    chapterId: 16,
    chapterName: "Neonates",
    question: "The fetal lungs are filled with:",
    options: {
      A: "Air",
      B: "Liquid",
      C: "Surfactant only",
      D: "Mucus",
      E: "Amniotic fluid"
    },
    answer: "B",
    rationale: "The fetal lungs are liquid filled; pulmonary blood flow is very low and no gas exchange occurs."
  },
  {
    id: 869,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Oxygenated blood in the fetus is provided by:",
    options: {
      A: "The lungs",
      B: "The placenta",
      C: "The ductus arteriosus",
      D: "The foramen ovale",
      E: "The coronary vessels"
    },
    answer: "B",
    rationale: "Oxygenated blood is provided by the placenta, travelling via the umbilical vein."
  },
  {
    id: 870,
    chapterId: 16,
    chapterName: "Neonates",
    question: "In fetal circulation, oxygenated blood travels via the umbilical vein to the ductus venosus into the:",
    options: {
      A: "Left ventricle",
      B: "Right atrium",
      C: "Pulmonary artery",
      D: "Aorta",
      E: "Inferior vena cava"
    },
    answer: "B",
    rationale: "Oxygenated blood travels via the umbilical vein to the ductus venosus into the right atrium, preferentially across the foramen ovale."
  },
  {
    id: 871,
    chapterId: 16,
    chapterName: "Neonates",
    question: "When the cord is clamped at birth, the infant must derive oxygenated blood from:",
    options: {
      A: "The placenta",
      B: "The lungs",
      C: "The ductus arteriosus",
      D: "The foramen ovale",
      E: "The coronary vessels"
    },
    answer: "B",
    rationale: "Now the infant has to derive oxygenated blood from the lungs; lung fluid must be cleared."
  },
  {
    id: 872,
    chapterId: 16,
    chapterName: "Neonates",
    question: "The three phases of respiratory adaptation at birth include all EXCEPT:",
    options: {
      A: "Airway liquid clearance",
      B: "Lung fluid within the interstitial tissue compartment",
      C: "Gas exchange",
      D: "Surfactant synthesis",
      E: "Fluid clearance via lymphatics"
    },
    answer: "D",
    rationale: "Three phases: airway liquid clearance, interstitial fluid compartment, and gas exchange. Surfactant synthesis is not one of the three phases."
  },
  {
    id: 873,
    chapterId: 16,
    chapterName: "Neonates",
    question: "The greatest removal of lung fluid occurs with:",
    options: {
      A: "Cord clamping",
      B: "The onset of breathing",
      C: "Administration of surfactant",
      D: "Chest compressions",
      E: "Maternal pushing"
    },
    answer: "B",
    rationale: "The greatest removal of lung fluid occurs with the onset of breathing when clearance occurs from proximal to distal airways."
  },
  {
    id: 874,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Transient tachypnoea of the newborn (TTN) serves as the basis for understanding which phase of respiratory adaptation?",
    options: {
      A: "Airway liquid clearance",
      B: "Interstitial tissue compartment fluid",
      C: "Gas exchange",
      D: "Surfactant deficiency",
      E: "Pulmonary hypertension"
    },
    answer: "B",
    rationale: "Fluid in the interstitial compartment can re-enter alveoli, serving as the basis for TTN."
  },
  {
    id: 875,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Grunting in the newborn contributes to:",
    options: {
      A: "Increased airway resistance",
      B: "Reduction of fluid re-entry into alveoli by increasing intra-alveolar pressure",
      C: "Decreased surfactant production",
      D: "Increased pulmonary vascular resistance",
      E: "Closure of the ductus arteriosus"
    },
    answer: "B",
    rationale: "Grunting partially closes the glottis to increase intra-alveolar pressure, contributing to reduction of fluid re-entry."
  },
  {
    id: 876,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Surfactant production increases with:",
    options: {
      A: "Decreasing gestational age",
      B: "Advancing gestational age and is augmented by labour",
      C: "Maternal diabetes",
      D: "Premature rupture of membranes",
      E: "Chorioamnionitis"
    },
    answer: "B",
    rationale: "Surfactant production increases with advancing gestational age and is augmented by labour."
  },
  {
    id: 877,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Lung aeration results in:",
    options: {
      A: "An increase in pulmonary vascular resistance",
      B: "A decrease in pulmonary vascular resistance and an increase in pulmonary blood flow",
      C: "Closure of the foramen ovale immediately",
      D: "Increased systemic vascular resistance",
      E: "Decreased left ventricular volume"
    },
    answer: "B",
    rationale: "Lung aeration decreases pulmonary vascular resistance and increases pulmonary blood flow."
  },
  {
    id: 878,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Immediate cord clamping results in:",
    options: {
      A: "Increased blood return via the umbilical vein",
      B: "Decreased systemic vascular resistance",
      C: "Increased systemic vascular resistance and reduced blood return to the right atrium",
      D: "Increased left ventricular volume",
      E: "Decreased pulmonary vascular resistance"
    },
    answer: "C",
    rationale: "Immediate clamping increases systemic vascular resistance and reduces blood return via the umbilical vein."
  },
  {
    id: 879,
    chapterId: 16,
    chapterName: "Neonates",
    question: "The timing of cord clamping should occur at least:",
    options: {
      A: "Before delivery of the shoulders",
      B: "Following initiation of spontaneous breathing or adequate ventilation",
      C: "After 5 minutes regardless of breathing",
      D: "Before the first cry",
      E: "Immediately after birth"
    },
    answer: "B",
    rationale: "Cord clamping should occur at least following initiation of spontaneous breathing or adequate ventilation."
  },
  {
    id: 880,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Which statement about newborn resuscitation is TRUE?",
    options: {
      A: "Most infants require extensive resuscitation",
      B: "The majority transition with minimal input required",
      C: "Chest compressions are commonly needed",
      D: "Adrenaline is routinely given",
      E: "Intubation is required for all"
    },
    answer: "B",
    rationale: "The majority of infants will transition with minimal input required."
  },
  {
    id: 881,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Newborn Life Support (NLS) is the training programme used in:",
    options: {
      A: "The USA",
      B: "Australia",
      C: "The UK",
      D: "Canada",
      E: "India"
    },
    answer: "C",
    rationale: "NLS is the training programme used in the UK."
  },
  {
    id: 882,
    chapterId: 16,
    chapterName: "Neonates",
    question: "The key element of all newborn resuscitation programmes is:",
    options: {
      A: "Chest compressions",
      B: "Adrenaline administration",
      C: "Effective mask ventilation to inflate the lungs",
      D: "Immediate intubation",
      E: "Umbilical vein catheterization"
    },
    answer: "C",
    rationale: "The key element is effective mask ventilation to inflate the lungs and facilitate transition."
  },
  {
    id: 883,
    chapterId: 16,
    chapterName: "Neonates",
    question: "",
    options: {
      A: "Had no effect on mortality",
      B: "Reduced early neonatal mortality",
      C: "Increased neurodevelopmental outcomes",
      D: "Decreased birth asphyxia rates to zero",
      E: "Were harmful"
    },
    answer: "B",
    rationale: "A meta-analysis found that training programmes reduced early neonatal mortality."
  },
  {
    id: 884,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Simulation in newborn resuscitation training is defined as:",
    options: {
      A: "A technology using high-fidelity mannequins only",
      B: "A technique to replace or amplify real experiences with guided experiences",
      C: "Only for advanced practitioners",
      D: "Only for rare events like chest compressions",
      E: "Not necessary for basic skills"
    },
    answer: "B",
    rationale: "Simulation is a technique to replace or amplify real experiences with guided experiences that evoke substantial aspects of the real world."
  },
  {
    id: 885,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Joint simulation sessions including obstetrical and neonatal personnel should address all EXCEPT:",
    options: {
      A: "Shoulder dystocia",
      B: "Placental abruption",
      C: "Extreme preterm deliveries",
      D: "Routine term vaginal delivery",
      E: "Management of extreme preterm infants with delayed cord clamping"
    },
    answer: "D",
    rationale: "Joint sessions should address emergency scenarios such as shoulder dystocia, placental abruption and extreme preterm deliveries."
  },
  {
    id: 886,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Infrequent interventions such as chest compressions and adrenaline administration highlight the importance of:",
    options: {
      A: "Avoiding them entirely",
      B: "Adequate simulation training",
      C: "Only theoretical knowledge",
      D: "Observing senior staff once",
      E: "Practicing on real babies"
    },
    answer: "B",
    rationale: "These low-occurrence, high-stress events highlight the importance of adequate simulation training."
  },
  {
    id: 887,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Delayed cord clamping for at least how many seconds is recommended for extreme preterm infants?",
    options: {
      A: "30 seconds",
      B: "45 seconds",
      C: "60 seconds",
      D: "90 seconds",
      E: "120 seconds"
    },
    answer: "C",
    rationale: "Delayed cord clamping for at least 60 seconds should occur for extreme preterm infants."
  },
  {
    id: 888,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Prevention of hypothermia in extreme preterm infants should include:",
    options: {
      A: "Wrapping in cotton blankets only",
      B: "Use of a plastic bag",
      C: "Immediate immersion in warm water",
      D: "Exposure to room air",
      E: "Ice packs"
    },
    answer: "B",
    rationale: "Prevention of hypothermia with the use of a plastic bag is central to newborn stabilization."
  },
  {
    id: 889,
    chapterId: 16,
    chapterName: "Neonates",
    question: "CPAP with a face mask via a T-piece device is used to:",
    options: {
      A: "Deliver surfactant",
      B: "Ensure lung inflation",
      C: "Measure blood pressure",
      D: "Administer oxygen only",
      E: "Check heart rate"
    },
    answer: "B",
    rationale: "CPAP with a face mask via a T-piece device ensures lung inflation during stabilization."
  },
  {
    id: 890,
    chapterId: 16,
    chapterName: "Neonates",
    question: "",
    options: {
      A: "Hypothermia",
      B: "Effective stabilization",
      C: "Sepsis",
      D: "Anaemia",
      E: "Acidosis"
    },
    answer: "B",
    rationale: "A rising heart rate is a reflection of effective stabilization."
  },
  {
    id: 891,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Some centres avoid endotracheal tube placement and instead insert a fine bore catheter to provide surfactant while the baby is:",
    options: {
      A: "Apnoeic",
      B: "Spontaneously breathing and in receipt of CPAP",
      C: "Under general anaesthesia",
      D: "Paralysed",
      E: "Hypothermic"
    },
    answer: "B",
    rationale: "The LISA technique uses a fine bore catheter to provide surfactant while the baby is spontaneously breathing and in receipt of CPAP."
  },
  {
    id: 892,
    chapterId: 16,
    chapterName: "Neonates",
    question: "The vast majority of term babies are managed on:",
    options: {
      A: "The neonatal intensive care unit",
      B: "The special care baby unit",
      C: "The postnatal ward",
      D: "The delivery room",
      E: "At home immediately"
    },
    answer: "C",
    rationale: "The vast majority of term babies are managed on the postnatal ward and do not require SCBU or NICU admission."
  },
  {
    id: 893,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Postnatal care is based on:",
    options: {
      A: "A fixed protocol for all babies",
      B: "Risk assessment and stratification into groups",
      C: "Only maternal preference",
      D: "Only gestational age",
      E: "Only birth weight"
    },
    answer: "B",
    rationale: "Postnatal care is based on a risk assessment and stratification into groups that guide management."
  },
  {
    id: 894,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Targeted care is aimed at babies at risk of conditions such as:",
    options: {
      A: "Jaundice only",
      B: "Infection or hypoglycaemia",
      C: "Polycythaemia only",
      D: "Anaemia only",
      E: "None of the above"
    },
    answer: "B",
    rationale: "Targeted care is aimed at babies at risk of conditions such as infection or hypoglycaemia."
  },
  {
    id: 895,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Every newborn infant should have a full detailed newborn examination:",
    options: {
      A: "Within 1 hour of birth",
      B: "Prior to discharge",
      C: "At 6 weeks only",
      D: "Only if symptomatic",
      E: "By the health visitor"
    },
    answer: "B",
    rationale: "Every newborn infant should have a full detailed newborn examination prior to discharge."
  },
  {
    id: 896,
    chapterId: 16,
    chapterName: "Neonates",
    question: "The newborn examination is typically performed by:",
    options: {
      A: "Only consultant paediatricians",
      B: "A medical doctor or advanced nurse practitioners/neonatal nurses/midwives specifically trained",
      C: "Only obstetricians",
      D: "Only GPs",
      E: "Only midwives"
    },
    answer: "B",
    rationale: "The examination is typically performed by a medical doctor but can be done by trained advanced practitioners, nurses or midwives."
  },
  {
    id: 897,
    chapterId: 16,
    chapterName: "Neonates",
    question: "During the newborn examination, the head circumference, weight and length should be:",
    options: {
      A: "Recorded only in the notes",
      B: "Plotted appropriately for the particular gestational age",
      C: "Compared only with term standards",
      D: "Ignored if the baby looks well",
      E: "Measured at 6 weeks only"
    },
    answer: "B",
    rationale: "Head circumference, weight and length should be plotted appropriately for the particular gestational age."
  },
  {
    id: 898,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Fundoscopy in the newborn examination ensures:",
    options: {
      A: "Cataracts are present",
      B: "Bilateral red reflexes are present",
      C: "Glaucoma is detected",
      D: "Retinal detachment is ruled out",
      E: "Colour vision is normal"
    },
    answer: "B",
    rationale: "Fundoscopy ensures bilateral red reflexes are present."
  },
  {
    id: 899,
    chapterId: 16,
    chapterName: "Neonates",
    question: "The palate should be reviewed by:",
    options: {
      A: "Inspection only",
      B: "Inspection and palpation",
      C: "X-ray",
      D: "MRI",
      E: "Ultrasound"
    },
    answer: "B",
    rationale: "The palate is reviewed by inspection and palpation."
  },
  {
    id: 900,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Crepitus over the clavicular area may represent:",
    options: {
      A: "A rib fracture",
      B: "A clavicular fracture",
      C: "Pneumothorax",
      D: "Normal finding",
      E: "Sternocleidomastoid tumour"
    },
    answer: "B",
    rationale: "Crepitus over the clavicular area may represent a clavicular fracture."
  },
  {
    id: 901,
    chapterId: 16,
    chapterName: "Neonates",
    question: "The liver edge is typically palpable in newborns. The tip of the spleen may be palpable in up to:",
    options: {
      A: "1%",
      B: "5%",
      C: "10%",
      D: "20%",
      E: "50%"
    },
    answer: "C",
    rationale: "The tip of a spleen may be palpable in up to 10% of all newborns."
  },
  {
    id: 902,
    chapterId: 16,
    chapterName: "Neonates",
    question: "An easily palpable spleen in a newborn is:",
    options: {
      A: "Normal",
      B: "Abnormal",
      C: "Only normal in preterm infants",
      D: "Expected after caesarean section",
      E: "A sign of infection"
    },
    answer: "B",
    rationale: "An easily palpable spleen is abnormal."
  },
  {
    id: 903,
    chapterId: 16,
    chapterName: "Neonates",
    question: "In boys, the examination should check for the presence of:",
    options: {
      A: "Only the penis",
      B: "Testes",
      C: "Only the scrotum",
      D: "The foreskin only",
      E: "The urethral meatus only"
    },
    answer: "B",
    rationale: "In the groin area, check for the presence of testes in boys."
  },
  {
    id: 904,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Typical foot anomalies include:",
    options: {
      A: "Fixed talipes only",
      B: "Calcaneovalgus deformity or postural talipes",
      C: "Only clubfoot",
      D: "Only metatarsus adductus",
      E: "No anomalies are normal"
    },
    answer: "B",
    rationale: "Typical foot anomalies include calcaneovalgus deformity or postural talipes. Fixed talipes requires orthopaedic intervention."
  },
  {
    id: 905,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Developmental dysplasia of the hip (DDH) occurs in approximately:",
    options: {
      A: "1\u20132 per 10,000 live births",
      B: "1\u20132 per 1,000 live births",
      C: "1\u20132 per 100 live births",
      D: "10\u201320 per 1,000 live births",
      E: "50 per 1,000 live births"
    },
    answer: "B",
    rationale: "DDH occurs in 1\u20132 per 1,000 live births, with up to 20 per 1,000 having unstable hips."
  },
  {
    id: 906,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Risk factors for DDH include all EXCEPT:",
    options: {
      A: "Firstborn female infants",
      B: "Positive family history",
      C: "Breech presentation",
      D: "Male sex",
      E: "Oligohydramnios"
    },
    answer: "D",
    rationale: "Risk factors include firstborn female, positive family history and breech presentation."
  },
  {
    id: 907,
    chapterId: 16,
    chapterName: "Neonates",
    question: "When the neonatal screen for DDH is positive, initial treatment is with:",
    options: {
      A: "Immediate surgery",
      B: "A Pavlik harness",
      C: "Casting only",
      D: "Physiotherapy alone",
      E: "Observation for 6 months"
    },
    answer: "B",
    rationale: "If DDH is confirmed, the initial treatment is with a Pavlik harness for up to 12 weeks."
  },
  {
    id: 908,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Approximately what percentage of DDH cases treated with a Pavlik harness require no further intervention?",
    options: {
      A: "50%",
      B: "75%",
      C: "85%",
      D: "95%",
      E: "100%"
    },
    answer: "D",
    rationale: "Approximately 95% of cases treated with a Pavlik harness require no further intervention."
  },
  {
    id: 909,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Newborn hearing screening in the UK is conducted with:",
    options: {
      A: "Behavioural testing",
      B: "Otoacoustic emissions",
      C: "Questionnaires only",
      D: "Tuning fork tests",
      E: "Auditory brainstem response as first-line"
    },
    answer: "B",
    rationale: "In the UK, newborn hearing screening is conducted with otoacoustic emissions."
  },
  {
    id: 910,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Screen failure or uncertain response on otoacoustic emissions leads to:",
    options: {
      A: "Repeat otoacoustic emissions in 1 month",
      B: "Automated auditory brainstem response test",
      C: "MRI of the brain",
      D: "No further action",
      E: "Referral to ENT at 1 year"
    },
    answer: "B",
    rationale: "Screen failure leads to an automated auditory brainstem response test."
  },
  {
    id: 911,
    chapterId: 16,
    chapterName: "Neonates",
    question: "In the UK, the newborn blood spot test is done about:",
    options: {
      A: "24 hours after birth",
      B: "3 days after birth",
      C: "5 days after birth",
      D: "1 week after birth",
      E: "2 weeks after birth"
    },
    answer: "C",
    rationale: "In the UK, the newborn blood test is done about 5 days after birth."
  },
  {
    id: 912,
    chapterId: 16,
    chapterName: "Neonates",
    question: "The newborn blood spot test screens for how many inherited conditions in the UK?",
    options: {
      A: "4",
      B: "6",
      C: "9",
      D: "12",
      E: "15"
    },
    answer: "C",
    rationale: "Newborn blood spot testing screens for nine inherited conditions."
  },
  {
    id: 913,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Which of the following is NOT screened for in the UK newborn blood spot test?",
    options: {
      A: "Sickle cell disease",
      B: "Cystic fibrosis",
      C: "Congenital hypothyroidism",
      D: "Down syndrome",
      E: "Phenylketonuria"
    },
    answer: "D",
    rationale: "Down syndrome is not screened for in the blood spot test; the test screens for sickle cell, cystic fibrosis, hypothyroidism, PKU, MCADD, MSUD, IVA, GA1 and homocystinuria."
  },
  {
    id: 914,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Which metabolic condition is screened for in the newborn blood spot test?",
    options: {
      A: "Diabetes mellitus",
      B: "Medium-chain acyl-CoA dehydrogenase deficiency (MCADD)",
      C: "Hyperthyroidism",
      D: "Coeliac disease",
      E: "Lactose intolerance"
    },
    answer: "B",
    rationale: "MCADD is one of the six metabolic conditions screened for."
  },
  {
    id: 915,
    chapterId: 16,
    chapterName: "Neonates",
    question: "",
    options: {
      A: "Always abnormal",
      B: "Not abnormal but can be associated with an unstable joint",
      C: "Diagnostic of DDH",
      D: "Requires immediate surgery",
      E: "Only found in boys"
    },
    answer: "B",
    rationale: "A 'clicky hip' is not abnormal but can be associated with an unstable joint, so babies are referred for ultrasound."
  },
  {
    id: 916,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Which of the following is a key learning point about routine newborn care?",
    options: {
      A: "All newborns require NICU admission",
      B: "The majority can be managed on the postnatal ward",
      C: "Newborn screening is not necessary",
      D: "Hearing screening is done by behavioural testing in the UK",
      E: "Blood spot testing is done at 24 hours"
    },
    answer: "B",
    rationale: "The majority of newborn infants can be managed on the postnatal ward and do not require SCBU admission."
  },
  {
    id: 917,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Transient tachypnoea of the newborn (TTN) is caused by:",
    options: {
      A: "Surfactant deficiency",
      B: "Inadequate lung fluid clearance",
      C: "Meconium aspiration",
      D: "Pneumonia",
      E: "Pulmonary hypoplasia"
    },
    answer: "B",
    rationale: "TTN is caused by inadequate lung fluid clearance."
  },
  {
    id: 918,
    chapterId: 16,
    chapterName: "Neonates",
    question: "TTN is much more common following:",
    options: {
      A: "Spontaneous vaginal delivery",
      B: "Elective caesarean section",
      C: "Forceps delivery",
      D: "Ventouse delivery",
      E: "Breech vaginal delivery"
    },
    answer: "B",
    rationale: "TTN is much more common following elective caesarean section."
  },
  {
    id: 919,
    chapterId: 16,
    chapterName: "Neonates",
    question: "TTN is more common in infants delivered at:",
    options: {
      A: "39 weeks than 37/38 weeks",
      B: "37/38 weeks than 39 weeks",
      C: "40 weeks than 37 weeks",
      D: "41 weeks than 38 weeks",
      E: "Term than preterm"
    },
    answer: "B",
    rationale: "TTN is more common in infants delivered at 37/38 weeks than those delivered at 39 weeks."
  },
  {
    id: 920,
    chapterId: 16,
    chapterName: "Neonates",
    question: "TTN is characterized by all EXCEPT:",
    options: {
      A: "Tachypnoea",
      B: "Grunting",
      C: "Sternal recession",
      D: "Apnoea",
      E: "At times, an oxygen requirement"
    },
    answer: "D",
    rationale: "TTN is characterized by tachypnoea, grunting, sternal recession and at times an oxygen requirement."
  },
  {
    id: 921,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Standard management of TTN includes:",
    options: {
      A: "Immediate intubation and ventilation",
      B: "Admission to SCBU, respiratory support and IV fluids or NG feeding",
      C: "Discharge home immediately",
      D: "Antibiotics for 7 days",
      E: "Chest physiotherapy only"
    },
    answer: "B",
    rationale: "Standard management includes admission to SCBU, respiratory support and IV fluids or NG feeding if too distressed."
  },
  {
    id: 922,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Parents of babies with TTN should be reassured that symptoms:",
    options: {
      A: "Will never improve",
      B: "Should settle over the first 24 hours, though some may worsen before improving",
      C: "Require surgery",
      D: "Always progress to respiratory failure",
      E: "Indicate permanent lung damage"
    },
    answer: "B",
    rationale: "Reassurance should be given that symptoms should settle over the first 24 hours, but for a minority they may get worse before better."
  },
  {
    id: 923,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Occasional complications of TTN include:",
    options: {
      A: "Bronchopulmonary dysplasia",
      B: "Pneumothorax",
      C: "NEC",
      D: "IVH",
      E: "ROP"
    },
    answer: "B",
    rationale: "Occasional complications include pneumothorax, which may require needle aspiration or pigtail catheter."
  },
  {
    id: 924,
    chapterId: 16,
    chapterName: "Neonates",
    question: "The newborn baby needs to adapt from:",
    options: {
      A: "Intermittent feeds to continuous infusion",
      B: "Continuous infusion of maternal glucose via the placenta to intermittent feeds",
      C: "Formula to breast milk",
      D: "IV fluids to oral feeds",
      E: "Nasogastric to bottle feeds"
    },
    answer: "B",
    rationale: "The newborn needs to adapt from continuous infusion of maternal glucose via the placenta to intermittent feeds."
  },
  {
    id: 925,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Healthy term babies can cope with gaps between feeds because they have:",
    options: {
      A: "Exogenous insulin",
      B: "Enough glycogen stores and endocrine milieu to mobilize them",
      C: "Continuous IV access",
      D: "High metabolic rate",
      E: "Low glucose requirements"
    },
    answer: "B",
    rationale: "Healthy term babies have enough glycogen stores and the endocrine milieu will mobilize these stores."
  },
  {
    id: 926,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Glucose concentrations are measured in healthy term babies only if:",
    options: {
      A: "They are jaundiced",
      B: "There are certain risk factors",
      C: "They are breastfed",
      D: "They are formula fed",
      E: "They are twins"
    },
    answer: "B",
    rationale: "Glucose concentrations are not measured in healthy term babies unless there are certain risk factors."
  },
  {
    id: 927,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Pre-feed glucose is the important measurement because:",
    options: {
      A: "It is easier to measure",
      B: "Post-feed measurements have limited value due to inconsistencies in absorption",
      C: "It is always higher",
      D: "It is required by law",
      E: "It predicts jaundice"
    },
    answer: "B",
    rationale: "Pre-feed glucose is the important measurement; post-feed measurements have limited value due to inconsistencies in absorption."
  },
  {
    id: 928,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Severe hypoglycaemia can cause:",
    options: {
      A: "Mild irritability only",
      B: "Brain injury",
      C: "Hyperactivity",
      D: "Polycythaemia",
      E: "Hyperthermia"
    },
    answer: "B",
    rationale: "Severe hypoglycaemia can cause brain injury, so it is an emergency and needs prompt intervention."
  },
  {
    id: 929,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Which of the following is a cause of transient hypoglycaemia associated with neonatal causes?",
    options: {
      A: "Maternal diabetes",
      B: "Prematurity",
      C: "Maternal propranolol use",
      D: "Hyperinsulinism",
      E: "Inborn errors of metabolism"
    },
    answer: "B",
    rationale: "Prematurity, low birthweight, FGR, postmaturity, perinatal stress, hypothermia, infection and polycythaemia are neonatal causes."
  },
  {
    id: 930,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Which of the following is a maternal cause of transient hypoglycaemia?",
    options: {
      A: "Prematurity",
      B: "Gestational diabetes",
      C: "Infection",
      D: "Polycythaemia",
      E: "Hypothermia"
    },
    answer: "B",
    rationale: "Maternal causes include maternal medications (e.g. propranolol) and maternal conditions (e.g. gestational diabetes)."
  },
  {
    id: 931,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Persistent hypoglycaemia may be caused by:",
    options: {
      A: "Prematurity",
      B: "Hyperinsulinism or inborn errors of metabolism",
      C: "Maternal diabetes",
      D: "Perinatal stress",
      E: "Hypothermia"
    },
    answer: "B",
    rationale: "Persistent hypoglycaemia may be caused by hyperinsulinism, inborn errors of metabolism or endocrine disorders."
  },
  {
    id: 932,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Management of hypoglycaemia includes:",
    options: {
      A: "Observation only",
      B: "Intravenous dextrose infusions and feeding",
      C: "Insulin administration",
      D: "Corticosteroids only",
      E: "Exchange transfusion"
    },
    answer: "B",
    rationale: "Most causes respond to IV dextrose infusions and feeding."
  },
  {
    id: 933,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Jaundice in the newborn is caused by:",
    options: {
      A: "Excessive conjugated bilirubin",
      B: "Production of bilirubin exceeding liver enzyme capacity",
      C: "Biliary obstruction only",
      D: "Haemolysis only",
      E: "Infection only"
    },
    answer: "B",
    rationale: "Production of bilirubin is often more than the liver enzymes can handle, leading to increased unconjugated bilirubin."
  },
  {
    id: 934,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Visible jaundice within 24 hours of birth is:",
    options: {
      A: "Always physiological",
      B: "Most often pathological and usually due to infection or haemolysis",
      C: "Normal in breastfed babies",
      D: "Due to breast milk jaundice",
      E: "Not a concern"
    },
    answer: "B",
    rationale: "Visible jaundice within 24 hours is most often pathological and usually due to infection or haemolysis."
  },
  {
    id: 935,
    chapterId: 16,
    chapterName: "Neonates",
    question: "The liver enzymes are induced over the first:",
    options: {
      A: "1\u20132 days",
      B: "3\u20134 days",
      C: "1 week",
      D: "2 weeks",
      E: "1 month"
    },
    answer: "B",
    rationale: "The liver enzymes are induced over the first 3\u20134 days after birth."
  },
  {
    id: 936,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Breastfed babies take longer to induce their liver enzymes, but this:",
    options: {
      A: "Causes harm",
      B: "Does not cause harm",
      C: "Requires phototherapy",
      D: "Indicates biliary atresia",
      E: "Requires exchange transfusion"
    },
    answer: "B",
    rationale: "Breastfed babies take longer to induce enzymes, but this does not cause harm."
  },
  {
    id: 937,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Phototherapy for jaundice uses light in the wavelength of:",
    options: {
      A: "360\u2013380 nm",
      B: "400\u2013420 nm",
      C: "460\u2013490 nm",
      D: "500\u2013520 nm",
      E: "550\u2013570 nm"
    },
    answer: "C",
    rationale: "Light in the wavelength of 460\u2013490 nm triggers an isomeric change in the bilirubin molecule."
  },
  {
    id: 938,
    chapterId: 16,
    chapterName: "Neonates",
    question: "The key to successful phototherapy is:",
    options: {
      A: "High intensity only",
      B: "Adequate exposure and appropriate positioning",
      C: "Short duration",
      D: "Intermittent application",
      E: "Use of UV light"
    },
    answer: "B",
    rationale: "The key to successful phototherapy is adequate exposure and positioning the infant at the recommended distance."
  },
  {
    id: 939,
    chapterId: 16,
    chapterName: "Neonates",
    question: "If phototherapy does not prevent bilirubin climbing to dangerous levels, what may be indicated?",
    options: {
      A: "Increased oral feeds",
      B: "Exchange transfusion",
      C: "Antibiotics",
      D: "Steroids",
      E: "Observation only"
    },
    answer: "B",
    rationale: "If phototherapy fails, exchange transfusion may be indicated."
  },
  {
    id: 940,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Exchange transfusion involves:",
    options: {
      A: "Removing all blood at once",
      B: "Withdrawing and replacing small aliquots of blood repeatedly over 3\u20134 hours",
      C: "A single blood transfusion",
      D: "Plasma exchange only",
      E: "Platelet transfusion"
    },
    answer: "B",
    rationale: "Exchange transfusion involves withdrawing and replacing small aliquots every 5 minutes over 3\u20134 hours."
  },
  {
    id: 941,
    chapterId: 16,
    chapterName: "Neonates",
    question: "If there is evidence of active alloimmune disease on direct antiglobulin testing, what may reduce the need for exchange transfusion?",
    options: {
      A: "Phototherapy alone",
      B: "Immunoglobulin during phototherapy",
      C: "Antibiotics",
      D: "Steroids",
      E: "IV fluids"
    },
    answer: "B",
    rationale: "Immunoglobulin during phototherapy may reduce the need for exchange transfusion in alloimmune disease."
  },
  {
    id: 942,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Causes of neonatal jaundice include all EXCEPT:",
    options: {
      A: "Abnormalities of red cell enzymes",
      B: "Extravasated blood (cephalohematoma)",
      C: "Increased enterohepatic circulation",
      D: "Hypothyroidism",
      E: "Hyperthyroidism"
    },
    answer: "E",
    rationale: "Causes include red cell enzyme abnormalities, extravasated blood, increased enterohepatic circulation and hypothyroidism."
  },
  {
    id: 943,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Prolonged jaundice in solely breastfed infants can be present up to:",
    options: {
      A: "2 weeks",
      B: "4 weeks",
      C: "6 weeks",
      D: "8 weeks",
      E: "12 weeks"
    },
    answer: "D",
    rationale: "Prolonged jaundice can be present up to 8 weeks in solely breastfed infants."
  },
  {
    id: 944,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Conjugated bilirubin is:",
    options: {
      A: "Neurotoxic",
      B: "Not neurotoxic; high levels reflect problems excreting bile",
      C: "Always normal",
      D: "The cause of physiological jaundice",
      E: "Treated with phototherapy"
    },
    answer: "B",
    rationale: "Conjugated bilirubin is not neurotoxic; high levels reflect problems excreting bile."
  },
  {
    id: 945,
    chapterId: 16,
    chapterName: "Neonates",
    question: "In term babies, obstructive jaundice may relate to the rare condition of:",
    options: {
      A: "Gilbert syndrome",
      B: "Biliary atresia",
      C: "Crigler-Najjar syndrome",
      D: "Dubin-Johnson syndrome",
      E: "Rotor syndrome"
    },
    answer: "B",
    rationale: "In term babies, obstructive jaundice can relate to biliary atresia."
  },
  {
    id: 946,
    chapterId: 16,
    chapterName: "Neonates",
    question: "In preterm babies, obstructive jaundice is often related to:",
    options: {
      A: "Breast milk",
      B: "Parenteral nutrition",
      C: "Infection",
      D: "Haemolysis",
      E: "Hypothyroidism"
    },
    answer: "B",
    rationale: "In preterm babies, obstructive jaundice is often related to parenteral nutrition."
  },
  {
    id: 947,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Heart murmurs in newborn infants are:",
    options: {
      A: "Always pathological",
      B: "Very common, especially within the first day, and majority are innocent",
      C: "Only heard in preterm infants",
      D: "Diagnostic of congenital heart disease",
      E: "Never heard in healthy babies"
    },
    answer: "B",
    rationale: "Murmurs are very common in newborn infants, especially within the first day, and the majority are innocent."
  },
  {
    id: 948,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Innocent murmurs in newborns often reflect:",
    options: {
      A: "Severe congenital heart disease",
      B: "Transitional adaptation such as mild tricuspid regurgitation or patent ductus arteriosus",
      C: "Endocarditis",
      D: "Cardiomyopathy",
      E: "Heart failure"
    },
    answer: "B",
    rationale: "Innocent murmurs often reflect transitional adaptation such as mild tricuspid regurgitation or PDA."
  },
  {
    id: 949,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Loud harsh systolic murmurs are often:",
    options: {
      A: "Innocent",
      B: "Muscular ventricular septal defects",
      C: "Normal flow murmurs",
      D: "Functional murmurs",
      E: "Benign"
    },
    answer: "B",
    rationale: "Loud harsh systolic murmurs are often muscular ventricular septal defects."
  },
  {
    id: 950,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Truly absent or diminished femoral pulses are often associated with:",
    options: {
      A: "Ventricular septal defect",
      B: "Coarctation of the aorta",
      C: "Atrial septal defect",
      D: "Patent ductus arteriosus",
      E: "Pulmonary stenosis"
    },
    answer: "B",
    rationale: "Truly absent or diminished femoral pulses are often associated with coarctation of the aorta."
  },
  {
    id: 951,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Diminished femoral and brachial pulses are often associated with:",
    options: {
      A: "Coarctation of the aorta",
      B: "Hypoplastic left heart syndrome",
      C: "Ventricular septal defect",
      D: "Atrial septal defect",
      E: "Pulmonary stenosis"
    },
    answer: "B",
    rationale: "Diminished femoral and brachial pulses are often associated with hypoplastic left heart syndrome."
  },
  {
    id: 952,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Universal pulse oximetry screening is used in many countries to help identify:",
    options: {
      A: "Acyanotic heart disease",
      B: "Cyanotic heart disease",
      C: "Arrhythmias",
      D: "Heart failure",
      E: "Innocent murmurs"
    },
    answer: "B",
    rationale: "Universal pulse oximetry screening is used to help identify cyanotic heart disease."
  },
  {
    id: 953,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Hypospadias occurs in approximately:",
    options: {
      A: "1 in 50 boys",
      B: "1 in 100 boys",
      C: "1 in 300 boys",
      D: "1 in 500 boys",
      E: "1 in 1,000 boys"
    },
    answer: "C",
    rationale: "Hypospadias occurs in 1 in 300 boys."
  },
  {
    id: 954,
    chapterId: 16,
    chapterName: "Neonates",
    question: "In hypospadias, it is important to advise parents to:",
    options: {
      A: "Circumcise immediately",
      B: "Avoid circumcision because the foreskin is used during surgical correction",
      C: "Apply topical steroids",
      D: "Start antibiotics",
      E: "Perform daily stretching"
    },
    answer: "B",
    rationale: "The foreskin is used during surgical correction, so circumcision should be avoided."
  },
  {
    id: 955,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Surgical correction of hypospadias typically takes place around:",
    options: {
      A: "1 month",
      B: "6 months",
      C: "1 year",
      D: "2 years",
      E: "5 years"
    },
    answer: "C",
    rationale: "Surgical correction typically takes place around 1 year after birth."
  },
  {
    id: 956,
    chapterId: 16,
    chapterName: "Neonates",
    question: "If a baby has ambiguous genitalia, it is important to:",
    options: {
      A: "Assign a sex immediately",
      B: "Avoid assigning a sex and arrange urgent multidisciplinary review",
      C: "Start hormone therapy",
      D: "Perform surgery immediately",
      E: "Discharge without follow-up"
    },
    answer: "B",
    rationale: "Avoid assigning a sex and arrange urgent review by a skilled multidisciplinary team."
  },
  {
    id: 957,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Cleft lip is usually repaired around:",
    options: {
      A: "1 month",
      B: "2 months",
      C: "4 months",
      D: "9 months",
      E: "12 months"
    },
    answer: "C",
    rationale: "Cleft lip is usually repaired around 4 months."
  },
  {
    id: 958,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Cleft palate is usually repaired around:",
    options: {
      A: "4 months",
      B: "6 months",
      C: "9 months",
      D: "12 months",
      E: "18 months"
    },
    answer: "C",
    rationale: "Cleft palate is usually repaired around 9 months."
  },
  {
    id: 959,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Children with cleft lip or palate may need feeding adaptations such as:",
    options: {
      A: "Nasogastric feeding only",
      B: "Expressed breast milk using a flexible teat",
      C: "IV fluids",
      D: "Solid foods only",
      E: "No adaptations"
    },
    answer: "B",
    rationale: "Many children need adaptations such as expressed breast milk using a flexible teat."
  },
  {
    id: 960,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Seizures in the newborn period affect approximately:",
    options: {
      A: "1\u20132 per 10,000 live births",
      B: "1\u20132 per 1,000 live births",
      C: "1\u20132 per 100 live births",
      D: "5\u201310 per 1,000 live births",
      E: "20 per 1,000 live births"
    },
    answer: "B",
    rationale: "Seizures affect 1\u20132 per 1,000 live births."
  },
  {
    id: 961,
    chapterId: 16,
    chapterName: "Neonates",
    question: "The most common cause of neonatal seizures is:",
    options: {
      A: "Meningitis",
      B: "Hypoxic ischaemic encephalopathy (HIE)",
      C: "Hypoglycaemia",
      D: "Intracranial haemorrhage",
      E: "Cerebral infarction"
    },
    answer: "B",
    rationale: "HIE is the most common cause of neonatal seizures, causing about half of all neonatal seizures."
  },
  {
    id: 962,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Other causes of neonatal seizures include all EXCEPT:",
    options: {
      A: "Cerebral infarction",
      B: "Intracranial haemorrhage",
      C: "Meningitis",
      D: "Polycythaemia",
      E: "Electrolyte disturbances"
    },
    answer: "D",
    rationale: "Other causes include cerebral infarction, intracranial haemorrhage, meningitis, electrolyte disturbances, hypoglycaemia, metabolic disorders and structural brain abnormalities."
  },
  {
    id: 963,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Neonatal seizure patterns include all EXCEPT:",
    options: {
      A: "Tonic",
      B: "Clonic",
      C: "Subtle",
      D: "Myoclonic",
      E: "Generalized tonic-clonic"
    },
    answer: "E",
    rationale: "Tonic-clonic seizures are rare in neonates; specific patterns include tonic, clonic, subtle and myoclonic."
  },
  {
    id: 964,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Clinical observation alone for neonatal seizures is:",
    options: {
      A: "Highly reliable",
      B: "Not reliable; ideally EEG or cerebral function monitoring is used",
      C: "Sufficient for diagnosis",
      D: "Better than EEG",
      E: "Only useful for tonic seizures"
    },
    answer: "B",
    rationale: "Clinical observation is not reliable; ideally EEG or cerebral function monitoring is used."
  },
  {
    id: 965,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Jitters in neonates:",
    options: {
      A: "Are a form of seizure",
      B: "Affect up to half of babies and can be restrained, in contrast with seizures",
      C: "Require anticonvulsants",
      D: "Indicate HIE",
      E: "Are always pathological"
    },
    answer: "B",
    rationale: "Jitters affect up to half of babies, involve repeated movements at 1\u20133 Hz on stimulation, and can be restrained unlike seizures."
  },
  {
    id: 966,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Benign sleep myoclonus:",
    options: {
      A: "Is a seizure requiring treatment",
      B: "Can mimic seizures and is a normal phenomenon",
      C: "Indicates severe brain injury",
      D: "Requires phenobarbital",
      E: "Is associated with poor prognosis"
    },
    answer: "B",
    rationale: "Benign sleep myoclonus can mimic seizures and is a normal phenomenon; parents should be reassured."
  },
  {
    id: 967,
    chapterId: 16,
    chapterName: "Neonates",
    question: "The first-line imaging modality for neonatal seizures is:",
    options: {
      A: "Cranial ultrasound",
      B: "Brain MRI",
      C: "CT scan",
      D: "X-ray",
      E: "PET scan"
    },
    answer: "B",
    rationale: "While cranial ultrasound may be useful, brain MRI is the first-line imaging modality."
  },
  {
    id: 968,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Conventional therapy for neonatal seizures involves:",
    options: {
      A: "Levetiracetam",
      B: "Phenobarbital",
      C: "Midazolam",
      D: "Phenytoin",
      E: "Sodium valproate"
    },
    answer: "B",
    rationale: "Conventional therapy involves phenobarbital."
  },
  {
    id: 969,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Supplementary agents for neonatal seizures include:",
    options: {
      A: "Only phenobarbital",
      B: "Midazolam, levetiracetam, phenytoin and sodium valproate",
      C: "Only diazepam",
      D: "Only paraldehyde",
      E: "No supplementary agents"
    },
    answer: "B",
    rationale: "Supplementary agents include midazolam, levetiracetam, phenytoin and sodium valproate."
  },
  {
    id: 970,
    chapterId: 16,
    chapterName: "Neonates",
    question: "The prognosis of neonatal seizures depends primarily on:",
    options: {
      A: "The anticonvulsant used",
      B: "The cause",
      C: "The gestational age",
      D: "The mode of delivery",
      E: "The birth weight"
    },
    answer: "B",
    rationale: "The prognosis depends on the cause."
  },
  {
    id: 971,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Overall, about what percentage of children with neonatal seizures will have neurodevelopmental abnormalities?",
    options: {
      A: "10%",
      B: "25%",
      C: "50%",
      D: "75%",
      E: "90%"
    },
    answer: "C",
    rationale: "Overall, about half of children with neonatal seizures will have neurodevelopmental abnormalities."
  },
  {
    id: 972,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Of children with neonatal seizures, what percentage have seizures in later life?",
    options: {
      A: "1\u20135%",
      B: "10\u201320%",
      C: "30\u201340%",
      D: "50\u201360%",
      E: "70\u201380%"
    },
    answer: "B",
    rationale: "10% to 20% have seizures in later life; this proportion is higher if there is a brain malformation."
  },
  {
    id: 973,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Neonatal encephalopathy has a broad differential diagnosis and is:",
    options: {
      A: "Always associated with events during labour",
      B: "Often, but not always, associated with events during and after labour",
      C: "Never associated with labour events",
      D: "Only caused by infection",
      E: "Only caused by metabolic disorders"
    },
    answer: "B",
    rationale: "Neonatal encephalopathy is often, but not always, associated with events during and after labour."
  },
  {
    id: 974,
    chapterId: 16,
    chapterName: "Neonates",
    question: "The most common condition causing neonatal encephalopathy is:",
    options: {
      A: "Infection",
      B: "HIE",
      C: "Maternal drug abuse",
      D: "CNS malformation",
      E: "Hypoglycaemia"
    },
    answer: "B",
    rationale: "The most common condition is HIE."
  },
  {
    id: 975,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Perinatal asphyxia accounts for approximately:",
    options: {
      A: "1 per 1,000 live births",
      B: "6 per 1,000 live births",
      C: "20 per 1,000 live births",
      D: "50 per 1,000 live births",
      E: "100 per 1,000 live births"
    },
    answer: "B",
    rationale: "Perinatal asphyxia accounts for approximately 6 per 1,000 live births."
  },
  {
    id: 976,
    chapterId: 16,
    chapterName: "Neonates",
    question: "HIE is the leading cause of acquired brain injury in term infants, affecting:",
    options: {
      A: "1\u20132 per 10,000 live births",
      B: "1\u20132 per 1,000 live births",
      C: "5\u201310 per 1,000 live births",
      D: "20 per 1,000 live births",
      E: "50 per 1,000 live births"
    },
    answer: "B",
    rationale: "HIE affects 1\u20132 per 1,000 live births in the developed world."
  },
  {
    id: 977,
    chapterId: 16,
    chapterName: "Neonates",
    question: "HIE is caused by:",
    options: {
      A: "Only antenatal insults",
      B: "Only intrapartum events",
      C: "Disruption in blood and/or oxygen supply to the brain from antenatal, intrapartum or postnatal events",
      D: "Only postnatal events",
      E: "Only genetic factors"
    },
    answer: "C",
    rationale: "HIE can be caused by antenatal insults, peri-partum events or rarely postnatal events."
  },
  {
    id: 978,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Secondary energy failure after HIE occurs:",
    options: {
      A: "Immediately",
      B: "6\u201348 hours after the initial insult",
      C: "At 1 week",
      D: "At 1 month",
      E: "Never"
    },
    answer: "B",
    rationale: "Secondary energy failure occurs 6\u201348 hours after the initial insult."
  },
  {
    id: 979,
    chapterId: 16,
    chapterName: "Neonates",
    question: "HIE is typically classified into how many categories?",
    options: {
      A: "Two",
      B: "Three",
      C: "Four",
      D: "Five",
      E: "Six"
    },
    answer: "B",
    rationale: "HIE is typically classified into three categories: mild, moderate and severe."
  },
  {
    id: 980,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Mild HIE accounts for approximately what percentage of all HIE cases?",
    options: {
      A: "10%",
      B: "20%",
      C: "40%",
      D: "60%",
      E: "80%"
    },
    answer: "C",
    rationale: "Mild HIE accounts for almost 40% of all HIE cases."
  },
  {
    id: 981,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Infants with mild HIE are noted to be:",
    options: {
      A: "Stuporous",
      B: "Hyper-alert or irritable",
      C: "Flaccid",
      D: "Comatose",
      E: "Apnoeic"
    },
    answer: "B",
    rationale: "Infants with mild HIE are hyper-alert or irritable with mild distal flexion."
  },
  {
    id: 982,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Approximately what percentage of infants with HIE fall into the moderate category?",
    options: {
      A: "20%",
      B: "40%",
      C: "60%",
      D: "80%",
      E: "90%"
    },
    answer: "B",
    rationale: "Approximately 40% of infants with HIE will fall into the moderate group."
  },
  {
    id: 983,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Infants with moderate HIE meet criteria for:",
    options: {
      A: "Observation only",
      B: "Intervention with therapeutic hypothermia (TH)",
      C: "Immediate exchange transfusion",
      D: "Palliative care only",
      E: "No specific treatment"
    },
    answer: "B",
    rationale: "These infants meet current criteria for intervention with therapeutic hypothermia."
  },
  {
    id: 984,
    chapterId: 16,
    chapterName: "Neonates",
    question: "The risk of significant adverse outcome in moderate HIE is:",
    options: {
      A: "5\u201310%",
      B: "20\u201340%",
      C: "50\u201360%",
      D: "70\u201380%",
      E: "90\u2013100%"
    },
    answer: "B",
    rationale: "Moderate HIE infants have a 20\u201340% risk of significant adverse outcome."
  },
  {
    id: 985,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Severe HIE infants tend to:",
    options: {
      A: "Recover fully",
      B: "Die in the neonatal period or have significant impairments including cerebral palsy",
      C: "Have normal outcomes",
      D: "Only have mild learning difficulties",
      E: "Respond well to TH"
    },
    answer: "B",
    rationale: "Severe HIE infants tend to die or have significant impairments including cerebral palsy and learning disabilities."
  },
  {
    id: 986,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Therapeutic hypothermia (TH) involves lowering core temperature to:",
    options: {
      A: "30\u201331\u00b0C",
      B: "33\u201334\u00b0C",
      C: "35\u201336\u00b0C",
      D: "37\u00b0C",
      E: "38\u00b0C"
    },
    answer: "B",
    rationale: "TH involves lowering core temperature to 33\u201334\u00b0C for 72 hours then slowly rewarming over 12 hours."
  },
  {
    id: 987,
    chapterId: 16,
    chapterName: "Neonates",
    question: "To be effective, TH must be initiated within how many hours of birth?",
    options: {
      A: "1 hour",
      B: "3 hours",
      C: "6 hours",
      D: "12 hours",
      E: "24 hours"
    },
    answer: "C",
    rationale: "TH must be initiated early, within 6 hours of birth."
  },
  {
    id: 988,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Amplitude integrated EEG (aEEG) is:",
    options: {
      A: "The gold standard for EEG monitoring",
      B: "A compressed version of traditional EEG using limited channels",
      C: "More complex than multichannel EEG",
      D: "Only used for adults",
      E: "Not affected by artefact"
    },
    answer: "B",
    rationale: "aEEG is a compressed version of traditional EEG that utilizes a limited number of channels."
  },
  {
    id: 989,
    chapterId: 16,
    chapterName: "Neonates",
    question: "MRI is the radiological imaging method of choice for brain imaging in infants with HIE because it is:",
    options: {
      A: "Cheaper than ultrasound",
      B: "Highly correlated with long-term neurodevelopmental outcome",
      C: "Faster than CT",
      D: "Does not require sedation",
      E: "Only useful after 1 month"
    },
    answer: "B",
    rationale: "MRI is highly correlated with long-term neurodevelopmental outcome and is superior to cranial ultrasound at detecting injury in deep grey matter."
  },
  {
    id: 990,
    chapterId: 16,
    chapterName: "Neonates",
    question: "The most common MRI sequences reported in neonatal imaging include all EXCEPT:",
    options: {
      A: "T1-weighted images",
      B: "T2-weighted images",
      C: "Diffusion weighted imaging (DWI)",
      D: "Magnetic resonance spectroscopy",
      E: "CT angiography"
    },
    answer: "E",
    rationale: "Common sequences include T1, T2, DWI and magnetic resonance spectroscopy; CT angiography is not mentioned."
  },
  {
    id: 991,
    chapterId: 16,
    chapterName: "Neonates",
    question: "DWI measures:",
    options: {
      A: "Blood flow",
      B: "The diffusion of water molecules in tissue and is best for detecting acute infarction",
      C: "Bone density",
      D: "Ventricular size",
      E: "Skull thickness"
    },
    answer: "B",
    rationale: "DWI measures the diffusion of water molecules in tissue and is the best modality to detect acute infarction."
  },
  {
    id: 992,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Brachial plexus palsies are often noted after:",
    options: {
      A: "Only caesarean section",
      B: "Difficult deliveries, but this does not explain all cases",
      C: "Only spontaneous vaginal delivery",
      D: "Only breech delivery",
      E: "Only preterm delivery"
    },
    answer: "B",
    rationale: "Brachial plexus palsies may be associated with difficult deliveries, but this does not explain all cases."
  },
  {
    id: 993,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Erb palsy affects which nerve roots?",
    options: {
      A: "C5 and C6",
      B: "C7 and C8",
      C: "C8 and T1",
      D: "T1 and T2",
      E: "C5 and T1"
    },
    answer: "A",
    rationale: "Erb palsy affects the C5 and C6 nerve roots, giving a distinctive posture with the arm held at the side, internally rotated and pronated."
  },
  {
    id: 994,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Klumpke palsy affects:",
    options: {
      A: "C5 and C6",
      B: "C7 and C8",
      C: "C8 and T1",
      D: "T1 and T2",
      E: "C5 and T1"
    },
    answer: "C",
    rationale: "Klumpke palsy affects C8 and T1 but is rare."
  },
  {
    id: 995,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Total recovery from brachial plexus palsy occurs in approximately:",
    options: {
      A: "25%",
      B: "50%",
      C: "75%",
      D: "90%",
      E: "100%"
    },
    answer: "C",
    rationale: "Total recovery occurs in 75% of babies over a few weeks to months."
  },
  {
    id: 996,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Facial palsy in neonates is likely due to:",
    options: {
      A: "Forceps injury only",
      B: "Pressure from the mother's sacral promontory during labour, possibly exacerbated by forceps",
      C: "Only genetic causes",
      D: "Only infection",
      E: "Only preterm birth"
    },
    answer: "B",
    rationale: "Facial palsy is likely due to pressure from the mother's sacral promontory; forceps may exacerbate this."
  },
  {
    id: 997,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Asymmetric crying facies is related to:",
    options: {
      A: "Facial palsy",
      B: "Hypoplasia of the orbicularis oris",
      C: "Cleft palate",
      D: "Micrognathia",
      E: "Choanal atresia"
    },
    answer: "B",
    rationale: "Asymmetric crying facies is related to hypoplasia of the orbicularis oris, not a true facial palsy."
  },
  {
    id: 998,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Small 'dimples' at the bottom of the back are common, affecting around:",
    options: {
      A: "1%",
      B: "2%",
      C: "5%",
      D: "10%",
      E: "20%"
    },
    answer: "C",
    rationale: "Small dimples at the bottom of the back are common, affecting around 5% of babies."
  },
  {
    id: 999,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Ultrasound of the lower spine is indicated if a sacral dimple:",
    options: {
      A: "Is visible only",
      B: "Has a visible bottom, is central and low, with no skin changes",
      C: "Has a bottom not visible, is high up or to the side, or has skin changes nearby",
      D: "Is present in all babies",
      E: "Is associated with normal skin"
    },
    answer: "C",
    rationale: "Ultrasound is indicated if the bottom is not visible, the area is high up or to the side, or there is skin change nearby."
  },
  {
    id: 1000,
    chapterId: 16,
    chapterName: "Neonates",
    question: "The most common sites of neonatal fracture during birth are:",
    options: {
      A: "Skull and ribs",
      B: "Clavicle, humeral shaft and femoral shaft",
      C: "Radius and ulna",
      D: "Pelvis and spine",
      E: "Facial bones"
    },
    answer: "B",
    rationale: "The most common sites are clavicle, humeral shaft and femoral shaft."
  },
  {
    id: 1001,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Almost all neonatal fractures heal:",
    options: {
      A: "With surgical fixation",
      B: "Without sequelae",
      C: "With permanent deformity",
      D: "Only after 6 months",
      E: "Requiring bone grafting"
    },
    answer: "B",
    rationale: "Almost all neonatal fractures heal without sequelae."
  },
  {
    id: 1002,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Dysmorphic features in the general population:",
    options: {
      A: "Are always diagnostic of a syndrome",
      B: "May be common; one or two features may not lead to a diagnosis",
      C: "Always require genetic testing",
      D: "Are never seen in healthy individuals",
      E: "Always affect development"
    },
    answer: "B",
    rationale: "One or two dysmorphic features may not lead to a diagnosis or have any effect on the child."
  },
  {
    id: 1003,
    chapterId: 16,
    chapterName: "Neonates",
    question: "The most common syndrome in the neonate is:",
    options: {
      A: "Trisomy 18",
      B: "Trisomy 21 (Down syndrome)",
      C: "Trisomy 13",
      D: "Turner syndrome",
      E: "Klinefelter syndrome"
    },
    answer: "B",
    rationale: "The most common syndrome in the neonate is trisomy 21: Down syndrome."
  },
  {
    id: 1004,
    chapterId: 16,
    chapterName: "Neonates",
    question: "",
    options: {
      A: "1 in 2,000 women will have a baby with Down syndrome",
      B: "2,000 babies will all have Down syndrome",
      C: "The risk is negligible",
      D: "Only women over 40 have this risk",
      E: "It only applies to twins"
    },
    answer: "A",
    rationale: "A risk of 1:2,000 means that 1 in 2,000 women will have a baby with Down syndrome."
  },
  {
    id: 1005,
    chapterId: 16,
    chapterName: "Neonates",
    question: "The older the mother, the:",
    options: {
      A: "Lower the risk of Down syndrome",
      B: "Greater the risk of Down syndrome",
      C: "No change in risk",
      D: "Risk only increases after 50",
      E: "Risk decreases after 35"
    },
    answer: "B",
    rationale: "The older the mother, the greater the risk of Down syndrome."
  },
  {
    id: 1006,
    chapterId: 16,
    chapterName: "Neonates",
    question: "When sharing suspicions of Down syndrome with parents, the ideal is to:",
    options: {
      A: "Tell only one parent",
      B: "Share suspicions with both parents in a calm, private setting",
      C: "Tell them immediately in the delivery room",
      D: "Wait until the child is 1 year old",
      E: "Not tell them at all"
    },
    answer: "B",
    rationale: "The ideal is to share suspicions with both parents in a calm, private setting."
  },
  {
    id: 1007,
    chapterId: 16,
    chapterName: "Neonates",
    question: "",
    options: {
      A: "Karyotype",
      B: "FISH test",
      C: "Microarray",
      D: "Whole genome sequencing",
      E: "PCR only"
    },
    answer: "B",
    rationale: "The genetic test is usually a FISH test that can give a result within 24\u201348 hours."
  },
  {
    id: 1008,
    chapterId: 16,
    chapterName: "Neonates",
    question: "",
    options: {
      A: "Confirm Down syndrome only",
      B: "Report the type of trisomy and indicate the value of genetic testing in parents and future risk",
      C: "Diagnose all genetic conditions",
      D: "Replace the FISH test",
      E: "Predict IQ"
    },
    answer: "B",
    rationale: "A definitive karyotype is needed to report the type of trisomy and indicate the value of genetic testing in parents."
  },
  {
    id: 1009,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Non-disjunction Down syndrome:",
    options: {
      A: "Requires testing of all family members",
      B: "Does not need testing of family members and is associated with a low risk of recurrence",
      C: "Always recurs",
      D: "Is inherited in an autosomal dominant pattern",
      E: "Requires prenatal diagnosis in all future pregnancies"
    },
    answer: "B",
    rationale: "Non-disjunction does not need testing of family members and is associated with a low risk of recurrence."
  },
  {
    id: 1010,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Common problems in babies with trisomy 21 in the first days include all EXCEPT:",
    options: {
      A: "Oxygen dependency secondary to pulmonary hypertension",
      B: "Hypoglycaemia",
      C: "Polycythaemia",
      D: "Jaundice",
      E: "Hyperthyroidism"
    },
    answer: "E",
    rationale: "Common problems include oxygen dependency, hypoglycaemia, polycythaemia and jaundice; hyperthyroidism is not listed."
  },
  {
    id: 1011,
    chapterId: 16,
    chapterName: "Neonates",
    question: "The dominant clinical problem in babies with trisomy 21 is:",
    options: {
      A: "Cardiac surgery",
      B: "Establishing feeds",
      C: "Respiratory failure",
      D: "Seizures",
      E: "Renal failure"
    },
    answer: "B",
    rationale: "The dominant clinical problem is establishing feeds."
  },
  {
    id: 1012,
    chapterId: 16,
    chapterName: "Neonates",
    question: "",
    options: {
      A: "10%",
      B: "25%",
      C: "50%",
      D: "75%",
      E: "90%"
    },
    answer: "C",
    rationale: "A cardiac defect is seen in about half of all cases of trisomy 21."
  },
  {
    id: 1013,
    chapterId: 16,
    chapterName: "Neonates",
    question: "When should an echocardiogram ideally be performed in a baby with trisomy 21?",
    options: {
      A: "At 1 year",
      B: "Prior to discharge",
      C: "At 6 weeks",
      D: "Only if symptomatic",
      E: "At 3 months"
    },
    answer: "B",
    rationale: "Ideally, an echocardiogram should be performed prior to discharge."
  },
  {
    id: 1014,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Rarer conditions associated with trisomy 21 include:",
    options: {
      A: "Pyloric stenosis and imperforate anus",
      B: "Duodenal atresia and Hirschsprung disease",
      C: "Gastroschisis and omphalocele",
      D: "Oesophageal atresia and diaphragmatic hernia",
      E: "Anencephaly and spina bifida"
    },
    answer: "B",
    rationale: "Rarer conditions include duodenal atresia and Hirschsprung disease."
  },
  {
    id: 1015,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Babies with trisomy 21 go home when:",
    options: {
      A: "They have had surgery",
      B: "They can feed",
      C: "They are 6 weeks old",
      D: "They have normal cardiac function",
      E: "They have passed hearing screening"
    },
    answer: "B",
    rationale: "Babies go home when they can feed."
  },
  {
    id: 1016,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Appropriate clinical follow-up for trisomy 21 should include:",
    options: {
      A: "Only paediatric follow-up",
      B: "Cardiology follow-up if a cardiac defect is present",
      C: "Only genetic counselling",
      D: "No follow-up needed",
      E: "Only physiotherapy"
    },
    answer: "B",
    rationale: "Appropriate follow-up includes cardiology follow-up if a defect is present."
  },
  {
    id: 1017,
    chapterId: 16,
    chapterName: "Neonates",
    question: "The moderate to late preterm infant group represents approximately what percentage of all preterm births?",
    options: {
      A: "25\u201330%",
      B: "40\u201350%",
      C: "75\u201380%",
      D: "90\u201395%",
      E: "100%"
    },
    answer: "C",
    rationale: "The moderate to late preterm infant group represents approximately 75\u201380% of all preterm births."
  },
  {
    id: 1018,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Babies born between 32 and 36 weeks' gestation represent approximately what percentage of all births in the UK?",
    options: {
      A: "1\u20132%",
      B: "3\u20134%",
      C: "6\u20137%",
      D: "10\u201312%",
      E: "15\u201320%"
    },
    answer: "C",
    rationale: "UK data show babies born between 32 and 36 weeks represent approximately 6\u20137% of all births."
  },
  {
    id: 1019,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Very preterm birth refers to infants delivered at less than:",
    options: {
      A: "28 weeks",
      B: "32 weeks",
      C: "34 weeks",
      D: "36 weeks",
      E: "37 weeks"
    },
    answer: "B",
    rationale: "Very preterm birth refers to infants delivered at less than 32 weeks."
  },
  {
    id: 1020,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Extreme preterm infants are those delivered at less than:",
    options: {
      A: "22 weeks",
      B: "24 weeks",
      C: "26 weeks",
      D: "28 weeks",
      E: "30 weeks"
    },
    answer: "D",
    rationale: "Extreme preterm infants are those delivered at less than 28 weeks."
  },
  {
    id: 1021,
    chapterId: 16,
    chapterName: "Neonates",
    question: "The gestational age at which a live born neonate has a 50% chance of survival has decreased from approximately 32 weeks in the 1960s to:",
    options: {
      A: "26 weeks",
      B: "25 weeks",
      C: "24 weeks",
      D: "23/24 weeks",
      E: "22 weeks"
    },
    answer: "D",
    rationale: "The 50% survival threshold has decreased to 23/24 weeks' gestation."
  },
  {
    id: 1022,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Decision-making at the limit of viability (22\u201324 weeks) remains challenging because:",
    options: {
      A: "Outcomes are universally poor",
      B: "There are multiple key players including parents and healthcare providers",
      C: "All babies survive",
      D: "No data is available",
      E: "All babies should be resuscitated"
    },
    answer: "B",
    rationale: "There are multiple key players, namely parents and healthcare providers, all with the baby's best interest as their primary concern."
  },
  {
    id: 1023,
    chapterId: 16,
    chapterName: "Neonates",
    question: "The most important data when counselling expectant parents at the borderline of viability are:",
    options: {
      A: "National average data",
      B: "International registry data",
      C: "One's own institutional data",
      D: "Historical data from the 1990s",
      E: "Theoretical models"
    },
    answer: "C",
    rationale: "The most important data are one's own institutional data, and those involved should be aware of the most up-to-date data."
  },
  {
    id: 1024,
    chapterId: 16,
    chapterName: "Neonates",
    question: "The original EPICure data from 1995 highlighted:",
    options: {
      A: "Excellent outcomes for all extremely preterm infants",
      B: "Challenges including high proportion of infants cared for in units with small numbers in this gestation category",
      C: "That all babies should be actively managed",
      D: "That survival was 100% at 23 weeks",
      E: "No long-term complications"
    },
    answer: "B",
    rationale: "The EPICure data highlighted challenges around delivery of care, including the high proportion of infants cared for in units with small numbers."
  },
  {
    id: 1025,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Survival is higher in regions where there is:",
    options: {
      A: "A less proactive approach",
      B: "A much more proactive approach to management",
      C: "No neonatal intensive care",
      D: "Only palliative care",
      E: "Home births"
    },
    answer: "B",
    rationale: "Survival is higher in regions where there is a much more proactive approach to management."
  },
  {
    id: 1026,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Caring for extreme preterm infants in tertiary centres is:",
    options: {
      A: "Not important",
      B: "Perhaps one of the most important elements in managing peri-viable birth",
      C: "Only for convenience",
      D: "More expensive but not better",
      E: "Discouraged"
    },
    answer: "B",
    rationale: "Caring for extreme preterm infants in tertiary centres is perhaps one of the most important elements."
  },
  {
    id: 1027,
    chapterId: 16,
    chapterName: "Neonates",
    question: "The original EPICure study reported on long-term outcomes at a median of 6 years and found rates of severe, moderate and mild disability to be:",
    options: {
      A: "5%, 10%, 15%",
      B: "10%, 15%, 20%",
      C: "22%, 24%, 34%",
      D: "30%, 40%, 50%",
      E: "50%, 30%, 20%"
    },
    answer: "C",
    rationale: "Rates of severe, moderate and mild disability were 22%, 24% and 34% respectively in survivors of delivery at less than 26 weeks."
  },
  {
    id: 1028,
    chapterId: 16,
    chapterName: "Neonates",
    question: "The American Academy of Paediatrics reported in 2002 that what percentage of surviving children born at less than 25 weeks had moderate to severe impairment?",
    options: {
      A: "10\u201320%",
      B: "20\u201330%",
      C: "30\u201350%",
      D: "50\u201370%",
      E: "70\u201390%"
    },
    answer: "C",
    rationale: "30\u201350% of surviving children born at less than 25 weeks had moderate to severe impairment."
  },
  {
    id: 1029,
    chapterId: 16,
    chapterName: "Neonates",
    question: "The BAPM framework describes a predominantly gestation-based risk assessment, refined by other factors including:",
    options: {
      A: "Only maternal age",
      B: "Fetal factors, clinical conditions, therapeutic interventions and clinical setting",
      C: "Only birth weight",
      D: "Only gestational age",
      E: "Only sex"
    },
    answer: "B",
    rationale: "The framework is refined by fetal factors, clinical conditions, therapeutic interventions and clinical setting."
  },
  {
    id: 1030,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Based on BAPM risk factors, patients are categorized as:",
    options: {
      A: "Low, medium and high risk",
      B: "Extremely high risk (>90%), high risk (50\u201390%) or moderate risk (<50%)",
      C: "Only viable or non-viable",
      D: "Only resuscitate or palliate",
      E: "Only grade 1, 2 or 3"
    },
    answer: "B",
    rationale: "Patients are categorized as extremely high risk (>90%), high risk (50\u201390%) or moderate risk (<50%) based on chance of dying or surviving with severe impairment."
  },
  {
    id: 1031,
    chapterId: 16,
    chapterName: "Neonates",
    question: "For a male infant delivered at 22 weeks with chorioamnionitis, no antenatal steroids and weighing less than 400g, the most appropriate approach may be:",
    options: {
      A: "Active management with full intensive care",
      B: "A palliative approach",
      C: "Immediate transfer to a tertiary centre",
      D: "Caesarean section",
      E: "Antenatal steroids urgently"
    },
    answer: "B",
    rationale: "For this extremely high-risk scenario, a palliative approach may be the most appropriate."
  },
  {
    id: 1032,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Key obstetrical components to address for extreme preterm birth include all EXCEPT:",
    options: {
      A: "Administration of antenatal steroids",
      B: "Use of tocolysis",
      C: "Magnesium sulphate administration",
      D: "Mode of delivery",
      E: "Immediate circumcision"
    },
    answer: "E",
    rationale: "Key components include antenatal steroids, tocolysis, magnesium sulphate, mode of delivery and delayed cord clamping."
  },
  {
    id: 1033,
    chapterId: 16,
    chapterName: "Neonates",
    question: "The main aim of tocolysis in threatened extreme preterm delivery is:",
    options: {
      A: "To prevent delivery entirely",
      B: "To achieve maximum benefit from antenatal corticosteroids and allow timely transfer",
      C: "To cause fetal distress",
      D: "To induce labour",
      E: "To reduce maternal pain"
    },
    answer: "B",
    rationale: "The main aim of tocolysis may be to achieve the maximum benefit from antenatal corticosteroids and allow timely transfer."
  },
  {
    id: 1034,
    chapterId: 16,
    chapterName: "Neonates",
    question: "One of the greatest areas of debate relates to:",
    options: {
      A: "The use of antenatal steroids",
      B: "The mode of delivery, especially when the fetus is in breech presentation",
      C: "The use of magnesium sulphate",
      D: "The timing of cord clamping",
      E: "The need for antibiotics"
    },
    answer: "B",
    rationale: "One of the greatest areas of debate relates to the mode of delivery, especially breech presentation requiring classical incision."
  },
  {
    id: 1035,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Extremely preterm caesarean delivery carries additional maternal risks including all EXCEPT:",
    options: {
      A: "Haemorrhage",
      B: "Infection",
      C: "Bowel injury",
      D: "Reduced risk in future pregnancies",
      E: "Risks for future pregnancies"
    },
    answer: "D",
    rationale: "Risks include haemorrhage, infection, bowel injury and risks for future pregnancies."
  },
  {
    id: 1036,
    chapterId: 16,
    chapterName: "Neonates",
    question: "The antenatal consultation for extreme preterm birth should:",
    options: {
      A: "Be led by junior staff",
      B: "Provide balanced information and outcome data, with senior staff leading",
      C: "Avoid discussing prognosis",
      D: "Only discuss active management",
      E: "Not involve parents in decision-making"
    },
    answer: "B",
    rationale: "Ideally, senior members of staff should lead the discussion and a clear treatment plan should be documented."
  },
  {
    id: 1037,
    chapterId: 16,
    chapterName: "Neonates",
    question: "When an active approach is taken for extreme preterm birth, who should be present?",
    options: {
      A: "A junior paediatric resident",
      B: "A consultant neonatologist",
      C: "Only the midwife",
      D: "Only the obstetrician",
      E: "No one special"
    },
    answer: "B",
    rationale: "It is essential that a consultant neonatologist is present to guide the stabilization process."
  },
  {
    id: 1038,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Stabilization of extreme preterm infants should typically occur:",
    options: {
      A: "In the neonatal unit only",
      B: "In the same room as the parents",
      C: "In a separate room",
      D: "Without parental presence",
      E: "Only after transfer"
    },
    answer: "B",
    rationale: "The stabilization process should typically occur in the same room as the parents who should be provided with the opportunity to touch their baby."
  },
  {
    id: 1039,
    chapterId: 16,
    chapterName: "Neonates",
    question: "The importance of breast milk for preterm infants includes all EXCEPT:",
    options: {
      A: "Nutritional value",
      B: "Immune protection",
      C: "Modulation of gut microbiota",
      D: "Increased risk of NEC",
      E: "Reduction in sepsis"
    },
    answer: "D",
    rationale: "Breast milk reduces NEC and sepsis, and provides nutritional, immune and microbiota benefits."
  },
  {
    id: 1040,
    chapterId: 16,
    chapterName: "Neonates",
    question: "The WHO recommends that infants should be exclusively breastfed for the first:",
    options: {
      A: "3 months",
      B: "4 months",
      C: "6 months",
      D: "9 months",
      E: "12 months"
    },
    answer: "C",
    rationale: "The WHO recommends exclusive breastfeeding for the first 6 months."
  },
  {
    id: 1041,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Breast milk contains bioactive and immune factors including all EXCEPT:",
    options: {
      A: "Antibodies and immunoglobulins",
      B: "Lactoferrin and lysozyme",
      C: "Growth factors and white blood cells",
      D: "Human milk oligosaccharides",
      E: "Cow's milk protein"
    },
    answer: "E",
    rationale: "Breast milk contains antibodies, immunoglobulins, lactoferrin, lysozyme, growth factors, white blood cells, microRNAs, stem cells and HMOs; not cow's milk protein."
  },
  {
    id: 1042,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Breast milk contains probiotics such as:",
    options: {
      A: "Escherichia coli",
      B: "Bifidobacterium and Lactobacillus",
      C: "Clostridium difficile",
      D: "Staphylococcus aureus",
      E: "Pseudomonas aeruginosa"
    },
    answer: "B",
    rationale: "Breast milk contains probiotics such as Bifidobacterium and Lactobacillus."
  },
  {
    id: 1043,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Feeding preterm infants breast milk results in a significant reduction in:",
    options: {
      A: "The incidence of NEC and sepsis",
      B: "The incidence of jaundice",
      C: "The need for phototherapy",
      D: "The risk of polycythaemia",
      E: "The risk of hypoglycaemia"
    },
    answer: "A",
    rationale: "Feeding preterm infants breast milk results in a significant reduction in the incidence of NEC and sepsis."
  },
  {
    id: 1044,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Breastfeeding is associated with longer term benefits including a reduction in the risk of:",
    options: {
      A: "Only infections",
      B: "Immune-mediated diseases including asthma, inflammatory bowel disease, type 1 diabetes and metabolic diseases",
      C: "Only eczema",
      D: "Only diabetes",
      E: "Only obesity"
    },
    answer: "B",
    rationale: "Breastfeeding is associated with reduced risk of immune-mediated diseases including asthma, IBD, type 1 diabetes and metabolic diseases."
  },
  {
    id: 1045,
    chapterId: 16,
    chapterName: "Neonates",
    question: "The intestinal microbiota in early life plays a major role in:",
    options: {
      A: "Only digestion",
      B: "Immune system maturation, protection against pathogens and long-term metabolic welfare",
      C: "Only vitamin synthesis",
      D: "Only drug metabolism",
      E: "Only bile acid production"
    },
    answer: "B",
    rationale: "The intestinal microbiota impacts immune system maturation, protection against pathogens and long-term metabolic welfare."
  },
  {
    id: 1046,
    chapterId: 16,
    chapterName: "Neonates",
    question: "If breast milk is not available, what can be used for very preterm infants?",
    options: {
      A: "Cow's milk only",
      B: "Donor milk banks",
      C: "Water",
      D: "Glucose solution only",
      E: "No alternative"
    },
    answer: "B",
    rationale: "There are donor milk banks available that can supply breast milk for very preterm infants."
  },
  {
    id: 1047,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Respiratory distress syndrome (RDS) is caused by:",
    options: {
      A: "Infection",
      B: "Primary surfactant deficiency combined with structural immaturity of the lung",
      C: "Meconium aspiration",
      D: "Pneumothorax",
      E: "Pulmonary hypertension"
    },
    answer: "B",
    rationale: "RDS is caused by primary surfactant deficiency combined with structural immaturity of the lung."
  },
  {
    id: 1048,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Antenatal corticosteroids:",
    options: {
      A: "Increase the incidence of RDS",
      B: "Significantly decrease the incidence of RDS",
      C: "Have no effect on RDS",
      D: "Only affect maternal outcome",
      E: "Are contraindicated in preterm labour"
    },
    answer: "B",
    rationale: "Antenatal corticosteroids significantly decrease the incidence of RDS."
  },
  {
    id: 1049,
    chapterId: 16,
    chapterName: "Neonates",
    question: "The mainstay of therapy for RDS is now aimed at:",
    options: {
      A: "Prolonged mechanical ventilation",
      B: "Avoiding mechanical ventilation with CPAP and early surfactant replacement",
      C: "High-dose steroids",
      D: "Antibiotics only",
      E: "Oxygen therapy only"
    },
    answer: "B",
    rationale: "The mainstay is aimed at avoiding mechanical ventilation with CPAP and early surfactant replacement."
  },
  {
    id: 1050,
    chapterId: 16,
    chapterName: "Neonates",
    question: "The INSURE technique refers to:",
    options: {
      A: "Intubation, surfactant, extubation",
      B: "Immediate surgery",
      C: "Insertion of a chest drain",
      D: "Intubation and suction",
      E: "Insertion of umbilical catheter"
    },
    answer: "A",
    rationale: "INSURE = Intubation, SURfactant, Extubation."
  },
  {
    id: 1051,
    chapterId: 16,
    chapterName: "Neonates",
    question: "The LISA technique refers to:",
    options: {
      A: "Less invasive surfactant administration with a fine bore catheter",
      B: "Laser surgery",
      C: "Laparoscopic intervention",
      D: "Lumbar puncture",
      E: "Lung imaging"
    },
    answer: "A",
    rationale: "LISA = Less Invasive Surfactant Administration with a fine bore catheter."
  },
  {
    id: 1052,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Bronchopulmonary dysplasia (BPD) affects up to what percentage of infants delivered at less than 28 weeks?",
    options: {
      A: "10%",
      B: "20%",
      C: "40%",
      D: "60%",
      E: "80%"
    },
    answer: "C",
    rationale: "BPD affects up to 40% of infants delivered at less than 28 weeks' gestation."
  },
  {
    id: 1053,
    chapterId: 16,
    chapterName: "Neonates",
    question: "BPD occurs when the lungs are evolving from:",
    options: {
      A: "The pseudoglandular to canalicular stage",
      B: "The canalicular to saccular stage",
      C: "The saccular to alveolar stage",
      D: "The alveolar to mature stage",
      E: "Any stage"
    },
    answer: "B",
    rationale: "BPD occurs when the lungs are evolving from the canalicular to the saccular stage of development."
  },
  {
    id: 1054,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Factors contributing to BPD include all EXCEPT:",
    options: {
      A: "Exposure to air and oxygen",
      B: "Mechanical ventilation",
      C: "Infection and inflammation",
      D: "Intrauterine growth failure",
      E: "Exclusive breastfeeding"
    },
    answer: "E",
    rationale: "Factors include air, oxygen, mechanical ventilation, infection, inflammation, intrauterine growth failure and chorioamnionitis; breastfeeding is protective."
  },
  {
    id: 1055,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Medical therapies aimed at preventing BPD include:",
    options: {
      A: "Only diuretics",
      B: "Caffeine, intramuscular vitamin A and postnatal corticosteroids",
      C: "Only bronchodilators",
      D: "Only antibiotics",
      E: "Only oxygen"
    },
    answer: "B",
    rationale: "Medical therapies include caffeine, intramuscular vitamin A and postnatal corticosteroid administration."
  },
  {
    id: 1056,
    chapterId: 16,
    chapterName: "Neonates",
    question: "The caffeine trial found that caffeine was associated with:",
    options: {
      A: "Increased BPD",
      B: "A lower incidence of BPD",
      C: "No effect on BPD",
      D: "Increased mortality",
      E: "Increased NEC"
    },
    answer: "B",
    rationale: "Caffeine was found to be associated with a lower incidence of BPD in the 'caffeine for apnoea of prematurity' trial."
  },
  {
    id: 1057,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Management of established BPD should include input from:",
    options: {
      A: "Only neonatology",
      B: "Multiple disciplines including neonatology, cardiology, pulmonology and dietetics",
      C: "Only surgery",
      D: "Only nursing",
      E: "Only physiotherapy"
    },
    answer: "B",
    rationale: "Management should include input from multiple disciplines."
  },
  {
    id: 1058,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Circulatory instability in extreme preterm infants is often characterized by:",
    options: {
      A: "High blood pressure",
      B: "Low blood pressure (hypotension)",
      C: "Normal blood pressure",
      D: "Tachycardia only",
      E: "Bradycardia only"
    },
    answer: "B",
    rationale: "Circulatory instability is often characterized by low blood pressure."
  },
  {
    id: 1059,
    chapterId: 16,
    chapterName: "Neonates",
    question: "The Joint Working Group of BAPM recommends that mean arterial blood pressure in mmHg should be maintained:",
    options: {
      A: "Above the birthweight in grams",
      B: "Above the gestational age in weeks",
      C: "Above 30 mmHg",
      D: "Above 50 mmHg",
      E: "Above 70 mmHg"
    },
    answer: "B",
    rationale: "The mean arterial blood pressure should be maintained above the gestational age in weeks."
  },
  {
    id: 1060,
    chapterId: 16,
    chapterName: "Neonates",
    question: "The ductus arteriosus connects the:",
    options: {
      A: "Aorta to the pulmonary vein",
      B: "Pulmonary artery to the descending aorta",
      C: "Right atrium to the left atrium",
      D: "Superior vena cava to the aorta",
      E: "Pulmonary vein to the left ventricle"
    },
    answer: "B",
    rationale: "The ductus arteriosus connects the pulmonary artery to the descending aorta."
  },
  {
    id: 1061,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Patency of the ductus arteriosus affects up to what percentage of babies born at less than 28 weeks?",
    options: {
      A: "20%",
      B: "40%",
      C: "60%",
      D: "80%",
      E: "100%"
    },
    answer: "C",
    rationale: "PDA affects up to 60% of babies born at less than 28 weeks' gestation."
  },
  {
    id: 1062,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Clinical signs of PDA are useful in identifying a haemodynamically significant ductus without:",
    options: {
      A: "A chest X-ray",
      B: "A bedside echocardiogram",
      C: "Blood tests",
      D: "Physical examination",
      E: "Ultrasound of the head"
    },
    answer: "B",
    rationale: "Clinical signs are not useful in identifying a haemodynamically significant ductus without a bedside echocardiogram."
  },
  {
    id: 1063,
    chapterId: 16,
    chapterName: "Neonates",
    question: "Necrotizing enterocolitis (NEC) occurs primarily in:",
    options: {
      A: "Term infants",
      B: "Preterm neonates",
      C: "Post-term infants",
      D: "Only infants with Down syndrome",
      E: "Only infants with congenital heart disease"
    },
    answer: "B",
    rationale: "NEC is a serious gastrointestinal complication that occurs primarily in preterm neonates."
  },
  {
    id: 1064,
    chapterId: 16,
    chapterName: "Neonates",
    question: "The incidence of NEC is approximately 5\u201310% in babies delivered at:",
    options: {
      A: "Less than 28 weeks",
      B: "Less than 32 weeks",
      C: "Less than 36 weeks",
      D: "Term",
      E: "Post-term"
    },
    answer: "B",
    rationale: "NEC incidence is approximately 5\u201310% in babies delivered at less than 32 weeks."
  },
  {
    id: 1065,
    chapterId: 16,
    chapterName: "Neonates",
    question: "NEC is characterized by:",
    options: {
      A: "Only bacterial infection",
      B: "Intestinal immaturity and bacterial overgrowth in association with altered blood flow",
      C: "Only viral infection",
      D: "Only mechanical obstruction",
      E: "Only congenital anomaly"
    },
    answer: "B",
    rationale: "NEC is characterized by intestinal immaturity and bacterial overgrowth in association with altered blood flow."
  }
];
// Get random questions from all chapters or a specific chapter
export const getRandomQuestions = (
  count: number,
  chapterId?: number
): Question[] => {
  const sourceQuestions = chapterId
    ? QUESTIONS.filter((q) => q.chapterId === chapterId)
    : QUESTIONS;

  const shuffled = [...sourceQuestions];

  // Fisher-Yates shuffle
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[j]] = [
      shuffled[j],
      shuffled[i],
    ];
  }

  return shuffled.slice(0, count);
};
