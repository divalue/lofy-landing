import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <Image 
          src="https://solvy-static.nyc3.cdn.digitaloceanspaces.com/images/lofy.png" 
          alt="Lofy Logo" 
          className="logo" 
          width={256} 
          height={256}
          priority
        />
      </div>
      
      <h1>Lofy: Spatial Beats</h1>
      <p className="subtitle">Available now for Apple Vision Pro!</p>
      
      <Link 
        href="https://apps.apple.com/us/app/a-lofy-spatial-beats/id6504421979?platform=vision" 
        className="download-btn"
      >
        Download
      </Link>
      
      <p className="privacy-text">
        Lofy does not use any trackers of any sort, nor does it keep, track, sell, rent, or share any information on you throughout your use of the app with any third parties. For any questions, feel free to contact me directly by remy@moonbows.net.
      </p>
      
      <p className="privacy-text">
        Lofy 不使用任何形式的追踪器，也不保留、追踪、出售、出租或与任何第三方分享您在使用应用期间的任何信息。如有任何问题，欢迎直接通过 remy@moonbows.net 与我联系。
      </p>
    </main>
  );
}
