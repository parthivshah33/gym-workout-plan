// ─── Star 11 Gym — New Workout Plan ────────────────────────────────────
// Structure: 3 workout types that repeat across 6 training days.
// Day 1 = Day 4 → Back + Biceps + Cardio
// Day 2 = Day 5 → Legs + Abs/Core
// Day 3 = Day 6 → Triceps + Chest + Shoulders
//
// videoId = YouTube ID for a short form/demo clip (opens in-app modal).

export const workoutDays = [
  {
    id: 'back-biceps',
    label: 'Back & Bis',
    dayNumbers: '1 / 4',
    color: 'pull',
    title: 'Back · Biceps · Cardio',
    sections: [
      {
        group: 'Back',
        color: 'pull',
        exercises: [
          {
            id: 'chin-ups',
            name: 'Chin Ups',
            sets: 3,
            reps: '15',
            videoId: 'T78xCiw_R6g',
            videoTitle: 'Chin Ups — Form Guide',
          },
          {
            id: 'lat-pull-down',
            name: 'Lat Pull Down',
            sets: 3,
            reps: '15',
            videoId: 'CAwf7n6Luuc',
            videoTitle: 'Lat Pulldown — Form Guide',
          },
          {
            id: 'one-arm-row',
            name: 'One Arm Row',
            sets: 3,
            reps: '15',
            videoId: 'pYcpY20QaE8',
            videoTitle: 'One Arm Row — Form Guide',
          },
          {
            id: 'rev-lat-pull-down',
            name: 'Rev. Lat Pull Down',
            sets: 3,
            reps: '15',
            videoId: 'apzFTbsm7HU',
            videoTitle: 'Reverse Lat Pulldown — Form Guide',
          },
          {
            id: 'mid-row',
            name: 'Mid Row',
            sets: 3,
            reps: '15',
            videoId: 'GZbfZ033f74',
            videoTitle: 'Mid / Seated Row — Form Guide',
          },
        ],
      },
      {
        group: 'Biceps',
        color: 'pull',
        exercises: [
          {
            id: 'cb-curl',
            name: 'C.B. Curl',
            sets: 3,
            reps: '15',
            videoId: 'L9GwtjwAM8Y',
            videoTitle: 'Cable Curl — Form Guide',
          },
          {
            id: 'hammer-curl',
            name: 'Hammer Curl',
            sets: 3,
            reps: '15',
            videoId: 'zC3nLlEvin4',
            videoTitle: 'Hammer Curl — Form Guide',
          },
          {
            id: 'db-curl',
            name: 'D.B. Curl',
            sets: 3,
            reps: '15',
            videoId: 'av7-8igSXTs',
            videoTitle: 'Dumbbell Curl — Form Guide',
          },
        ],
      },
      {
        group: 'Cardio',
        color: 'pull',
        exercises: [
          {
            id: 'treadmill',
            name: 'Treadmill',
            sets: null,
            reps: null,
            duration: '10 min',
            videoId: 'zeS4qu6bXy4',
            videoTitle: 'Treadmill Running Form',
          },
        ],
      },
    ],
  },
  {
    id: 'legs-core',
    label: 'Legs & Core',
    dayNumbers: '2 / 5',
    color: 'legs',
    title: 'Legs · Abs / Core',
    sections: [
      {
        group: 'Legs',
        color: 'legs',
        exercises: [
          {
            id: 'barbell-squats',
            name: 'Barbell Squats',
            sets: 3,
            reps: '15',
            videoId: 'SW_C1A-rejs',
            videoTitle: 'Barbell Squat — Form Guide',
          },
          {
            id: 'leg-press',
            name: 'Leg Press',
            sets: 3,
            reps: '15',
            videoId: 'IZxyjW7MPJQ',
            videoTitle: 'Leg Press — Form Guide',
          },
          {
            id: 'leg-curl',
            name: 'Leg Curl',
            sets: 3,
            reps: '15',
            videoId: '1Tq3QdYUuHs',
            videoTitle: 'Leg Curl — Form Guide',
          },
          {
            id: 'leg-ext',
            name: 'Leg Ext.',
            sets: 3,
            reps: '15',
            videoId: 'YyvSfVjQeL0',
            videoTitle: 'Leg Extension — Form Guide',
          },
          {
            id: 'calf-raise',
            name: 'Calf Raise',
            sets: 3,
            reps: '15 / 12 / 10',
            note: 'Drop reps each set',
            videoId: 'gwLzBJYoWlI',
            videoTitle: 'Calf Raise — Form Guide',
          },
        ],
      },
      {
        group: 'Abs / Core',
        color: 'legs',
        exercises: [
          {
            id: 'abs-crunch',
            name: 'Abs Crunch',
            sets: 3,
            reps: '20',
            videoId: 'Xyd_fa5zoEU',
            videoTitle: 'Abs Crunch — Form Guide',
          },
          {
            id: 'leg-raise',
            name: 'Leg Raise',
            sets: 3,
            reps: '20',
            videoId: 'JB2oyawG9KI',
            videoTitle: 'Leg Raise — Form Guide',
          },
          {
            id: 'bicycle-crunch',
            name: 'Bicycle Crunch',
            sets: 3,
            reps: '20',
            videoId: '9FGilxCbdz8',
            videoTitle: 'Bicycle Crunch — Form Guide',
          },
          {
            id: 'plank-hold',
            name: 'Plank Hold',
            sets: 3,
            reps: null,
            duration: '1 min',
            note: 'Hold for 1 min per set',
            videoId: 'ASdvN_XEl_c',
            videoTitle: 'Plank Hold — Form Guide',
          },
        ],
      },
    ],
  },
  {
    id: 'push',
    label: 'Push Day',
    dayNumbers: '3 / 6',
    color: 'push',
    title: 'Triceps · Chest · Shoulders',
    sections: [
      {
        group: 'Triceps',
        color: 'push',
        exercises: [
          {
            id: 'cb-push-down',
            name: 'C.B. Push Down',
            sets: 3,
            reps: '15 / 12 / 10',
            note: 'Drop reps each set',
            videoId: '_w-HpW70nSQ',
            videoTitle: 'Cable Pushdown — Form Guide',
          },
          {
            id: 'rope-push-down',
            name: 'Rope Push Down',
            sets: 3,
            reps: '15 / 12 / 10',
            note: 'Drop reps each set',
            videoId: 'NvZKjiZ8NYc',
            videoTitle: 'Rope Pushdown — Form Guide',
          },
        ],
      },
      {
        group: 'Chest',
        color: 'push',
        exercises: [
          {
            id: 'flat-bench-press',
            name: 'Flat Bench Press',
            sets: 3,
            reps: '15 / 12 / 10',
            note: 'Drop reps each set',
            videoId: 'rT7DgCr-3pg',
            videoTitle: 'Flat Bench Press — Form Guide',
          },
          {
            id: 'incline-db-press',
            name: 'Incline D.B. Press',
            sets: 3,
            reps: '15 / 12 / 10',
            videoId: '8iPEnn-ltC8',
            videoTitle: 'Incline DB Press — Form Guide',
          },
          {
            id: 'incline-db-flys',
            name: 'Incline DB Flys',
            sets: 3,
            reps: '15 / 12 / 10',
            videoId: 'bDaIL_zKbGs',
            videoTitle: 'Incline DB Fly — Form Guide',
          },
          {
            id: 'flat-db-press',
            name: 'Flat DB Press',
            sets: 3,
            reps: '15 / 12 / 10',
            videoId: 'VmB1G1K7v94',
            videoTitle: 'Flat DB Press — Form Guide',
          },
          {
            id: 'pec-fly',
            name: 'Pec Fly',
            sets: 3,
            reps: '15 / 12 / 10',
            videoId: 'g3T7LsEeDWQ',
            videoTitle: 'Pec Deck / Fly — Form Guide',
          },
        ],
      },
      {
        group: 'Shoulders',
        color: 'push',
        exercises: [
          {
            id: 'db-front-raise',
            name: 'DB Front Raise',
            sets: 3,
            reps: '15',
            videoId: '-t7fuZ0KhDA',
            videoTitle: 'Front Raise — Form Guide',
          },
          {
            id: 'db-lat-raises',
            name: 'DB Lat Raises',
            sets: 3,
            reps: '15',
            videoId: '3VcKaXpzqRo',
            videoTitle: 'Lateral Raise — Form Guide',
          },
          {
            id: 'cb-upright-rows',
            name: 'CB Up Right Rows',
            sets: 3,
            reps: '15',
            videoId: 'IhZLB48kluc',
            videoTitle: 'Upright Row — Form Guide',
          },
        ],
      },
      {
        group: 'Triceps Finisher',
        color: 'push',
        exercises: [
          {
            id: 'rev-dips',
            name: 'Rev. Dips',
            sets: 3,
            reps: '15',
            videoId: 'c3ZGl4pAwZ4',
            videoTitle: 'Bench / Reverse Dips — Form Guide',
          },
        ],
      },
    ],
  },
];

