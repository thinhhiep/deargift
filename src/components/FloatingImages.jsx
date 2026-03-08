import { useEffect, useState } from "react"
import "./FloatingImages.css"

export default function FloatingImages() {
    const [images, setImages] = useState([])

    useEffect(() => {
        // Load images from localStorage (saved as data URLs) or fallback to defaults
        try {
            const saved = JSON.parse(localStorage.getItem("floatingImages") || "null")
            if (Array.isArray(saved) && saved.length) {
                setImages(saved)
                return
            }
        } catch (e) {
            // ignore
        }

        setImages([
            "/images/img1.jpg",
            "/images/img2.jpg",
            "/images/img3.jpg",
            "/images/img4.jpg",
            "/images/img5.jpg",
            "/images/img6.jpg",
            "/images/img7.jpg",
            "/images/img8.jpg",
            "/images/img9.jpg",
            "/images/img10.jpg",
            "/images/img11.jpg",
            "/images/img12.jpg",
            "/images/img13.jpg",
            "/images/img14.jpg",
            "/images/img15.jpg",
            "/images/img16.jpg",
            "/images/img17.jpg",
            "/images/img18.jpg",
            "/images/img19.jpg",
            "/images/img20.jpg",
            "/images/img21.jpg",
            "/images/img22.jpg",
            "/images/img23.jpg",
            "/images/img24.jpg",
            "/images/img25.jpg",
            "/images/img26.jpg",
            "/images/img27.jpg",
            "/images/img28.jpg",
            "/images/img29.jpg",
            "/images/img30.jpg"
        ])
    }, [])

    return (
        <div className="floating-images" aria-hidden>
            {images.map((src, i) => (
                <img
                    key={i}
                    src={src}
                    className="floating-image"
                    style={{
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 8}s`,
                        animationDuration: `${10 + Math.random() * 10}s`,
                    }}
                    alt="floating"
                />
            ))}
        </div>
    )
}
