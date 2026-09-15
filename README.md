# Entregável de Algoritmos

Implementação de algoritmos fundamentais em **Java** e **JavaScript**, desenvolvida como atividade acadêmica.

## 📚 Algoritmos

O projeto contém seis algoritmos:

- 🔢 **Número primo** — verifica se um número inteiro é primo.
- ➕ **Somatório** — calcula a soma dos elementos de uma lista.
- 🐇 **Fibonacci** — calcula termos da sequência de Fibonacci.
- 🧮 **MDC** — calcula o máximo divisor comum de dois números pelo algoritmo de Euclides.
- 🔀 **Quicksort** — ordena uma sequência de números.
- 🔢 **Contagem** — conta a quantidade de números inteiros em um intervalo.

## 💻 Tecnologias

- Java
- JavaScript
- HTML5
- CSS3

## 🌐 Interface Web

Além das implementações em Java e JavaScript, o projeto possui uma interface Web para executar os algoritmos diretamente pelo navegador.

A interface está em `web/index.html` e utiliza `web/app.js` para conectar os campos da página às funções implementadas em JavaScript.

### Como executar a interface

Abra o arquivo `web/index.html` no navegador. Para uma melhor experiência durante o desenvolvimento, recomenda-se utilizar a extensão **Live Server** no VS Code.

A interface permite testar:

- Contagem
- Número primo
- Fibonacci
- MDC
- Quicksort
- Somatório

## 📁 Estrutura do projeto

```text
entregavel-algoritmos/
├── README.md
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
└── web/
    ├── index.html
    └── app.js
```

## ▶️ Como executar os algoritmos

### Java

Entre na pasta `java` e compile o arquivo desejado:

```bash
javac EhPrimo.java
java EhPrimo
```

Exemplo com Quicksort:

```bash
javac Quicksort.java
java Quicksort
```

### JavaScript

Com o **Node.js** instalado, execute o arquivo desejado:

```bash
node ehPrimo.js
```

Exemplo com Quicksort:

```bash
node quicksort.js
```

## 🎯 Objetivo

Praticar a implementação e a compreensão de algoritmos básicos de programação, comparando sua aplicação em Java e JavaScript e desenvolvendo uma interface Web para execução dos algoritmos.

## 👨‍💻 Projeto acadêmico

**Entregável de Algoritmos**

Repositório desenvolvido para fins educacionais.
