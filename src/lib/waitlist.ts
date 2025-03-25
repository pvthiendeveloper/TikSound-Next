export async function submitToWaitlist(email: string) {
  try {
    // Execute reCAPTCHA v3
    const captchaToken = await new Promise<string>((resolve, reject) => {
      window.grecaptcha.ready(async () => {
        try {
          const token = await window.grecaptcha.execute(
            process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!,
            { action: "waitlist_submit" }
          );
          resolve(token);
        } catch (error) {
          reject(error);
        }
      });
    });

    const response = await fetch("/api/waitlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, captchaToken }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to join waitlist");
    }

    return { success: true };
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Something went wrong"
    );
  }
}
