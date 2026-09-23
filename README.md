# Entregáveis de Algoritmos

Repositório acadêmico com implementações de algoritmos fundamentais em **Java** e **JavaScript**, acompanhado de uma interface Web para testar os algoritmos pelo navegador.

## Conteúdo

| Algoritmo | Descrição |
|---|---|
| Número primo | Verifica se um número é primo |
| Somatório | Calcula a soma de valores |
| Fibonacci | Trabalha com a sequência de Fibonacci |
| MDC | Calcula o máximo divisor comum pelo algoritmo de Euclides |
| Quicksort | Ordena uma sequência de números |
| Contagem | Realiza contagens em um intervalo |

Os algoritmos estão disponíveis em duas linguagens: **Java** em `java/` e **JavaScript** em `javascript/`.

A interface Web fica em `web/` e permite testar os algoritmos de JavaScript de forma interativa.

## Tecnologias

- Java
- JavaScript
- HTML5
- CSS3
- Git e GitHub

## Estrutura

```text
entregaveis-ambientes/
├── .github/
│   └── workflows/
│       └── pages.yml
├── java/
│   ├── Contagem.java
│   ├── EhPrimo.java
│   ├── Fibonacci.java
│   ├── Mdc.java
│   ├── Quicksort.java
│   └── Somatorio.java
├── javascript/
│   ├── contagem.js
│   ├── ehPrimo.js
│   ├── fibonacci.js
│   ├── mdc.js
│   ├── quicksort.js
│   └── somatorio.js
├── web/
│   ├── index.html
│   └── app.js
├── index.html
└── README.md
```

## Como executar

### Java

Com o JDK instalado:

```bash
cd java
javac EhPrimo.java
java EhPrimo
```

Substitua `EhPrimo.java` pelo algoritmo desejado.

### JavaScript

Com o Node.js instalado:

```bash
cd javascript
node ehPrimo.js
```

### Interface Web

Abra `web/index.html` no navegador ou use o **Live Server** no VS Code.

O projeto também possui configuração para publicação pelo **GitHub Pages**.

## Objetivo acadêmico

Praticar lógica de programação, estruturas de controle, algoritmos de ordenação e soluções de problemas, comparando implementações em Java e JavaScript.

> Projeto desenvolvido para fins educacionais como parte das atividades acadêmicas de ADS.
