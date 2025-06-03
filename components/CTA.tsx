import Image from "next/image";
import Link from "next/link";

const CTA = () => {
  return (
    <section className='cta-section'>
        <div className='cta-badge'> Start learning your way</div>
        <h2 className='text-3xl font-bold'>
            Build and Personalize learning Companion 
        </h2>
        <p>
           Pick a name, subject, voice and personality - and start learning through voice conversation what feel natural and fun 
           <Image src="images/cta.svg" alt="cta" width={362} height={232}/>
           <button className="btn-primary">
            <Image src="icons/plus.svg" alt="plus" width={12} height={12}/>
            <Link href="/companions/new">
            <p>Build a new companion</p>
            </Link>

           </button>
        </p>
    </section>
  )
}

export default CTA