// Meta Pixel utility functions
// Handles both client-side tracking (fbq) and server-side API (Conversions API)

// Declare fbq function for TypeScript
declare global {
  interface Window {
    fbq: (
      action: string,
      event: string,
      params?: Record<string, any>
    ) => void;
  }
}

/**
 * Track a standard Meta Pixel event using fbq
 */
export const trackMetaEvent = (
  eventName: string,
  params?: Record<string, any>
) => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", eventName, params);
  }
};

/**
 * Hash email or phone for privacy (SHA-256)
 */
const hashData = async (data: string): Promise<string> => {
  if (!data) return "";
  
  const encoder = new TextEncoder();
  const dataBuffer = encoder.encode(data.toLowerCase().trim());
  const hashBuffer = await crypto.subtle.digest("SHA-256", dataBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
};

/**
 * Send event to Meta Conversions API
 */
export const sendMetaConversionsAPI = async (
  eventName: string,
  userData: {
    email?: string;
    phone?: string;
  },
  customData?: Record<string, any>
) => {
  const apiToken = import.meta.env.VITE_META_API_TOKEN;
  const pixelId = "361818372503487";

  if (!apiToken) {
    console.warn("Meta API Token não configurado. Evento não será enviado via API.");
    return;
  }

  try {
    // Hash user data
    const hashedEmail = userData.email
      ? await hashData(userData.email)
      : null;
    const hashedPhone = userData.phone
      ? await hashData(userData.phone)
      : null;

    const eventData = {
      data: [
        {
          event_name: eventName,
          event_time: Math.floor(Date.now() / 1000),
          action_source: "website",
          user_data: {
            em: hashedEmail ? [hashedEmail] : [],
            ph: hashedPhone ? [hashedPhone] : [],
          },
          custom_data: customData || {},
        },
      ],
    };

    const response = await fetch(
      `https://graph.facebook.com/v21.0/${pixelId}/events?access_token=${apiToken}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventData),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Erro ao enviar evento para Meta API:", errorData);
    }
  } catch (error) {
    console.error("Erro ao enviar evento para Meta Conversions API:", error);
  }
};

/**
 * Track Lead event (form submission)
 * Sends both client-side (fbq) and server-side (API) events
 */
export const trackLead = async (
  userData: {
    email?: string;
    phone?: string;
    name?: string;
  },
  customData?: Record<string, any>
) => {
  // Client-side tracking
  trackMetaEvent("Lead", {
    content_name: "Formulário de Contato",
    ...customData,
  });

  // Server-side tracking via Conversions API
  await sendMetaConversionsAPI(
    "Lead",
    {
      email: userData.email,
      phone: userData.phone,
    },
    {
      content_name: "Formulário de Contato",
      ...customData,
    }
  );
};

/**
 * Track Purchase event
 */
export const trackPurchase = async (
  userData: {
    email?: string;
    phone?: string;
  },
  purchaseData: {
    value: number;
    currency?: string;
  }
) => {
  // Client-side tracking
  trackMetaEvent("Purchase", {
    value: purchaseData.value,
    currency: purchaseData.currency || "BRL",
  });

  // Server-side tracking via Conversions API
  await sendMetaConversionsAPI(
    "Purchase",
    {
      email: userData.email,
      phone: userData.phone,
    },
    {
      currency: purchaseData.currency || "BRL",
      value: purchaseData.value.toString(),
    }
  );
};

/**
 * Track ViewContent event
 */
export const trackViewContent = (contentName?: string) => {
  trackMetaEvent("ViewContent", {
    content_name: contentName,
  });
};

/**
 * Track InitiateCheckout event
 */
export const trackInitiateCheckout = () => {
  trackMetaEvent("InitiateCheckout");
};

/**
 * Track PageView event
 * Sends both client-side (fbq) and server-side (API) events
 */
export const trackPageView = async () => {
  // Client-side tracking
  trackMetaEvent("PageView");

  // Server-side tracking via Conversions API (works even with ad blockers)
  await sendMetaConversionsAPI("PageView", {});
};

