import Link from "next/link";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const query = useRouter()
    return (
      <>
      <div className="sidenav">
        <Link href={"/"}>Agency 606 Projects Marketing</Link>
        <Link href={"/project-design"}>Agency 606 Projects Design</Link>
         
      </div>
      <div className="main">
        {children}
      </div>
      </>
      
      

    )
  }