# 🏙️ Urban vs. Rural Climate Analysis 🌳

Este projeto tem como objetivo analisar, comparar e visualizar as diferenças climáticas entre áreas urbanas e rurais. Através da coleta de dados meteorológicos históricos e em tempo real, investigamos o fenômeno das **Ilhas de Calor Urbanas (ICU)** e como a urbanização afeta variáveis como temperatura, umidade e qualidade do ar.

## 📋 Índice
* [Sobre o Projeto](#-sobre-o-projeto)
* [Funcionalidades](#-funcionalidades)
* [Tecnologias Utilizadas](#-tecnologias-utilizadas)
* [Como Executar](#-como-executar)
* [Resultados Esperados](#-resultados-esperados)
* [Contribuição](#-contribuição)

---

## 🔍 Sobre o Projeto

A expansão urbana altera drasticamente a superfície terrestre. A substituição de vegetação por asfalto e concreto, combinada com a poluição atmosférica, cria microclimas únicos nas cidades. 

Este repositório contém scripts de automação para a coleta de dados de estações meteorológicas (públicas e privadas), processamento estatístico dessas informações e geração de gráficos comparativos que tornam visualmente evidente o contraste entre o clima da cidade e do campo.

## ✨ Funcionalidades

* **Extração de Dados:** Integração com APIs meteorológicas para buscar dados em tempo real de coordenadas urbanas e rurais específicas.
* **Processamento de Dados:** Limpeza e tratamento de dados brutos (remoção de *outliers*, normalização).
* **Visualização Gráfica:** Geração de gráficos de linha para variação de temperatura diária/anual, mapas de calor e gráficos de dispersão para umidade.
* **Relatório de Impacto:** Um notebook Jupyter dedicado a explicar os fatores que intensificam o clima urbano (como verticalização e falta de áreas verdes).

## 🛠️ Tecnologias Utilizadas

O projeto foi desenvolvido utilizando o ecossistema Data Science do Python:

* **Python 3.10+** (Linguagem base)
* **Pandas & NumPy:** Para manipulação e análise matemática dos dados.
* **Matplotlib & Seaborn:** Para a criação de gráficos estatísticos visuais.
* **Requests:** Para consumo de APIs de clima.
* **Jupyter Notebook:** Para documentação viva e testes rápidos.

---

## 🚀 Como Executar

### Pré-requisitos
Certifique-se de ter o Python e o `pip` instalados em sua máquina.

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/seu-usuario/urban-vs-rural-climate.git](https://github.com/seu-usuario/urban-vs-rural-climate.git)
   cd urban-vs-rural-climate
