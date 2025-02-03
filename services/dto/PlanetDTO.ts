import Planet from "@/types/Planet";

export class PlanetDTO {
    id: string;
    englishName: string;
    moons: {
        moons: string,
        ref: string,
    }[];
    gravity: number;
    density: number;
    mass: {
        massValue: number,
        massExponent: number,
    };
    vol: {
        volValue: number,
        volExponent: number,
    };
    avgTemp: number;
 
    /**
     * Construct a new PlanetDTO instance from a plain object.
     *
     * Properties with missing values will be given default values.
     *
     * @param data The plain object to copy properties from.
     */
    constructor(data: PlanetDTO) {
        this.id = data.id || "";
        this.englishName = data.englishName || "Unknown";
        this.moons = data.moons || [];
        this.gravity = data.gravity || 0;
        this.mass = data.mass || { massValue: 0, massExponent: 0 };
        this.density = data.density || 0;
        this.vol = data.vol || { volValue: 0, volExponent: 0 };
        this.avgTemp = data.avgTemp || 0;
    }

    /**
     * Converts this PlanetDTO instance to a Planet object.
     *
     * @returns A Planet object with properties mapped from this PlanetDTO.
     */
    toPlanet(): Planet {
        return {
            id: this.id,
            name: this.englishName,
            numberMoons: this.moons.length,
            gravity: this.gravity,
            massValue: this.mass.massValue,
            density: this.density,
            volValue: this.vol.volValue,
            avgTemp: this.avgTemp,
        };
    }
}
