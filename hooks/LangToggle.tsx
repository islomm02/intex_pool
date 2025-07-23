"use client"

import Image from "next/image"
import { useRouter, usePathname } from "next/navigation"
import { getCookie, setCookie } from "cookies-next"
import { useEffect, useState } from "react"

const LangToggle = () => {
  const router = useRouter()
  const pathname = usePathname()
  const [currentLang, setCurrentLang] = useState("uz") // default

  useEffect(() => {
    const savedLang = getCookie("NEXT_LOCALE") as string
    if (savedLang === "ru" || savedLang === "uz") {
      setCurrentLang(savedLang)
    }
  }, [])

  const handleLangToggle = () => {
    const newLang = currentLang === "ru" ? "uz" : "ru"
    setCurrentLang(newLang)
    setCookie("NEXT_LOCALE", newLang)

    const segments = pathname.split("/")
    if (segments[1] === "ru" || segments[1] === "uz") {
      segments[1] = newLang
    } else {
      segments.unshift("", newLang)
    }

    router.push(segments.join("/"))
  }

  return (
    <Image
      onClick={handleLangToggle}
      className="cursor-pointer w-[25px] h-[25px] sm:w-[26px] sm:h-[26px] rounded-[5px]"
      src={currentLang === "ru" ? "/RuIcon.png" : "/UzbIcon.png"}
      alt="LangIcon"
      width={26}
      height={26}
    />
  )
}

export default LangToggle
