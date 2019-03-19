import chai, { expect } from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import { mount } from "@vue/test-utils";
import Nav from "@/nav/nav.vue";
import NavItem from "@/nav/nav-item.vue";
import SubNav from "@/nav/sub-nav.vue";
import Vue from "vue";
chai.use(sinonChai);
describe("Nav.vue", () => {
  it("存在.", () => {
    expect(Nav).to.exist;
  });
  it("支持selected属性.", done => {
    Vue.component("GNavItem", NavItem);
    Vue.component("GSubNav", SubNav);
    const wrapper = mount(Nav, {
      propsData: {
        selected: "home"
      },
      slots: {
        default: `
          <g-nav-item name="home">首页</g-nav-item>
          <g-sub-nav name="about">
            <template slot="title">关于</template>
            <g-nav-item name="culture">企业文化</g-nav-item>            
          </g-sub-nav>`
      }
    });
    setTimeout(() => {
      expect(wrapper.find('[data-name="home"].selected').exists()).to.be.true;
      done();
    });
  });
  it("会触发update:selected事件", done => {
    Vue.component("GNavItem", NavItem);
    Vue.component("GSubNav", SubNav);
    const callback = sinon.fake();
    const wrapper = mount(Nav, {
      propsData: {
        selected: "home"
      },
      slots: {
        default: `
          <g-nav-item name="home">首页</g-nav-item>
          <g-sub-nav name="about">
            <g-nav-item name="developers">开发团队</g-nav-item>            
          </g-sub-nav>`
      },
      listeners: {
        "update:selected": callback
      }
    });
    setTimeout(() => {
      wrapper.find("[data-name='developers']").trigger("click");
      expect(callback).to.have.been.calledWith("developers");
      done();
    });
  });
});
