
export class Rect {
    x: number;
    y: number;
    width: number;
    height: number;

    /**
     * 
     * @param x 
     * @param y 
     * @param width 
     * @param height 
     */
    constructor(x: number, y: number, width: number, height: number) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}

/**
 * Quadtree implementation
 * @type {Rect} bounds - The bounds of the node
 * @type {number} maxObjects - The maximum number of objects a node can hold before splitting into 4 subnodes
 * @type {number} maxLevels - The maximum number of levels that the quadtree will create
 * @type {number} level - The current level
 * @type {Array} objects - The objects that are contained in this node
 * @type {Array<Quadtree>} nodes - The subnodes of this node
 */
export class Quadtree {

    bounds: Rect;
    maxObjects: number;
    maxLevels: number;
    level: number;

    objects: any[];
    nodes: Quadtree[];

    constructor(bounds: Rect, maxObjects: number = 10, maxLevels: number = 4, level: number = 0) {
        this.bounds = bounds;
        this.maxObjects = maxObjects;
        this.maxLevels = maxLevels;
        this.level = level;

        this.objects = [];
        this.nodes = [];
    }

    /**
     * Clears the quadtree
     **/
    clear(): void {
        this.objects = [];

        for (let i = 0; i < this.nodes.length; i++) {
            this.nodes[i].clear();
        }

        this.nodes = [];
    }

    /**
     * Subdivides the node into 4 subnodes
     */
    subdivide(): void {
        let nextLevel = this.level + 1;
        let subWidth = Math.round(this.bounds.width / 2);
        let subHeight = Math.round(this.bounds.height / 2);
        let x = Math.round(this.bounds.x);
        let y = Math.round(this.bounds.y);

        //top right node
        this.nodes[0] = new Quadtree(new Rect(x + subWidth, y, subWidth, subHeight), this.maxObjects, this.maxLevels, nextLevel);
        //top left node
        this.nodes[1] = new Quadtree(new Rect(x, y, subWidth, subHeight), this.maxObjects, this.maxLevels, nextLevel);
        //bottom left node
        this.nodes[2] = new Quadtree(new Rect(x, y + subHeight, subWidth, subHeight), this.maxObjects, this.maxLevels, nextLevel);
        //bottom right node
        this.nodes[3] = new Quadtree(new Rect(x + subWidth, y + subHeight, subWidth, subHeight), this.maxObjects, this.maxLevels, nextLevel);
    }

    getIndex(rect: Rect): number {
        return -1;
    }
        

}