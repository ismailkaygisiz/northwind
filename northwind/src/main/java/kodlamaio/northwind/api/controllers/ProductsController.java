package kodlamaio.northwind.api.controllers;

import kodlamaio.northwind.business.abstracts.ProductService;
import kodlamaio.northwind.core.utilities.results.DataResult;
import kodlamaio.northwind.core.utilities.results.Result;
import kodlamaio.northwind.entities.concretes.Product;
import kodlamaio.northwind.entities.dtos.ProductWithCategoryDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin
public class ProductsController {
    private ProductService productService;

    @Autowired
    public ProductsController(ProductService productService) {
        this.productService = productService;
    }

    @PostMapping("/add")
    public Result add(@RequestBody Product product) {
        return productService.add(product);
    }

    @GetMapping("/getall")
    public DataResult<List<Product>> getAll() {
        return productService.getAll();
    }

    @GetMapping("/getallbypage")
    public DataResult<List<Product>> getAll(@RequestParam int pageNo, @RequestParam int pageSize) {
        return productService.getAll(pageNo, pageSize);
    }

    @GetMapping("/getallsortedasc")
    public DataResult<List<Product>> getAllSorted(){
        return productService.getAllSorted();
    }

    @GetMapping("/getbyproductname")
    public DataResult<Product> getByProductName(@RequestParam String productName) {
        return productService.getByProductName(productName);
    }

    @GetMapping("/getbyproductnameandcategory")
    public DataResult<List<Product>> getByProductNameAndCategory(@RequestParam String productName, @RequestParam int categoryId) {
        return productService.getByProductNameAndCategory(productName, categoryId);
    }

    @GetMapping("/getbyproductnamecontains")
    public DataResult<List<Product>> getByProductNameContains(@RequestParam String productName) {
        return productService.getByProductNameContains(productName);
    }

    @GetMapping("/getproductwitcategorydetails")
    public DataResult<List<ProductWithCategoryDto>> getProductWitCategoryDetails() {
        return productService.getProductWithCategoryDetails();
    }
}
