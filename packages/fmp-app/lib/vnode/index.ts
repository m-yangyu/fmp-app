class VNode {
    private children: VNode[];
    private props: Record<string, any>;
    private type: string;
    private name: string;
    constructor() {
        this.children = [];
        this.props = {};
        this.type = '';
        this.name = '';
    }
}