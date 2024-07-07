function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

const _FIELD_LOOKUP_TABLES = {
  us_codes: {
    '001': 'Raw or partly prepared materials',
    '002': 'Receptacles',
    '003': 'Baggage, animal equipments, portfolios and pocket books',
    '004': 'Abrasives and polishing materials',
    '005': 'Adhesives',
    '006': 'Chemicals and chemical compositions',
    '007': 'Cordage',
    '008': 'Smokers’ articles, not including tobacco products',
    '009': 'Explosives, firearms, equipments, and projectiles',
    '010': 'Fertilizers',
    '011': 'Inks and inking materials',
    '012': 'Construction materials',
    '013': 'Hardware and plumbing and steam-fitting supplies',
    '014': 'Metals, metal castings and forgings',
    '015': 'Oils and greases',
    '016': 'Protective and decorative coatings',
    '017': 'Tobacco products',
    '018': 'Medicines and pharmaceutical preparations',
    '019': 'Vehicles',
    '020': 'Linoleum and oiled cloths',
    '021': 'Electrical apparatus, machines and supplies',
    '022': 'Games, toys and sporting goods',
    '023': 'Cutlery, machinery, and tools and parts thereof',
    '024': 'Laundry appliances and machines',
    '025': 'Locks and safes',
    '026': 'Measuring and scientific appliances',
    '027': 'Horological instruments',
    '028': 'Jewellery and precious-metal ware',
    '029': 'Brooms, brushes and dusters',
    '030': 'Crockery, earthenware and porcelain',
    '031': 'Filters and refrigerators',
    '032': 'Furniture and upholstery',
    '033': 'Glassware',
    '034': 'Heating, lighting and ventilating apparatus',
    '035': 'Belting, hose, machinery, packing and nonmetallic tires',
    '036': 'Musical instruments and supplies',
    '037': 'Paper and stationery',
    '038': 'Prints and publications',
    '039': 'Clothing',
    '040': 'Fancy goods, furnishings and notions',
    '041': 'Canes, parasols and umbrellas',
    '042': 'Knitted, netted and textile fabrics, and substitutes therefore',
    '043': 'Thread and yarn',
    '044': 'Dental, medical and surgical appliances',
    '045': 'Soft drinks and carbonated waters',
    '046': 'Foods and ingredients of foods',
    '047': 'Wines',
    '048': 'Malt beverages and liquors',
    '049': 'Distilled alcoholic liquors',
    '050': 'Merchandise not otherwise classified',
    '051': 'Cosmetics and toilet preparations',
    '052': 'Detergents and soaps',
    '100': 'Miscellaneous',
    '101': 'Advertising and business',
    '102': 'Insurance and financial',
    '104': 'Communication',
    '105': 'Transportation and storage',
    '106': 'Material treatment',
    '107': 'Education and entertainment',
    '200': 'Collective membership',
  },
  international_code: {
    '001': 'Chemicals',
    '002': 'Paints',
    '003': 'Cosmetics and cleaning preparations',
    '004': 'Lubricants and fuels',
    '005': 'Pharmaceuticals',
    '006': 'Metal goods',
    '007': 'Machinery',
    '008': 'Hand tools',
    '009': 'Electrical and scientific apparatus',
    '010': 'Medical apparatus',
    '011': 'Environmental control apparatus',
    '012': 'Vehicles',
    '013': 'Firearms',
    '014': 'Jewelry',
    '015': 'Musical instruments',
    '016': 'Paper goods and printed matter',
    '017': 'Rubber goods',
    '018': 'Leather goods',
    '019': 'Non-metallic building materials',
    '020': 'Furniture and articles not otherwise classified',
    '021': 'Housewares and glass',
    '022': 'Cordage and fibers',
    '023': 'Yarns and threads',
    '024': 'Fabrics',
    '025': 'Clothing',
    '026': 'Fancy goods',
    '027': 'Floor coverings',
    '028': 'Toys and sporting goods',
    '029': 'Meats and processed foods',
    '030': 'Staple foods',
    '031': 'Natural agricultural products',
    '032': 'Light beverages',
    '033': 'Wines and spirits',
    '034': 'Smokers’ articles',
    '035': 'Advertising and business',
    '036': 'Insurance and financial',
    '037': 'Building construction and repair',
    '038': 'Telecommunications',
    '039': 'Transportation and storage',
    '040': 'Treatment of materials',
    '041': 'Education and entertainment',
    '042': 'Computer and scientific',
    '043': 'Hotels and restaurants',
    '044': 'Medical, beauty and agricultural',
    '045': 'Personal and legal',
  },
  primary_code: {
    '001': 'Chemicals',
    '002': 'Paints',
    '003': 'Cosmetics and cleaning preparations',
    '004': 'Lubricants and fuels',
    '005': 'Pharmaceuticals',
    '006': 'Metal goods',
    '007': 'Machinery',
    '008': 'Hand tools',
    '009': 'Electrical and scientific apparatus',
    '010': 'Medical apparatus',
    '011': 'Environmental control apparatus',
    '012': 'Vehicles',
    '013': 'Firearms',
    '014': 'Jewelry',
    '015': 'Musical instruments',
    '016': 'Paper goods and printed matter',
    '017': 'Rubber goods',
    '018': 'Leather goods',
    '019': 'Non-metallic building materials',
    '020': 'Furniture and articles not otherwise classified',
    '021': 'Housewares and glass',
    '022': 'Cordage and fibers',
    '023': 'Yarns and threads',
    '024': 'Fabrics',
    '025': 'Clothing',
    '026': 'Fancy goods',
    '027': 'Floor coverings',
    '028': 'Toys and sporting goods',
    '029': 'Meats and processed foods',
    '030': 'Staple foods',
    '031': 'Natural agricultural products',
    '032': 'Light beverages',
    '033': 'Wines and spirits',
    '034': 'Smokers’ articles',
    '035': 'Advertising and business',
    '036': 'Insurance and financial',
    '037': 'Building construction and repair',
    '038': 'Telecommunications',
    '039': 'Transportation and storage',
    '040': 'Treatment of materials',
    '041': 'Education and entertainment',
    '042': 'Computer and scientific',
    '043': 'Hotels and restaurants',
    '044': 'Medical, beauty and agricultural',
    '045': 'Personal and legal',
  },
}
d3.json("demo_trademark_data.json").then(function(data) {

  const _selectedCodes = new Set();
  let visibleImages = new Set();
  let maxVisibleImages = 0;
  let currentK = 1;
  let currentDots = 1;
  const imageWidthFactor = 7;
  const dotRadius = 5;
  const buffer = .02;

  let xy_idx = [-1, -1]
  

  const width = d3.select(".scatterplot-container").node().getBoundingClientRect().width;
  const height = Math.min(
    d3.select(".scatterplot-container").node().getBoundingClientRect().height,
    width * .8
  )
  const svg = d3.select("#visualization")
    .attr("width", width)
    .attr("height", height);

  function getX(d){
    if (xy_idx[0] == -1)
      return d.x;
    return d.v[xy_idx[0]];
  }
  function getY(d){
    if (xy_idx[1] == -1)
      return d.y;
    return d.v[xy_idx[1]];
  }
  // const xMin = d3.min(data, d => getX(d));
  // const xMax = d3.max(data, d => getX(d));
  // const yMin = d3.min(data, d => getY(d));
  // const yMax = d3.max(data, d => getY(d));

  const xScale = d3.scaleLinear()
    .domain([0-buffer, 1+buffer])
    .range([0, width]);
  const yScale = d3.scaleLinear()
    .domain([0-buffer, 1+buffer])
    .range([height, 0]);

  function look_up_field(v, field){
    if (field.indexOf("code") >= 0) {
      if (_FIELD_LOOKUP_TABLES[field][v])
        return `${_FIELD_LOOKUP_TABLES[field][v]} (${v})`;
      else
        return `[${v}]`;
    } else if (field.indexOf("date") >= 0) {
      return `${parseInt(v.substr(0,4)) || 2024}`;
    } else {
      return `[${v}]`;
    }
  }
  
  function get_stylized_fields(d, field){
    const values = d[field];
    return values.map((v) => look_up_field(v, field))
  }
  
  function getImageUrl(d){
    // return d.image_url;
    return `https://tsdr.uspto.gov/img/${d.sn}/large`
  }

  function getColorBySetting(){
    return d3.select("#color-by").property("value");
  }
  
  function createTooltip(data) {
    const tooltip = d3.select("body")
      .append("div")
      .attr("class", "tooltip")
      .style("opacity", 0);
    tooltip.content = function(d) {
      return `
        <div><strong>Primary Code:</strong><br/> - ${get_stylized_fields(d, "primary_code").join("<br/> - ")}</div>
        <div><strong>US Codes:</strong><br/> - ${get_stylized_fields(d, "us_codes").join("<br/> - ")}</div>
        <div><strong>International Codes:</strong><br/> - ${get_stylized_fields(d, "international_code").join("<br/> - ")}</div>
        <div><strong>First Commercial Use:</strong><br/> - ${`${get_stylized_fields(d, "first_use_in_commerce_date")}`.substr(0,4)}</div>
        <img src=${getImageUrl(d)} />
      `;
    };
  
    return tooltip;
  }
  d3.select("#layout-tsne").on("click", function() {
    xy_idx = [-1, -1];
    updateLayout();
  });
  
  d3.select("#layout-random").on("click", function() {
    const vectorLength = data[0].v.length;
    xy_idx = [
      Math.floor(Math.random() * vectorLength),
      Math.floor(Math.random() * vectorLength)
    ];
    while (xy_idx[1] === xy_idx[0]) {
      xy_idx[1] = Math.floor(Math.random() * vectorLength);
    }
    if (xy_idx[0] > xy_idx[1])
      xy_idx = [xy_idx[1], xy_idx[0]]
    updateLayout();
  });
    
  function updateLayout() {
    // Update dot positions
    dots.transition()
      .duration(500)
      .attr("cx", d => xScale(getX(d)))
      .attr("cy", d => yScale(getY(d)));
  
    // Update images if they're visible
    if (maxVisibleImages > 0) {
      const currentTransform = d3.zoomTransform(svg.node());
      const w = dotRadius * imageWidthFactor / scale_fn(currentTransform.k);
  
      svg.selectAll("image")
        .transition()
        .duration(500)
        .attr("width", w)
        .attr("height", w)
        .attr("x", d => xScale(getX(d)) - w/2)
        .attr("y", d => yScale(getY(d)) - w/2);
      svg.selectAll(".image-border")
        .transition()
        .duration(500)
        .attr("width", w)
        .attr("height", w)
        .attr("x", d => xScale(getX(d)) - w/2)
        .attr("y", d => yScale(getY(d)) - w/2)
        .on("end", () => {
          // Call updateImagesInView after all transitions are complete
          updateImagesInView(currentTransform);
        });
    }
  }
  
  function showTooltip(tooltip, data, event) {
    // Update the tooltip position and content
    tooltip
      .style("left", (event.pageX + 10) + "px")
      .style("top", (event.pageY - 28) + "px")
      .html(tooltip.content(data))
      .transition()
      .duration(200)
      .style("opacity", 0.9);
  }
  
  const zoom = d3.zoom()
    .scaleExtent([0.5, 30])
    .on("zoom", zoomed);
  svg.call(zoom);

  const dots = svg.selectAll(".dot")
    .data(data)
    .enter()
    .append("circle")
    .attr("class", "dot")
    .attr("cx", d => xScale(getX(d)))
    .attr("cy", d => yScale(getY(d)))
    .attr("r", dotRadius)
    // .style("stroke", d => getColor(d))
    .style("fill", d => getColor(d));

  const tooltip = createTooltip(data);
  dots
    .on("mouseover", function(event, d) {
      const colorBy = getColorBySetting();
      updateHighlightedDots(get_stylized_fields(d, colorBy));
      showTooltip(tooltip, d, event);
    })
    .on("mouseout", function() {
      updateHighlightedDots();
      tooltip.transition()
        .duration(200)
        .style("opacity", 0);
    })
  d3.select("#color-by")
    .on("change", function() {
      _selectedCodes.clear();
      updateColors(data);
      drawLegend(data);
    });


  function listColors(data) {
    const colorBy = getColorBySetting();
    const colorValues = new Set();
    data.forEach(d => d[colorBy].forEach(code => colorValues.add(look_up_field(code, colorBy))));
    return Array.from(colorValues)
      .sort()
      .map(val => [val, getColor({ [colorBy]: [val] })]);
  }
  
  function drawLegend(data) {
    const colorBy = getColorBySetting();
    const legendContainer = d3.select(".legend-container");
    legendContainer.selectAll("*").remove();
    const legendItems = listColors(data).forEach(([val]) => {
      const color = getColor({[colorBy]: [val]});
      const item = legendContainer.append("div")
        .attr("class", "legend-item")
        .on("mouseover", () => legendItemHover(val))
        .on("mouseout", () => updateHighlightedDots())
        .on("click", (event) => legendItemClicked(event, val));
  
      item.append("div")
        .attr("class", "color-swatch")
        .style("background-color", color);
  
      item.append("div")
        .attr("class", "legend-label")
        .text(val);
    });
  }
    
  function legendItemHover(code) {
    const colorBy = getColorBySetting();
    let codes = [code]
    if (code == undefined)
      codes = getSelectedCodes();
    updateHighlightedDots(codes);
  }
  
  function toggleImages(n) {
    const dots = svg.selectAll(".dot");
    const images = svg.selectAll(".image");
    if (maxVisibleImages == 0)  {
      maxVisibleImages = 500;
      const currentTransform = d3.zoomTransform(svg.node());
      updateImagesInView(currentTransform);
      applyTransform(currentTransform)
    } else {
      // Remove the image elements
      images.remove();
      maxVisibleImages = 0;
      
      visibleImages = new Set();
      // Restore the full opacity of the dots
      dots.style("opacity", 1);
    }
  }
  d3.select("#toggle-images").on("click", () => toggleImages(1000));

  function legendItemClicked(event, code) {
    let elem = event.target;
    while (!elem.classList.contains("legend-item"))
      elem = elem.parentElement;
    elem.classList.toggle("selected");
    const isSelected = elem.classList.contains("selected");
    if (isSelected) _selectedCodes.add(code);
    else _selectedCodes.delete(code);
  }

  function getSelectedCodes(){
    return Array.from(_selectedCodes)
  }
  
  function updateSelectedDots() {
    dots.classed("selected", d => getSelectedCodes().some(code => d[getColorBySetting()].includes(code)));
  }
  function getColor(d) {
    const colorBy = getColorBySetting();
    
    if (colorBy.indexOf("code") >= 0) {
      const n = 20;
      // Use schemeCategory10 and extend it to 20 colors
      const extendedScheme = d3.schemeCategory10.concat(d3.schemeSet3.slice(0, 10));
      // Handle the case where d[colorBy] is a string
      let index;
      if (typeof d[colorBy][0] === 'string') {
        // Use the sum of character codes as a hash
        index = d[colorBy][0].split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
      } else {
        index = d[colorBy][0];
      }
      return extendedScheme[index % n];
    } else if (colorBy.includes("date")) {
      const dateStr = d[colorBy][0] || '';
      const year = parseInt(dateStr.substring(0, 4)) || 2024;
      // Create a color scale for dates
      const colorScale = d3.scaleSequential(d3.interpolateTurbo)
        .domain([0, 1]);
      
      // Apply a power scale to emphasize recent dates
      const powerScale = d3.scalePow()
        .exponent(40) 
        .domain([1855, 2025])
        .range([0, 1]);

      return colorScale(powerScale(year));
    } else {
      // Default case: use original color scheme
      return d3.schemeCategory10[d[colorBy][0] % 10];
    }
  }

  function updateColors(data) {
    dots.style("fill", d => getColor(d));
    // dots.style("stroke", d => getColor(d));
  }

  function updateHighlightedDots(codes) {
    const colorBy = getColorBySetting();
    console.log(codes);
    if (codes == undefined)
      codes = getSelectedCodes();
    const hasHighlights = codes.length > 0;

    svg.selectAll(".dot, .image")
      .classed("highlighted", d => codes.some(code => 
        get_stylized_fields(d, colorBy).includes(code)
      ))
      .style("opacity", function(d) {
        if (hasHighlights) {
          if (colorBy.indexOf("date"))
            return codes.some(year => Math.abs(parseInt(year) - parseInt(get_stylized_fields(d, colorBy))) < 5) ? 1 : 0.1;
          else
            return codes.some(code => get_stylized_fields(d, colorBy).includes(code)) ? 1 : 0.1;
        } else {
          return 0.9;
        }
      });
  }

  function scale_fn(x, A=.5, B=7, k=.5) {
    if (x === 1) {
      return 1;
    } else if (x < 1) {
      return Math.max(x, A); //1 + (Math.exp(-k * (1-x))-1)*(1-A)
    } else {
      return Math.min(x, B);
    }
  }

  function applyTransform(transform) {
    dots.attr("transform", transform);
    svg.selectAll(".image")
      .attr("transform", transform);
    const k = scale_fn(transform.k);
    const w = dotRadius * imageWidthFactor / k;
    svg.selectAll("image")
        .attr("width", w)
        .attr("height", w)
        .attr("x", d => xScale(getX(d)) - w/2)
        .attr("y", d => yScale(getY(d)) - w/2);
    svg.selectAll(".image-border")
        // .style('stroke-width', 2 / k )
        .attr("width", w)
        .attr("height", w)
        .attr("x", d => xScale(getX(d)) - w/2)
        .attr("y", d => yScale(getY(d)) - w/2);
    dots
      // .style('stroke-width', 2 / k )
      .attr('r', dotRadius / k );
  }

  function getVisibleDots(transform) {
    const visible = new Set();
    dots.each(function(d) {
      const x = transform.applyX(xScale(getX(d)));
      const y = transform.applyY(yScale(getY(d)));
      if (x >= 0 && x <= width && y >= 0 && y <= height) {
        visible.add(d);
      }
    });
    return visible;
  }

  function updateImagesInView(transform) {
    const visibleDots = getVisibleDots(transform);
    const k = scale_fn(transform.k);
    const w = dotRadius * imageWidthFactor / k;
  
    // Use join for efficient enter/update/exit
    const images = svg.selectAll(".image")
      .data([...visibleDots].slice(0, maxVisibleImages), d => d.rn);
  
    const enter = images.enter().append("g")
      .attr("class", "image")
      .attr("transform", transform);

    enter.append("image")
      .attr("xlink:href", d => getImageUrl(d))
      .attr("width", w)
      .attr("height", w)
      .attr("x", d => (xScale(getX(d))) - w/2)
      .attr("y", d => (yScale(getY(d))) - w/2)
      .on("mouseover", function(event, d) {
        const colorBy = getColorBySetting();
        updateHighlightedDots(d[colorBy]);
        showTooltip(tooltip, d, event);
      })
      .on("mouseout", function() {
        updateHighlightedDots();
        tooltip.transition()
          .duration(200)
          .style("opacity", 0);
      })
      .on("click", function(event, d) {
        window.open(`https://tsdr.uspto.gov/#caseNumber=${d.rn}&caseSearchType=US_APPLICATION&caseType=DEFAULT&registrationNumber=${d.rn}&searchType=statusSearch`, "_blank");
      });
  
    enter.append("rect")
      .attr("class", "image-border")
      .style("fill", "none")
      .attr("width", w)
      .attr("height", w)
      .attr("x", d => (xScale(getX(d))) - w/2)
      .attr("y", d => (yScale(getY(d))) - w/2)
      .style("stroke", d => getColor(d));
    
    // Update selection (including entered elements)
    const update = enter.merge(images);
  
    // Exit selection
    images.exit().remove();
  
    // Batch DOM updates for both new and existing elements
    requestAnimationFrame(() => {
      update.select("image")
        .attr("width", w)
        .attr("height", w)
        .attr("x", d => (xScale(getX(d))) - w/2)
        .attr("y", d => (yScale(getY(d))) - w/2);
  
      update.select(".image-border")
        .attr("width", w)
        .attr("height", w)
        .attr("x", d => (xScale(getX(d))) - w/2)
        .attr("y", d => (yScale(getY(d))) - w/2)
        .style("stroke", d => getColor(d));
    });
  }
  const debouncedUpdateImagesInView = debounce(updateImagesInView, 250); // 250ms delay

  function zoomed(event) {
    const { transform } = event;
    applyTransform(transform);
    debouncedUpdateImagesInView(transform);
  }

  drawLegend(data);  
  d3.select("#toggle-images").on("click", () => {
    const currentTransform = d3.zoomTransform(svg.node());
    toggleImages(currentTransform);
  });
});
