import { restaurants } from "@/data/restaurants";
import RestaurantCard from "@/components/RestaurantCard";
import Link from "next/link";
export default function Home() {
	return (
		<div className="min-h-screen p-4 sm:p-8">
			<header className="mb-8 text-center">
				<h1 className="text-3xl font-bold mb-2">가보자 부산 전포 서면 탐방</h1>
				<p className="text-gray-600 mb-4">미쉐린 가이드에는 없네! ㅋㅋㅋ</p>
				<Link href="https://guide.michelin.com/kr/ko/restaurants/seoul/seoul-restaurants-with-michelin-stars">
					<p className="text-gray-600 border border-gray-600 rounded-md p-2 hover:text-gray-900 hover:border-gray-900 transition-colors duration-200">
						미쉐린 가이드 바로가기
					</p>
				</Link>
			</header>

			<main className="max-w-4xl mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{restaurants.map((restaurant) => (
						<RestaurantCard key={restaurant.id} restaurant={restaurant} />
					))}
				</div>
			</main>
		</div>
	);
}
