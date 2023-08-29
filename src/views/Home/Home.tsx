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
    setLoading(true)
    try {
      const newAwards = await fetchAwardsData(currentPage + 1)
      setAwards((prevAwards) => [...prevAwards, ...newAwards])
      setCurrentPage((prevPage) => prevPage + 1)
    } catch (err) {
      console.log('Error: ', err)
    } finally {
      setLoading(false)
    }
  }

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

  useEffect(() => {
    console.log(apiFilters)
  }, [apiFilters])
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