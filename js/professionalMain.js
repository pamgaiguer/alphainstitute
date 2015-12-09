$(document).ready(function(){
  var listDiv = '';
  var listMed =
  [
  {
    "fullName":"Alexandre Almeida",
    "occupation":"Psicólogo e Terapeuta",
    "idNumber": "CRP 123082",
    "slogan": "Terapeuta holístico, acupunturista e psicólogo...",
    "biography": "Terapeuta Holístico, Acupunturista e Psicólogo, formado pela Universidade Nove de Julho de São Paulo, Pós Graduado em Psicanálise (Sociedade Brasileira de Psicanálise Integrativa) e em Psicologia Analítica (Instituto Numen), trás como Formação especifica, Terapia de Regressão e Engenharia. Há 29 anos, é estudioso de Física Quântica e Astrologia, “Ligar a Psicologia com a Psiquiatria Médica, dentro da Astrologia” e ministra Indutores Quânticos Frequenciais, a base d´água, estruturando os órgãos internos do corpo, buscando-se assim o Equilíbrio Iônico. Formação complementar - Cursos nas áreas: Shiatsuterapia, Fitoterapia-Chinesa, Estudos da Psicossomática, Medicina Tradicional Chinesa (Acupuntura e Moxabustão- &#x7078; - jiŭ (pinyin), 'longo tempo de aplicação do fogo'), Aurículo Acupuntura e Crânio Acupuntura, Quiro-Acupuntura (Coreana), Reiki e Técnico em Quiropraxia.",
    "img": "../images/professionals_internas/alexandre_thumb.png"
  },
  {
    "fullName":"Amanda Mariano",
    "occupation":"Naturóloga",
    "idNumber": "Não Informado",
    "slogan": "Naturóloga formada pela UAM/SP em 2010 com especialização em Fitoterapia...",
    "biography": "Naturóloga formada pela Universidade Anhembi Morumbi em 2010. Especialista em Fitoterapia Brasileira pela Universidade Anhembi Morumbi. Especialista em Acupuntura, Fitoterapia e Dietoterapia Chinesa pela ETOSP -Escola de Terapias Orientais de São Paulo. Atua no segmento de qualidade de vida e bem estar através das terapias naturais integrativas e complementares há 10 anos. Formação nas áreas de  Aromaterapia, Florais de Bach, Massoterapia, Hidroterapia, Geoterapia e Calatonia. Tem experiência em atuação em SPA's com técnicas corporais naturais e práticas meditativas.",
    "img": "../images/professionals_internas/amanda_thumb.png",
  },
  {
    "fullName":"Barbara Rescali Sanches",
    "occupation":"Nutricionista",
    "idNumber": "Não Informado",
    "slogan": "Nutricionista Funcional formada pela Universidade São Camilo em São Paulo.",
    "biography": "Nutricionista graduada pelo Centro Universitário São Camilo. Pós-graduada em Fitoterapia Funcional pelo Centro Valéria Paschoal/Divisão de Ensino e Pesquisa. Pós-graduada em Nutrição Esportiva Funcional pelo Centro Valéria Paschoal/Divisão de Ensino e Pesquisa. Pós-graduada em Nutrição Clínica Funcional pelo Centro Valéria Paschoal/Divisão de Ensino e Pesquisa.  Colaboradora dos livros: 'Fitoterapia funcional: dos princípios ativos à prescrição de fitoterápicos', 'Tratado de Nutrição Esportiva Funcional', 'Nutrição Clínica Funcional: Obesidade', 'Nutrição clínica funcional: suplementação nutricional' e 'Suplementação funcional magistral: dos nutrientes aos compostos bioativos'.",
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
    "fullName":"Dra. Cristiane Guimarães Romero",
    "occupation":"Dentista e Ortodontista",
    "idNumber": "CROSP 50213",
    "slogan": "Dentista e ortodontista formada pela UNOESTE de Presidente Prudente em 1992 e com especialização em...",
    "biography": "Formada pela Universidade do Oeste Paulista - UNOESTE em Presidente Prudente - 1992. Especialização em Ortodontia e Ortopedia Facial em 2005 - Universidade Camilo Castelo Branco/SP. Curso de Ortodontia Preventivo. Cetau - Equipe USP em 2003. Curso de Cefalometria Radiográfica. Cetau - Equipe USP em 2001. Curso de Próteses Fixas- APCD (Associação Paulista Cirurgiões Dentistas) - 1997. Diagnóstico Clínico. USP- Equipe Dr&ordm; José Rino Neto. Laserterapia na Odontologia (USP). Especialista em estética.",
    "img": "../images/professionals_internas/cristiane_thumb.png",
  },
  {
    "fullName":"Cristina Chuva",
    "occupation":"Fisioterapeuta",
    "idNumber": "CREFITO 7022",
    "slogan": "Lorem ipsum dolor sit amet.",
    "biography": "Formada pela Universidade Estadual São Paulo - UNESP/IMESP em 1986, Estudante de Filosofia Védica, Bhaktivedanta Institute, Mayapur, West Bengal, India.  Comportamento,  Coping e Terapia com foco em Stress, Transtornos Contemporâneos. Coaching  em Qualidade de Vida. Terapia Ayurvédica,Terapias Orientais, Massoterapia e Pompage. Especialização em Eletroterapia, Biorressonância, Exame e Terapia. ",
    "img": "../images/professionals_internas/cristina_thumb.png",
  },
  {
    "fullName":"Elídia Rubini Gomes",
    "occupation":"Fisioterapeuta",
    "idNumber": "CREFITO 3/4032-F",
    "slogan": "Fisioterapeuta formada pela Universidade São Carlos em 1982 com pós graduação em...",
    "biography": "Fisioterapeuta formada pela Universidade Federal de São Carlos - 1982 com Pós Graduação em Ergonomia em Sistemas de Produção na POLI-USP/SP, RPG - Reeducação Postural Global pela Université Internationale Permanente de Therapie Manuelle, Saint Mont, França, FISIOLOGIA DO EXERCÍCIO na UNIFESP. Formada em Biorressonância Biofeedback pela The Quantum International Academies, com vários workshops de atualizações sobre o trabalho. Especialidades Técnicas: RPG, Maitland, Osteopatia, Escola de Coluna, Fisioterapia Ortognática e Biomecânica de Rocabado (ATM/Crânio/Cervical) entre outras. Consultorias Técnicas: Abril, DPZ, Alpargatas, Duke Energy, Ticket's, Bar des Arts e Leopoldo's, Johnson's, Natura, Wacker Química, Universidade Mackenzie de São Paulo.",
    "img": "../images/professionals_internas/elidia_thumb.png",
  },
  {
    "fullName":"Dra. Maria Emilia Gadelha Serra",
    "occupation":"Médica Otorrinolaringologista",
    "idNumber": "CREMESP 63451",
    "slogan": "Formada pela Universidade Federal do Rio de Janeiro (UFRJ) em 1988, residência médica em Otorrinolaringologia ...",
    "biography": "Formada pela Universidade Federal do Rio de Janeiro (UFRJ) em 1988, residência médica em Otorrinolaringologia pela Universidade de São Paulo – campus Ribeirão Preto, Mestrado em Otorrinolaringologia e Cirurgia de Cabeça e Pescoço pela Escola Paulista de Medicina (atual UNIFESP). Bolsista do Monbusho (Ministério da Educação, Ciência e Cultura do Governo Japonês) na área de laringe e voz. Formação em Medicina Biológica Alemã, é membro da Diretoria da Associação Brasileira de Homeopatia e Homotoxicologia (ABHH). Foi a 1&ordf;. Diretora Presidente da Associação Brasileira de Ozonioterapia (ABOZ) e atualmente é  Diretora Secretária da ABOZ. Ministra aulas para cursos de extensão e pós-graduação em todo o Brasil sobre 'Microecologia Intestinal e Adoecimento Sistêmico' e 'Ozonioterapia'. Foi Diretora-Presidente e fundadora da organização não-governamental Instituto Recicle Milhões de Vidas (atual Instituto Recicle), dedicada a promover educação ambiental e gerar recursos financeiros para outras instituições que atendem crianças carentes a partir da implantação de programas de coleta seletiva de lixo. Formação complementar: cursos nas áreas: Medicina Hiperbárica, Homeopatia, Psicossomática, Medicina Tradicional Chinesa e Acupuntura, Homotoxicologia, Ozonioterapia, Oligoterapia Catalítica, Auriculoacupuntura, Bioressonância,  Prática Ortomolecular, Microscopia, Iridologia, Eneagrama, Resíduos Sólidos (lixo) e Preservação do Meio Ambiente.",
    "img": "../images/professionals_internas/emilia_thumb.png",
  },
  {
    "fullName":"Dra. Glene Rodrigues",
    "occupation":"Médica Ginecologista e Terapeuta Sexual",
    "idNumber": "CRM 72019/SP",
    "slogan": "Especialista em Ginecologia pela Federação Brasileira de Ginecologia e Obstetricia...",
    "biography": "Especialista em Ginecologia pela Federação Brasileira de Ginecologia e Obstetricia RQE 12127. Especialista em Medicina Sexual pela Federação Brasileira de Ginecologia RQE 126188. Pós Graduaçao em Sexologia - Educação e Terapia Sexual pela Sociedade Brasileira de Sexualidade Humana - SBRASH/SP e Faculdade de Medicina do ABC/SP. Pós Graduação em Nedicina Integrativa Funcional pela Faculdade Ingá/PR. Médica assistente no centro de referencia em sexologia do CRESEX - Hospital Pérola Byington por 15 anos. Palestrante há 15 anos em sexologia e medicina preventiva em grupos e empresas. Trabalhos desenvolvidos em terapia e educação sexual individual e em grupos: vaginismo, inibição de desejo sexual e anorgasmia. Trabalhos e palestras sobre fortalecimento da musculatura pélvica/pompoarismo.",
    "img": "../images/professionals_internas/glene_thumb.png",
  },
  {
    "fullName":"Lamia Hassan Ayoub",
    "occupation":"Nutricionista",
    "idNumber": "Não Informado",
    "slogan": "Nutrição esportiva.",
    "biography": "",
    "img": "../images/professionals_internas/lamia_thumb.png",
  },
  {
    "fullName":"Dr. Luis Zacarias",
    "occupation":"Médico Nutrólogo",
    "idNumber": "Não Informado",
    "slogan": "Lorem ipsum dolor sit amet.",
    "biography": "",
    "img": "../images/professionals_internas/luis_thumb.png",
  },
  {
    "fullName":"Marisa Fortes",
    "occupation":"Psicóloga",
    "idNumber": "CREFITO 3/4032-F",
    "slogan": "Marisa Fortes é jornalista, neuropsicóloga e psicóloga clínica, atuando como psicoterapeuta na ...",
    "biography": "Marisa Fortes é jornalista, neuropsicóloga e psicóloga clínica, atuando como psicoterapeuta na abordagem Cognitiva-Comportamental na cidade de São Paulo/SP. Além do manejo clínico ligado ao espectro de transtornos mentais de maneira geral, é especializada no atendimento de transtornos de ansiedade, bem como decorrências traumáticas de violência urbana e outras situações disruptivas. Mestre em Psicologia Social pela Universidade São Marcos (UNIMARCO) e especialista em Neuropsicologia (INESP), Terapias Cognitivo-Comportamentais e Medicina Comportamental pela Universidade Federal de São Paulo (UNIFESP), é também terapeuta em EMDR® (Eye Movement Desensitization and Reprocessing) certificada pelo EMDR Institute da Califórnia/USA e Advanced Training in Rational-Emotive & Cognitive-Behavioral Theory and Techniques (TREC) pelo Albert Ellis Institute de New York/USA.",
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
    "biography": "Graduação em Medicina - Universidade Federal do Rio de Janeiro - Dez/02. Fellow em Plástica Ocular na Escola Paulista de Medicina EPM-UNIFESP 2003-2004. Fellow em Órbita na Escola Paulista de Medicina EPM-UNIFESP 2003-2004. Fellow em Plástica Ocular na Faculdade  de Medicina do ABC 2004-2009 e Preceptora de 2010 a 2012. Pós-graduação em Medicina Estética pela ASIME - jul/2010. Pós-graduação em Fisiologia Humana - dez/2014. Curso Extensivo de 1 ano em Medicina Ortomolecular com Dr Artur Lemos - mar/2015. Pós-graduação em Nutrologia pela ABRAN. Pós graduação em Medicina Ortomolecular pela FAPES em curso. Cursos de Extensão, Congressos, Palestras, etc. - Participação constante em eventos para atualização na área técnica/ científica. Médica Oftalmologista em ambulatórios e Pronto-atendimentos, tais como dos hospitais: Santa Cruz, Ophthal, H.Olhos. Livro: Glúten e desordens relacionadas - Colaboradora/ 2015.",
    "img": "../images/professionals_internas/paula_thumb.png",
  },
  {
    "fullName":"Renato",
    "occupation":"Cirurgião Plástico",
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
    "slogan": "Especialista em arquitetura da face e odontologia",
    "biography": "Prof. de Ortondontia da Unoeste-SP, graduação e pós graduação, 1986 a 1994. Prof. Coordenador de Ortodontia da UNIC-MT, graduação, 1994 a 1996. Prof. Coordenador Especialização ABO-RO - 1998 a 2004. Prof. Curso de Mestrado em Ortodontia São Leopoldo Mandic - Campinas - 1997 a 2004. Presidente da ABFCOC (Academia Brasileira de Fisiopatologia Crâneo-oro-cervical) - 2009 a 2010. Presidente da ABOR-MT (Associação Brasileira de Ortodontia - SEC.MT). Membro da Academia Libero-Latino-Americana de Disfunção Crâneo-mandibular e Dolor Facial. Membro da Academia Libero Latino Americana de Estética Médica e Interdisciplinar. Co-autor do livro Cirurgia Ortognática e Ortodôntica. Diretor Clínico do Instituto Machado de Odontologia - Brasília, São Paulo e Cuiabá. Prêmio Quality Latino América, Qualidade Brasil - 2010/2011/2012/2013/2014, Prêmio Top of Mind 2009/2010/2011/2012/2013/2014 e Prêmio Master Top 45 2014. Especialista em: Ortondontia (Bioprogressiva e Arco reto). Ortopedia Funcional dos Maxilares. Dor Orofacial e Disfunção de ATM. Formação no Conceito Castillo Morales de Reabilitação. Autor do Conceito Arquitetura da Face. Autor do Conceito Ortodontia Funcional e Estética.",
    "img": "../images/professionals_internas/rosario_thumb.png",
  },
  {
    "fullName":"Suzete",
    "occupation":"Médica",
    "idNumber": "Não Informado",
    "slogan": "Lorem ipsum dolor sit amet.",
    "biography": "",
    "img": "../images/professionals_internas/suzete_thumb.png",
  },
  {
    "fullName":"Vera G. Von Sothen",
    "occupation":"Terapeuta",
    "idNumber": "Não Informado",
    "slogan": "Especialista em terapias florais, Jin Shin...",
    "biography": "Trabalha há 17 anos como terapeuta, utilizando Terapia Floral, Jin Shin Jyutsu e Radiônica - SRT - Spiritual Response Therapy. É formada pelo Energetic Medicine Institute, Pacific Essences, Victoria - Canadá. É Practitioner e Instrutora de Auto-Ajuda, autorizada pelo Jin Shin Jyutsu, Inc. Sottsddale - Arizona, USA.",
    "img": "../images/professionals_internas/verag_thumb.png",
  },
  {
    "fullName":"Vera Lucia Figueiredo Pagliari",
    "occupation":"Fonoaudióloga",
    "idNumber": "CRN-3: 21491",
    "slogan": "Fonoaudióloga com formação pela PUC-SP e preocupada em integrar a experiência em consultório com ...",
    "biography": "Fonoaudióloga pela PUC-SP, mestre em Distúrbios da Comunicação pela mesma Instituição onde foi professora e supervisora clinica por 28 anos. Sempre preocupada em integrar a experiência em consultório particular com a vivência na Universidade e no Sistema Único de Saúde, escreveu vários artigos e participou como palestrante em Congressos e Simpósios. Formada em Biorressonância pela The Quantum Academies International, curso Beginners e Advanced. Com vários workshops de atualizações sobre o trabalho.",
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