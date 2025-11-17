# Configuração do Google Sheets para o Formulário

Este guia explica como configurar o Google Sheets para receber os dados do formulário.

## Passo 1: Criar uma Planilha no Google Sheets

1. Acesse [Google Sheets](https://sheets.google.com)
2. Crie uma nova planilha
3. Na primeira linha, adicione os seguintes cabeçalhos (na ordem):
   - Nome
   - Email
   - Telefone
   - CNPJ
   - Empresa
   - Investimento
   - Faturamento
   - Data/Hora

## Passo 2: Criar o Google Apps Script

1. Na planilha criada, clique em **Extensões** → **Apps Script**
2. Apague o código padrão e cole o seguinte código:

```javascript
function doPost(e) {
  try {
    // Obter a planilha ativa
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse dos dados recebidos
    const data = JSON.parse(e.postData.contents);
    
    // Adicionar timestamp
    const timestamp = new Date();
    
    // Adicionar os dados na planilha
    sheet.appendRow([
      data.name || '',
      data.email || '',
      data.phone || '',
      data.cnpj || '',
      data.company || '',
      data.investment || '',
      data.revenue || '',
      timestamp
    ]);
    
    // Retornar sucesso
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Retornar erro
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Clique em **Salvar** (ícone de disquete) e dê um nome ao projeto, por exemplo: "Formulário OKTO"

## Passo 3: Publicar como Web App

1. No menu, clique em **Implantar** → **Nova implantação**
2. Clique no ícone de engrenagem ⚙️ ao lado de "Tipo" e selecione **Aplicativo da Web**
3. Configure:
   - **Descrição**: "API para receber dados do formulário"
   - **Executar como**: "Eu"
   - **Quem tem acesso**: "Qualquer pessoa"
4. Clique em **Implantar**
5. **IMPORTANTE**: Na primeira vez, você precisará autorizar o acesso:
   - Clique em **Autorizar acesso**
   - Escolha sua conta Google
   - Clique em **Avançado** → **Ir para [nome do projeto] (não seguro)**
   - Clique em **Permitir**
6. Copie a **URL da Web App** que será exibida (algo como: `https://script.google.com/macros/s/...`)

## Passo 4: Configurar a Variável de Ambiente

1. Na raiz do projeto, crie um arquivo `.env` (se não existir)
2. Adicione a seguinte linha:

```
VITE_GOOGLE_SHEETS_URL=https://script.google.com/macros/s/SUA_URL_AQUI/exec
```

**Substitua `SUA_URL_AQUI` pela URL que você copiou no Passo 3.**

3. Salve o arquivo

## Passo 5: Reiniciar o Servidor de Desenvolvimento

Se o servidor estiver rodando, pare e inicie novamente:

```bash
npm run dev
```

ou

```bash
bun dev
```

## Testando

1. Preencha o formulário no site
2. Envie o formulário
3. Verifique se os dados aparecem na planilha do Google Sheets

## Notas Importantes

- A URL do Google Apps Script deve terminar com `/exec` (não `/dev`)
- Se você fizer alterações no código do Apps Script, será necessário criar uma nova versão da implantação
- A primeira vez que alguém acessar a URL, pode haver um pequeno atraso enquanto o Google autoriza o acesso
- Os dados serão adicionados em uma nova linha na planilha a cada envio do formulário

## Solução de Problemas

### Erro: "Configuração do Google Sheets não encontrada"
- Verifique se o arquivo `.env` existe e contém `VITE_GOOGLE_SHEETS_URL`
- Certifique-se de que o servidor foi reiniciado após criar/editar o `.env`

### Erro: "Erro ao enviar formulário"
- Verifique se a URL do Google Apps Script está correta
- Verifique se o Apps Script foi publicado corretamente
- Verifique se as permissões foram concedidas
- Abra o console do navegador (F12) para ver erros detalhados

### Dados não aparecem na planilha
- Verifique se os cabeçalhos da planilha estão corretos
- Verifique se o código do Apps Script está correto
- Verifique se a planilha está aberta e acessível

