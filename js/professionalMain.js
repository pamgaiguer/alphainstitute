$(document).ready(function(){
  var listDiv = '';
  var listMed =
  [
  {
    "fullName":"Alexandre Almeida",
    "occupation":"Psicólogo",
    "idNumber": "CRP 123.082",
    "slogan": "Terapeuta holístico, acupunturista e psicólogo...",
    "biography": "Terapeuta Holístico, Acupunturista e Psicólogo, formado pela Universidade Nove de Julho de São Paulo. Pós graduado em Psicanálise (Sociedade Brasileira de Psicanálise Integrativa) e em Psicologia Analítica (Instituto Numen). Traz como formação especifica Terapia de Regressão e Engenharia. Há 29 anos, é estudioso de Física Quântica e Astrologia, 'Ligar a Psicologia com a Psiquiatria Médica, dentro da Astrologia' e ministra Indutores Quânticos Frequenciais, a base d'água, estruturando os órgãos internos do corpo, buscando assim o Equilíbrio Iônico. Formação complementar: Shiatsuterapia, Fitoterapia-Chinesa, Estudos da Psicossomática, Medicina Tradicional Chinesa (Acupuntura e Moxabustão- jiŭ (pinyin), 'longo tempo de aplicação do fogo'), Aurículo Acupuntura e Crânio Acupuntura, Quiro-Acupuntura (Coreana), Reiki e Técnico em Quiropraxia.",
    "img": "../images/professionals_internas/alexandre_thumb.png"
  },
  {
    "fullName":"Amanda Mariano",
    "occupation":"Naturóloga",
    "idNumber": "Não Informado",
    "slogan": "Naturóloga formada pela UAM em 2010...",
    "biography": "Naturóloga formada pela UAM em 2010. Especialista em Fitoterapia Brasileira pela UAM. Especialista em Acupuntura, Fitoterapia e Dietoterapia Chinesa pela ETOSP -Escola de Terapias Orientais de São Paulo. Atua no segmento de qualidade de vida e bem estar através das terapias naturais integrativas e complementares há 10 anos. Formação nas áreas de  Aromaterapia, Florais de Bach, Massoterapia, Hidroterapia, Geoterapia e Calatonia. Tem experiência em atuação em spas com técnicas corporais naturais e práticas meditativas.",
    "img": "../images/professionals_internas/amanda_thumb.png",
  },
  {
    "fullName":"Bárbara",
    "occupation":"Naturóloga",
    "idNumber": "Não Informado",
    "slogan": "Naturóloga formada pela UAM em 2010...",
    "biography": "Naturóloga formada pela UAM em 2010. Especialista em Fitoterapia Brasileira pela UAM. Especialista em Acupuntura, Fitoterapia e Dietoterapia Chinesa pela ETOSP -Escola de Terapias Orientais de São Paulo. Atua no segmento de qualidade de vida e bem estar através das terapias naturais integrativas e complementares há 10 anos. Formação nas áreas de  Aromaterapia, Florais de Bach, Massoterapia, Hidroterapia, Geoterapia e Calatonia. Tem experiência em atuação em spas com técnicas corporais naturais e práticas meditativas.",
    "img": "../images/professionals_internas/barbara_thumb.png",
  },
    {
    "fullName":"Bruna",
    "occupation":"Naturóloga",
    "idNumber": "Não Informado",
    "slogan": "Naturóloga formada pela UAM em 2010...",
    "biography": "Naturóloga formada pela UAM em 2010. Especialista em Fitoterapia Brasileira pela UAM. Especialista em Acupuntura, Fitoterapia e Dietoterapia Chinesa pela ETOSP -Escola de Terapias Orientais de São Paulo. Atua no segmento de qualidade de vida e bem estar através das terapias naturais integrativas e complementares há 10 anos. Formação nas áreas de  Aromaterapia, Florais de Bach, Massoterapia, Hidroterapia, Geoterapia e Calatonia. Tem experiência em atuação em spas com técnicas corporais naturais e práticas meditativas.",
    "img": "../images/professionals_internas/bruna_thumb.png",
  },
  {
    "fullName":"Cristiane",
    "occupation":"Naturóloga",
    "idNumber": "Não Informado",
    "slogan": "Naturóloga formada pela UAM em 2010...",
    "biography": "Naturóloga formada pela UAM em 2010. Especialista em Fitoterapia Brasileira pela UAM. Especialista em Acupuntura, Fitoterapia e Dietoterapia Chinesa pela ETOSP -Escola de Terapias Orientais de São Paulo. Atua no segmento de qualidade de vida e bem estar através das terapias naturais integrativas e complementares há 10 anos. Formação nas áreas de  Aromaterapia, Florais de Bach, Massoterapia, Hidroterapia, Geoterapia e Calatonia. Tem experiência em atuação em spas com técnicas corporais naturais e práticas meditativas.",
    "img": "../images/professionals_internas/cristiane_thumb.png",
  },
  {
    "fullName":"Cristina",
    "occupation":"Naturóloga",
    "idNumber": "Não Informado",
    "slogan": "Naturóloga formada pela UAM em 2010...",
    "biography": "Naturóloga formada pela UAM em 2010. Especialista em Fitoterapia Brasileira pela UAM. Especialista em Acupuntura, Fitoterapia e Dietoterapia Chinesa pela ETOSP -Escola de Terapias Orientais de São Paulo. Atua no segmento de qualidade de vida e bem estar através das terapias naturais integrativas e complementares há 10 anos. Formação nas áreas de  Aromaterapia, Florais de Bach, Massoterapia, Hidroterapia, Geoterapia e Calatonia. Tem experiência em atuação em spas com técnicas corporais naturais e práticas meditativas.",
    "img": "../images/professionals_internas/cristina_thumb.png",
  },
  {
    "fullName":"Elidia",
    "occupation":"Naturóloga",
    "idNumber": "Não Informado",
    "slogan": "Naturóloga formada pela UAM em 2010...",
    "biography": "Naturóloga formada pela UAM em 2010. Especialista em Fitoterapia Brasileira pela UAM. Especialista em Acupuntura, Fitoterapia e Dietoterapia Chinesa pela ETOSP -Escola de Terapias Orientais de São Paulo. Atua no segmento de qualidade de vida e bem estar através das terapias naturais integrativas e complementares há 10 anos. Formação nas áreas de  Aromaterapia, Florais de Bach, Massoterapia, Hidroterapia, Geoterapia e Calatonia. Tem experiência em atuação em spas com técnicas corporais naturais e práticas meditativas.",
    "img": "../images/professionals_internas/elidia_thumb.png",
  },
  {
    "fullName":"Emília Gadelha",
    "occupation":"Naturóloga",
    "idNumber": "Não Informado",
    "slogan": "Naturóloga formada pela UAM em 2010...",
    "biography": "Naturóloga formada pela UAM em 2010. Especialista em Fitoterapia Brasileira pela UAM. Especialista em Acupuntura, Fitoterapia e Dietoterapia Chinesa pela ETOSP -Escola de Terapias Orientais de São Paulo. Atua no segmento de qualidade de vida e bem estar através das terapias naturais integrativas e complementares há 10 anos. Formação nas áreas de  Aromaterapia, Florais de Bach, Massoterapia, Hidroterapia, Geoterapia e Calatonia. Tem experiência em atuação em spas com técnicas corporais naturais e práticas meditativas.",
    "img": "../images/professionals_internas/emilia_thumb.png",
  },
  {
    "fullName":"Glene",
    "occupation":"Naturóloga",
    "idNumber": "Não Informado",
    "slogan": "Naturóloga formada pela UAM em 2010...",
    "biography": "Naturóloga formada pela UAM em 2010. Especialista em Fitoterapia Brasileira pela UAM. Especialista em Acupuntura, Fitoterapia e Dietoterapia Chinesa pela ETOSP -Escola de Terapias Orientais de São Paulo. Atua no segmento de qualidade de vida e bem estar através das terapias naturais integrativas e complementares há 10 anos. Formação nas áreas de  Aromaterapia, Florais de Bach, Massoterapia, Hidroterapia, Geoterapia e Calatonia. Tem experiência em atuação em spas com técnicas corporais naturais e práticas meditativas.",
    "img": "../images/professionals_internas/glene_thumb.png",
  },
  {
    "fullName":"Lamia",
    "occupation":"Naturóloga",
    "idNumber": "Não Informado",
    "slogan": "Naturóloga formada pela UAM em 2010...",
    "biography": "Naturóloga formada pela UAM em 2010. Especialista em Fitoterapia Brasileira pela UAM. Especialista em Acupuntura, Fitoterapia e Dietoterapia Chinesa pela ETOSP -Escola de Terapias Orientais de São Paulo. Atua no segmento de qualidade de vida e bem estar através das terapias naturais integrativas e complementares há 10 anos. Formação nas áreas de  Aromaterapia, Florais de Bach, Massoterapia, Hidroterapia, Geoterapia e Calatonia. Tem experiência em atuação em spas com técnicas corporais naturais e práticas meditativas.",
    "img": "../images/professionals_internas/lamia_thumb.png",
  },
  {
    "fullName":"Luis",
    "occupation":"Naturóloga",
    "idNumber": "Não Informado",
    "slogan": "Naturóloga formada pela UAM em 2010...",
    "biography": "Naturóloga formada pela UAM em 2010. Especialista em Fitoterapia Brasileira pela UAM. Especialista em Acupuntura, Fitoterapia e Dietoterapia Chinesa pela ETOSP -Escola de Terapias Orientais de São Paulo. Atua no segmento de qualidade de vida e bem estar através das terapias naturais integrativas e complementares há 10 anos. Formação nas áreas de  Aromaterapia, Florais de Bach, Massoterapia, Hidroterapia, Geoterapia e Calatonia. Tem experiência em atuação em spas com técnicas corporais naturais e práticas meditativas.",
    "img": "../images/professionals_internas/luis_thumb.png",
  },
  {
    "fullName":"Marisa",
    "occupation":"Naturóloga",
    "idNumber": "Não Informado",
    "slogan": "Naturóloga formada pela UAM em 2010...",
    "biography": "Naturóloga formada pela UAM em 2010. Especialista em Fitoterapia Brasileira pela UAM. Especialista em Acupuntura, Fitoterapia e Dietoterapia Chinesa pela ETOSP -Escola de Terapias Orientais de São Paulo. Atua no segmento de qualidade de vida e bem estar através das terapias naturais integrativas e complementares há 10 anos. Formação nas áreas de  Aromaterapia, Florais de Bach, Massoterapia, Hidroterapia, Geoterapia e Calatonia. Tem experiência em atuação em spas com técnicas corporais naturais e práticas meditativas.",
    "img": "../images/professionals_internas/marisa_thumb.png",
  },
  {
    "fullName":"Mauricio",
    "occupation":"Naturóloga",
    "idNumber": "Não Informado",
    "slogan": "Naturóloga formada pela UAM em 2010...",
    "biography": "Naturóloga formada pela UAM em 2010. Especialista em Fitoterapia Brasileira pela UAM. Especialista em Acupuntura, Fitoterapia e Dietoterapia Chinesa pela ETOSP -Escola de Terapias Orientais de São Paulo. Atua no segmento de qualidade de vida e bem estar através das terapias naturais integrativas e complementares há 10 anos. Formação nas áreas de  Aromaterapia, Florais de Bach, Massoterapia, Hidroterapia, Geoterapia e Calatonia. Tem experiência em atuação em spas com técnicas corporais naturais e práticas meditativas.",
    "img": "../images/professionals_internas/mauricio_thumb.png",
  },
  {
    "fullName":"Paula",
    "occupation":"Naturóloga",
    "idNumber": "Não Informado",
    "slogan": "Naturóloga formada pela UAM em 2010...",
    "biography": "Naturóloga formada pela UAM em 2010. Especialista em Fitoterapia Brasileira pela UAM. Especialista em Acupuntura, Fitoterapia e Dietoterapia Chinesa pela ETOSP -Escola de Terapias Orientais de São Paulo. Atua no segmento de qualidade de vida e bem estar através das terapias naturais integrativas e complementares há 10 anos. Formação nas áreas de  Aromaterapia, Florais de Bach, Massoterapia, Hidroterapia, Geoterapia e Calatonia. Tem experiência em atuação em spas com técnicas corporais naturais e práticas meditativas.",
    "img": "../images/professionals_internas/paula_thumb.png",
  },
  {
    "fullName":"Renato",
    "occupation":"Naturóloga",
    "idNumber": "Não Informado",
    "slogan": "Naturóloga formada pela UAM em 2010...",
    "biography": "Naturóloga formada pela UAM em 2010. Especialista em Fitoterapia Brasileira pela UAM. Especialista em Acupuntura, Fitoterapia e Dietoterapia Chinesa pela ETOSP -Escola de Terapias Orientais de São Paulo. Atua no segmento de qualidade de vida e bem estar através das terapias naturais integrativas e complementares há 10 anos. Formação nas áreas de  Aromaterapia, Florais de Bach, Massoterapia, Hidroterapia, Geoterapia e Calatonia. Tem experiência em atuação em spas com técnicas corporais naturais e práticas meditativas.",
    "img": "../images/professionals_internas/renato_thumb.png",
  },
  {
    "fullName":"Roberta",
    "occupation":"Naturóloga",
    "idNumber": "Não Informado",
    "slogan": "Naturóloga formada pela UAM em 2010...",
    "biography": "Naturóloga formada pela UAM em 2010. Especialista em Fitoterapia Brasileira pela UAM. Especialista em Acupuntura, Fitoterapia e Dietoterapia Chinesa pela ETOSP -Escola de Terapias Orientais de São Paulo. Atua no segmento de qualidade de vida e bem estar através das terapias naturais integrativas e complementares há 10 anos. Formação nas áreas de  Aromaterapia, Florais de Bach, Massoterapia, Hidroterapia, Geoterapia e Calatonia. Tem experiência em atuação em spas com técnicas corporais naturais e práticas meditativas.",
    "img": "../images/professionals_internas/roberta_thumb.png",
  },
  {
    "fullName":"Rosario",
    "occupation":"Naturóloga",
    "idNumber": "Não Informado",
    "slogan": "Naturóloga formada pela UAM em 2010...",
    "biography": "Naturóloga formada pela UAM em 2010. Especialista em Fitoterapia Brasileira pela UAM. Especialista em Acupuntura, Fitoterapia e Dietoterapia Chinesa pela ETOSP -Escola de Terapias Orientais de São Paulo. Atua no segmento de qualidade de vida e bem estar através das terapias naturais integrativas e complementares há 10 anos. Formação nas áreas de  Aromaterapia, Florais de Bach, Massoterapia, Hidroterapia, Geoterapia e Calatonia. Tem experiência em atuação em spas com técnicas corporais naturais e práticas meditativas.",
    "img": "../images/professionals_internas/rosario_thumb.png",
  },
  {
    "fullName":"Suzete",
    "occupation":"Naturóloga",
    "idNumber": "Não Informado",
    "slogan": "Naturóloga formada pela UAM em 2010...",
    "biography": "Naturóloga formada pela UAM em 2010. Especialista em Fitoterapia Brasileira pela UAM. Especialista em Acupuntura, Fitoterapia e Dietoterapia Chinesa pela ETOSP -Escola de Terapias Orientais de São Paulo. Atua no segmento de qualidade de vida e bem estar através das terapias naturais integrativas e complementares há 10 anos. Formação nas áreas de  Aromaterapia, Florais de Bach, Massoterapia, Hidroterapia, Geoterapia e Calatonia. Tem experiência em atuação em spas com técnicas corporais naturais e práticas meditativas.",
    "img": "../images/professionals_internas/suzete_thumb.png",
  },
  {
    "fullName":"Vera G",
    "occupation":"Naturóloga",
    "idNumber": "Não Informado",
    "slogan": "Naturóloga formada pela UAM em 2010...",
    "biography": "Naturóloga formada pela UAM em 2010. Especialista em Fitoterapia Brasileira pela UAM. Especialista em Acupuntura, Fitoterapia e Dietoterapia Chinesa pela ETOSP -Escola de Terapias Orientais de São Paulo. Atua no segmento de qualidade de vida e bem estar através das terapias naturais integrativas e complementares há 10 anos. Formação nas áreas de  Aromaterapia, Florais de Bach, Massoterapia, Hidroterapia, Geoterapia e Calatonia. Tem experiência em atuação em spas com técnicas corporais naturais e práticas meditativas.",
    "img": "../images/professionals_internas/verag_thumb.png",
  },
  {
    "fullName":"Vera",
    "occupation":"Naturóloga",
    "idNumber": "Não Informado",
    "slogan": "Naturóloga formada pela UAM em 2010...",
    "biography": "Naturóloga formada pela UAM em 2010. Especialista em Fitoterapia Brasileira pela UAM. Especialista em Acupuntura, Fitoterapia e Dietoterapia Chinesa pela ETOSP -Escola de Terapias Orientais de São Paulo. Atua no segmento de qualidade de vida e bem estar através das terapias naturais integrativas e complementares há 10 anos. Formação nas áreas de  Aromaterapia, Florais de Bach, Massoterapia, Hidroterapia, Geoterapia e Calatonia. Tem experiência em atuação em spas com técnicas corporais naturais e práticas meditativas.",
    "img": "../images/professionals_internas/vera_thumb.png",
  }

  ];

$.each(listMed, function(k, e){

  listDiv += "<div class='col-md-6 col-sm-6 wow fadeInUp showdelay2'>\
        <div class='team-box'>\
          <div class='team-image'>\
            <img src='"+ e.img+  "'/>\
          </div>\
          <div class='team-info'>\
            <h3>"+ e.fullName + "</h3>\
            <strong>"+ e.occupation +"</strong>\
            <p>"+ e.slogan +"</p>\
          </div>\
        </div>\
      </div>"
});

$(".container-med").append(listDiv);
});