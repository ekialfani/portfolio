import {
  faArrowUpRightFromSquare,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const certifications = [
  {
    id: 1,
    logo: "/images/hacktiv8-logo.jpg",
    name: "Sertifikat MSIB - Scalalable Web service with Golang",
    provider: "Hacktiv8 Indonesia",
    programType: "MSIB",
    date: "2023",
    url: "https://drive.google.com/file/d/19iQ9yd8Coxh7YFUNjB7kBQKc_bv4GwIb/view",
  },
  {
    id: 2,
    logo: "/images/hacktiv8-logo.jpg",
    name: "Golang Tingkat Lanjut",
    provider: "Hacktiv8 Indonesia",
    programType: "MSIB",
    date: "2023",
    url: "https://sertiva.id/credential/741eef9a-c296-4555-ad35-06cc73019e52",
  },
  {
    id: 3,
    logo: "/images/hacktiv8-logo.jpg",
    name: "Mengetahui Penggunaan Database",
    provider: "Hacktiv8 Indonesia",
    programType: "MSIB",
    date: "2023",
    url: "https://sertiva.id/credential/3f1776c0-8e94-4aa2-a3ff-6462eb2b9181",
  },
  {
    id: 4,
    logo: "/images/hacktiv8-logo.jpg",
    name: "REST API dengan Golang",
    provider: "Hacktiv8 Indonesia",
    programType: "MSIB",
    date: "2023",
    url: "https://sertiva.id/credential/f6489456-cfc8-4afe-808b-4eb7f646c171",
  },
  {
    id: 5,
    logo: "/images/hacktiv8-logo.jpg",
    name: "Golang Tingkat Pemula",
    provider: "Hacktiv8 Indonesia",
    programType: "MSIB",
    date: "2023",
    url: "https://sertiva.id/credential/7d50c5e9-a4bb-4948-a396-25f92944b045",
  },
  {
    id: 6,
    logo: "/images/hacktiv8-logo.jpg",
    name: "Sertifikat MSIB - React & React Native for Front-End Developer",
    provider: "Hacktiv8 Indonesia",
    programType: "MSIB",
    date: "2023",
    url: "https://drive.google.com/file/d/1uRu3k3C4heS7F8NZYjyjg4gGuk0d40mM/view",
  },
  {
    id: 7,
    logo: "/images/hacktiv8-logo.jpg",
    name: "Fungsi dan Penggunaan React Native",
    provider: "Hacktiv8 Indonesia",
    programType: "MSIB",
    date: "2023",
    url: "https://sertiva.id/credential/8c363f8d-01fe-4a7b-8784-8b956f9404cc",
  },
  {
    id: 8,
    logo: "/images/hacktiv8-logo.jpg",
    name: "Styling Komponen React",
    provider: "Hacktiv8 Indonesia",
    programType: "MSIB",
    date: "2023",
    url: "https://sertiva.id/credential/d64faae3-1a65-4b43-a0b2-a5c4639e166d",
  },
  {
    id: 9,
    logo: "/images/hacktiv8-logo.jpg",
    name: "HTML dan CSS Dasar",
    provider: "Hacktiv8 Indonesia",
    programType: "MSIB",
    date: "2023",
    url: "https://sertiva.id/credential/1f64fbb1-ce2e-4244-ad8d-ef0f50d82ffa",
  },
  {
    id: 10,
    logo: "/images/dicoding-logo.avif",
    name: "Menjadi Front-End Web Developer Expert",
    provider: "Dicoding Indonesia",
    programType: "IDCamp",
    date: "2022",
    url: "https://www.dicoding.com/certificates/4EXGNEMKEZRL",
  },
  {
    id: 11,
    logo: "/images/dicoding-logo.avif",
    name: "Belajar Fundamental Font-End Web Development",
    provider: "Dicoding Indonesia",
    programType: "IDCamp",
    date: "2022",
    url: "https://www.dicoding.com/certificates/JLX1L9645X72",
  },
  {
    id: 12,
    logo: "/images/dicoding-logo.avif",
    name: "Belajar Membuat Front-End Web untuk Pemula",
    provider: "Dicoding Indonesia",
    programType: "IDCamp",
    date: "2022",
    url: "https://www.dicoding.com/certificates/1OP852341PQK",
  },
  {
    id: 12,
    logo: "/images/dicoding-logo.avif",
    name: "Belajar Dasar Pemrograman Web",
    provider: "Dicoding Indonesia",
    programType: "IDCamp",
    date: "2022",
    url: "https://www.dicoding.com/certificates/1OP86M66QXQK",
  },
];

function Certifications() {
  return (
    <div className="w-full min-h-[86vh] py-10">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xs text-gray-500 font-medium mb-1">
            My Certifications
          </h2>
          <h2 className="text-3xl font-bold">Training & Certifications</h2>
          <p className="text-xs text-gray-500 mt-2 max-w-[345px] leading-5">
            A collection of certificates from various training programs and
            bootcamps i've completed to improve my skills and stay up to date
            with technology.
          </p>
        </div>
        <div className="w-48 h-48">
          <img
            className="w-full h-full object-contain"
            src="/images/certificate-hero.png"
            alt="hero.png"
          />
        </div>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-3">
        {certifications?.map((certif) => (
          <div
            key={certif?.id}
            className="border border-gray-200 rounded-md p-3"
          >
            <div className="flex gap-x-5">
              <div>
                <div className="w-[50px] h-[50px] p-2 border border-gray-200 rounded-md">
                  <img
                    className="w-full h-full object-cover rounded-md"
                    src={certif?.logo}
                    alt="hacktiv8-logo.jpg"
                  />
                </div>
              </div>
              <div>
                <h4 className="text-xs font-semibold">{certif?.name}</h4>
                <p className="text-[10px] text-gray-500 mt-1">
                  {certif?.programType} - {certif?.provider}
                </p>
                <div className="flex items-center gap-x-1 text-[11px] font-medium text-gray-500 mt-3">
                  <FontAwesomeIcon icon={faCalendarDays} />
                  <p>{certif?.date}</p>
                </div>
              </div>
            </div>
            <a
              className="text-gray-500 inline-block flex gap-x-2 items-center mt-6"
              href={certif?.url}
              target="_blank"
              rel="noreferrer"
            >
              <span className="text-[11px] font-medium">View Certificates</span>
              <FontAwesomeIcon
                className="text-[10px] font-medium"
                icon={faArrowUpRightFromSquare}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certifications;
