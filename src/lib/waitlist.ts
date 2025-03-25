export async function submitToWaitlist(email: string) {
  try {
    const response = await fetch("/api/waitlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
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
