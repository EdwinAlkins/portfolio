
export default class GameOfLife{
    width: number;
    height: number;
    cells: boolean[][];

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
        this.cells = new Array(width);
        for (let i = 0; i < width; i++) {
            this.cells[i] = new Array(height);
            for (let j = 0; j < height; j++) {
                this.cells[i][j] = false;
            }
        }
    }

    init(): void {
        for (let i = 0; i < this.width; i++) {
            for (let j = 0; j < this.height; j++) {
                this.cells[i][j] = false;
            }
        }
    }

    setCell(x: number, y: number, value: boolean): void {
        this.cells[x][y] = value;
    }

    getCell(x: number, y: number): boolean {
        return this.cells[x][y];
    }

    getNeighbours(x: number, y: number): number {
        let neighbours = 0;
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                if (i == 0 && j == 0) {
                    continue;
                }
                if (x + i < 0 || x + i >= this.width || y + j < 0 || y + j >= this.height) {
                    continue;
                }
                if (this.cells[x + i][y + j]) {
                    neighbours++;
                }
            }
        }
        return neighbours;
    }

    nextGeneration(): void {
        let newCells = new Array(this.width);
        for (let i = 0; i < this.width; i++) {
            newCells[i] = new Array(this.height);
            for (let j = 0; j < this.height; j++) {
                let neighbours = this.getNeighbours(i, j);
                if (this.cells[i][j]) {
                    newCells[i][j] = neighbours == 2 || neighbours == 3;
                } else {
                    newCells[i][j] = neighbours == 3;
                }
            }
        }
        this.cells = newCells;
    }

    toString(): string {
        let result = "";
        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                if (this.cells[j][i]) {
                    result += "X";
                } else {
                    result += " ";
                }
            }
            result += " ";
        }
        return result;
    }

}

// fonction to generate a list of cells, return {x: number, y: number}
export const generateCells = (width: number, height: number, nbCells: number): Array<{x: number, y: number}> => {
    let cells = Array<{x: number, y: number}>();
    for (let i = 0; i < nbCells; i++) {
        let cell = {
            x: Math.floor(Math.random() * width),
            y: Math.floor(Math.random() * height)
        };
        cells.push(cell);
    }
    return cells;
}