const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const nextButton = document.getElementById('next');
const submitButton = document.getElementById('submit');

const quizData = [
    {
        question: "Qual é o principal problema identificado no setor industrial?",
        options: [
            "A falta de automação nas linhas de produção",
            "A baixa adoção da cultura data-driven e a digitalização ineficiente de dados",
            "A ausência de regulamentações para digitalização de documentos",
            "A falta de treinamento dos colaboradores"
        ],
        answer: 1
    },
    {
        question: "Qual é o objetivo principal do aplicativo?",
        options: [
            "Automatizar completamente as linhas de produção",
            "Digitalizar planilhas físicas e organizar os dados em um sistema integrado",
            "Substituir o uso de planilhas físicas por sistemas manuais",
            "Criar um banco de dados para análise de mercado"
        ],
        answer: 1
    },
    {
        question: "Qual é o exemplo citado no roteiro que demonstra o impacto positivo do uso de dados?",
        options: [
            "A implementação de um sistema de blockchain em uma indústria brasileira",
            "O aumento de 3% na receita líquida da Pilgrim's em parceria com a JBS nos Estados Unidos",
            "A criação de um aplicativo de gestão de estoque no Brasil",
            "A redução de custos operacionais em uma indústria de alimentos no Brasil"
        ],
        answer: 1
    },
    {
        question: "Quais são os dois tipos principais de análises que o aplicativo ScaneIA realizará?",
        options: [
            "Análises financeiras e de mercado",
            "Análises preditivas e prescritivas",
            "Análises qualitativas e quantitativas",
            "Análises de risco e de desempenho"
        ],
        answer: 1
    },
    {
        question: "Qual é o público-alvo principal do projeto ScaneIA?",
        options: [
            "Pequenas empresas do setor alimentício",
            "Indústrias de médio e grande porte do setor alimentício",
            "Empresas de tecnologia focadas em dados",
            "Indústrias de qualquer setor e porte"
        ],
        answer: 1
    },
    {
        question: "Quais medidas de segurança o aplicativo ScaneIA implementará para proteger os dados?",
        options: [
            "Apenas criptografia de dados",
            "Criptografia de dados, bloqueio automático fora do ambiente corporativo e prevenção contra capturas de tela",
            "Apenas bloqueio automático fora do ambiente corporativo",
            "Apenas prevenção contra capturas de tela"
        ],
        answer: 1
    },
    {
        question: "Qual é a legislação brasileira mencionada no roteiro que regulamenta a digitalização de documentos?",
        options: [
            "Lei Nº 10.278 de 2020",
            "Lei Nº 12.682 de 2012",
            "Lei Nº 13.874 de 2019",
            "Todas as opções acima"
        ],
        answer: 3
    },
    {
        question: "Quais são os principais benefícios esperados com o uso do ScaneIA?",
        options: [
            "Maior controle de qualidade, redução de desperdícios e custos, e diminuição de produtos fora do padrão",
            "Aumento da produção e eliminação de todos os erros operacionais",
            "Redução de custos com mão de obra e eliminação de planilhas físicas",
            "Automação completa de todos os processos industriais"
        ],
        answer: 0
    },
    {
        question: "Qual é o papel do RH na hierarquia de cargos do ScaneIA?",
        options: [
            "Gerenciar os dados das planilhas",
            "Administrar os acessos ao aplicativo e informações dos colaboradores",
            "Inserir dados nas planilhas digitalizadas",
            "Realizar análises preditivas e prescritivas"
        ],
        answer: 1
    },
    {
        question: "Por que os dois primeiros meses de uso do aplicativo têm custos menores para os clientes?",
        options: [
            "Porque o aplicativo estará em fase de testes",
            "Porque não é possível realizar análises com poucos dados disponíveis",
            "Porque os clientes recebem um desconto promocional",
            "Porque o aplicativo ainda não estará totalmente funcional"
        ],
        answer: 1
    },
    {
        question: "Qual é a principal funcionalidade do dashboard interativo no ScaneIA?",
        options: [
            "Permitir a edição de planilhas digitalizadas",
            "Exibir dados de forma dinâmica e interativa para facilitar a visualização e análise",
            "Gerar relatórios financeiros automaticamente",
            "Controlar o acesso de usuários ao aplicativo"
        ],
        answer: 1
    },
    {
        question: "Qual é o impacto esperado da análise preditiva no setor alimentício?",
        options: [
            "Automatizar completamente a produção",
            "Prever demandas, falhas e necessidades operacionais com base em dados históricos",
            "Reduzir o número de funcionários necessários",
            "Eliminar a necessidade de digitalização de dados"
        ],
        answer: 1
    },
    {
        question: "Quais redes sociais foram identificadas como mais relevantes para atingir o público-alvo do projeto?",
        options: [
            "Instagram, Facebook e LinkedIn",
            "Twitter, Instagram e LinkedIn",
            "Facebook, Twitter e YouTube",
            "LinkedIn, YouTube e Instagram"
        ],
        answer: 0
    },
    {
        question: "Qual é o custo mensal estimado do projeto, incluindo impostos, salários e outros gastos?",
        options: [
            "R$10.000",
            "R$12.000",
            "R$14.000",
            "R$16.000"
        ],
        answer: 2
    },
    {
        question: "Qual é a principal diferença entre análise preditiva e prescritiva?",
        options: [
            "A análise preditiva utiliza machine learning, enquanto a prescritiva não utiliza",
            "A análise preditiva prevê resultados futuros, enquanto a prescritiva sugere as melhores ações com base nas predições",
            "A análise preditiva é mais complexa que a prescritiva",
            "A análise prescritiva é usada apenas para reduzir custos"
        ],
        answer: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;

function showQuestion() {
    const questionData = quizData[currentQuestionIndex];

    const optionsHTML = questionData.options.map((option, i) =>
        `<label>
            <input type="radio" name="question" value="${i}">
            ${option}
        </label><br>`
    ).join('');

    quizContainer.innerHTML = `
        <div class="question"><strong>${questionData.question}</strong></div><br>
        <div class="options">${optionsHTML}</div>
    `;
}

nextButton.addEventListener('click', () => {
    const selectedOption = document.querySelector(`input[name=question]:checked`);

    if (selectedOption && parseInt(selectedOption.value) === quizData[currentQuestionIndex].answer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        showQuestion();
    } else {
        quizContainer.innerHTML = "";
        nextButton.style.display = "none";
        submitButton.style.display = "block";
    }
});

submitButton.addEventListener('click', () => {
    resultsContainer.innerHTML = `Você acertou ${score} de ${quizData.length} perguntas!`;
});

showQuestion();