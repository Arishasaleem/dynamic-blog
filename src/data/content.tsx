interface Data {
    id:number,
    name:string,
    title:string,
    img:string,
    description:string
    treatment:string
}

export const HealthData: Data[] = [
    
     {
      id: 1,
      name: "Sikness",
      title: "Common Cold",
      img: "/cold.webp",
      description: "The common cold is a viral infection of the upper respiratory tract, typically caused by rhinoviruses. Symptoms include a runny or stuffy nose, sore throat, cough, sneezing, mild fever, and fatigue..",
      treatment: "antibiotics are ineffective against viral infections, if complications like a bacterial infection develop, a healthcare provider may recommend additional treatments."
      
    },

     {
        id: 2,
        name: "dengue",
        title: "mosquito bite",
        img: "/dengue.jpg",
        description: "Dengue is a viral infection transmitted by mosquitoes, particularly the Aedes mosquito. Symptoms include high fever, severe headache, pain behind the eyes, joint and muscle pain, rash, and nausea..",
        treatment: "Supportive care, such as staying hydrated, taking pain relievers like acetaminophen (paracetamol), and rest, is essential. In severe cases, hospitalization may be needed to manage complications like bleeding or organ damage. Prevention through mosquito control and avoiding bites is the best way to reduce the risk of contracting dengue."
       
     },
     {
        id: 3,
        name: "related to blood",
        title: "Diabetes",
        img: "/Diabetes.jpg",
        description: "Diabetes is a chronic condition that affects how the body processes blood sugar (glucose). It occurs when the body either doesn't produce enough insulin, a hormone that helps regulate blood sugar, or becomes resistant to its effects.Symptoms can include excessive thirst, frequent urination, fatigue, and blurred vision. If left untreated, diabetes can lead to serious complications, such as heart disease, kidney damage, and nerve damage. ",
        treatment: "insulin therapy is essential for survival, and patients must manage their blood sugar levels through regular insulin injections or an insulin pump. people may no longer need medication. In some cases, medications or procedures like bariatric surgery. While diabetes requires lifelong management, with proper care, individuals can live healthy and active lives without complications."
     },

     {
        id: 4,
        name: "headache",
        title: "migraine",
        img: "/migraine.webp",
        description: "A migraine is a neurological condition marked by intense, throbbing headaches, often on one side of the head, and accompanied by symptoms such as nausea, vomiting, and sensitivity to light and sound. Some migraines are preceded by an aura, involving visual disturbances or other sensory changes. These episodes can last from hours to days and significantly disrupt daily activities. Common triggers include stress, hormonal changes, certain foods, and lack of sleep.",
        treatment: "Migraine treatment includes medications for pain relief, such as NSAIDs or triptans, and preventative treatments like beta-blockers or anti-seizure drugs. Lifestyle changes, including regular sleep, stress management, and avoiding triggers, can also help reduce frequency and severity."
     },
     
     {
        id: 5,
        name: "joint pain",
        title: "Arthritis",
        img: "/joints.jpg",
        description: "A migraine is a neurological condition marked by intense, throbbing headaches, often on one side of the head, and accompanied by symptoms such as nausea, vomiting, and sensitivity to light and sound. Some migraines are preceded by an aura, involving visual disturbances or other sensory changes. These episodes can last from hours to days and significantly disrupt daily activities. Common triggers include stress, hormonal changes, certain foods, and lack of sleep.",
        treatment: "Preventative treatments, such as beta-blockers, antidepressants, anti-seizure medications, or CGRP inhibitors, may be prescribed for frequent or severe migraines. Lifestyle adjustments, including managing stress, maintaining regular sleep patterns, staying hydrated, and avoiding known triggers, can also help."

     },
     {
      id: 6,
      name: "High blood pressure",
      title: "Heart problems",
      img: "/bp.png",
      description: "A normal reading is below 120/80 mmHg. High BP (hypertension) can lead to heart disease, while low BP (hypotension) may cause dizziness or fainting. Healthy habits like a balanced diet, regular exercise, and stress management can help maintain optimal levels.",
      treatment: "Treatment for high blood pressure may include lifestyle changes like a balanced diet, regular exercise, and medication if necessary. For low blood pressure, increasing fluid intake, wearing compression stockings, and adjusting medications can help. Always consult a healthcare provider for proper diagnosis and treatment."







   }

    
]