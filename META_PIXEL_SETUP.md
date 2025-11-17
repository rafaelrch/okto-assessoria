# Configuração do Meta Pixel

Este documento explica como o Meta Pixel foi configurado no projeto e como utilizá-lo.

## O que foi implementado

1. **Meta Pixel Code**: Código base do pixel adicionado no `index.html` para rastreamento client-side
2. **Conversions API**: Integração com a API do Meta para rastreamento server-side
3. **Tracking de Eventos**: Funções utilitárias para rastrear eventos importantes

## Configuração

### 1. Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
VITE_META_API_TOKEN=seu_token_aqui
```

O token da API foi fornecido e já está configurado no código. Se precisar gerar um novo token:

1. Acesse [Facebook Graph API Explorer](https://developers.facebook.com/tools/explorer/)
2. Selecione seu app
3. Gere um token com as permissões necessárias para o Pixel ID: `361818372503487`

### 2. Pixel ID

O Pixel ID configurado é: `361818372503487`

Este ID está hardcoded no código e no `index.html`. Se precisar alterar, edite:
- `index.html` (linha 34)
- `src/lib/metaPixel.ts` (linha 52)

## Eventos Rastreados

### PageView
- **Quando**: Automaticamente ao carregar qualquer página
- **Implementação**: Código no `index.html`

### Lead
- **Quando**: Quando um formulário é enviado com sucesso
- **Onde**: 
  - `src/components/Hero.tsx`
  - `src/components/FormSection.tsx`
- **Dados enviados**:
  - Email (hasheado)
  - Telefone (hasheado)
  - Dados customizados (empresa, investimento, faturamento)

## Funções Disponíveis

### `trackLead(userData, customData)`
Rastreia um evento de Lead (formulário preenchido).

```typescript
import { trackLead } from "@/lib/metaPixel";

await trackLead(
  {
    email: "usuario@email.com",
    phone: "+5511999999999",
    name: "Nome do Usuário",
  },
  {
    company: "Nome da Empresa",
    investment: "1000-2000",
    revenue: "50000-100000",
  }
);
```

### `trackPurchase(userData, purchaseData)`
Rastreia um evento de Purchase (compra realizada).

```typescript
import { trackPurchase } from "@/lib/metaPixel";

await trackPurchase(
  {
    email: "usuario@email.com",
    phone: "+5511999999999",
  },
  {
    value: 142.52,
    currency: "BRL",
  }
);
```

### `trackViewContent(contentName)`
Rastreia visualização de conteúdo.

```typescript
import { trackViewContent } from "@/lib/metaPixel";

trackViewContent("Nome do Conteúdo");
```

### `trackInitiateCheckout()`
Rastreia início de checkout.

```typescript
import { trackInitiateCheckout } from "@/lib/metaPixel";

trackInitiateCheckout();
```

## Segurança e Privacidade

- **Dados sensíveis**: Email e telefone são hasheados (SHA-256) antes de serem enviados para a API
- **Client-side vs Server-side**: 
  - Client-side (fbq): Rastreia eventos no navegador
  - Server-side (API): Rastreia eventos via API, útil para casos onde o client-side pode ser bloqueado

## Estrutura dos Dados Enviados

### Exemplo de evento Lead enviado para a API:

```json
{
  "data": [
    {
      "event_name": "Lead",
      "event_time": 1763397912,
      "action_source": "website",
      "user_data": {
        "em": ["hash_do_email"],
        "ph": ["hash_do_telefone"]
      },
      "custom_data": {
        "content_name": "Formulário de Contato",
        "company": "Nome da Empresa",
        "investment": "1000-2000",
        "revenue": "50000-100000"
      }
    }
  ]
}
```

## Troubleshooting

### Eventos não estão sendo rastreados

1. Verifique se o token da API está configurado no `.env`
2. Verifique o console do navegador para erros
3. Use o [Facebook Pixel Helper](https://chrome.google.com/webstore/detail/facebook-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc) para verificar se o pixel está carregando

### Erros na API

- Verifique se o token tem as permissões corretas
- Verifique se o Pixel ID está correto
- Os erros são logados no console do navegador

## Referências

- [Meta Pixel Documentation](https://developers.facebook.com/docs/meta-pixel)
- [Conversions API Documentation](https://developers.facebook.com/docs/marketing-api/conversions-api)

