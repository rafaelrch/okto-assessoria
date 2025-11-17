export interface FormData {
  name: string;
  email: string;
  phone: string;
  cnpj: string;
  company: string;
  investment: string;
  revenue: string;
}

export const submitToGoogleSheets = async (data: FormData): Promise<boolean> => {
  const url = import.meta.env.VITE_GOOGLE_SHEETS_URL;

  if (!url) {
    console.error("VITE_GOOGLE_SHEETS_URL não está configurada");
    throw new Error("Configuração do Google Sheets não encontrada. Verifique o arquivo .env");
  }

  try {
    // Usamos no-cors porque o Google Apps Script precisa aceitar requisições de qualquer origem
    // Com no-cors, não podemos verificar o status da resposta, mas assumimos sucesso se não houver erro de rede
    await fetch(url, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    // Com no-cors, sempre retorna uma resposta "opaca", então assumimos sucesso
    // Se houver erro de rede, será capturado no catch
    return true;
  } catch (error) {
    console.error("Erro ao enviar para Google Sheets:", error);
    throw new Error("Não foi possível enviar o formulário. Verifique sua conexão e tente novamente.");
  }
};

