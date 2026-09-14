// Personal lab archive. Add a new object to `labReports` when a later report arrives.

export const labReports = [
  {
    id: 'haem-2026-09-14',
    type: 'Haematology analysis',
    date: '14 Sep 2026',
    dateIso: '2026-09-14',
    reportId: '9',
    patient: 'PARTHIV',
    sex: 'M',
    referredBy: 'SELF',
    summary:
      'CBC mostly in range. Differential: neutrophils low, lymphocytes and eosinophils high. Peripheral smear adequate. Malaria (P.v. / P.f.) not detected.',
    flags: [
      { label: 'Neutrophils 55%', detail: 'Below 60–70%' },
      { label: 'Lymphocytes 35%', detail: 'Above 20–30%' },
      { label: 'Eosinophils 5%', detail: 'Above 1–4%' },
    ],
    screens: [
      { label: 'Peripheral smear', value: 'Adequate' },
      { label: 'Malaria parasite (MP)', value: 'Not detected' },
      { label: 'Rapid P.v. / P.f. card', value: 'Negative (control line only)' },
    ],
    groups: [
      {
        title: 'Blood counts & indices',
        rows: [
          { name: 'Haemoglobin', value: '14.90', unit: 'gm%', ref: '13.00 – 17.00', status: 'ok' },
          { name: 'Total R.B.C.', value: '5.42', unit: 'mill/c.mm', ref: '4.6 – 6.2', status: 'ok' },
          { name: 'P.C.V.', value: '44.30', unit: '%', ref: '40 – 54', status: 'ok' },
          { name: 'M.C.V.', value: '81.73', unit: 'Fl', ref: '80 – 96', status: 'ok' },
          { name: 'M.C.H.', value: '27.49', unit: 'Pg', ref: '27 – 31', status: 'ok' },
          { name: 'M.C.H.C.', value: '33.63', unit: '%', ref: '32 – 36', status: 'ok' },
          { name: 'R.D.W.', value: '12.90', unit: '%', ref: '10 – 15', status: 'ok' },
          { name: 'Total W.B.C.', value: '8000', unit: '/c.mm', ref: '4000 – 11000', status: 'ok' },
          { name: 'Platelet count', value: '370,000', unit: '/c.mm', ref: '1.5 – 4.5 lacs', status: 'ok' },
        ],
      },
      {
        title: 'Differential leucocytes',
        rows: [
          { name: 'Neutrophils', value: '55', unit: '%', ref: '60 – 70', status: 'low' },
          { name: 'Lymphocytes', value: '35', unit: '%', ref: '20 – 30', status: 'high' },
          { name: 'Eosinophils', value: '05', unit: '%', ref: '01 – 04', status: 'high' },
          { name: 'Monocytes', value: '05', unit: '%', ref: '02 – 06', status: 'ok' },
          { name: 'Basophils', value: '00', unit: '%', ref: '00 – 01', status: 'ok' },
        ],
      },
    ],
  },
];
