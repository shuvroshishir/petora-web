import Link from "next/link";
import Image from "next/image";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
    FaHeart,
    FaArrowRight,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-accent border-t border-muted-foreground/20">
            <div className="container py-16">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                    {/* Logo & Description */}
                    <div className="space-y-5">
                        <Link href="/" className="flex items-center gap-3">
                            <Image
                                src="/assets/logo.jpg"
                                alt="Petora Logo"
                                width={44}
                                height={44}
                                className="rounded-full"
                            />

                            <h2 className="text-3xl font-black text-foreground ">
                                Petora
                            </h2>
                        </Link>

                        <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                            Helping loving families connect with adorable pets.
                            Adopt, care, and give pets a forever home with
                            Petora.
                        </p>

                        <div className="flex items-center gap-3">
                            <Link
                                href="#"
                                className="rounded-full border border-muted-foreground p-2.5 text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-amber-500 hover:bg-amber-500 hover:text-white"
                            >
                                <FaFacebookF size={18} />
                            </Link>

                            <Link
                                href="#"
                                className="rounded-full border border-muted-foreground  p-2.5 text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-amber-500 hover:bg-amber-500 hover:text-white"
                            >
                                <FaInstagram size={18} />
                            </Link>

                            <Link
                                href="#"
                                className="rounded-full border border-muted-foreground  p-2.5 text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-amber-500 hover:bg-amber-500 hover:text-white"
                            >
                                <FaTwitter size={18} />
                            </Link>

                            <Link
                                href="#"
                                className="rounded-full border border-muted-foreground  p-2.5 text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-amber-500 hover:bg-amber-500 hover:text-white"
                            >
                                <FaLinkedinIn size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-5 text-lg font-bold text-foreground ">
                            Quick Links
                        </h3>

                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li>
                                <Link
                                    href="/"
                                    className="transition-all duration-300 hover:pl-1 hover:text-amber-500"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/all-pets"
                                    className="transition-all duration-300 hover:pl-1 hover:text-amber-500"
                                >
                                    All Pets
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/dashboard/add-pet"
                                    className="transition-all duration-300 hover:pl-1 hover:text-amber-500"
                                >
                                    Add Pet
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/dashboard/my-requests"
                                    className="transition-all duration-300 hover:pl-1 hover:text-amber-500"
                                >
                                    My Requests
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="mb-5 text-lg font-bold text-foreground ">
                            Contact Info
                        </h3>

                        <div className="space-y-4 text-sm text-muted-foreground">
                            <p>
                                Mirzapur, Tangail, Bangladesh
                            </p>

                            <p>
                                shuvroshishir.dev@gmail.com
                            </p>

                            <p>
                                +880 1234-567890
                            </p>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="mb-5 text-lg font-bold text-foreground ">
                            Newsletter
                        </h3>

                        <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                            Subscribe to get pet care tips, adoption stories,
                            and updates.
                        </p>

                        <div className="flex overflow-hidden rounded-full  bg-white border border-gray-800/10 ">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-transparent px-5 py-3 text-sm outline-none text-muted-foreground"
                            />

                            <button className="bg-amber-500 px-5 text-white transition-all duration-300 hover:bg-amber-600">
                                <FaArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-muted-foreground/30 pt-6 text-sm text-muted-foreground md:flex-row">
                    <p>
                        &copy; {new Date().getFullYear()} Petora. All rights reserved.
                    </p>

                    <p className="flex items-center gap-1">
                        Made with <FaHeart size={16} className="fill-amber-500 text-amber-500" /> by Shishir
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;