export default (context) => {
  return new Promise(function (resolve) {
    resolve({
      app: {
        title: `قافلة الإيمان`,
        description:  'برامجنا للعمرة تهدف إلي توفير أوقاتكم وكفايتكم عناء البحث عن الأسعارالمناسبة يمكنكم الاعتماد علينا من أجل رحلة مريحة',
        dir: `rtl`,
        ar: `عربي`,
        en: `English`
      },

      input: {
        gender: `اللقب`,
        mr: `السيد`,
        ms: `السيدة`,
        name: `الاسم`,
        mobile: `رقم الجوال`,
        email: `الإيميل`,
        country: `الدولة`,
        city: `المدينة`,
        code: `الكود`,
        desc: `وصف مُختصر`,
        service: `الصف الدراسي`,
        register: `تسجيل`,
        done: 'تم التسجيل، سوف يتواصل معك فريقنا قريبًا.'
      },

      v: {
        notvalid: `غير صحيح.`,
        required: `حقل إلزامي.`,
        email: `الإيميل غير صحيح.`,
        number: `رقم صحيح فقط.`
      },

      home: {
        title: `قافلة الإيمان`,
      },
    })
  })
}
