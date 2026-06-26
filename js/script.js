const contentData = {
    'inicio': `
        <h1>O que é o PIBID?</h1>
        <p>O Programa Institucional de Bolsa de Iniciação à Docência (PIBID) é uma iniciativa para o aperfeiçoamento e a valorização da formação de professores para a educação básica. O programa concede bolsas a alunos de licenciatura participantes de projetos de iniciação à docência desenvolvidos por Instituições de Educação Superior (IES) em parceria com escolas de educação básica da rede pública de ensino.</p>
        <p>Os projetos devem promover a inserção dos estudantes no contexto das escolas públicas desde o início da sua formação acadêmica para que desenvolvam atividades didático-pedagógicas sob orientação de um docente de licenciatura e de um professor da escola.</p>
        <p>No projeto voltado aos alunos do curso de graduação em Licenciatura em Física do Instituto Federal de Rondônia - Campus Calama, os professores em formação participam de ações em grupo, supervisionados pelo professor-supervisor e professora-coordenadora do projeto, no qual são estudados e discutidos diferentes aspectos teóricos voltados ao processo pedagógico ensino-aprendizagem relacionados ao ensino da Física.</p>
    `,
    'objetivos': `
        <h1>Objetivos</h1>
        <ul>
            <li>Discutir diferentes conceitos teóricos e metodológicos sobre o ensino da Física.</li>
            <li>Elaborar atividades que promovam o interesse sobre as ciências naturais dos alunos.</li>
            <li>Aplicar atividades planejadas em salas de aula de escolas públicas sob a orientação dos professores.</li>
            <li>Reunir-se periodicamente com os professores-coordenadores e os professores em formação.</li>
            <li>Elaborar o Diário do Pibidiano para registro e análise de suas experiências.</li>
            <li>Desenvolver um espaço em ambiente virtual destinado a discussões.</li>
        </ul>
    `,
    'equipe': `
        <h1>Equipe 2022/2024</h1>
        <p><strong>Professor Coordenador:</strong> Mauro Guilherme Ferreira Bezerra</p>
        <p><strong>Professores-supervisores:</strong></p>
        <ul>
            <li>Daiany da Silva Ferreira</li>
            <li>Maicon Maciel Ferreira de Araújo</li>
            <li>Mcenroe Franco da Silva</li>
        </ul>
        <p><strong>Bolsistas graduandos:</strong></p>
        <ul>
            <li>Adashirley Silva de Carvalho</li>
            <li>Alessandro da Silva Morais</li>
            <li>Alice Melissa Deusdete do Vale</li>
            <li>Amanda Soares Moura</li>
            <li>André Luiz Lira</li>
            <li>E mais 19 acadêmicos dedicados...</li>
        </ul>
    `,
    'john-kennedy': `
        <h1>Escola John Kennedy</h1>
        <p><strong>Destaques das atividades:</strong></p>
        <ul>
            <li><strong>Fev/2023:</strong> Apresentação da eletiva de robótica e introdução à termologia.</li>
            <li><strong>Mar/2023:</strong> Experimentos de Equilíbrio Térmico, Densidade e Eletroscópios caseiros.</li>
            <li><strong>Jun/2023:</strong> Desenvolvimento de foguetes de propulsão de água.</li>
            <li><strong>Ago/2023:</strong> Aula sobre eletromagnetismo com apresentação de bobina de Tesla.</li>
        </ul>
    `,
    '4-janeiro': `
        <h1>Escola 4 de Janeiro</h1>
        <p><strong>Destaques das atividades:</strong></p>
        <ul>
            <li><strong>Jul/2023:</strong> Experimentos de Refração da Luz, Energia sem fio (WPT) e Maquetes do Sistema Solar.</li>
            <li><strong>Ago/2023:</strong> Lançamento de foguetes (vinagre + bicarbonato).</li>
            <li><strong>Set/2023:</strong> Aula de circuitos elétricos e Projeto ECOVIDA.</li>
            <li><strong>Nov/2023:</strong> Culminância da Eletiva de Astronomia.</li>
        </ul>
    `,
    'pibid-2020': `
        <h1>Edição 2020/2022</h1>
        <p>Registro cronológico das atividades desenvolvidas no ensino remoto:</p>
        <ul>
            <li><strong>Nov/2020:</strong> Congresso Amazônico de Educação à Distância.</li>
            <li><strong>Mar/2021:</strong> Introdução ao conteúdo de Movimento Uniforme via Google Classroom.</li>
            <li><strong>Abr/2022:</strong> II ENLIC - Encontro das Licenciaturas do IFRO em Ji-Paraná.</li>
        </ul>
    `,
    'pibid-2014': `
        <h1>Edição 2014/2020</h1>
        <p>Para conferir os registros desta edição, acesse o blog histórico do programa:</p>
        <p><a href="http://fisicapibidifro.blogspot.com/" target="_blank">http://fisicapibidifro.blogspot.com/</a></p>
    `
};

function openModal(sectionId) {
    const modal = document.getElementById('detailModal');
    const modalBody = document.getElementById('modal-body');
    
    if(contentData[sectionId]) {
        modalBody.innerHTML = contentData[sectionId];
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

function closeModal(event) {
    // Only close if clicking the background or close button, not inner content
    const modal = document.getElementById('detailModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto'; // Restore background scrolling
}
