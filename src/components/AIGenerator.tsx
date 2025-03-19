import React, { useState } from 'react';
import { PaintingStyle, GeneratedPainting } from '../types';
import { Wand2, Loader2, AlertCircle } from 'lucide-react';

interface AIGeneratorProps {
  style: PaintingStyle;
  onGenerated: (painting: GeneratedPainting) => void;
}

export function AIGenerator({ style, onGenerated }: AIGeneratorProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<{ message: string; details?: string } | null>(null);
  const [lastTimestamp, setLastTimestamp] = useState(0);

  const handleGenerate = async () => {
    setIsGenerating(true);
    setError(null);

    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      if (!apiUrl) {
        throw new Error("API URL is not configured");
      }

      console.log(`🔹 Using API URL: ${apiUrl}`);

      const currentTime = Date.now();
      const uniqueTimestamp = currentTime > lastTimestamp ? currentTime : lastTimestamp + 1;
      setLastTimestamp(uniqueTimestamp);
      
      const randomValue1 = Math.random().toString(36).substring(2, 10);
      const randomValue2 = Math.random().toString(36).substring(2, 10);
      const randomSeed = `${uniqueTimestamp}-${randomValue1}-${randomValue2}`;
      
      console.log(`🎲 Using random seed: ${randomSeed}`);
      
      const response = await fetch(`${apiUrl}/api/generate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          style: `pure ${style.name} artwork, no frame, no background, just the art itself`,
          seed: randomSeed,
          timestamp: uniqueTimestamp,
          randomFactor: Math.floor(Math.random() * 1000000),
        }),
      });

      let data;
      try {
        data = await response.json();
      } catch (parseError) {
        throw new Error("Failed to parse server response");
      }

      if (!response.ok) {
        throw new Error(data?.details || `Server error: ${response.status} ${response.statusText}`);
      }

      console.log("✅ AI Generation Response:", data);

      if (!data.imageUrl) {
        throw new Error("No image URL received from the server");
      }

      const uniqueId = `ai-${uniqueTimestamp}-${randomValue1.substring(0, 4)}`;
      
      const generatedPainting: GeneratedPainting = {
        id: uniqueId,
        title: `Peinture IA en ${style.name} #${uniqueId.slice(-6)}`,
        imageUrl: data.imageUrl,
        artist: `IA dans le style ${style.name}`,
        year: "2024",
        description: `Une œuvre générée automatiquement dans le style ${style.name}.`,
        prompt: data.prompt,
        style: style.id
      };

      onGenerated(generatedPainting);
    } catch (err) {
      console.error("🚨 AI Generation Error:", err);

      let errorMessage = "Failed to generate image";
      let errorDetails = "An unexpected error occurred";

      if (err instanceof Error) {
        if (err.message === "Failed to fetch") {
          errorMessage = "Could not connect to the server";
          errorDetails = "The server might be offline or not accessible. Please try again later.";
        } else if (err.message === "API URL is not configured") {
          errorMessage = "Configuration Error";
          errorDetails = "The API URL is not properly configured in the environment variables.";
        } else {
          errorDetails = err.message;
        }
      }

      setError({
        message: errorMessage,
        details: errorDetails,
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <div className="flex items-center gap-2 mb-6">
        <Wand2 className="w-6 h-6 text-indigo-600" />
        <h2 className="text-2xl font-semibold">Générateur d'Art IA</h2>
      </div>

      <div className="space-y-6">
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-md p-4">
            <div className="flex items-center gap-2 text-red-700">
              <AlertCircle className="w-5 h-5" />
              <p className="font-medium">{error.message}</p>
            </div>
            {error.details && <p className="mt-1 text-sm text-red-600 ml-7">{error.details}</p>}
          </div>
        )}

        <button
          onClick={handleGenerate}
          disabled={isGenerating}
          className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-lg font-medium"
        >
          {isGenerating ? (
            <>
              <Loader2 className="w-6 h-6 animate-spin" />
              Génération en cours...
            </>
          ) : (
            <>
              <Wand2 className="w-6 h-6" />
              Générer une peinture {style.name}
            </>
          )}
        </button>
      </div>
    </div>
  );
}
