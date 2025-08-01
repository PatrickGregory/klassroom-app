import Image from "next/image";
import Link from "next/link";

interface CompanionCardProps {
    id: string;
    name: string;
    topic: string;
    subject: string;
    color: string;
    duration: number; // in minutes
}
const CompanionCard = ({ id, name, topic, subject, color, duration }: CompanionCardProps) => {
    return (
        <article className="companion-card" style={{ backgroundColor: color }}>
            <div className="flex justify-between items-center">
                <div className="subject-badge">{subject}</div>
                <button className="companion-bookmark">
                    <Image src='/icons/bookmark.svg' alt="bookmark" width={12.5} height={15} />
                </button>
            </div>
            <h2 className="text-2xl font-bold">{name}</h2>
            <p className="text-sm">{topic}</p>
            <div className="flex items-center gap-2">
                <Image src='/icons/clock.svg' alt="clock" width={13.5} height={13.5} />
                <span className="text-sm">{duration} minutes</span>
            </div>
            <Link href={`/companions/${id}`} className="w-full">
                <button className="btn-primary w-full justify-center">Launch Lesson</button>
            </Link>
        </article>
    )
}

export default CompanionCard
