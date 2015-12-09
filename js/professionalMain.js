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
    "slogan": "Lorem ipsum dolor sit amet.",
    "biography": "",
    "img": "../images/professionals_internas/amanda_thumb.png",
  },
  {
    "fullName":"Bárbara",
    "occupation":"Naturóloga",
    "idNumber": "Não Informado",
    "slogan": "Lorem ipsum dolor sit amet.",
    "biography": "",
    "img": "../images/professionals_internas/barbara_thumb.png",
  },
    {
    "fullName":"Dra. Bruna Freitas Rezende Martin",
    "occupation":"Médica Dermatologista",
    "idNumber": "CRM SP",
    "slogan": "Lorem ipsum dolor sit amet.",
    "biography": "",
    "img": "../images/professionals_internas/bruna_thumb.png",
  },
  {
    "fullName":"Cristiane",
    "occupation":"Naturóloga",
    "idNumber": "Não Informado",
    "slogan": "Lorem ipsum dolor sit amet.",
    "biography": "",
    "img": "../images/professionals_internas/cristiane_thumb.png",
  },
  {
    "fullName":"Cristina",
    "occupation":"Naturóloga",
    "idNumber": "Não Informado",
    "slogan": "Lorem ipsum dolor sit amet.",
    "biography": "",
    "img": "../images/professionals_internas/cristina_thumb.png",
  },
  {
    "fullName":"Elidia",
    "occupation":"Naturóloga",
    "idNumber": "Não Informado",
    "slogan": "Lorem ipsum dolor sit amet.",
    "biography": "",
    "img": "../images/professionals_internas/elidia_thumb.png",
  },
  {
    "fullName":"Dra. Maria Emilia Gadelha Serra",
    "occupation":"Médica Otorrinolaringologista",
    "idNumber": "CREMESP 63451",
    "slogan": "Lorem ipsum dolor sit amet.",
    "biography": "Formada pela Universidade Federal do Rio de Janeiro (UFRJ) em 1988, residência médica em Otorrinolaringologia pela Universidade de São Paulo – campus Ribeirão Preto, Mestrado em Otorrinolaringologia e Cirurgia de Cabeça e Pescoço pela Escola Paulista de Medicina (atual UNIFESP). Bolsista do Monbusho (Ministério da Educação, Ciência e Cultura do Governo Japonês) na área de laringe e voz. Formação em Medicina Biológica Alemã, é membro da Diretoria da Associação Brasileira de Homeopatia e Homotoxicologia (ABHH). Foi a 1&ordf;. Diretora Presidente da Associação Brasileira de Ozonioterapia (ABOZ) e atualmente é  Diretora Secretária da ABOZ. Ministra aulas para cursos de extensão e pós-graduação em todo o Brasil sobre 'Microecologia Intestinal e Adoecimento Sistêmico' e 'Ozonioterapia'. Foi Diretora-Presidente e fundadora da organização não-governamental Instituto Recicle Milhões de Vidas (atual Instituto Recicle), dedicada a promover educação ambiental e gerar recursos financeiros para outras instituições que atendem crianças carentes a partir da implantação de programas de coleta seletiva de lixo. Formação complementar: cursos nas áreas: Medicina Hiperbárica, Homeopatia, Psicossomática, Medicina Tradicional Chinesa e Acupuntura, Homotoxicologia, Ozonioterapia, Oligoterapia Catalítica, Auriculoacupuntura, Bioressonância,  Prática Ortomolecular, Microscopia, Iridologia, Eneagrama, Resíduos Sólidos (lixo) e Preservação do Meio Ambiente.",
    "img": "../images/professionals_internas/emilia_thumb.png",
  },
  {
    "fullName":"Dra. Glene Rodrigues",
    "occupation":"Médica Ginecologista e Terapeuta Sexual",
    "idNumber": "Não Informado",
    "slogan": "Especialista em Ginecologia pela Federação Brasileira de Ginecologia e Obstetricia...",
    "biography": "Especialista em Ginecologia pela Federação Brasileira de Ginecologia e Obstetricia RQE 12127. Especialista em Medicina Sexual pela Federação Brasileira de Ginecologia RQE 126188. Pós Graduaçao em Sexologia - Educação e Terapia Sexual pela Sociedade Brasileira de Sexualidade Humana - SBRASH/SP e Faculdade de Medicina do ABC/SP. Pós Graduação em Nedicina Integrativa Funcional pela Faculdade Ingá/PR. Médica assistente no centro de referencia em sexologia do CRESEX - Hospital Pérola Byington por 15 anos. Palestrante há 15 anos em sexologia e medicina preventiva em grupos e empresas. Trabalhos desenvolvidos em terapia e educação sexual individual e em grupos: vaginismo, inibição de desejo sexual e anorgasmia. Trabalhos e palestras sobre fortalecimento da musculatura pélvica/pompoarismo.",
    "img": "../images/professionals_internas/glene_thumb.png",
  },
  {
    "fullName":"Lamia",
    "occupation":"Naturóloga",
    "idNumber": "Não Informado",
    "slogan": "Lorem ipsum dolor sit amet.",
    "biography": "",
    "img": "../images/professionals_internas/lamia_thumb.png",
  },
  {
    "fullName":"Luis",
    "occupation":"Naturóloga",
    "idNumber": "Não Informado",
    "slogan": "Lorem ipsum dolor sit amet.",
    "biography": "",
    "img": "../images/professionals_internas/luis_thumb.png",
  },
  {
    "fullName":"Marisa",
    "occupation":"Naturóloga",
    "idNumber": "Não Informado",
    "slogan": "Lorem ipsum dolor sit amet.",
    "biography": "",
    "img": "../images/professionals_internas/marisa_thumb.png",
  },
  {
    "fullName":"Dr. Maurício Marteleto Filho",
    "occupation":"Médico Ortopedista",
    "idNumber": "Não Informado",
    "slogan": "Chefe da Clínica Pro Movimento. Médico formado...",
    "biography": "Chefe da Clínica Pro Movimento. Médico formado pela Faculdade de Medicina da Universidade de São Paulo. Especialista em Ortopedia e Traumatologia pela Sociedade Brasileira de Ortopedia e Traumatologia (SBOT). Membro do Comitê de Coluna da SBOT, Sociedade Brasileira de Patologia da Coluna Vertebral, da Sociedade Brasileira de Coluna e da North American Spine Society.",
    "img": "../images/professionals_internas/mauricio_thumb.png",
  },
  {
    "fullName":"Dra. Paula Barros Bandeira de Mello Monteiro",
    "occupation":"Médica Oftalmologista",
    "idNumber": "Não Informado",
    "slogan": "Lorem ipsum dolor sit amet.",
    "biography": "",
    "img": "../images/professionals_internas/paula_thumb.png",
  },
  {
    "fullName":"Renato",
    "occupation":"Naturóloga",
    "idNumber": "Não Informado",
    "slogan": "Lorem ipsum dolor sit amet.",
    "biography": "",
    "img": "../images/professionals_internas/renato_thumb.png",
  },
  {
    "fullName":"Roberta Safar",
    "occupation":"Esteticista",
    "idNumber": "Não Informado",
    "slogan": "Lorem ipsum dolor sit amet.",
    "biography": "",
    "img": "../images/professionals_internas/roberta_thumb.png",
  },
  {
    "fullName":"Dr. Rosario Casalenuovo Júnior",
    "occupation":"Médico Ortodentista",
    "idNumber": "Não Informado",
    "slogan": "Arquitetura da Face e Odontologia",
    "biography": "",
    "img": "../images/professionals_internas/rosario_thumb.png",
  },
  {
    "fullName":"Suzete",
    "occupation":"Naturóloga",
    "idNumber": "Não Informado",
    "slogan": "Lorem ipsum dolor sit amet.",
    "biography": "",
    "img": "../images/professionals_internas/suzete_thumb.png",
  },
  {
    "fullName":"Vera G",
    "occupation":"Naturóloga",
    "idNumber": "Não Informado",
    "slogan": "Lorem ipsum dolor sit amet.",
    "biography": "",
    "img": "../images/professionals_internas/verag_thumb.png",
  },
  {
    "fullName":"Vera",
    "occupation":"Naturóloga",
    "idNumber": "Não Informado",
    "slogan": "Lorem ipsum dolor sit amet.",
    "biography": "",
    "img": "../images/professionals_internas/vera_thumb.png",
  }

  ];

$.each(listMed, function(k, e){

    if( k % 2 == 0 ){
      listDiv += "<div class= 'row'>";
    }

  listDiv += "<div class='col-md-6 col-sm-6 wow fadeInUp showdelay2'>\
                <div class='team-box'>\
                  <div class='team-image'>\
                    <img src='"+ e.img+  "'/>\
                  </div>\
                  <div class='team-info'>\
                    <h3>"+ e.fullName + "</h3>\
                    <strong>"+ e.occupation +"</strong>\
                    <p class='text-justify'>"+ e.slogan +"</p>\
                  </div>\
                </div>\
              </div>";

   if( k % 2 != 0 ){
      listDiv += "</div>";
    }
});

$(".container-med").append(listDiv);
});