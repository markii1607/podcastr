"use client";

import { api } from "@/convex/_generated/api";
import { GeneratePodcastProps } from "@/types"
import { useAction, useMutation } from "convex/react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useUploadFiles } from "@xixixao/uploadstuff/react";

const useGeneratePodcast = ({
  setAudio, voiceType, voicePrompt, setAudioStorageId
}: GeneratePodcastProps) => {
  const [isGenerating, setIsGenerating] = useState(false)

  const generateUploadUrl = useMutation(api.files.generateUploadUrl)
  const { startUpload } = useUploadFiles(generateUploadUrl)

  const getPodcastAudio = useAction(api.openai.generateAudioAction)

  const getAudioUrl = useMutation(api.podcasts.getUrl)

  const generatePodcast = async () => {
    setIsGenerating(true)
    setAudio('')

    if (!voicePrompt) {
      // TODO: Show toast error message
      return setIsGenerating(false)
    }

    try {
      const response = await getPodcastAudio({
        voice: voiceType,
        input: voicePrompt
      })

      const blob = new Blob([response], { type: 'audio/mpeg' })
      const fileName = `podcast-${uuidv4()}.mp3`
      const file = new File([blob], fileName, { type: 'audio/mpeg' })

      const uploaded = await startUpload([file]);
      const storageId = (uploaded[0].response as any).storageId

      setAudioStorageId(storageId)

      const audioUrl = await getAudioUrl({ storageId })
      setAudio(audioUrl!)
      setIsGenerating(false)

      // TODO: Show toast success message
    } catch (error) {
      console.error('Error generating podcast', error)
      // TODO: Show toast error message
      setIsGenerating(false)
    }
  }

  return {
    isGenerating,
    generatePodcast
  }
}

export default useGeneratePodcast