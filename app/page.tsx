import CompanionCard from "@/components/CompanionCard"
import CompanionList from "@/components/CompanionList"
import CTA from "@/components/CTA"
import { recentSessions } from "@/constants"


const Page = () => {
  return (
    <main>
      <h1 className='text-2xl underline'>Popular Companions</h1>
      <section className="home-section">
        <CompanionCard 
          id='123'
          name='Neura the Brainy Explorer'
          topic='Neural network of the Brain'
          subject='Science'
          duration={45}
          color='#ffda6e'
        />
        <CompanionCard 
          id='456'
          name='The Growth Expert'
          topic='Scaling your business successfully'
          subject='Business'
          duration={20}
          color='#e5d0ff'
        />
        <CompanionCard 
          id='789'
          name='Verba the Vocabulary Virtuoso'
          topic='English Literature'
          subject='Language'
          duration={30}
          color='#bde7ff'
        />
      </section>

      <section className="home-section">
        <CompanionList 
          title='Recently Completed Sessions'
          companions={recentSessions}
          classNames='w-2/3 mx-lg:w-full'
        />
        <CTA />
      </section>
    </main>
  )
}

export default Page