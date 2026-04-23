# 🔗 MAHAYLA SHEY

Uma página de links (linktree) moderna e responsiva, criada para centralizar todos os seus links em um único lugar.

## ✨ Características

- 🎨 **Design Moderno**: Interface limpa e atraente com gradientes
- 📱 **Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- ⚡ **Rápido**: Sem dependências pesadas, apenas HTML, CSS e JavaScript puro
- 🌙 **Dark Mode**: Suporte automático para modo escuro do sistema
- 🎯 **Organizando Links**: Organize seus links por categorias (Redes Sociais, Projetos, Contato)
- ✨ **Animações Suaves**: Transições e efeitos visuais elegantes
- 📊 **Analytics Ready**: Preparado para integração com Google Analytics

## 📋 Estrutura

```
site-mahayla/
├── index.html      # Página principal
├── styles.css      # Estilos CSS
├── script.js       # JavaScript para interatividade
└── README.md       # Documentação
```

## 🚀 Como Usar

### 1. **Clonar o Repositório**
```bash
git clone https://github.com/leticiaswit-creator/site-mahayla.git
cd site-mahayla
```

### 2. **Personalizar seus Dados**

Edite o `index.html` e atualize:

- **Nome e Bio**: Procure por `<h1 class="profile-name">` e `<p class="profile-bio">`
- **Imagem de Perfil**: Substitua a URL no `src` da imagem de perfil
- **Links Sociais**: Atualize os `href` das redes sociais
- **Projetos**: Adicione seus projetos com URLs e descrições
- **Contato**: Adicione seu email e número de WhatsApp

### 3. **Abrir no Navegador**
Apenas abra o arquivo `index.html` no seu navegador favorito, ou use um servidor local:

```bash
python -m http.server 8000
# ou com Node.js
npx http-server
```

## 🎨 Personalização

### Cores
Para alterar as cores principais, edite o arquivo `styles.css`:

```css
/* Cores principais */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
/* Altere para suas cores preferidas */
```

### Adicionar Novos Links

```html
<a href="sua-url" class="link-button social-link" target="_blank">
    <i class="fab fa-seu-icone"></i>
    <span>Label do Link</span>
</a>
```

### Ícones Disponíveis
Utilizamos Font Awesome. Veja todos os ícones disponíveis em: [fontawesome.com](https://fontawesome.com)

## 🌐 Deploy

### GitHub Pages
1. Vá para as configurações do repositório
2. Navegue até "Pages"
3. Selecione "main" como branch
4. Seu site estará disponível em: `https://leticiaswit-creator.github.io/site-mahayla`

### Outros Serviços
- **Vercel**: Conecte o repositório diretamente
- **Netlify**: Drag & drop ou conecte o repositório
- **Surge**: `npm install -g surge && surge`

## 💡 Dicas

- Use imagens de perfil em formato quadrado (1:1)
- Mantenha os textos dos links curtos e descritivos
- Teste a página em diferentes dispositivos
- Use cores que reflitam sua personalidade ou marca

## 📝 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar, modificar e compartilhar!

## 🤝 Contribuições

Tem uma ideia para melhorar? Abra uma issue ou faça um pull request!

## 📧 Suporte

Tem dúvidas? Abra uma issue neste repositório.

---

**Feito com ❤️ para você**
