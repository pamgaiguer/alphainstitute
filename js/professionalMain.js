$(document).ready(function(){
  var listDiv = '';
  var listEmilia = '';
  var emiliaResume =
  {
    'emilia': [
      {
        "fullName":"Dra. Maria Emilia Gadelha Serra",
          "occupation":"Médica Otorrinolaringologista",
          "idNumber": "CREMESP 63451",
          "slogan": "Formada pela Universidade Federal do Rio de Janeiro (UFRJ) em 1988, residência médica em Otorrinolaringologia ...",
          "biography": "Formada pela Universidade Federal do Rio de Janeiro (UFRJ) em 1988, residência médica em Otorrinolaringologia pela Universidade de São Paulo – campus Ribeirão Preto, Mestrado em Otorrinolaringologia e Cirurgia de Cabeça e Pescoço pela Escola Paulista de Medicina (atual UNIFESP). Bolsista do Monbusho (Ministério da Educação, Ciência e Cultura do Governo Japonês) na área de laringe e voz. Formação em Medicina Biológica Alemã, é membro da Diretoria da Associação Brasileira de Homeopatia e Homotoxicologia (ABHH). Foi a 1ª. Diretora Presidente da Associação Brasileira de Ozonioterapia (ABOZ). Hoje mantém o posto de Diretora Presidente da ABOZ. Ministra aulas para cursos de extensão e pós-graduação em todo o Brasil sobre 'Microecologia Intestinal e Adoecimento Sistêmico' e 'Ozonioterapia'. Foi Diretora-Presidente e fundadora da organização não-governamental Instituto Recicle Milhões de Vidas (atual Instituto Recicle), dedicada a promover educação ambiental e gerar recursos financeiros para outras instituições que atendem crianças carentes a partir da implantação de programas de coleta seletiva de lixo. Formação complementar: cursos nas áreas: Medicina Hiperbárica, Homeopatia, Psicossomática, Medicina Tradicional Chinesa e Acupuntura, Homotoxicologia, Ozonioterapia, Oligoterapia Catalítica, Auriculoacupuntura, Bioressonância,  Prática Ortomolecular, Microscopia, Iridologia, Eneagrama, Resíduos Sólidos (lixo) e Preservação do Meio Ambiente.",
          "thumb": "images/professionals_internas/emilia_thumb.png",
          "idModal":"modalEmilia",
          "modal": "modal_emilia.jpg"
        }
    ]
  };

  var listMed = $.ajax({
    async: true,
    global: true,
    url: "js/professionalList.json",
    dataType: "json",

    error: function() {
      console.log("Deu erro pra carregar o json");
    },
    success: function(data){
      listMed = data;
      return listMed;
    }
  });

  var listMed =
  {
    "medicos": [
    {
      "fullName":"Alexandre Almeida",
      "occupation":"Psicólogo e Terapeuta",
      "idNumber": "CRP 123082",
      "slogan": "Terapeuta holístico, acupunturista e psicólogo...",
      "biography": "Terapeuta Holístico, Acupunturista e Psicólogo, formado pela Universidade Nove de Julho de São Paulo, Pós Graduado em Psicanálise (Sociedade Brasileira de Psicanálise Integrativa) e em Psicologia Analítica (Instituto Numen), trás como Formação especifica, Terapia de Regressão e Engenharia. Há 29 anos, é estudioso de Física Quântica e Astrologia, \"Ligar a Psicologia com a Psiquiatria Médica, dentro da Astrologia\" e ministra Indutores Quânticos Frequenciais, a base d'água, estruturando os órgãos internos do corpo, buscando-se assim o Equilíbrio Iônico.",
      "thumb": "images/professionals_internas/alexandre_thumb.png",
      "idModal":"modalAlexandre",
      "modal": "modal_alexandre.jpg"
    },
    {
      "fullName":"Amanda Mariano",
      "occupation":"Naturóloga",
      "idNumber": "",
      "slogan": "Naturóloga formada pela UAM/SP em 2010 com especialização em Fitoterapia...",
      "biography": "Naturóloga formada pela Universidade Anhembi Morumbi em 2010. Especialista em Fitoterapia Brasileira pela Universidade Anhembi Morumbi. Especialista em Acupuntura, Fitoterapia e Dietoterapia Chinesa pela ETOSP (Escola de Terapias Orientais de São Paulo). Atua no segmento de qualidade de vida e bem estar através das terapias naturais integrativas e complementares há 10 anos. Formação nas áreas de Aromaterapia, Florais de Bach, Massoterapia, Hidroterapia, Geoterapia e Calatonia. Tem experiência em atuação em SPA's com técnicas corporais naturais e práticas meditativas.",
      "thumb": "images/professionals_internas/amanda_thumb.png",
      "idModal":"modalAmanda",
      "modal": "modal_amanda.jpg"
    },
    {
      "fullName":"Barbara Rescali Sanches",
      "occupation":"Nutricionista",
      "idNumber": "CRN-3: 21491",
      "slogan": "Nutricionista Funcional formada pela Universidade São Camilo em São Paulo.",
      "biography": "Nutricionista graduada pelo Centro Universitário São Camilo. Pós-graduada em Fitoterapia Funcional pelo Centro Valéria Paschoal/Divisão de Ensino e Pesquisa. Pós-graduada em Nutrição Esportiva Funcional pelo Centro Valéria Paschoal/Divisão de Ensino e Pesquisa. Pós-graduada em Nutrição Clínica Funcional pelo Centro Valéria Paschoal/Divisão de Ensino e Pesquisa. Colaboradora do livros \"Fitoterapia functional\".",
      "thumb": "images/professionals_internas/barbara_thumb.png",
      "idModal":"modalBarbara",
      "modal": "modal_barbara.jpg"
    },
    {
      "fullName":"Dra. Bruna Freitas Rezende Martin",
      "occupation":"Médica Dermatologista",
      "idNumber": "CRM 139504",
      "slogan": "Dermatologista graduada pelo Centro Universitário Barão de Mauá...",
      "biography": "Dermatologista graduada pelo Centro Universitário Barão de Mauá (CBM) em Ribeirão Preto. Possui especializações em \"Medicina Estética\" realizada na Associação Internacional de Medicina e Estética (ASIME) - Artigo \"Potencial Rejuvenescedor do Acido Hialuronico na Face\"; em \"Hands On Cirurgia Dermatológica\" no BWS Instituto de Pós-Graduação; em \"Dermatologia\" pelo Instituto de Ensino e Pesquisa Medica (IPEMED) - Artigo: \"Potencial Rejuvenescedor do Acido hialuronico na face\"; e em \"Dermatologia\" no Instituto da Pele Unifesp, AAL.",
      "thumb": "images/professionals_internas/bruna_thumb.png",
      "idModal":"modalBruna",
      "modal": "modal_bruna.jpg"
    },
    {
      "fullName":"Cristiane Guimarães Romero",
      "occupation":"Dentista e Ortodontista",
      "idNumber": "CROSP 50213",
      "slogan": "Dentista e ortodontista formada pela UNOESTE de Presidente Prudente em 1992 e com especialização em...",
      "biography": "Formada pela Universidade do Oeste Paulista - UNOESTE em Presidente Prudente - 1992. Especialização em Ortodontia e Ortopedia Facial em 2005 - Universidade Camilo Castelo Branco/SP. Curso de Ortodontia Preventivo. Cetau - Equipe USP em 2003. Curso de Cefalometria Radiográfica. Cetau - Equipe USP em 2001. Curso de Próteses Fixas- APCD (Associação Paulista Cirurgiões Dentistas) - 1997. Diagnóstico Clínico. USP- Equipe Dr&ordm; José Rino Neto. Laserterapia na Odontologia (USP). Especialista em estética.",
      "thumb": "images/professionals_internas/cristiane_thumb.png",
      "idModal":"modalCristiane",
      "modal": "modal_cristiane.jpg"
    },
    {
      "fullName":"Cristina Chuva",
      "occupation":"Fisioterapeuta e Terapeuta",
      "idNumber": "CREFITO 7022",
      "slogan": "Formada pela Universidade Estadual São Paulo - UNESP/IMESP em 1986....",
      "biography": "Formada pela Universidade Estadual São Paulo - UNESP/IMESP em 1986, Estudante de Filosofia Védica, Bhaktivedanta Institute, Mayapur, West Bengal, India.  Comportamento,  Coping e Terapia com foco em Stress, Transtornos Contemporâneos. Coaching  em Qualidade de Vida. Terapia Ayurvédica,Terapias Orientais, Massoterapia e Pompage. Especialização em Eletroterapia, Biorressonância, Exame e Terapia. ",
      "thumb": "images/professionals_internas/cristina_thumb.png",
      "idModal":"modalCristinaChuva",
      "modal": "modal_cristinachuva.jpg"
    },
    {
      "fullName":"Elídia Rubini Gomes",
      "occupation":"Fisioterapeuta e Terapeuta",
      "idNumber": "CREFITO 3/4032-F",
      "slogan": "Fisioterapeuta formada pela Universidade São Carlos em 1982 com pós graduação em...",
      "biography": "Fisioterapeuta formada pela Universidade Federal de São Carlos - 1982 com Pós Graduação em Ergonomia em Sistemas de Produção na POLI-USP/SP, RPG - Reeducação Postural Global pela Université Internationale Permanente de Therapie Manuelle, Saint Mont, França, FISIOLOGIA DO EXERCÍCIO na UNIFESP. Formada em Biorressonância Biofeedback pela The Quantum International Academies, com vários workshops de atualizações sobre o trabalho. Especialidades Técnicas: RPG, Maitland, Osteopatia, Escola de Coluna, Fisioterapia Ortognática e Biomecânica de Rocabado (ATM/Crânio/Cervical) entre outras.",
      "thumb": "images/professionals_internas/elidia_thumb.png",
      "idModal":"modalElidia",
      "modal": "modal_elidia.jpg"
    },
    {
      "fullName": "Fabiano Guedes Rodrigues da Silva",
      "occupation":"Biólogo e Apiterapeuta",
      "idNumber": "Em breve...",
      "slogan": "Pós Graduado em Apicultura na UNITAU/Taubaté, especialização ...",
      "biography": "Pós Graduado em Apicultura na UNITAU/Taubaté, especialização em apiterapia em Itapetininga/SP, licenciatura em Ciências Biológicas na UNIESP/SP, técnico agrícola - Colégio Don Otorino Zanon, Itatiaia/ RJ.",
      "thumb": "images/temporary_circle.png",
      "idModal":"modalFabiano",
      "modal": "modal_fabiano.jpg"
    },
    {
      "fullName": "Fernando Ramalho Guanabara Araújo",
      "occupation":"Nutrólogo",
      "idNumber": "",
      "slogan": "Médico formado em 2011 pela FAMENE...",
      "biography": "Médico formado em 2011 pela FAMENE - Faculdade de Enfermagem Nova Esperança - João Pessoa/PB. É pós graduado em Gastroenterologia na Harvard Medical School em Boston/Massachussetts. Mestrando em Ciência da Fisiologia Humana - Longevidade Saudável. Pós Graduando Nutriendocrinologia Funcional – Dr. Lair Ribeiro. Curso Fisiologia da Longevidade Humana e Modulação Hormonal Bioidêntica Aplicada. Coach Integral Sistêmico - Febracis/ Florida Cristian  University - Orlando/EUA. \nSoar Advanced Certification Program - Florida Cristian University - Orlando/EUA.",
      "thumb": "images/temporary_circle.png",
      "idModal":"modalFernando",
      "modal": "modal_fernando.jpg"
    },
    {
      "fullName":"Dra. Glene Rodrigues",
      "occupation":"Médica Ginecologista \n\ne Terapeuta Sexual",
      "idNumber": "CRM 72019/SP",
      "slogan": "Especialista em Ginecologia pela Federação Brasileira de Ginecologia e Obstetricia...",
      "biography": "Especialista em Ginecologia pela Federação Brasileira de Ginecologia e Obstetricia RQE 12127. \nEspecialista em Medicina Sexual pela Federação Brasileira de Ginecologia RQE 126188. \nPós Graduaçao em Sexologia - Educação e Terapia Sexual pela Sociedade Brasileira de Sexualidade Humana - SBRASH/SP e Faculdade de Medicina do ABC/SP. Pós Graduação em Medicina Integrativa Funcional pela Faculdade Ingá/PR.\nTrabalhos desenvolvidos em terapia e educação sexual individual e em grupos: vaginismo, inibição de desejo sexual e anorgasmia. \nTrabalhos e palestras sobre fortalecimento da musculatura pélvica/pompoarismo.",
      "thumb": "images/professionals_internas/glene_thumb.png",
      "idModal":"modalGlene",
      "modal": "modal_glene.jpg"
    },
    {
      "fullName": "Julio César Kreling",
      "occupation":"Médico Cardiologista",
      "idNumber": "CRM 84566",
      "slogan": "Residência em cardiologia ...",
      "biography": "Residência em cardiologia INCOR e Hospital Evangélico de Londrina em 1995/1996. \n Estágio de complementação em cardiopneumologia no INCOR/USP 1997. \n Estágio em métodos gráficos e cardiologia nuclear no INCOR/USP 1998 a 2000. \nMédico bolsista do serviço de lipides do INCOR/USP 2001. Especialização em Hemodinâmica pela Beneficência Portuguesa de São Paulo. \nEspecialização em Acupuntura pela USP, Medicina do Trabalho pela USP. Especialização em Síndromes Metabólicas pelo Centro de Extenção Universitária. \nDoutor em Cardiologia pela USP com tese defendida em 2004.",
      "thumb": "images/temporary_circle.png",
      "idModal":"modalJulio",
      "modal": "modal_julio.jpg"
    },
    {
      "fullName": "Dra. Luciana Moura Sampaio",
      "occupation":"Médica Gastroenterologista",
      "idNumber": "CRM 94542 - SP",
      "slogan": "Possui graduação em Medicina pela Faculdade de Ciências Médicas de ...",
      "biography": "Graduada em Medicina pela Faculdade de Ciências Médicas de Santos, com residência em Clínica Médica e em Gastroenterologia e Nutrição pela UNESP em 2002. Pós graduada pela Universidade de Barcelona (2006) em Gastroenterologia.\n\nTrabalhou com Endoscopia Digestiva e Ecoendoscopia no Hospital Tel Aviv Sourasky Medical Center Ichilov (2008). Trabalhou na Clínica Novagastro (Bauru/SP) e como médica e professora e de Gastroenterologia para o curso de Medicina da UNESP em Botucatu, onde chefiou a Unidade de Endoscopia do HC FMB UNESP. \nVinculada ao serviço de endoscopia do CDG do HC da USP, onde realiza procedimentos de endoscopia digestiva alta, baixa, ecoendoscopia e cápsula endoscópica, e também vinculada ao serviço de endoscopia do Hospital AC Camargo.\nVem praticando a Medicina Funcional e Integrativa, além de associar técnicas de Coaching, Programação Neuro Linguística e Hipnose.",
      "thumb": "images/temporary_circle.png",
      "idModal":"modalLuciana",
      "modal": "modal_luciana.jpg"
    },
    {
      "fullName": "Dr. Marcelo Bonanza",
      "occupation":"Médico Reumatologista (Fibromialgia)",
      "idNumber": "CRM 158251",
      "slogan": "Formado pela Universidade Federal...",
      "biography": "Universidade Federal da Bahia. Médico Ortomolecular. Atuando em Fisiologia Hormonal e atividades na área de ortopedia e traumatologia.",
      "thumb": "images/temporary_circle.png",
      "idModal":"modalBonanza",
      "modal": "modal_bonanza.jpg"
    },
    {
      "fullName": "Dra. Maria Angela Amato Vigoroto",
      "occupation":"Médica Alergiologista/Imunologista",
      "idNumber": "CRM 50342",
      "slogan": "Em breve...",
      "biography": "Em breve...",
      "thumb": "images/temporary_circle.png",
      "idModal":"modalMaria",
      "modal": "modal_maria.jpg"
    },
    {
      "fullName":"Marisa Fortes",
      "occupation":"Psicóloga",
      "idNumber": "CRP 06/77377",
      "slogan": "Marisa Fortes é jornalista, neuropsicóloga e psicóloga clínica, atuando como psicoterapeuta na ...",
      "biography": "Mestre em Psicologia Social pela Universidade São Marcos (UNIMARCO) e especialista em Neuropsicologia (INESP), Terapias Cognitivo-Comportamentais e Medicina Comportamental pela Universidade Federal de São Paulo (UNIFESP), é também terapeuta em EMDR&reg; (Eye Movement Desensitization and Reprocessing) certificada pelo EMDR Institute da Califórnia/USA e Advanced Training in Rational-Emotive &amp; Cognitive-Behavioral Theory and Techniques (TREC) pelo Albert Ellis Institute de New York/USA.\n Além do manejo clínico ligado ao espectro de transtornos mentais de maneira geral, é especializada no atendimento de transtornos de ansiedade, bem como decorrências traumáticas de violência urbana e outras situações disruptivas",
      "thumb": "images/professionals_internas/marisa_thumb.png",
      "idModal":"modalMarisa",
      "modal": "modal_marisa.jpg"
    },
    {
      "fullName": "Dra. Martina Cattaccini",
      "occupation":"Médica Pediatra",
      "idNumber": "CRM 158251",
      "slogan": "Médica pediatra formada pela Faculdade de Ciências Médicas da Santa Casa de São Paulo e ...",
      "biography": "Especialização (2015-2017) em Complementação em Alergia e Imunologia Pediátrica no Instituto da Criança do Hospital das Clínicas da Faculdade de Medicina da USP.\nPós-graduação (2013-2015) em Residência Médica em Pediatria na Faculdade de Medicina da USP.\nEnsino Superior (2007-2012) - Faculdade de Ciências Médicas da Santa Casa de São Paulo (FCMSCSP), São Paulo - SP.",
      "thumb": "images/temporary_circle.png",
      "idModal":"modalMartina",
      "modal": "modal_martina.jpg"
    },
    {
      "fullName":"Dr. Maurício Marteleto Filho",
      "occupation":"Médico Ortopedista",
      "idNumber": "CRM 72348",
      "slogan": "Chefe da Clínica Pro Movimento. Médico formado...",
      "biography": "Chefe da Clínica Pro Movimento. Médico formado pela Faculdade de Medicina da Universidade de São Paulo. Especialista em Ortopedia e Traumatologia pela Sociedade Brasileira de Ortopedia e Traumatologia (SBOT). Membro do Comitê de Coluna da SBOT, Sociedade Brasileira de Patologia da Coluna Vertebral, da Sociedade Brasileira de Coluna e da North American Spine Society.",
      "thumb": "images/professionals_internas/mauricio_thumb.png",
      "idModal":"modalMauricio",
      "modal": "modal_mauricio.jpg"
    },
    {
      "fullName": "Maurício Zylbergeld",
      "occupation":"Termologia clínica e Termografia",
      "idNumber": "CRM 21058",
      "slogan": "Em breve... ",
      "biography": "Em breve...",
      "thumb": "images/temporary_circle.png",
      "idModal":"modalZylberged",
      "modal": "modal_zylberged.jpg"
    },
    {
      "fullName":"Dra. Paula Barros Bandeira de Mello Monteiro",
      "occupation":"Médica Oftalmologista",
      "idNumber": "CRM 123561",
      "slogan": "Graduação em Medicina - Universidade Federal do Rio de Janeiro - Dez/02. Fellow em Plástica Ocular...",
      "biography": "Graduação em Medicina - Universidade Federal do Rio de Janeiro - Dez/02. Fellow em Plástica Ocular na Escola Paulista de Medicina EPM-UNIFESP 2003-2004. Fellow em Órbita na Escola Paulista de Medicina EPM-UNIFESP 2003-2004. Fellow em Plástica Ocular na Faculdade de Medicina do ABC 2004-2009 e Preceptora de 2010 a 2012. Pós-graduação em Medicina Estética pela ASIME - Jul/2010. Pós-graduação em Fisiologia Humana - Dez/2014. Curso Extensivo de um ano em Medicina Ortomolecular com Dr Artur Lemos - Mar/2015. Pós-graduação em Nutrologia pela ABRAN. Pós graduação em Medicina Ortomolecular pela FAPES em curso.",
      "thumb": "images/professionals_internas/paula_thumb.png",
      "idModal":"modalPaula",
      "modal": "modal_paula.jpg"
    },
    {
      "fullName":"Dr. Renato Tatagiba",
      "occupation":"Cirurgião Plástico",
      "idNumber": "Em breve...",
      "slogan": "Formado pela UFES (Universidade Federal do Espírito Santo), especialista em cirurgia geral ...",
      "biography": "Formado pela UFES (Universidade Federal do Espírito Santo), especialista em cirurgia geral pelo HC de Belo Horizonte/MG e com residência na Fundação Hospitalar do Estado de Minas Gerais. Dr. Renato participou de diversos cursos e visitas técnicas no Brasil e no exterior, inclusive em Londres e Barcelona, o que lhe garante refinamento em cada técnica aplicada. Especializou-se em cirurgia plástica para se dedicar à beleza humana. Além dos pacientes brasileiros, recebe pacientes de outros países e viaja constantemente para se conservar atualizado, estudando todas as novidades propostas e participando de eventos nacionais e internacionais.",
      "thumb": "images/professionals_internas/renato_thumb.png",
      "idModal":"modalrenato",
      "modal": "modal_renato.jpg"
    },
    {
      "fullName":"Roberta Safar Bevilacqua Silva",
      "occupation":"Esteticista",
      "idNumber": "",
      "slogan": "Graduada pela Faculdade Anchieta - Jundiaí/SP e especialista em...",
      "biography": "Esteticista há 5 anos com experiência em tratamentos estéticos. Já trabalhou em grandes salões e clinicas de Jundia&iacute; e S&atilde;o Paulo. Graduada e, Estética e Cosmetologia pela Faculdade Anchieta - Jundiaí/SP. Técnica esteticista pela Escola Celia Santucci - Jundiaí/SP e Graduada em Fisioterapia na UNIP. Trabalha com os temas Estetica Facial (rejuvenescimento, limpeza de pele, tratamento para acne, drenagem linfática, tratamento de melasma, tratamento com mel) e Estetica Corporal (terapia detox com mel, massagem relaxante com óleo ozonizado, massagem com pedras quentes, massagem com pindas, esfoliação e hidratação corporal, drenagem linfática manual, ,bambuterapia,  tratamento para celulite com mel, massagem modeladora, drenagem linfática pré e pós operatório e aromaterapia).",
      "thumb": "images/professionals_internas/roberta_thumb.png",
      "idModal":"modalroberta",
      "modal": "modal_roberta.jpg"
    },
    {
      "fullName":"Dr. Rosario Casalenuovo Júnior",
      "occupation":"Médico Ortodentista",
      "idNumber": "Em breve...",
      "slogan": "Especialista em arquitetura da face e odontologia",
      "biography": "Prof. de Ortondontia da Unoeste-SP, graduação e pós graduação, 1986 a 1994. Prof. Coordenador de Ortodontia da UNIC-MT, graduação, 1994 a 1996. Prof. Coordenador Especialização ABO-RO - 1998 a 2004. Prof. Curso de Mestrado em Ortodontia São Leopoldo Mandic - Campinas - 1997 a 2004. Presidente da ABFCOC (Academia Brasileira de Fisiopatologia Crâneo-oro-cervical) - 2009 a 2010. Presidente da ABOR-MT (Associação Brasileira de Ortodontia - SEC.MT). Membro da Academia Libero-Latino-Americana de Disfunção Crâneo-mandibular e Dolor Facial. Membro da Academia Libero Latino Americana de Estética Médica e Interdisciplinar. Co-autor do livro Cirurgia Ortognática e Ortodôntica. Diretor Clínico do Instituto Machado de Odontologia - Brasília, São Paulo e Cuiabá",
      "thumb": "images/professionals_internas/rosario_thumb.png",
      "idModal":"modalrosario",
      "modal": "modal_rosario.jpg"
    },
    {
      "fullName": "Tatyannye da Costa",
      "occupation":"Nutricionista",
      "idNumber": "CRN3-44723P",
      "slogan": "Nutricionista graduada pelo Centro Universitário...",
      "biography": "Nutricionista graduada pelo Centro Universitário das Faculdades Metropolitanas Unidas Laureate.\nCursando Pós Graduação em Doenças Crônicas Não Transmissiveis no Instituto de Ensino do Hospital Israelita Albert Einstein.\nCursos de Extensão em Nutrição:\nVegetarianismo - VP Consultório Nutricional.\nDieta Vegetariana - IPED \nSuplementação Nutricional - USP\nTerapia Nutricional do Paciente Obeso - CA Nutrição\nBioquímica na Nutrição - Prof e Ms. Fernando Galante",
      "thumb": "images/temporary_circle.png",
      "idModal":"modalTatyannye",
      "modal": "modal_tatyannye.jpg"
    },
    {
      "fullName":"Vera G. Von Sothen",
      "occupation":"Terapeuta",
      "idNumber": "",
      "slogan": "Especialista em terapias florais, Jin Shin...",
      "biography": "Trabalha há 17 anos como terapeuta, utilizando Terapia Floral, Jin Shin Jyutsu e Radiônica - SRT - Spiritual Response Therapy. É formada pelo Energetic Medicine Institute, Pacific Essences, Victoria - Canadá. É Practitioner e Instrutora de Auto-Ajuda, autorizada pelo Jin Shin Jyutsu, Inc. Sottsddale - Arizona, USA.",
      "thumb": "images/professionals_internas/verag_thumb.png",
      "idModal":"modalverag",
      "modal": "modal_verag.jpg"
    },
    {
      "fullName":"Vera Lucia Figueiredo Pagliari",
      "occupation":"Fonoaudióloga e Terapeuta",
      "idNumber": "CRN-3: 21491",
      "slogan": "Fonoaudióloga com formação pela PUC-SP e preocupada em integrar a experiência em consultório com ...",
      "biography": "Fonoaudióloga pela PUC-SP, mestre em Distúrbios da Comunicação pela mesma Instituição onde foi professora e supervisora clinica por 28 anos. Sempre preocupada em integrar a experiência em consultório particular com a vivência na Universidade e no Sistema Único de Saúde, escreveu vários artigos e participou como palestrante em Congressos e Simpósios. Formada em Biorressonância pela The Quantum Academies International, curso Beginners e Advanced. Com vários workshops de atualizações sobre o trabalho.",
      "thumb": "images/professionals_internas/vera_thumb.png",
      "idModal":"modalveralucia",
      "modal": "modal_veralucia.jpg"
    }

    ]
  }

  $.each(listMed.medicos, function(k, e){

    if( k % 2 == 0 ){
      listDiv += "<div class= 'row'>";
    }

    listDiv += "<a href='#' data-toggle='modal' class='hidden-xs hidden-sm' data-target='#"+ e.idModal +"'>\
    <div class='col-md-6 col-sm-6 wow fadeInUp showdelay2'>\
    <div class='media team-box'>\
    <div class='media-bottom team-image'>\
    <img class='media-object img-responsive' src='"+ e.thumb +  "'/>\
    </div>\
    <div class='team-info'>\
    <h3>"+ e.fullName + "</h3>\
    <strong>"+ e.occupation +"</strong>\
    <p>"+ e.slogan +"</p>\
    </div>\
    </div>\
    </div>\
    </a>\
    <a class='visible-xs visible-sm'>\
    <div class='col-md-6 col-sm-6 wow fadeInUp showdelay2'>\
    <div class='media team-box'>\
    <div class='media-bottom team-image'>\
    <img class='media-object img-responsive' src='"+ e.thumb +  "'/>\
    </div>\
    <div class='team-info'>\
    <h3>"+ e.fullName + "</h3>\
    <strong>"+ e.occupation +"</strong>\
    <p>"+ e.slogan +"</p>\
    </div>\
    </div>\
    </div>\
    </a>\
    <div class='modal hidden-xs fade' id='"+ e.idModal +"' tabindex='-1' role='dialog' aria-labelledby='"+ e.idModal +"Label'>\
    <div class='modal-dialog' role='document'>\
    <div class='modal-content' style='background: url(../images/professionals_internas/"+e.modal+") no-repeat top center;'>\
    <div class='modal-header'>\
    <button type='button' class='close' data-dismiss='modal' aria-label='Close'><span>&times;</span></button>\
    <h4 class='modal-title' id='"+ e.idModal +"Label'>"+ e.fullName +"</h4>\
    <h5 class='modal-subtitle'>"+ e.occupation +"</h5>\
    <h5 class='modal-subtitle'>"+ e.idNumber +"</h5>\
    </div>\
    <div class='modal-body'>\
    <p>"+ e.biography +"</p>\
    </div>\
    </div>\
    </div>\
    </div>";


    if( k % 2 != 0 ){
      listDiv += "</div>";
    }
  });
$(".container-med").append(listDiv);


  $.each(emiliaResume.emilia, function(k, e){

    listEmilia += "<a href='#' data-toggle='modal' class='hidden-xs hidden-sm' data-target='#"+ e.idModal +"'>\
    <div class='wow fadeInUp showdelay2'>\
    <div class='media team-box'>\
    <div class='media-bottom team-image'>\
    <img class='media-object img-responsive' src='"+ e.thumb +  "'/>\
    </div>\
    <div class='team-info'>\
    <h3>"+ e.fullName + "</h3>\
    <strong>"+ e.occupation +"</strong>\
    <p>"+ e.slogan +"</p>\
    </div>\
    </div>\
    </div>\
    </a>\
    <a class='visible-xs visible-sm'>\
    <div class='wow fadeInUp showdelay2'>\
    <div class='media team-box'>\
    <div class='media-bottom team-image'>\
    <img class='media-object img-responsive' src='"+ e.thumb +  "'/>\
    </div>\
    <div class='team-info'>\
    <h3>"+ e.fullName + "</h3>\
    <strong>"+ e.occupation +"</strong>\
    <p>"+ e.slogan +"</p>\
    </div>\
    </div>\
    </div>\
    </a>\
    <div class='modal hidden-xs fade' id='"+ e.idModal +"' tabindex='-1' role='dialog' aria-labelledby='"+ e.idModal +"Label'>\
    <div class='modal-dialog' role='document'>\
    <div class='modal-content' style='background: url(../images/professionals_internas/"+e.modal+") no-repeat top center;'>\
    <div class='modal-header'>\
    <button type='button' class='close' data-dismiss='modal' aria-label='Close'><span>&times;</span></button>\
    <h4 class='modal-title' id='"+ e.idModal +"Label'>"+ e.fullName +"</h4>\
    <h5 class='modal-subtitle'>"+ e.occupation +"</h5>\
    <h5 class='modal-subtitle'>"+ e.idNumber +"</h5>\
    </div>\
    <div class='modal-body'>\
    <p>"+ e.biography +"</p>\
    </div>\
    </div>\
    </div>\
    </div>";
  });

$(".container-emilia").append(listEmilia);


});