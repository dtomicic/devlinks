import Image from "next/image";
import { NavigationStyled } from "./style"
import { FiLink, FiUser } from "react-icons/fi";
import Link from "next/link";


const Navigation = () => {
    return (
        <NavigationStyled>
            <div className="logo">
                <Image src="/images/logo.svg" alt="logo" width={50} height={50} />
            </div>
            <div className="menu">
                <ul>
                    <li>
                        <Link href="/" className="active">
                            <FiLink />
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <FiUser />
                        </Link>
                    </li>
                </ul>
            </div>
        </NavigationStyled>
    )
}

export default Navigation;