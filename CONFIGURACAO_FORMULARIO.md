# Configuração do Formulário de Contato

## ✅ Formulário Implementado com Segurança

O formulário foi implementado com **Formspree**, um serviço seguro que:
- ✓ **Protege seu email** - rafael05ouro@gmail.com nunca aparece no código do site
- ✓ **Protege dados dos usuários** - Enviados via HTTPS criptografado
- ✓ **Proteção anti-spam** - Sistema de verificação integrado
- ✓ **Gratuito** - 50 submissões/mês no plano grátis

---

## 🚀 Como Ativar (5 minutos)

### Passo 1: Criar conta no Formspree
1. Acesse: https://formspree.io/
2. Clique em **"Get Started Free"**
3. Use seu email: **rafael05ouro@gmail.com**
4. Crie uma senha segura
5. Confirme seu email

### Passo 2: Criar o formulário
1. No dashboard do Formspree, clique em **"+ New Form"**
2. Nome do formulário: **"Contato Krios"**
3. Email de destino: **rafael05ouro@gmail.com** (já preenchido)
4. Clique em **"Create Form"**

### Passo 3: Copiar o Form ID
Após criar, você verá um código como:
```
https://formspree.io/f/XXXXXXXX
```

Copie apenas a parte **XXXXXXXX** (seu Form ID único)

### Passo 4: Atualizar o código
1. Abra o arquivo: `src/App.tsx`
2. Procure pela linha (aproximadamente linha 700):
```typescript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

3. Substitua **YOUR_FORM_ID** pelo seu Form ID:
```typescript
const response = await fetch('https://formspree.io/f/XXXXXXXX', {
```

4. Salve o arquivo

---

## 🧪 Testar o Formulário

1. Certifique-se que o servidor está rodando:
```bash
npm run dev
```

2. Preencha o formulário no site
3. Clique em **"Enviar"**
4. Você receberá:
   - ✅ Mensagem de sucesso no site
   - 📧 Email com os dados em **rafael05ouro@gmail.com**

---

## 🔒 Recursos de Segurança Implementados

### 1. Email Oculto
- Seu email NÃO está visível no código-fonte do site
- Apenas o Form ID público é usado
- Impossível para visitantes descobrirem seu email

### 2. Validação de Dados
- Campos obrigatórios: Nome e Email
- Validação de formato de email
- Proteção contra envios vazios

### 3. Proteção Anti-Spam
- Formspree tem reCAPTCHA integrado
- Sistema de rate limiting automático
- Detecção de bots

### 4. HTTPS Criptografado
- Todos os dados são enviados via HTTPS
- Impossível interceptar dados em trânsito

### 5. Feedback Visual
- ✓ Mensagem de sucesso em verde
- ✗ Mensagem de erro em vermelho
- Estado de "Enviando..." durante o processo
- Botão desabilitado durante envio

---

## 📊 O que Você Receberá no Email

Quando alguém preencher o formulário, você receberá um email com:

```
De: Formspree <no-reply@formspree.io>
Para: rafael05ouro@gmail.com
Assunto: Novo contato de [Nome] - [Empresa]

Nome: [Nome preenchido]
Empresa: [Empresa preenchida]
Instagram: [Instagram preenchido]
Website: [Website preenchido]
Email: [Email preenchido]
Contexto: [Mensagem preenchida]
```

---

## 🆓 Limites do Plano Gratuito

- **50 submissões/mês**
- Se precisar de mais, upgrade para $10/mês (1000 submissões)

---

## 🔧 Alternativas (caso prefira)

### Opção 2: Web3Forms (100% gratuito)
1. Acesse: https://web3forms.com/
2. Insira seu email e receba um Access Key
3. Substitua no código:
```typescript
const response = await fetch('https://api.web3forms.com/submit', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    access_key: 'SUA_ACCESS_KEY_AQUI',
    ...formData
  }),
});
```

### Opção 3: EmailJS
1. Acesse: https://www.emailjs.com/
2. Configure seu email provider
3. Use a biblioteca EmailJS no React

---

## ❓ Solução de Problemas

### Formulário não envia
- ✓ Verifique se substituiu `YOUR_FORM_ID`
- ✓ Confirme que o servidor está rodando
- ✓ Verifique o console do navegador (F12)

### Não recebo emails
- ✓ Verifique sua caixa de spam
- ✓ Confirme o email no Formspree
- ✓ Teste com um envio de teste no dashboard Formspree

### Erro 404 ao enviar
- ✓ Form ID está correto
- ✓ Formulário foi criado no Formspree

---

## 📞 Suporte

- Formspree: https://help.formspree.io/
- Documentação: https://formspree.io/docs/

---

**Status Atual:** ⚠️ Aguardando configuração do Form ID
**Após configurar:** ✅ Totalmente funcional e seguro
