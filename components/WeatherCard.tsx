import { getAllWeather } from "@/app/api/route";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export async function WeatherCard() {
  const data = await getAllWeather();
  const sunset = new Date(data.sys.sunset * 1000);
  const sunrise = new Date(data.sys.sunrise * 1000);
  const visibility = (data.visibility / 10).toFixed(0);
  return (
    <>
      <div className="chart-wrapper mx-auto flex max-w-6xl flex-col flex-wrap items-start justify-center gap-6 p-6 sm:flex-row sm:p-8">
        <div className="grid w-full gap-6 sm:grid-cols-2 lg:max-w-[22rem] lg:grid-cols-1 xl:max-w-[25rem]">
          <Card className="lg:max-w-md">
            <CardHeader className="space-y-0 pb-2">
              <div className="flex flex-row items-center justify-between">
                <CardDescription>
                  {data.name}, {data.sys.country}
                </CardDescription>
                <CardDescription className="text-muted-foreground text-xs">
                  Updated: {new Date(data.dt * 1000).toLocaleString()}
                </CardDescription>
              </div>
              <CardTitle className="flex items-center pt-2 gap-2">
                <Image
                  alt="sun"
                  src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                  width={40}
                  height={40}
                />
                <p>
                  {data.weather[0].description.replace(
                    /\b\w/g,
                    (char: string) => char.toUpperCase()
                  )}{" "}
                  <span className="text-sm text-muted-foreground font-sans font-normal">
                    {data.main.temp_max.toFixed(0)}°C
                  </span>
                </p>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Feels like: {data.main.feels_like.toFixed(0)}°C</p>
              <p>Sunrise: {sunrise.toLocaleTimeString("en-US")}</p>
              <p>Sunset: {sunset.toLocaleTimeString("en-US")}</p>
            </CardContent>
            <CardFooter>
              <CardDescription>
                Weekly weather forecast for your current location of{" "}
                <span className="font-medium text-foreground">
                  {data.name}, {data.sys.country}
                </span>{" "}
                @ 12:00 AM
              </CardDescription>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
}