// ─── Progress / Measurement Data ───────────────────────────────────────
// Retained from the original plan measurements.

export const progressData = {
  labels: ['05 Mar', '08 Apr', '20 Jul'],
  kpis: [
    { value: '75.1', unit: 'kg', delta: '▼ 0.6kg', direction: 'down', label: 'Weight' },
    { value: '23.7', unit: '%', delta: '▼ 1.7%', direction: 'down', label: 'Body Fat' },
    { value: '30', unit: 'cm', delta: '▼ 7cm', direction: 'down', label: 'Waist' },
  ],
  charts: [
    { title: 'Weight (kg)', data: [75.7, 75.7, 75.1], color: '#8b9099' },
    { title: 'Body Fat (%)', data: [25.4, 25.2, 23.7], color: '#6fae7f' },
    { title: 'Waist (cm)', data: [37, 36, 30], color: '#c4453a' },
  ],
  measurements: {
    headers: ['Metric', '05 Mar', '08 Apr', '20 Jul'],
    rows: [
      ['Weight (kg)', '75.7', '75.7', '75.1'],
      ['BMI', '25.1', '25.1', '~24.9'],
      ['Body Fat %', '25.4', '25.2', '23.7'],
      ['Visceral Fat', '8.5', '8.5', '8.5'],
      ['Neck', '14.8', '14.7', '14.5'],
      ['Shoulder', '19', '18.5', '19.5'],
      ['Chest', '39.5', '39', '38.5'],
      ['Upper Arm', '11', '11.5', '11.1'],
      ['Fore Arm', '10.3', '10.5', '10.5'],
      ['Upper Abdomen', '35.5', '35.5', '35'],
      ['Waist', '37', '36', '30'],
      ['Lower Abdomen', '39', '37', '37.5'],
      ['Hips', '41.5', '41', '40'],
      ['Thigh', '24', '24', '24'],
      ['Calf', '14.5', '14.5', '15'],
    ],
  },
  trainerNote:
    "Trainer's note (Maxwell, 20 Jul): focus more on abs, arms & chest — this is exactly what the current split is built around.",
};

// ─── Member Info ───────────────────────────────────────────────────────

export const memberInfo = {
  gym: 'Star 11 Gym',
  regNo: '1115',
  planType: 'Fitness Basic',
  startDate: '06 Mar 2026',
  endDate: '01 Sep 2026',
  weeklyRotation: [
    { day: 'Day 1', workout: 'Back + Biceps + Treadmill' },
    { day: 'Day 2', workout: 'Legs + Abs / Core' },
    { day: 'Day 3', workout: 'Chest + Shoulders + Triceps' },
    { day: 'Day 4', workout: 'Repeat Day 1' },
    { day: 'Day 5', workout: 'Repeat Day 2' },
    { day: 'Day 6', workout: 'Repeat Day 3' },
    { day: 'Day 7', workout: 'Rest' },
  ],
};
