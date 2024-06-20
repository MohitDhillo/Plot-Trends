import {DataPoint} from "@/components/client/Chart/Chart";

export async function getTrendsData(query: string) {
    try {
        console.log("Req to s");
        const response = await fetch(`http://localhost:3004/api/trends?keyword=${query}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        let data = (await response.json()).default.timelineData;
        let res:DataPoint[] = data.map((point:any) => {
            let dp: DataPoint = {timestamp:point.time * 1000, value: point.value[0]};
            return dp;
        })

        return res;
    } catch (error) {
        console.error('Error fetching trends data:', error);
        return [];
    }
}