import { useRef, useEffect } from 'react';

export const CoinInfoDesc = ({ coin }) => {
   
   
  const contentRef = useRef(null);
    useEffect(() => {
      if (contentRef.current) {
        const links = contentRef.current.querySelectorAll('a');
  
        // Apply Tailwind CSS classes to each <a> tag
        links.forEach(link => {
          link.classList.add('text-yellow-500', 'underline', 'hover:text-white');
        });
      }
    }, [coin.description.en]);

    return <div className='pl-[40px] pr-[40px] pt-8'> 
    <div className="text-white w-full h-auto bg-grid rounded-xl border-2 border-black">
        <div className="flex p-3" >
            <div className="mt-2.5">
                <img src={coin.image.thumb}>
                </img>
            </div>
            <div className="text-2xl font-semibold font-montserrat pt-1.5 pl-1">{coin.name}</div>
            </div>
        <div className="text-md font-poppins pl-4 pb-4"
        dangerouslySetInnerHTML={{ __html: coin.description.en }}
        ref={contentRef}
        />
    </div>
    </div>
}