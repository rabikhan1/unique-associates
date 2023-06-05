import ServiceDetailsContent from '../../components/Services/ServiceDetailsContent'
import NavbarTwo from '../../components/Layouts/NavbarTwo';
import PageBanner from '../../components/Common/PageBanner';
import { useRouter } from 'next/router';
import { plotData } from '../../public/Data/PlotData';
import { useEffect, useState } from 'react';

const getBlogDet = (id) => plotData.find((b) => b.id === parseInt(id));

export default function serviceDetailpage(){
 
  const [bdetails, setbDetails] = useState(null);
  const router = useRouter();
console.log(bdetails)
  useEffect(() => {
    setbDetails(getBlogDet(router.query.id));
  }, [router.query.id]);

  if (!bdetails) return null;
   return(
    
    <>
      <NavbarTwo />
      <PageBanner 
                    pageTitle='{bdetails.plotNo}' 
                    BGImage="hero-bg11"
                />  
    <ServiceDetailsContent bdetails={bdetails}/>
    </>
  )
}