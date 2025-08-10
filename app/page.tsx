import CompanionCard from "@/components/CompanionCard"
import CompanionList from "@/components/CompanionList"
import CTA from "@/components/CTA"
import { getAllCompanions, getRecentSessions } from "@/lib/actions/companions.actions"
import { getSubjectColor } from "@/lib/utils"


const Page = async () => {
  const companions = await getAllCompanions({ limit: 3 });
  const recentSessionsCompanions = await getRecentSessions(3);
  return (
    <main>
      <h1 className='text-2xl underline'>Popular Companions</h1>
      <section className="home-section">
        {
          companions.map((companion) => (
            <CompanionCard
              key={companion.id}
              {... companion}
              color={getSubjectColor(companion.subject)}
            />
          ))
        }
      </section>

      <section className="home-section">
        <CompanionList
          title='Recently Completed Sessions'
          companions={recentSessionsCompanions}
          classNames='w-2/3 mx-lg:w-full'
        />
        <CTA />
      </section>
    </main>
  )
}

export default Page