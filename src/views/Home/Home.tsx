import { useEffect, useState } from "react";

import ApplicationLayout from "../ApplicationLayout";
import Card from "../../components/Card/Card";

import { IAward, fetchAwardsData } from "../../services/api";

type Props = { apiFilters: { pointNeeded: number; voucherType: { all: boolean; vouchers: boolean; products: boolean; others: boolean; }; }; }

export default function Home({ apiFilters }: Props) {
  const [awards, setAwards] = useState<IAward[]>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [loading, setLoading] = useState<boolean>(false)

  const fetchData = async () => {
    setLoading(true);
    try {
      const { pointNeeded, voucherType } = apiFilters;
      const awardTypeFilter = getFilterTypesKey(voucherType);

      const newAwards = await fetchAwardsData(currentPage, pointNeeded, awardTypeFilter);
      setAwards((prevAwards) => [...prevAwards, ...newAwards]);
      setCurrentPage((prevPage) => prevPage + 1)
    } catch (err) {
      console.log('Error: ', err);
    } finally {
      setLoading(false);
    }
  };

  const getFilterTypesKey = (filterObject: {
    all: boolean;
    vouchers: boolean;
    products: boolean;
    others: boolean;
  }) => {
    const types: string[] = [];
    if (filterObject.all) {
      types.push("all");
    } else {
      if (filterObject.vouchers) types.push("vouchers");
      if (filterObject.products) types.push("products");
      if (filterObject.others) types.push("giftcard");
    }
    return types;
  };

  
  useEffect(() => {
    setCurrentPage(1)
    setAwards([])
    fetchData()
  }, [apiFilters])

  useEffect(() => {
    fetchData()
  }, [])
  
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        fetchData()
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [currentPage])

  return (
    <ApplicationLayout pageName="home">
      {awards.map((award, index) => (
        <Card
          key={index}
          awardName={award.name}
          awardImage={award.image_url}
          voucherType={award.award_type}
          pointToRedeem={award.point_needed} />
      ))}
      {loading && <div>Loading ...</div>}
    </ApplicationLayout>
  )
}